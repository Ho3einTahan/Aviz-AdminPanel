const connection=require('../utils/connection');


exports.CreateTable=async ()=>{
    await connection.query('CREATE TABLE IF NOT EXISTS advertisements (ad_Id INT PRIMARY KEY AUTO_INCREMENT, ad_Title VARCHAR(35),ad_Content TEXT(10000),isSubmit VARCHAR(1),saveDate VARCHAR(10),price FLOAT,user_Id INT,car_Id INT NULL,home_Id INT NULL,mobile_Id INT NULL,estekhdam_Id INT NULL,FOREIGN KEY (user_Id) REFERENCES `user`(`user_Id`),FOREIGN KEY (car_Id) REFERENCES `cat_car`(`car_Id`),FOREIGN KEY (home_Id) REFERENCES `cat_home`(`home_Id`),FOREIGN KEY (mobile_Id) REFERENCES `cat_mobile`(`mobile_Id`),FOREIGN KEY (estekhdam_Id) REFERENCES `cat_estekhdam` (`estekhdam_Id`))');
}