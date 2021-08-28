const router = require('express').Router();

const mainmenu = require('./main/mainmenu')
const auth = require('./main/auth')

const eat = require('./eat/schoolEat');
const foodMenu = require('./eat/foodMenu');

const notice = require('./schoolInfo/notice');
const calendar = require('./schoolInfo/calendar');
const schoolInfo = require('./schoolInfo/schoolInfo');
const professor = require('./schoolInfo/professor');
const faq = require('./schoolInfo/faq')

const seoulAssembly = require('./gotowork/seoulAssembly');

const job = require('./regi/job')

router.use('/mainmenu', mainmenu);
router.use('/auth', auth);

router.use('/eat', eat);
router.use('/foodMenu', foodMenu);

router.use('/notice', notice);
router.use('/calendar', calendar);
router.use('/schoolInfo', schoolInfo);
router.use('/professor', professor);
router.use('/faq', faq);

router.use('/seoulAssembly', seoulAssembly);

router.use('/job', job);

const quiz = require('./event/quiz');
const festival = require('./event/festival')
const circles = require('./event/circles')

router.use('/quiz', quiz);
router.use('/festival', festival);
router.use('/circles', circles);


module.exports = router;