module.exports = function(Restaurante) {
Restaurante.validatesUniquenessOf('nombre',{message:"El Nombre del restaurante ya está en uso"})
};
