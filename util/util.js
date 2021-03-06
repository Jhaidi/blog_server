
import crypto from 'crypto';
import config from '../config/config';
const jwt = require('jsonwebtoken');

module.exports = {
  md5: (pwd) => {
    let md5 = crypto.createHash('md5');
    return md5.update(pwd).digest('hex');
  },
  MD5_SUFFIXSTR: config.MD5_SUFFIXSTR,
  /**
   * response
   * @param {Object} res response
   * @param {Number} httpCode 400 500 200 http状态吗
   * @param {Number} code  -1:登陆超时 0:成功 1: 失败 2:验证失败  3:服务器错误
   */
  responseClient:function responseClient (res, httpCode = 500, code = 3, message = '服务端异常', data = {}) {
    let responseData = {};
    responseData.code = code;
    responseData.message = message;
    responseData.data = data;
    res.status(httpCode).json(responseData)
  },
  authIsVerified: function authIsVerified(token) {
    const decodedToken = jwt.verify(token, 'blog')
    if (decodedToken.exp > Math.floor(Date.now() /1000)) {
      return true
    } else {
      return false
    }
  }
};
