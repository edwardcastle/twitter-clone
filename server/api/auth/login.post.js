import { getUserByUserName } from "../db/user";
import bcrypt from "bcrypt";
import { generateTokens, sendRefreshToken } from "~~/utils/jwt";
import { userTransformer } from "~~/server/transformers/user";
import { createRefreshToken } from "../db/refreshTokens";
import { sendError } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, password } = body;

  if (!username || !password) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Invalid params" })
    );
  }

  // If the user is registered
  const user = await getUserByUserName(username);
  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Username or password is invalid",
      })
    );
  }

  // If the password matches
  const doesThePasswordMatch = await bcrypt.compare(password, user.password);
  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Username or password is invalid",
      })
    );
  }

  // Generete Tokens
  // Access Tokens
  // Refresh Tokens
  const { accessToken, refreshToken } = generateTokens(user);

  // Save it into the database.
  await createRefreshToken({ token: refreshToken, userId: user.id });

  // Add http only cookie
  sendRefreshToken(event, refreshToken);

  return {
    access_token: accessToken,
    user: userTransformer(user),
  };
});
