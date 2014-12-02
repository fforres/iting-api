module.exports = function(app) {
	var Restaurante = app.models.restaurante;
	var CategoriaItem = app.models.categoriaitem;
	console.log("CREACION CATEGORIAS ITEM CUSTOM");
	
	Restaurante.find(
		{
			where: {
				nombre: "test1"
			}
		}, 
		function(err, restauranteEncontrado) {
			for (var i = 0; i < 7; i++) {
				ifNotItemCreate(i,restauranteEncontrado[0].id)
			}	
		}
	)

	Restaurante.find(
		{
			where: {
				nombre: "test2"
			}
		}, 
		function(err, restauranteEncontrado) {
			for (var i = 0; i < 7; i++) {
				ifNotItemCreate(i,restauranteEncontrado[0].id)
			}	
		}
	)
	
	function ifNotItemCreate(i,idRestaurante){
	    var elI = i;
	    var elID = idRestaurante;
		CategoriaItem.find(
		{
			where: {
				nombre: "categoria_"+elI,
				restauranteId: elID

			}
		},function(err,categor){
			if(categor.length == 0){
				CategoriaItem.create(
					[
						{
							"nombre": "categoria_"+elI,
							"restauranteId": elID
						}
					],
					function(err, categor2) {
						console.log(categor2)
					}
				);
			}
		})
	}
		
};