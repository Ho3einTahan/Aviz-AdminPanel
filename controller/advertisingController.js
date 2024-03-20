const connection = require('../utils/connection');
const getUserId = require('../function/getUserId');
const getSqlQueryAds = require('../function/getSqlQuery_ads');

exports.AddHomeCategory = async (req, res) => {

  const { saveDate, title, content, price, phoneNumber, metrajZamin, metrajBena, rahn, ejare, forooshi, gerage, parking, balcony, wc, taminAbGarm, garmayesh, sarmayesh, sanad, rebuild, direction, room } = req.body;

  const userId = await getUserId(phoneNumber);

  const homeSQL = `INSERT INTO cat_home (isRahn,isEjare,metraj_Bena,metraj_Zamin,isForooshi,hasParking,hasGarage,hasBalcony,hasWc,hasTaminAbGarm,Garmayesh,Sarmayesh,sanad_Type,isRebuild,home_Direction,count_Room) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

  const [home, fields] = await connection.query(homeSQL, [rahn, ejare, metrajBena, metrajZamin, forooshi, parking, gerage, balcony, wc, taminAbGarm, garmayesh, sarmayesh, sanad, rebuild, direction, room]);

  const homeId = home.insertId;


  await connection.query(getSqlQueryAds(), [title, content, 0, saveDate, price, userId, null, homeId, null, null]);

  return res.status(200).send({ 'message': "آگهی با موفقیت ثبت شد" });

}


exports.AddMobileCategory = async (req, res) => {

  const { title, content, price, phoneNumber, saveDate, brand, status, countSM, Asl } = req.body;


  const userId = await getUserId(phoneNumber);

  const mobileSQL = `INSERT INTO cat_mobile (brand,status,count_SM,isAsl) VALUES (${brand},${status},${countSM},${Asl})`;

  const [mobile, fields] = await connection.query(mobileSQL);

  const mobileId = mobile.insertId;



  await connection.query(getSqlQueryAds(), [title, content, 0, saveDate, price, userId, null, null, mobileId, null]);

  return res.status(200).send({ 'message': "آگهی با موفقیت ثبت شد" });

}


exports.AddCarCategory = async (req, res) => {

  const { title, content, price, phoneNumber,saveDate,} = req.body;

  const userId = await getUserId(phoneNumber);

  const carSQL = `INSERT INTO cat_car (sal_Tolid,karkard,isBime_Sales,isBime_Badane,payan_Bime,brand,shasi_Status,motor_Status,mohlat_BimeSales,girbox_Type,exchange) VALUES ()`;
  const [car,fields]= await connection.query(carSQL);
  
  const carId = car.insertId;

 
  await connection.query(getSqlQueryAds(), [title, content, 0, saveDate, price, userId, carId, null, null, null]);

  return res.status(200).send({ 'message': "آگهی با موفقیت ثبت شد" });

}

exports.AddEstekhdamCategory = async (req, res) => {

  const { title, content, price, phoneNumber, } = req.body;

  const userId = await getUserId(phoneNumber);

  const estekhdamSQL = `INSERT INTO cat_estekhdam (work_Home,hamkari_Type,shive_Pardakht,hasBime,start_Time,end_Time,thursday_Noon,other_Time,experience,sarbazi_Status,isDisable_person) VALUES ()`;

  const [estekhdam,fields]= await connection.query(estekhdamSQL);
  
  const estekhdamId = estekhdam.insertId;

 
  await connection.query(getSqlQueryAds(), [title, content, 0, saveDate, price, userId, null, null, null, estekhdamId]);

  return res.status(200).send({ 'message': "آگهی با موفقیت ثبت شد" });

}

exports.DeleteAdvertising = async (req, res) => {



  const sql = `DELETE FROM advertising ad WHERE ad.ad_Id = ${req.params.id}`;

  await connection.query(sql);

  return res.redirect('/users/login-admin');

}

