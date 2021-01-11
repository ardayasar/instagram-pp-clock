const Instagram = require('instagram-web-api');
const { username, password } = process.env;
var path = require('path');
 
const client = new Instagram({ username: 'username', password: 'password' });
 
(async () => {
  await client.login();

  setInterval(function() {
    
      let date_ob = new Date();
      let H = date_ob.getHours();
      let M = date_ob.getMinutes();
      let S = date_ob.getSeconds();
      const photo = __dirname + '/times/' + H + '-' + M + '-' + S + '.jpg';
      client.changeProfilePhoto({ photo });
      console.log('ok --> '+ H +':'+ M +':'+ S);
  }, 20000);

})()

process.on('SIGINT', function() {
  client.logout();
  console.log('Çıkış Yapıldı');
  process.exit();
});