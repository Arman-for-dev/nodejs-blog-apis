import JWT from "jsonwebtoken";


const authVerify = (req, res, next) =>{
    const authHeader = req.headers.authorization;
    if(authHeader === null || authHeader === undefined){
        return res.status(401).json({message: "Unauthorized"})
    };
    const token = authHeader.split(" ")[1];

    JWT.verify(token, process.env.JWTSECRET_KEY, (err, user)=>{
        if(err) return res.status(401).json({message: "Authorized!"})
        req.user = user;
        next();
    })
    
}

export default authVerify;