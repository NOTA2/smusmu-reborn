console.log('APIs initialize');

var app = require('./scripts/config/express')();
var defaultObj = require('./scripts/config/defaultVariable');
require('./scripts/config/ip')(defaultObj);
require('date-utils');

//챗봇 응답용 라우터 연결
var kakao = require('./scripts/routes/kakao/kakao_index');
app.use('/kakao', kakao);

//서버를 계속 유지
app.listen(8080, function () {
  console.log('Connect 8080 port!!');
});