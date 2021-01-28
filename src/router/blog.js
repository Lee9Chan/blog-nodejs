const { getList, getDetail } = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel');

const handleBlogRouter = (req, res) => {
  const method = req.method;

  //获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || '';
    const keyword = req.query.keyword || '';
    const listData = getList(author, keyword);
    return new SuccessModel(listData);
  }
  //获取博客内容
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const id = req.query.id || '';
    const detailData = getDetail(id);
    return new SuccessModel(detailData);
  }
  //新增博客
  if (method === 'POST' && req.path === '/api/blog/new') {
    return {
      msg: '这是新增接口'
    }
  }
  //更新博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    return {
      msg: '这是更新接口'
    }
  }
  //删除博客
  if (method === 'POST' && req.path === '/api/blog/del') {
    return {
      msg: '这是删除接口'
    }
  }
}

module.exports = handleBlogRouter;