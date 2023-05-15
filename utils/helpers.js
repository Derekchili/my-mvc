function checkUser (req, res, next){
    if(req.sessions.loggedIn === true){
       User.findbyId(req.session.user_id, function (user){
        if(user){
            req.currentUser = user;
            return next();
        }else {
                location.redirect('/login');
        }
       })
    } else {
        location.redirect('/login');
    }
}
module.exports = {checkUser};