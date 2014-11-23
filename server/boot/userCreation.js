module.exports = function(app) {
	var User = app.models.usuario;
	var Role = app.models.Role;
	var RoleMapping = app.models.rolmapping;
	var Restaurant = app.models.restaurante;
	var Usuario_Restaurante = app.models.usuario_restaurante;
	//CREAR USUARIOS DE PRUEBA

	//encontrarRestaurantes
	creacionAdmins();
	creacionCustoms();

	function creacionAdmins() {
		console.log("CREACION USUARIOS ADMIN CUSTOM")
		Role.find({
			/*where: {
				name: "admin"
			}*/
		}, function(err, rolesEncontrado) {
			
			User.create([{
					username: 'q',
					email: 'q@q.com',
					password: 'q'
				}, {
					username: 'forres',
					email: 'felipe.torressepulveda@gmail.com',
					password: '1RONLIMON'
				}],
				function(err, users) {
					//create the admin role
					if (!err) {
						
						for(k in rolesEncontrado){
							var rolEncontrado = rolesEncontrado[k]
							var idRol = rolEncontrado.id
							//make bob an admin
							RoleMapping.create({
									principalType: RoleMapping.USER,
									principalId: users[0].id,
									roleId: idRol
								},
								function(err, principal) {}
							);
							RoleMapping.create({
									principalType: RoleMapping.USER,
									principalId: users[1].id,
									roleId: idRol
								},
								function(err, principal) {}
							);
						}
					} else {
						console.log(err)
					}
				});
		})
	}
	function encontrarRestaurantes(){
			Usuario_Restaurante.find({
			}, function(err, restauranteEncontrado) {
				console.log("ENCOTNRANDO RESTAURANT")
				console.log(restauranteEncontrado)
			})
		}
	function creacionCustoms() {
		console.log("CREACION USUARIOS CUSTOM")

		for (var i = 1; i <= 20; i++) {
			User.create([{
					username: i.toString(),
					email: i + '@' + i + '.com',
					password: i.toString()
				}],
				function(err, users) {
					if (!err) {

						switch(parseInt(users[0].username)){
							case 1:
								console.log("1!!!!!!!!!!!!!!!")
								 // owner restaurant 1
								encontrarRol("owner",users[0])
								encontrarRestaurant("test1",users[0])
								break;
							case 2:
							case 3:
								console.log("1!!!!!!!!!!!!!!!")
								 // localadmin restaurant 1
								encontrarRol("localadmin",users[0])
								encontrarRestaurant("test1",users[0])
								break;
							case 4:
							case 5:
							case 6:
								 // mesero restaurant 1
								encontrarRol("mesero",users[0])
								encontrarRestaurant("test1",users[0])
								break;
							case 7:
								 // owner restaurant 2
								encontrarRol("owner",users[0])
								encontrarRestaurant("test2",users[0])
								break;
							case 8:
							case 9:
								 // localadmin restaurant 2
								encontrarRol("localadmin",users[0])
								encontrarRestaurant("test2",users[0])
								break;
							case 10:
							case 11:
							case 12:
								 // mesero restaurant 2
								encontrarRol("mesero",users[0])
								encontrarRestaurant("test2",users[0])
								break;
							default:
								break;
						}
					} else {}
				});
		}
		// publico 
		function encontrarRol(nombreRol, user){
			console.log(("ASIGNANDO ROLES"))
			Role.find({
				where: {
					name: nombreRol
				}
			}, function(err, rolEncontrado) {
				var idRol = rolEncontrado[0].id
				console.log("ERROR ROLES")
				console.log(err)				
				RoleMapping.create({
					principalType: RoleMapping.USER,
					principalId: user.id,
					roleId: idRol
				}, function(err, rolemap) {
					
				})
			})
		}
		
	
		function encontrarRestaurant(nombreRestaurant,user,cb){
			Restaurant.find({
				where: {
					nombre: nombreRestaurant
				}
			}, function(err, restauranteEncontrado) {
				if(err){
					console.log("ERROR RESTAURANT")
					console.log(err)				
				}else{
					console.log("Restaurant "+nombreRestaurant+" Encontrado")
					console.log(restauranteEncontrado)	
					var idRestaurante = restauranteEncontrado[0].id
					Usuario_Restaurante.create({
						restauranteId: idRestaurante,
						usuarioId: user.id
					}, function(err, usuariorestaurante) {
						console.log("asignado")
						console.log(err)
						console.log(usuariorestaurante)
					})
				}
				
			})
		}
		
	}
}