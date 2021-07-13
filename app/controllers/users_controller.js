const User = require("../models/user");

exports.findUser = async (req, res) => {
    try {
        await User.findOne({
            email: req.body.email,
            password: req.body.password
        }, (err, foundUser) => {
            if (err) {
                res.status(500).send(err);
            } else if (foundUser) {
                res.status(200).send(foundUser);
            } else {
                res.status(400).send("");
            }
        });
    } catch (err) {
        console.log(err);
    }
}

exports.addUser = async (req, res) => {
    try {
        const {
            username,
            email,
            password
        } = req.body;
        await User.findOne({
            email: email
        }, async (err, foundUser) => {
            if (err) {
                res.status(500).send(err);
            } else if (foundUser) {
                res.status(300).send("User already present.");
            } else {
                const newUser = {
                    username,
                    email,
                    password,
                    NativeLanguage: "",
                    LearningLanguage: "",
                    CreatedAt: Date.now(),
                    UpdatedAt: Date.now()
                }
                await User.insertMany(newUser, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        // User.findOne(newUser), (err, foundUser) => {
                        //     if (err) {
                        //         res.status(500).sens(err);
                        //     } else if (foundUser) {
                        //         res.status(400).send("User already present.");
                        //     } else {
                        //         res.status(200).send(newUser);
                        //     }
                        res.status(200).send(newUser);
                    }
                });
                // res.status(200).send(newUser);
            }
            // User.insertOne(newUser, (err) => {
            //     if (err) {
            //         console.log(err);
            //     } else {
            //         // User.findOne(newUser), (err, foundUser) => {
            //         //     if (err) {
            //         //         res.status(500).sens(err);
            //         //     } else if (foundUser) {
            //         //         res.status(400).send("User already present.");
            //         //     } else {
            //         //         res.status(200).send(newUser);
            //         //     }
            //         }
            //     }

        });
    } catch (err) {
        console.log(err);
    }
}

