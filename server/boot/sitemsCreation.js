module.exports = function(app) {
	var Restaurante = app.models.restaurante;
	var Item = app.models.item;
	console.log("CREACION ITEMS CUSTOM")
	Restaurante.find(
		{
			where: {
				nombre: {
				   inq : ["test1","test2"]
				}
			}
		}, 
		function(err, restauranteEncontrado) {
            console.log(restauranteEncontrado);
		    for (var i = 0; i < restauranteEncontrado.length; i++) {
		        for (var k = 0; k < 10; k++) {
    			     ifThereIsNoSuchItemThenCreateIt(k,restauranteEncontrado[i].id)
    			}
		    }
		}
	)
	
	
	function ifThereIsNoSuchItemThenCreateIt(i,idRestaurante){
	    var laI = "item"+i;
	    var idRest = idRestaurante;
	    //console.log(laI + " / " + idRest);
	    var ob = 
	    {
			where: 
			{
			    and:
			    [
			        {
			            nombre: 
			            {
			                like: laI
			            }
			        },
			        {
			            restauranteId: idRest
			        }
                ]
			}
		};
		
		a = {   
		    "where":
		    {
		        "and":
		        [
		            {
		                "nombre":{"eq":"item0"}
		            },
		            {
		                "restauranteId":{"eq":"546f6aa7859cc2060d99ec06"}
		            }
                ]
		    }
		}
	    Item.find(ob
	    ,function(err,items){
		    console.log(err);
		    console.log(items);
			if(items.length == 0){
			    console.log("creando Item")
				Item.create(
						{
							"nombre": laI,
							"cantidadactual": 5,
							"descripcion": "Descripcion N° "+laI,
							"unidaddemedida": "KG",
							"restauranteId": idRest
						}
					,
					function(err, items) {
					}
				);
			}
		})
	}
	

	
	
		
};