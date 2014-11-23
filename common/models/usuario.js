var app = require('../../server/server')
module.exports = function(User) {

	User.prototype.Roles = function(cb) {
		var Role = app.models.Role;
		var RoleMapping = app.models.rolmapping;
		var userId = this.id.toString();
		RoleMapping.find({
			where: {
				principalId: userId
			}
		}, function(err, rolemaps) {
			var data = err;
			if (!err) {
				data = rolemaps;
			}
			cb(null, data);
		});
	};
	User.prototype.isAdmin = function(cb) {
		var Role = app.models.Role;
		var RoleMapping = app.models.rolmapping;
		var userId = this.id.toString();
		Role.find({
				where: {
					name: "admin"
				}
			},
			function(err, roleEncontrado) {
				if (roleEncontrado.length > 0) {
					var rolId = roleEncontrado[0].id;
					console.log(userId)
					console.log(rolId)
					RoleMapping.find({
						where: {
							principalId: userId,
							roleId: rolId
						}
					}, function(err, rolemaps) {
						var data = false;
						if (!err && rolemaps.length > 0) {
							data = true;
						}
						cb(null, data);
					});
				}
			}
		)
	};
	User.prototype.isOwner = function(cb) {
		var Role = app.models.Role;
		var RoleMapping = app.models.rolmapping;
		var userId = this.id.toString();
		Role.find({
				where: {
					name: "owner"
				}
			},
			function(err, roleEncontrado) {
				if (roleEncontrado.length > 0) {
					var rolId = roleEncontrado[0].id;
					console.log(userId)
					console.log(rolId)
					RoleMapping.find({
						where: {
							principalId: userId,
							roleId: rolId
						}
					}, function(err, rolemaps) {
						var data = false;
						if (!err && rolemaps.length > 0) {
							data = true;
						}
						cb(null, data);
					});
				}
			}
		)
	};
	User.prototype.isLocalAdmin = function(cb) {
		var Role = app.models.Role;
		var RoleMapping = app.models.rolmapping;
		var userId = this.id.toString();
		Role.find({
				where: {
					name: "localadmin"
				}
			},
			function(err, roleEncontrado) {
				if (roleEncontrado.length > 0) {
					var rolId = roleEncontrado[0].id;
					console.log(userId)
					console.log(rolId)
					RoleMapping.find({
						where: {
							principalId: userId,
							roleId: rolId
						}
					}, function(err, rolemaps) {
						var data = false;
						if (!err && rolemaps.length > 0) {
							data = true;
						}
						cb(null, data);
					});
				}
			}
		)
	};
	User.prototype.isPublico = function(cb) {
		var Role = app.models.Role;
		var RoleMapping = app.models.rolmapping;
		var userId = this.id.toString();
		Role.find({
				where: {
					name: "publico"
				}
			},
			function(err, roleEncontrado) {
				if (roleEncontrado.length > 0) {
					var rolId = roleEncontrado[0].id;
					console.log(userId)
					console.log(rolId)
					RoleMapping.find({
						where: {
							principalId: userId,
							roleId: rolId
						}
					}, function(err, rolemaps) {
						var data = false;
						if (!err && rolemaps.length > 0) {
							data = true;
						}
						cb(null, data);
					});
				}
			}
		)
	};
	User.prototype.isMesero = function(cb) {
		var Role = app.models.Role;
		var RoleMapping = app.models.rolmapping;
		var userId = this.id.toString();
		Role.find({
				where: {
					name: "mesero"
				}
			},
			function(err, roleEncontrado) {
				if (roleEncontrado.length > 0) {
					var rolId = roleEncontrado[0].id;
					console.log(userId)
					console.log(rolId)
					RoleMapping.find({
						where: {
							principalId: userId,
							roleId: rolId
						}
					}, function(err, rolemaps) {
						var data = false;
						if (!err && rolemaps.length > 0) {
							data = true;
						}
						cb(null, data);
					});
				}
			}
		)
	};
	User.remoteMethod('Roles', {
		isStatic: false,
		accepts: [],
		returns: {
			arg: 'roles',
			type: 'object'
		},
		http: {
			verb: 'get',
			path: '/Roles'
		}
	});
	User.remoteMethod('isAdmin', {
		isStatic: false,
		accepts: [],
		returns: {
			arg: 'roles',
			type: 'object'
		},
		http: {
			verb: 'get',
			path: '/Roles/isAdmin'
		}
	});
	User.remoteMethod('isOwner', {
		isStatic: false,
		accepts: [],
		returns: {
			arg: 'roles',
			type: 'object'
		},
		http: {
			verb: 'get',
			path: '/Roles/isOwner'
		}
	});
	User.remoteMethod('isLocalAdmin', {
		isStatic: false,
		accepts: [],
		returns: {
			arg: 'roles',
			type: 'object'
		},
		http: {
			verb: 'get',
			path: '/Roles/isLocalAdmin'
		}
	});
	User.remoteMethod('isPublico', {
		isStatic: false,
		accepts: [],
		returns: {
			arg: 'roles',
			type: 'object'
		},
		http: {
			verb: 'get',
			path: '/Roles/isPublico'
		}
	});
	User.remoteMethod('isMesero', {
		isStatic: false,
		accepts: [],
		returns: {
			arg: 'roles',
			type: 'object'
		},
		http: {
			verb: 'get',
			path: '/Roles/isMesero'
		}
	});
	User.afterCreate = function(next, user) {
		var userID = this.id;
		var Role = app.models.Role;
		var RoleMapping = app.models.rolmapping;
		Role.find({
			where: {
				name: "publico"
			}
		}, function(err, rolEncontrado) {
			var idRol = rolEncontrado[0].id;
			RoleMapping.create({
				principalType: RoleMapping.USER,
				principalId: userID,
				roleId: idRol
			}, function(err, rolemap) {
				next();
			});
		});
	};
};