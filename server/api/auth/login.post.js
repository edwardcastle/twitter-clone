import { getUserByUserName } from "../db/user";
import bcrypt from "bcrypt";
import { generateTokens } from "~~/utils/jwt";

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

  // Generete Tokens
  // Access Tokens
  // Refresh Tokens
  const { accessToken, refreshToken } = generateTokens();

  return {
    user: user,
    doesThePasswordMatch,
  };
});
