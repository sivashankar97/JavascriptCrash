const express = require("express");
const usersRepo = require("../../repositories/users");
const signupTempl = require("../../views/admin/auth/signup");
const signinTempl = require("../../views/admin/auth/signin");
const router = express.Router();
const { check } = require("express-validator");

//templating & routing signup
router.get("/signup", (req, res) => {
  res.send(signupTempl({ req }));
});

//routing

router.post(
  "/signup",
  [
    check("email").trim().normalizeEmail().isEmail(),
    check("password").trim().isLength({ min: 4, max: 20 }),
    check("passwordConfirmation").trim().isLength({ min: 4, max: 20 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    const { email, password, passwordConfirmation } = req.body;
    const existingUser = await usersRepo.getOneBy({ email });
    if (existingUser) {
      return res.send("Email in use");
    }
    if (password !== passwordConfirmation) {
      return res.send("Passwords must match");
    }
    const user = await usersRepo.create({ email, password });
    req.session.userId = user.id;
    res.send("Accountcreated!");
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
