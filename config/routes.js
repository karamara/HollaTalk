var users = require('./../server/controllers/users.js');
var chatrooms = require('./../server/controllers/chatrooms');
var friends = require('./../server/controllers/friends.js');
console.log("routes")
// these redirects the http request to the controller so it can save to mongoDB using model.
// // it would be good idea to make RESTful route for friend and the user.!!
module.exports = function(app){
	// app.get('/',function(req,res){
	// 	console.log("home");
	// })

	app.get('/session', function(req, res){
		console.log("post request for session called", req.body);
		users.session(req, res);
	})
	app.post('/friends/new/:id', function(req, res){
		console.log("post to add new friend", req.body, req.params);
		friends.create(req,res)
	});
	app.get('/friendsList/:userPhoneNumber', function(req,res){
		console.log("tyring to fetch friends list for user", req.params);
		friends.show(req,res);
	});

	// user routes
    // Index
	// .get('/users', function(request, response) {
	// 	users.index(request, response)
	// });

	// .get('/users/new', function(request, response) {
	// 	users.create(request, response)
	// });

	// .get('/users/:id', function(request, response) {
	// 	users.show(request, response)
	// });

	// .get('/users/:id/edit', function(request, response) {
	// 	users.update(request, response)
	// });

	app.post('/users', function(request, response) {
		users.create(request, response)
	});
	// .put('/users/:id', function(req, res){
	// 	//update the user information won't use it for now.
	// });
	app.delete('users/:id', function(req, res) {
		// delete the user available when admin feature is built
	});
	app.post('/logIn', function(req,res){
		console.log("logging in", req.body, req.session);
		users.logIn(req, res);
	});
	// chat room routes
	app.post('/chatroom', function(req, res){
		console.log("new chatroom is being created");
		chatrooms.create(req, res);
	});
	app.put('/chatroom/:id', function(req, res){
		console.log("new message is being updated");
		chatrooms.update(req, res);
	});

}