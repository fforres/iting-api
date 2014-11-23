module.exports = function(app) {
	createRoles();
	console.log("CREACION ROLES CUSTOM")
	function createRoles(){
		var roles = ["admin","owner","localadmin","mesero","publico"]
		for(k in roles){
			revisarOCrearRol(roles[k])
		}
	}
	 
	function revisarOCrearRol(rolParaConsultarOCrear){
		var RoleModel = app.models.Role;
		RoleModel.find(
			{
				where:
				{
					name:rolParaConsultarOCrear
				}
			},
			function(err,roleEncontrado){
				if(roleEncontrado.length == 0){
					RoleModel.create({
						name: rolParaConsultarOCrear
					},function(err, elrolcreado){
					
					})
				}
			}
		)
	}
	
};