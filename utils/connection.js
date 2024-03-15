const mysql=require('mysql2');

 const connection= mysql.createConnection(
    {
        database:process.env.DATABASE_Name,
        host:process.env.HOST,
        user:process.env.USER_NAME,
        password:process.env.PASSWORD,
    }
);



module.exports=connection.promise();