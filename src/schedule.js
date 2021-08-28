var CronJob = require('cron').CronJob;

var defaultObj = require('./scripts/config/defaultVariable');
require('./scripts/config/ip')(defaultObj);

var cEat = require('./scripts/crawling/crawling_Eat');
var chEat = require('./scripts/crawling/crawling_Eat_happy');
var seoulAssembly = require('./scripts/crawling/seoulAssembly');
var calendar = require('./scripts/crawling/calendar');

(function () {
  new CronJob({
    cronTime: "00 10 9-11 * * 0-2",
    onTick: function () {
      cEat.search();
      chEat.search();
    },
    start: true,
    timeZone: 'Asia/Seoul',
    runOnInit: true
  });

  //학사일정정보 업데이트
  new CronJob({
    cronTime: "00 00 12 * * *",
    onTick: calendar.crawling,
    start: true,
    timeZone: 'Asia/Seoul',
    runOnInit: true
  });

  //집회정보 업데이트
  new CronJob({
    cronTime: "00 */5 0,6-8 * * *",
    onTick: seoulAssembly.search,
    start: true,
    timeZone: 'Asia/Seoul',
    runOnInit: true
  });
})();