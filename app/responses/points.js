'use strict'

class PointsResponse {
    async getPoint(obj) {
        return {
            pc_charge_point : obj.pc_charge_point,
            pc_free_point : obj.pc_free_point,
            android_charge_point : obj.android_charge_point,
            android_free_point : obj.android_free_point,
            ios_charge_point : obj.ios_charge_point,
            ios_free_point : obj.ios_free_point
        }
    }
}
export default new PointsResponse();