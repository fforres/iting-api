module.exports = function(app) {
	var Restaurante = app.models.restaurante;
	console.log("CREACION RESTAURANTES CUSTOM")
	Restaurante.create(
	[
		{
			"nombre": "test1",
			"direccion": "test1",
			"web": "http://www.test1.com",
			"email": "test1@test1.com",
			"telefono": "1234567",
			"enabled": true,
			"categoriaId": "5466469fd492e3dd1567c010",
			"comunaId": "546de519490e304105f8d005"
		}
		,{
			"nombre": "test2",
			"direccion": "test2",
			"web": "http://www.test2.com",
			"email": "test2@test2.com",
			"telefono": "1234567",
			"enabled": true,
			"categoriaId": "546bf581832a608c06ab5b71",
			"comunaId": "546de51e490e304105f8d006"
		}
	],
	function(err, users) {
		console.log(err)
	})
		
};