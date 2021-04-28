const { body, validationResult } = require('express-validator');
const ModelUsuario = require('../models/usuario_model');

const pSingUp = [
  
  body('nombre').trim().not().isEmpty().withMessage('nombre requerido'),

  body('email').isEmail()
    .withMessage('ingrese un email valido')
    .custom( (value)=>{
      return ModelUsuario.findOne( {email:value} ).then( userDoc => {
        if(userDoc){
          return Promise.reject('Este correo ya existe : validator ')
        }
      } ) 
    } ),

  body('password').trim()
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$.!%*#?&])/)
    .withMessage('debe tener numeros y caracteres minusculas y mayusculas y caracteres @$.!%*#?&')
    .isLength( {min:5} )
    .withMessage('minimo 5 caracteres')
];

const vSingUp = (req, res,next) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    

    const myerror = new Error('Nueva Validacion');
    myerror.statusCode = 422;
    myerror.data = errors.array();
    return next(myerror);
    
  }

  next();

}

const validateSingUp = [ pSingUp, vSingUp ];

module.exports = {
  validateSingUp
}