module.exports = function(Restaurante) {
Restaurante.validatesUniquenessOf('nombre',{message:"El Nombre del ya está en uso"})
};
