module.exports = function(app) {
	createTiposMovimientos();
	console.log("CREACION TIPOS MOVIMIENTOS")
	function createTiposMovimientos(){
		var movimientos = ["ingreso","merma","perdida","salida","ajuste"]
		var orden = [1,5,3,2,4]
		for(k in movimientos){
			revisarOCrearRol(movimientos[k],orden[k])
		}
	}
	 
	function revisarOCrearRol(movimientoParaRevisarOCrear,ordenMovimiento){
		var TipoMovimientoModel = app.models.tipomovimiento;
		TipoMovimientoModel.find(
			{
				where:
				{
					nombre:movimientoParaRevisarOCrear
				}
			},
			function(err,roleEncontrado){
				if(roleEncontrado.length == 0){
				    if(movimientoParaRevisarOCrear == "ingreso"){
				    	TipoMovimientoModel.create({
    						nombre: movimientoParaRevisarOCrear,
    						orden:ordenMovimiento,
    						tienevalordeunidad: true
    					},function(err, elrolcreado){
    					})
				    }else{
    					TipoMovimientoModel.create({
    						nombre: movimientoParaRevisarOCrear,
    						orden:ordenMovimiento,
    						tienevalordeunidad: false
    					},function(err, elrolcreado){
    					})
				    }
				}
			}
		)
	}
	
};