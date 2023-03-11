import jwt from "jsonwebtoken";

const generatetAccessToken = (user) => {
  const config = useRuntimeConfig();
  return jwt.sign({ userId: user.id }, config.jwtAccessSecret, {
    expiresIn: "10m",
  });
};

const generateRefreshToken = (user) => {
  const config = useRuntimeConfig();
  return jwt.sign({ userId: user.id }, config.jwtRefreshSecret, {
    expiresIn: "4h",
  });
};

export const generateTokens = (user) => {
  const accessToken = generatetAccessToken(user);
  const refreshToken = generateRefreshToken(user);
  return {
    accessToken: accessToken,
    refreshToken: refreshToken,
  };
};
// Add http only coockie
export const sendRefreshToken = (event, token) => {
  setCookie(event, "refresh_token", token, {
    httpOnly: true,
    sameSite: true,
  });
};
