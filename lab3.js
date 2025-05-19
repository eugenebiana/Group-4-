const mysql = require('mysql2');
const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'admin123',
database: 'loandb',
port: 3307
});

connection.connect((err) => {
if (err) {
console.error('Error connecting to the database: ', err.stack);
return;
}
console.log('Connected to database as id ' + connection.threadId);
});

const insertUser = (username, password) => {
const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
connection.query(query, [username, password], (err, results) => {
if (err) {
console.error('Error inserting user:', err);
return;
}
console.log('User inserted with id: ', results.insertId);
});
};

const getUsers = () => {
const query = 'SELECT * FROM users';
connection.query(query, (err, results) => {
if (err) {
console.error('Error fetching users:', err);
return;
}
console.log('Users:', results);
});
};

insertUser ("Name", 'cafafa@ex.com');
getUsers();

setTimeout(() => {
connection.end((err) => {
if (err) {
console.error('Error ending the connection:', err);
return;
}
console.log('Connection Closed');
});
}, 1000);
