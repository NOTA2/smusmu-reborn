console.log('APIs initialize');
// import './styles/base.css';

var app = require('./scripts/config/express')();
var defaultObj = require('./scripts/config/defaultVariable');
require('./scripts/config/ip')(defaultObj);
require('date-utils');
var passport = require('./scripts/config/passport')(app);

//챗봇 응답용 라우터 연결
var kakao = require('./scripts/routes/kakao/kakao_index');
app.use('/kakao', kakao);

//커뮤니티 라우터 연결
var index = require('./scripts/routes/index');
var auth = require('./scripts/routes/auth/auth_index')(passport);

app.use('/', index);
app.use('/auth', auth);
app.use(function(req, res, next) {
  res.status(404).render('404');
});
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).render('500');
})

//서버를 계속 유지
app.listen(8080, function () {
  console.log('Connect 8080 port!!');
});