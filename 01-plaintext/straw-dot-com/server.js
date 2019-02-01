const { users } = require('./database.js');

function login(username, password) {
  const user = users.find(user => user.name === username && user.password === password);
  return user ? `Now logged in as ${user.name}` : false;
}

exports.login = login;
