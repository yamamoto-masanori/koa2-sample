'use strict'

import crypto from 'crypto';
import { Constants } from '../utils/constants';
import ResponseUtil from '../utils/response';
import RecxuserService from '../services/recxuser';

class BaseController {
    async authorize(ctx) {
        const uuid = ctx.request.header.uuid;
        const random = ctx.request.header.random;
        const token = ctx.request.header.token;
        const recxuser = await RecxuserService.findByUuid(ctx, uuid);
        const shasum = crypto.createHash('sha1');
        shasum.update(random + recxuser[0].user_token)
        const hash = shasum.digest('hex');
        if (token != hash) {
            ctx.status = 401;
            ctx.body = await ResponseUtil.error({}, Constants.RESPONSE_CODE_0001);
        }
    }
}
export default BaseController;