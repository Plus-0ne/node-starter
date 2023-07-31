const dbpool = require(process.cwd() + '/config/CreateDBPool');

function getUsers(callback) {

    dbpool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            return;
        }

        const query = 'SELECT * FROM users';

        connection.query(query, (error, results) => {

            if (error) {
                
                return callback(error,null);
            } else {
                
                return callback(null,results);
            }
        });
    });

}

module.exports = {
    getUsers
};