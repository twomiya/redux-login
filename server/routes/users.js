import express from 'express';
import isEmpty from 'lodash/isEmpty';
import validator from 'validator';
let router = express.Router();
const validateInput =(data)=>{
    let errors={};
    if (validator.isEmpty(data.username)) {
        errors.username = "请输入用户名";
      }
    
      if (validator.isEmpty(data.email)) {
        errors.email = "请输入邮箱";
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
router.post('/',(req,res)=>{
    const {errors, isValid} = validateInput(req.body);
    if(!isValid){
        res.status(400).json(errors)
    }
})
export default router;