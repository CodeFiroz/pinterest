import jwt from "jsonwebtoken"

export const genrateTokenAndSave = (res, userid)=>{

    const token = jwt.sign({
        userid : userid
      }, process.env.JWT_SECRET , { expiresIn: '30d' });

      res.cookie(
        "authToken",
        token,
        {
            maxAge: 30 * 24 * 60 * 60 * 1000, // MS
            httpOnly: true, // prevent XSS attacks cross-site scripting attacks
            sameSite: "None", // CSRF attacks cross-site request forgery attacks
            secure: process.env.NODE_ENV !== "development",
        }
      );
      

}