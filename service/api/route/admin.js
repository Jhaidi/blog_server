import express from 'express';
import userControll from '../controller/user.controll';
import tagControll from '../controller/tags.controll';
import articleControll from '../controller/article.controll';
import uploadControll from '../controller/upload.controll';
import { responseClient } from '../util';


let adminRouter = express.Router({
  mergeParams: true
});
// adminRouter.use((req, res, next) => {
//   if (req.session.userInfo) {
//     next();
//   } else {
//     if (req.originalUrl.indexOf('login') > 0 || req.originalUrl.indexOf('register') > 0) {
//       next();
//     } else {
//       responseClient(res, 200, -1, '登陆超时，请重新登陆', req.session.userInfo);
//     }
//   }
// });
/**
 * 用户注册
 */
adminRouter.post('/register', userControll.Register);
/**
 * 用户登录
 */
adminRouter.post('/login', userControll.Login);
/**
 * 退出登陆
 */
adminRouter.post('/logout', userControll.Logout);
/**
 * 用户验证
 */
adminRouter.get('/userInfo', userControll.userInfo);
/**
 * 添加标签
 */
adminRouter.post('/addTag', tagControll.addTag);
/**
 * 查询标签列表
 */
adminRouter.get('/tagList', tagControll.tagList);
/**
 * 删除标签
 */
adminRouter.delete('/delTag', tagControll.delTag);
/**
 * 添加文章
 */
adminRouter.post('/addArticle', articleControll.addArticle);
/**
 * 获取文章列表
 */
adminRouter.get('/articleList', articleControll.articleList);
/**
 * 获取文章详情
 */
adminRouter.get('/article/:articleID', articleControll.getArticle);
/**
 * 点赞
 */
adminRouter.post('/article/likeArticle/:articleID', articleControll.likeArticle);

adminRouter.put('/article/:articleID', articleControll.updateArticle);
/**
 * 删除文章
 */
adminRouter.delete('/delArticle/:articleID', articleControll.delArticle);

// uploadControll.upload.single('file')
adminRouter.post('/uploadImg', uploadControll.upload.single('image'), uploadControll.uploadImg);
module.exports = adminRouter;




