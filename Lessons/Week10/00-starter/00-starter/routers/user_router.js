const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

router.post("/register", (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    bcrypt
        .genSalt(10)
        .then((salt) => {
            return bcrypt.hash(password, salt);
        })
        .then((hashedPassword) => {
            const newUser = new User({
                email,
                password: hashedPassword,
                firstName,
                lastName,
            });
            return newUser.save(); // Save the new user to the database
        })
        .then((result) => {
            res.status(201).json({ message: "Account Created" });
        })
        .catch((err) => {
            console.error(err);
            res.status(400).send("Error registering user");
        });
});

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email })
        .then((user_account) => {
            if (!user_account) {
                return res.status(400).json({ error: "Invalid credentials" });
            }
            bcrypt
                .compare(password, user_account.password)
                .then((isMatch) => {
                    if (!isMatch) {
                        return res.status(400).json({ error: "Invalid credentials" });
                    }
                    return res.status(200).json({ message: "Login Successful" });
                })
                .catch((error) => {
                    console.error("Error during password comparison: ", error);
                    return res.status(500).json({ error: "Server error" });
                });
        })
        .catch((error) => {
            console.error("Error during login: ", error);
            return res.status(500).json({ error: "Server error" });
        });
});


router.get("/search", (req, res) => { });
router.delete("/delete_user", (req, res) => { });
router.put("/update_user", (req, res) => { });
router.get("/profile:user_id", (req, res) => { });
module.exports = router;