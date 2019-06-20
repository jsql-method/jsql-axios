/*
 * Copyright (c) 2017-2019 JSQL Sp. z.o.o. (Ltd, LLC) www.jsql.it
 * See LICENSE or https://jsql.it/public-packages-license
 */

"use strict";

import axios from 'axios';

export default function JsqlService(config) {

    /**
     * Overridie @request function
     * @param requestUrl
     * @param requestData
     * @param requestHeaders
     * @returns promise
     */

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

    this.__jsqlInstance = new window.JSQL(config);

    return this.__jsqlInstance;

}