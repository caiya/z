"use strict";
/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: 植成樑 <atzcl0310@gmail.com>  Blog：https://www.zcloop.com
+-----------------------------------------------------------------------------------------------------------------------
| 处理上传业务
|
*/
Object.defineProperty(exports, "__esModule", { value: true });
const base_handler_1 = require("../base_class/base_handler");
class UploadHandler extends base_handler_1.default {
    async imageUpload() {
        console.log(this.ctx);
    }
}
exports.default = UploadHandler;
