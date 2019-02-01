const md5 = require('md5');

const users = [
  { name: 'saltybob', password: 'CorrectHorseBatteryStaple', salt: ('' + Math.random()).slice(2,8) },
  { name: 'an_actual_robot', password: 'TheBestDog', salt: ('' + Math.random()).slice(2,8) },
  { name: 'AzureDiamond', password: 'hunter2', salt: ('' + Math.random()).slice(2,8) },
  { name: 'dvorak', password: 'NaNaNaNaNaNaNaNaBatman', salt: ('' + Math.random()).slice(2,8) },
  { name: 'fallguy76', password: 'RodStewartBestStewart', salt: ('' + Math.random()).slice(2,8) },
  { name: 'rzscaz', password: 'TexasTexasTexasTexas', salt: ('' + Math.random()).slice(2,8) },
  { name: 'donthackme', password: 'AbCdEfGhIjKlMnOpQrStUvWxYz', salt: ('' + Math.random()).slice(2,8) },
  { name: 'unh4ckable', password: 'ThreeLittlePigs', salt: ('' + Math.random()).slice(2,8) },
  { name: 'fallguy76-alt', password: 'zzzzzzzzzzzzzzzzzzzzzzzz', salt: ('' + Math.random()).slice(2,8) },
  { name: '🐢🐢🐢🐢🐢🐢🐢', password: '🐢🐢🐢🐢🐢🐢🐢', salt: ('' + Math.random()).slice(2,8) },
];

exports.users = users.map(user => ({
  name: user.name,
  salt: user.salt,
  password: md5(user.salt + user.password),
}));
