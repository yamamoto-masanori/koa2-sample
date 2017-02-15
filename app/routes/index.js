'use strict'

var config = require('config');
import Router from 'koa-router';
import Points from '../controllers/points';

const router = new Router();

router.prefix(`/${config.baseApi}`);
router.get('/points/:openrec_user_id/balance', Points.getBalance);
router.get('/points/:openrec_user_id/logs', Points.getLogs);
router.get('/points/:openrec_user_id/offset', Points.getOffset);
router.post('/points/:openrec_user_id', Points.earn);
router.put('/points/:openrec_user_id', Points.use);

export default router;