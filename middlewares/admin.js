const HttpError = require("../models/http-error");

function admin(req,res,next){
    if(!req.user.isAdmin) {
        const error = new HttpError('Access denied!', 403);
        return next(error);
    }
    next();
}
module.exports = admin;