module.exports = function(Categoriaitem) {
Categoriaitem.validatesUniquenessOf('nombre',{message:"El Nombre de la categoria ya está en uso"})

};
