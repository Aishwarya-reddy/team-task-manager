const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post('/signup', async (req, res) => {

    const { name, email, password, role } = req.body;

    try {

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashedPassword,
            role
        });

        await user.save();

        res.json({
            message: 'User created',
            user
        });

    } catch (error) {
        res.status(500).json(error.message);
    }
});
router.post('/login', async (req, res) => {

    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json("User not found");
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(400).json("Wrong password");
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            "secretkey"
        );

        res.json({
            message: "Login success",
            token,
            user
        });

    } catch (error) {
        res.status(500).json(error.message);
    }

});
module.exports = router;