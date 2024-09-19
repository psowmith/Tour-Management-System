const User = require('../Models/User');
const jwt = require('jsonwebtoken');
const AppError = require('../Utils/appError');
const CatchAsync = require('../Utils/catchAsync');
require('dotenv').config();

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};

const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id);

    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
            user
        }
    });
};

const register = CatchAsync(async (req, res, next) => {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return next(new AppError('Username already exists', 404));
    }

    const newUser = await User.create({ username, email, password });
    createSendToken(newUser, 201, res);
});

const login = CatchAsync(async (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return next(new AppError('Please provide username and password', 400));
    }

    const user = await User.findOne({ username }).select('+password');
    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError('Invalid credentials', 401));
    }

    createSendToken(user, 200, res);
});

module.exports = {
    register,
    login
};
