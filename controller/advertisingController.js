const connection=require('../utils/connection');



exports.AddNewAdvertising=async (req,res)=>{
   
    const {title,content,isSubmit,phoneNumber}=req.body;
    
    const [user,fields]= await connection.query('SELECT user_Id FROM user WHERE phoneNumber=?',[phoneNumber]);

    const sql = "INSERT INTO advertising (ad_Title, ad_Content, isSubmit,date, user_Id) VALUES (?, ?,?, ?, ?)";
    
    const userId=user[0]['user_Id'];
    await connection.query(sql,[title,content,isSubmit,'1384/06/16',userId]); 


}