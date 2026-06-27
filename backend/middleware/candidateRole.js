exports.verifyCandidate = (req, res, next) => {
    try{
        if( req.user.role == 'candidate'){
            next()
        }else{
            res.status(403).json({message: 'Forbidden Request'})
        }
    } catch(error){
        return res.status(401).json({
            message: 'Invalid Token'
        })
    }

}