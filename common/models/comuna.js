module.exports = function(Comuna) {
Comuna.validatesUniquenessOf('nombre',{message:"El Nombre de la Comuna ya está en uso"})
};
