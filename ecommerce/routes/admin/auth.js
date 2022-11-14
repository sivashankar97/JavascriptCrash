const express = require("express");
const usersRepo = require("../../repositories/users");
const signupTempl = require("../../views/admin/auth/signup");
const signinTempl = require("../../views/admin/auth/signin");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const {
  requireEmail,
  requirePassword,
  requirePasswordConfirmation,
} = require("./validators");

//templating & routing signup
router.get("/signup", (req, res) => {
  res.send(signupTempl({ req }));
});

//routing

router.post(
  "/signup",
  [requireEmail, requirePassword, requirePasswordConfirmation],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.send(signupTemplate({ req, errors }));
    }

    const { email, password, passwordConfirmation } = req.body;
    const user = await usersRepo.create({ email, password });

    req.session.userId = user.id;

    res.send("Account created!!!");
  }
);
//routing signout
router.get("/signout", (req, res) => {
  req.session = null;
  res.send("Your logged out");
});

//Template & routing signIn
router.get("/signin", (req, res) => {
  res.send(signinTempl());
});

//routing Sigin
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await usersRepo.getOneBy({ email });
  if (!user) {
    return res.send("Emil not found");
  }
  const validPassword = await usersRepo.comparePasswords(
    user.password,
    password
  );
  if (!validPassword) {
    return res.send("Invalid Password");
  }

  req.session.userId = user.id;

  res.send("Your Signed In!");
});

module.exports = router;
