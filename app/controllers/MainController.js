const UsersModel = require(process.cwd() + '/app/models/UsersModel');

function index(req, res) {

    baseUrl = req.protocol + '://' + req.get('Host');

    res.render("pages/welcome", {

        title: 'Welcome to Node Starter',
        baseUrl: baseUrl
    });
}

function getUsers() {
    return new Promise((resolve, reject) => {
        UsersModel.getUsers((error, user) => {
            if (error) {
                reject(error); // Reject the Promise with the error
            } else {
                resolve(user); // Resolve the Promise with the user data
            }
        });
    });
}

function home(req, res) {
    
    baseUrl = req.protocol + '://' + req.get('Host');

    getUsers()
        .then(user => {
            res.render("pages/home", {
                title: 'Home | Node Starter',
                baseUrl: baseUrl,
                users : user
            });
        })
        .catch(error => {
            res.send('Error occurred:', error);
        });
    

}

function view_user(req, res) {
    console.log('HAHAHAHAH VIEW USER DAW!');
    return;
}

module.exports = {
    index, home, view_user
};