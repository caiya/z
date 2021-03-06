/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: 植成樑 <atzcl0310@gmail.com>  Blog：https://www.zcloop.com
+-----------------------------------------------------------------------------------------------------------------------
| 测试中间件
|
*/

import { Context } from 'egg';

module.exports = () => {
  return async (ctx: Context, next: () => Promise<any>) => {
    console.log('wechat 模块中间件', ctx);

    await next();
  };
};
