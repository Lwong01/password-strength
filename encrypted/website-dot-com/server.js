const { users } = require('./three-letters-plaintext-lowercase.js');

function login(username, password) {
  user = users.find(user => user.name === username && user.password === password);
  return user ? `Now logged in as ${user.name}` : false;
}

exports.login = login;
