exports.verifyAdmin = (req, res, next) => {
    try{
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        const decodedToken = jwt.decode(token, process.env.JWT_SECRET);
        if (!decodedToken || (decodedToken.role !== "admin")) {
        return res.status(401).json({message: "Unauthorized access"});
        }
        req.user = decodedToken;
        next();
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
  };

exports.authenticateUser = (req, res, next) => {
    try{
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        const decodedToken = jwt.decode(token, process.env.JWT_SECRET);
        if (!decodedToken) {
        return res.status(401).json({message: "Unauthorized access"});
        }
        req.user = decodedToken;
        next();
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
  };