module.exports = function(Tipomovimiento) {
Tipomovimiento.validatesUniquenessOf('nombre',{message:"El Nombre del movimiento ya está en uso"})

};
