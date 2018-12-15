import express from 'express';
import isEmpty from 'lodash/isEmpty';
import validator from 'validator';
import bcrypt from 'bcrypt';
import User from '../models/user';

let router = express.Router();
const validateInput =(data)=>{
    let errors={};
    if (validator.isEmpty(data.username)) {
        errors.username = "请输入用户名";
      }
      if (validator.isEmpty(data.email)) {
        errors.email = "请输入邮箱";
      }else if(!validator.isEmail(data.email)){
        errors.email = "输入邮箱无效";
      }
      if (validator.isEmpty(data.password)) {
        errors.password = "请输入密码";
      }
    
      if (validator.isEmpty(data.passwordConfirmation)) {
        errors.passwordConfirmation = "请输入确认密码";
      }
      if (!validator.equals(data.password, data.passwordConfirmation)) {
        errors.passwordConfirmation = "两次密码不一致";
      }
    
    return{
        errors,
        isValid: isEmpty(errors)
    }
}
// router.get('/:identifier', (req, res) => {
//   User.query({
//     select: ["username", "email"],
//     where: { email: req.params.identifier },
//     orWhere: { username: req.params.identifier }
//   }).fetch().then(user => {
//     res.json({ user });
//   })
// });
router.post('/',(req,res)=>{
    const {errors, isValid} = validateInput(req.body);
    if(isValid){
        // const {username,password,email}=req.body;
        // const password_digest = bcrypt.hashSync(password, 10);
        // User.forge({
        //   username, password_digest, email
        // }, { hasTimestamps: true }).save()
        //   .then(user => res.json({ success: true }))
        //   .catch(err => res.status(500).json({ errors: err }))
        res.json({ success: true })
    }else{
        res.status(400).json(errors)
    }
})
export default router;