'use strict'

import RecxuserModel from '../models/recxuser'

class RecxuserService {
    async findByUuid(ctx, uuid) {
        const res = await RecxuserModel.findByUuid(ctx, uuid);
        return res;
    }
}
export default new RecxuserService();