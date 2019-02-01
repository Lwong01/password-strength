const md5 = require('md5');

exports.users = [
  { name: 'saltybob', password: md5('CorrectHorseBatteryStaple') },
  { name: 'an_actual_robot', password: md5('TheBestDog') },
  { name: 'AzureDiamond', password: md5('hunter2') },
  { name: 'dvorak', password: md5('NaNaNaNaNaNaNaNaBatman') },
  { name: 'fallguy76', password: md5('RodStewartBestStewart') },
  { name: 'rzscaz', password: md5('TexasTexasTexasTexas') },
  { name: 'donthackme', password: md5('AbCdEfGhIjKlMnOpQrStUvWxYz') },
  { name: 'unh4ckable', password: md5('ThreeLittlePigs') },
  { name: 'fallguy76-alt', password: md5('zzzzzzzzzzzzzzzzzzzzzzzz') },
  { name: '🐢🐢🐢🐢🐢🐢🐢', password: md5('🐢🐢🐢🐢🐢🐢🐢') },
];
