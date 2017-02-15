'use strict'

import PointModel from '../models/points'

class PointsService {
    async findByOpenrecUserId(ctx, openrec_user_id) {
        const res = await PointModel.findByOpenrecUserId(ctx, openrec_user_id);
        return res;
    }
}
export default new PointsService();