const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const Token = require("../model/token.js");

dotenv.config();

exports.authenticateToken = (request, response, next) => {
  const authHeader = request.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return response.status(401).json({ msg: "token is missing" });
  }

  jwt.verify(token, process.env.ACCESS_SECRET_KEY, (error, user) => {
    if (error) {
      return response.status(403).json({ msg: "invalid token" });
    }

    request.user = user;
    next();
  });
};

exports.createNewToken = async (request, response) => {
  const refreshToken = request.body.token.split(" ")[1];

  if (!refreshToken) {
    return response.status(401).json({ msg: "Refresh token is missing" });
  }

  const token = await Token.findOne({ token: refreshToken });

  if (!token) {
    return response.status(404).json({ msg: "Refresh token is not valid" });
  }

  jwt.verify(token.token, process.env.REFRESH_SECRET_KEY, (error, user) => {
    if (error) {
      response.status(500).json({ msg: "invalid refresh token" });
    }
    const accessToken = jwt.sign(user, process.env.ACCESS_SECRET_KEY, {
      expiresIn: "15m",
    });

    return response.status(200).json({ accessToken: accessToken });
  });
};
