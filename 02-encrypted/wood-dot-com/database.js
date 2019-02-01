const md5 = require('md5');

exports.users = [
  { name: 'saltybob', password: md5('cat') },
  { name: 'an_actual_robot', password: md5('dog') },
  { name: 'AzureDiamond', password: md5('pip') },
  { name: 'dvorak', password: md5('bat') },
  { name: 'fallguy76', password: md5('rod') },
  { name: 'rzscaz', password: md5('tex') },
  { name: 'donthackme', password: md5('xyz') },
  { name: 'unh4ckable', password: md5('pig') },
  { name: 'fallguy76-alt', password: md5('cow') },
  { name: '🐢🐢🐢🐢🐢🐢🐢', password: md5('cod') },
];
