import { sendError, getCookie } from "h3";
import { getRefreshTokenBytToken } from "../db/refreshTokens";

export default defineEventHandler(async (event) => {
  const refreshToken = getCookie(event, "refresh_token");

  if (!refreshToken) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Refresh token is not valid",
      })
    );
  }
  const rToken = await getRefreshTokenBytToken(refreshToken);

  return { hello: rToken };
});
