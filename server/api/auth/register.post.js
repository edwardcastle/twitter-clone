import { createUser } from "../db/user";
import { userTransformer } from "~~/server/transformers/user";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, email, password, repeatPassword, name } = body;
  if (!username || !email || !password || !repeatPassword || !name) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Invalid params" })
    );
  }

  const userData = {
    username,
    email,
    password,
    name,
    profileImage: "http://picsum.photos/200/200",
  };

  if (password !== repeatPassword) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Password do not match" })
    );
  }

  const user = await createUser(userData);

  return {
    body: userTransformer(user),
  };
});
