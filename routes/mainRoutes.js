const express = require('express');
const main = require('../app/controllers/MainController');
router = express();

router.get('/',main.index);
router.get('/home',main.home);
router.get('/view/user',main.view_user);
module.exports = router;