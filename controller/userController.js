const connection = require('../utils/connection');
const validation = require('../utils/validator');
const jwt = require('jsonwebtoken');


exports.RegisterUser = (req, res) => {

  const { name, phoneNumber, melliCode } = req.body;


  validation(req.body).then(async (response) => {

    const [isExist, fields] = await connection.query('SELECT melliCode,phoneNumber FROM user WHERE melliCode = ? OR phoneNumber=?', [melliCode, phoneNumber]);

    if (isExist.length != 0) return res.status(400).send({ 'message': "کاربر مورد نظر قبلا ثبت نام کرده است" });

    const sql = 'INSERT INTO USER (name, phoneNumber, melliCode) VALUES (?, ?, ?)';
    const values = [name, phoneNumber, melliCode];
    await connection.execute(sql, values);

    res.status(200).send({ 'message': "ثبت نام موفقیت آمیز بود" });

  }).catch((err) => {
    const errList = err['errors'];
    if (errList.lentgh != 0) return res.status(400).send({ 'message': errList });
  });

}


exports.LoginUser = async (req, res) => {

  const { phoneNumber, melliCode } = req.body;

  const [isExist, field] = await connection.query('SELECT phoneNumber,melliCode FROM user WHERE phoneNumber=? AND melliCode=?', [phoneNumber, melliCode]);

  const token = jwt.sign({ phoneNumber: phoneNumber, melliCode: melliCode }, process.env.SECRETKEY, { expiresIn: '1h' });
  if (isExist.length != 0) return res.status(200).send({ 'message': "ورود موفقیت آمیز بود", 'token': token });

  return res.status(400).send({ 'message': "کاربری با این اطلاعات وجود ندارد" });
}




exports.LoginAdmin = async (req, res) => {
  const isSubmit = req.query.is_submit; // دریافت مقدار پارامتر is_submit

  let advertising;

  if (isSubmit == '1' || isSubmit==undefined) {
    const [ad, field] = await connection.query(`SELECT * FROM user JOIN advertising a ON user.user_Id = a.user_Id AND a.isSubmit=1;`);
    advertising = ad;
  }
  else {
    const [ad, field] = await connection.query(`SELECT * FROM user JOIN advertisements a ON user.user_Id = a.user_Id AND a.isSubmit=0;`);
    advertising = ad;
  }

    return res.render('index3', {
      'advertising': advertising,
      params:isSubmit==0?0:1,
    });

}