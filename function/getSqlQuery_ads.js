
function getSqlQueryAds() {

    const sql = "INSERT INTO advertisements (ad_Title, ad_Content, isSubmit,saveDate,price,user_Id,car_Id,home_Id,mobile_Id,estekhdam_Id) VALUES (?, ?,?, ?,?,?,?,?,?,?)";

    return sql;
}




module.exports=getSqlQueryAds;