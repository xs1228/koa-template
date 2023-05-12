const jwt = require("jsonwebtoken");
const { PRIVATE_KEY } = require("../app/config");
const createResult = require("../utils/createResult");
class AuthController {
  async login(ctx, next) {
    const { id, name, phone_number, email } = ctx.user;
    let token;
    try {
      token = jwt.sign({ id, name }, PRIVATE_KEY, {
        expiresIn: 60 * 60 * 24,
        algorithm: "RS256",
      });
    } catch (error) {
      console.log("err", error);
    }
    ctx.status = 200;
    ctx.body = createResult(
      {
        id,
        name,
        email,
        phoneNumber: phone_number,
        token
      },
      "登录成功~",
      200
    );
  }
}

module.exports = new AuthController();
