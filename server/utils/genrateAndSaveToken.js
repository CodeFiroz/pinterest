import jwt from 'jsonwebtoken';

export const genrateAndSaveToken = (userid, res) => {
    const token = jwt.sign({userid}, process.env.JWT_SECRET, {expiresIn: '30d'});

    res.cookie("jwt", token, {
        maxAge: 30 * 24 * 60 * 60 * 1000, // MS
        httpOnly: true, // prevent XSS attacks cross-site scripting attacks
        sameSite: "Strict", // CSRF attacks cross-site request forgery attacks
        secure: process.env.NODE_ENV !== "development",
    });

    return token;

}