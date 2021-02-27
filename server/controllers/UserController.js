const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function generateToken(id, name, email) {
  return jwt.sign({ id, name, email }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
}

class UserController {
  async registration(req, res) {
    const { email, password, name } = req.body;
    if (!email || !password) {
      return res.status(404).json("Некорректный email или пароль");
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return res.status(404).json("Пользователь с таком email уже существует");
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, name, password: hashPassword });
    const token = generateToken(user.id, user.name, user.email);
    return res.json({ token });
  }

  async login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json("Пользователь с таким email не найден");
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return res.status(404).json("Неверный email или пароль");
    }
    const token = generateToken(user.id, user.name, user.email);
    return res.json({ token });
  }

  async checkUser(req, res, next) {
    const token = generateToken(req.user.id, req.user.name, req.user.email);
    return res.json({ token });
  }
}

module.exports = new UserController();
