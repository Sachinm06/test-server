const db = require('./db')

register = (uname, number, psw) => {
    return db.User.findOne({ number }).then(user => {
        if (user) {
            return {
                status: false,
                message:"user already present",
                statusCode:404

            }
        }
        else{
            newUser=new db.User({
                username:uname,
                number,
                password:psw

            })
            newUser.save()
            return{
                status:true,
                message:"registred",
                statusCode:200
            }
        }
    })
}