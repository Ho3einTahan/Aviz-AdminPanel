const connection=require('../utils/connection');


exports.CreateTable=async ()=>{
    await connection.query('CREATE TABLE IF NOT EXISTS advertising (ad_Id INT PRIMARY KEY AUTO_INCREMENT, ad_Title VARCHAR(35),ad_Content TEXT(10000),isSubmit VARCHAR(1),date VARCHAR(10),user_Id INT, FOREIGN KEY (user_Id) REFERENCES `user`(`user_Id`))');
}