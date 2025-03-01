import jwt from "jsonwebtoken"

export const genrateTokenAndSave = (res, userid)=>{

    const token = jwt.sign({
        userid : userid
      }, process.env.JWT_SECRET , { expiresIn: '30d' });

    res.cookie(
        "authToken", 
        token,
        { 
            maxAge: 30 * 24 * 60 * 60 * 1000, 
            httpOnly: true,
            sameSite: "strict", 
            secure: process.env.NODE_ENV !== "development",
        }
    )

}