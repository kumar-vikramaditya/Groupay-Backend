var user = require('config/users');
var group = require('config/groups');

module.exports = function(app) {



    app.get('/', function(req, res) {

        res.end("Groupay-Project");
    });


    app.post('/login', function(req, res) {

        var email = req.body.email;
        var password = req.body.password;

        user.login(email, password, function(found) {
            console.log(found);
            res.json(found);
        });
    });


    app.post('/register', function(req, res) {
        console.log("firstName" + req.body);

        var firstName = req.body.firstName;
        var lastName = req.body.lastName;
        var email = req.body.email;
        var password = req.body.password;

        user.register(firstName, lastName, email, password, function(found) {
            console.log(found);
            res.json(found);
        });
    });


    app.get('/getAllUsers', function(req, res) {

        var email = req.body.email;
        var password = req.body.password;

        user.getall(function(found) {
            console.log(found);
            res.json(found);
        });
    });

    app.post('/refreshUser', function(req, res) {

        var userEmail= req.body.userEmail;
        user.refreshUser(userEmail,function(found) {
            console.log(found);
            res.json(found);
        });
    });
    
    app.post('/createGroup', function(req, res) {
        console.log("groupName" + req.body.groupMembersRequest);

        var groupName = req.body.groupName;
        var groupAdminEmail = req.body.groupAdminEmail;
        var groupMemberRequestEmail= req.body.groupMemberRequestEmail;

        group.create(groupName, groupMemberRequestEmail,groupAdminEmail,function(found) {
            console.log(found);
            res.json(found);
        });
    });

    app.post('/updateGroup', function(req, res) {
        console.log("groupName" + req.body.groupName);

        var groupName = req.body.groupName;
        var groupAdminEmail = req.body.groupAdminEmail;
        var userEmail= req.body.userEmail;
        var updateAction=req.body.updateAction;

        group.update(groupName, groupAdminEmail,userEmail,updateAction,function(found) {
            console.log(found);
            res.json(found);
        });
    });

     app.post('/getGroupDetails', function(req, res) {

        var groupToken= req.body.groupToken;
        group.getGroupDetails(groupToken,function(found) {
            console.log(found);
            res.json(found);
        });
    });


}