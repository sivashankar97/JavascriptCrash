const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const authRouter = require("./routes/admin/auth");
const productsRouter = require("./routes/admin/product");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["lkasld235j"],
  })
);
app.use(authRouter);
app.use(productsRouter);

app.listen(3000, () => {
  console.log("Listening");
});

// app.get("/signup", (req, res) => {
//   res.send(`
//     <div>

//     Your Userid: ${req.session.userId}
//       <form method="POST">
//         <input name="email" placeholder="email" />
//         <input name="password" placeholder="password" />
//         <input name="passwordConfirmation" placeholder="password confirmation" />
//         <button>SignUp</button>
//       </form>
//     </div>
//   `);
// });

// const bodyParser = (req, res, next) => {
//   if (req.method === "POST") {
//     req.on("data", (data) => {
//       const parsed = data.toString("utf8").split("&");
//       const formData = {};
//       for (let pair of parsed) {
//         const [key, value] = pair.split("=");
//         formData[key] = value;
//       }
//       req.body = formData;
//       next();
//     });
//   } else {
//     next();
//   }
// };

//for signup
// app.post("/signup", async (req, res) => {
//   const { email, password, passwordConfirmation } = req.body;

//   const existingUser = await usersRepo.getOneBy({ email });
//   if (existingUser) {
//     return res.send("Email in use");
//   }

//   if (password !== passwordConfirmation) {
//     return res.send("Passwords must match");
//   }
//   const user = await usersRepo.create({ email, password });
//   req.session.userId = user.id;

//   res.send("Account created!!!");
// });
//for signin
// app.get("/signin", (req, res) => {
//   res.send(`
//     <div>
//       <form method="POST">
//         <input name="email" placeholder="email" />
//         <input name="password" placeholder="password" />
//         <button>Sign In</button>
//       </form>
//     </div>
//   `);
// });
// // for signou
// app.get("/signout", (req, res) => {
//   req.session = null;
//   res.send("You are logged out");
// });

// app.post("/signin", async (req, res) => {
//   const { email, password } = req.body;

//   const user = await usersRepo.getOneBy({ email });

//   if (!user) {
//     return res.send("Email notfound");
//   }

//   if (user.password !== password) {
//     return res.send("Invalid_password");
//   }

//   req.session.userId = user.id;

//   res.send("Youre signedin BOOM");
// });

//
