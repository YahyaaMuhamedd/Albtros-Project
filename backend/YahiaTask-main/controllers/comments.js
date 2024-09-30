const Comment = require('../models/comments');
const { validationResult } = require('express-validator');
exports.getComments = async (req, res, next) => {
    try {
        const comments = await Comment.find().sort({ createdAt: -1 });
        return res.status(200).json({ comments });
    }
    catch (err) {
        if (!err.statusCode)
            err.statusCode = 500;
        return next(err);
    }

}
exports.addComment = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const err = new Error('validation failed');
            err.statusCode = 422;
            err.message = errors.array()[0].msg;
            return next(err);
        }
        const { comment, userName, userEmail } = req.body;
        const newComment = new Comment({
            comment,
            userName,
            userEmail
        })
        await newComment.save();
        return res.status(200).json({
            message: 'comment added successfully',
            comment: newComment
        }
        )

    }
    catch (err) {
        if (!err.statusCode)
            err.statusCode = 500;
        return next(err);
    }


}