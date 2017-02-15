'use strict'

import { Constants } from '../utils/constants';

class ResponseUtil {
    async success(response) {
        const baseResponse = {status: Constants.RESPONSE_STATUS_OK, message: Constants.RESPONSE_MESSAGE_OK};
        const fixResponse = Object.assign(baseResponse, response);
        return fixResponse;
    }

    async error(response, code) {
        const baseResponse = {status: Constants.RESPONSE_STATUS_NG, message: Constants.RESPONSE_MESSAGE_NG, code: code};
        const fixResponse = Object.assign(baseResponse, response);
        return fixResponse;
    }
}
export default new ResponseUtil();
