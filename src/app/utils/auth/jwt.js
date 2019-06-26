import jwt from "jsonwebtoken";

export const generateTokens = async (payload, secret) => {
  try {
    const token = await jwt.sign(payload, secret, {
      expiresIn: '12h'
    });
    return token;

  } catch(error) {
    console.log(error);
  }
};