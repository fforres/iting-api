module.exports = function(Categoria) {
Categoria.validatesUniquenessOf('nombre',{message:"El Nombre del movimiento ya está en uso"})
};
