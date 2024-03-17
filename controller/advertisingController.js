const connection=require('../utils/connection');



exports.AddNewAdvertising=async (req,res)=>{
   
    const {title,content,isSubmit,price,phoneNumber}=req.body;
    
    const [user,fields]= await connection.query('SELECT user_Id FROM user WHERE phoneNumber=?',[phoneNumber]);

    const sql = "INSERT INTO advertising (ad_Title, ad_Content, isSubmit,date,price,user_Id) VALUES (?, ?,?, ?,?,?)";
    
    const userId=user[0]['user_Id'];
    await connection.query(sql,[title,content,isSubmit,'1384/06/16',price,userId]); 
    
    return res.status(200).send({'message':"آگهی با موفقیت ثبت شد"});

}


exports.DeleteAdvertising=async (req,res)=>{



  const sql = `DELETE FROM advertising ad WHERE ad.ad_Id = ${req.params.id}`;

  await connection.query(sql);
  
 return res.redirect('/users/login-admin');

}