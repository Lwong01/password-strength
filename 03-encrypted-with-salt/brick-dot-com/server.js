const md5 = require('md5');
const { users } = require('./database.js');

function login(username, password) {
  const user = users.find(user => user.name === username && user.password === md5(user.salt + password));
  return user ? `Now logged in as ${user.name}` : false;
}

exports.login = login;
