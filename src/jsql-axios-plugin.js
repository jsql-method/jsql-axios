import axios from 'axios';

export default class JsqlService {
    constructor(config) {
        window.JSQL.prototype.request = function (requestUrl, requestData, requestHeaders) {
            return axios({
                url: requestUrl,
                method: 'POST',
                dataType: 'json',
                headers: requestHeaders,
                data: requestData
            });
        };
        /**
         * Overridie @wrap function
         * @param token
         * @param queryType
         * @returns promise
         */
        window.JSQL.prototype.wrap = function (token, queryType) {
            return this.construct(token, queryType, {
                successName: 'then',
                errorName: 'catch',
                alwaysName: 'finally'
            });
        };
        this.jsql = new window.JSQL(config);
    }
}
