
import passport from "passport";
import { Strategy } from "passport-local";
import session from "express-session";
// passport: Authentication middleware for Node.js.

// passport-local: Strategy for username and password authentication with Passport.

// express-session: Middleware for managing sessions in Express.

// Session Middleware Setup:

app.use(
  session({
    secret: "TOPSECRETWORD",
    resave: false,
    saveUninitialized: true,
  })
);
// Configures the Express session middleware with a secret key, which is used to sign the session ID cookie.

// resave: Determines whether the session should be saved back to the session store, even if it hasn't been modified during the request.

// saveUninitialized: Determines whether a session should be created for an uninitialized (new) session.

// Passport Middleware Setup:

app.use(passport.initialize());
app.use(passport.session());
Initializes Passport and sets it up to use sessions for authentication.

Secrets Route:

app.get("/secrets", (req, res) => {
  if (req.isAuthenticated()) {
    res.render("secrets.ejs");
  } else {
    res.redirect("/login");
  }
});
// Checks if the user is authenticated using Passport's isAuthenticated() method.

// If authenticated, renders the secrets page; otherwise, redirects to the login page.

// Login POST Route:

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/secrets",
    failureRedirect: "/login",
  })
);
// Handles the login form submission using Passport's local strategy.

// If authentication succeeds, redirects to the secrets page; otherwise, redirects back to the login page.

// Passport Local Strategy Setup:

passport.use(
  new Strategy(async function verify(username, password, cb) {
    // Verification logic
  })
);
// Defines a new Passport local strategy for authenticating users.

// The strategy's verify function is called with the provided username and password.

// It queries the database to find the user by email and compares the hashed password.

// Passport Serialization and Deserialization:

passport.serializeUser((user, cb) => {
  cb(null, user);
});
passport.deserializeUser((user, cb) => {
  cb(null, user);
});