'use strict'

/*
 url.params = ctx.params
 querystring = ctx.query
 header = ctx.request.header
 messageBody = ctx.request.body
 */

import { Constants } from '../utils/constants';
import BaseController from './base';
import ResponseUtil from '../utils/response';
import PointsService from '../services/points';
import PointsResponse from '../responses/points';

class PointsController extends BaseController {
    async getBalance(ctx, next) {
        // 初期化
        await super.authorize(ctx);
        let Response = await ResponseUtil.error({}, Constants.RESPONSE_CODE_0001);

        // validation等の処理

        // 本処理
        let point = await PointsService.findByOpenrecUserId(ctx, ctx.params.openrec_user_id);

        // レスポンス生成処理
        if (Object.keys(point).length > 0) {
            const pointResponse = await PointsResponse.getPoint(point[0]);
            Response = await ResponseUtil.success(pointResponse);
        }

        // レスポンス
        ctx.body = Response;
    }

    async getLogs(ctx, next)
    {
        console.log('getLogs.ctx.param ====>>>')
        console.log(ctx.request.body)
    }

    async getOffset(ctx, next)
    {
        console.log('getOffset.openrec_user_id ====>>>')
        console.log(ctx.params)
    }

    async earn(ctx, next)
    {
        console.log('earn ====>>>')
        console.log(ctx.request.body)
    }

    async use(ctx, next)
    {
        console.log('use ====>>>')
        console.log(ctx.request.body)
    }
}

export default new PointsController();
