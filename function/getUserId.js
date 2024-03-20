const connection=require('../utils/connection');

async function getUserId(phoneNumber) {
    
    const [user, fields] = await connection.query('SELECT user_Id FROM user WHERE phoneNumber=?', [phoneNumber]);

    const userId = user[0]['user_Id'];
    return userId;
}


module.exports=getUserId;