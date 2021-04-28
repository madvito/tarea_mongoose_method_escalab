const ModelCategoria = require('../models/categoria_model');

function errorHandler(data, next, err = null){

  if(err){
    return next(err);
  }

  if(!data){

    let error = new Error('No existe !');
    error.statusCode = 404;
    return next(error)
    
  }

}

//==========
//	Listar Categorias
//==========

function listar(req, res) {
  
  ModelCategoria.find().exec( (err, items) =>{
    
    if( err || !items  ) 
    
    return errorHandler(items, next, err)

    return res.json({
      items: items
    })

  } )
  
  

}

//==========
//	Get  x Id Categoria
//==========

function getCategoria(req, res) {

  let id = req.params.id;


  ModelCategoria.findById( id, (err, docCategoria) =>{

    if( err || !docCategoria  ) return errorHandler(docCategoria, next, err)

    return res.json({
      data: docCategoria
    })

    

  } );
  

}


//==========
//	Guardar Categoria
//==========
function guardar(req, res, next){

  console.log(req.body);
  

  let data = {
    categoria_nombre: req.body.categoria_nombre
  }

  const modelCategoria = new ModelCategoria(data);
  modelCategoria.save( (err, docCategoria) => {

    if( err || !docCategoria  ) return errorHandler(docCategoria, next, err)

    return res.json({
      data: docCategoria
    })
    

    
    
    
  })


 
}


//==========
// Borrar Categoria 
//==========
function borrar(req, res){
  
  const id = req.params.id;
  ModelCategoria.findByIdAndRemove( id, (err, docCategoria) => {

    if( err || !docCategoria  ) return errorHandler(docCategoria, next, err)

    return res.json({
      data: docCategoria
    })

    


  } )

}

//==========
//	Actualizar
//==========
function update(req, res){
  const id = req.params.id;

  const data = {
    categoria_nombre: req.body.categoria_nombre
  }

  ModelCategoria.findByIdAndUpdate(id, { categoria_nombre: req.body.categoria_nombre  } ,{new: true},  (err, docCategoria) => {

    if( err || !docCategoria  ) return errorHandler(docCategoria, next, err)

    return res.json({
      data: docCategoria
    })
    
  })

}

module.exports = {
  listar,
  getCategoria,
  guardar,
  borrar,
  update
}



