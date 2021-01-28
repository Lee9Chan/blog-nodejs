const getList = (author, keyword) => {
  return [
    {
      id: 1,
      title: 'a',
      content: 'content',
      createTime: '1611804525713',
      author: 'zx'
    },
    {
      id: 2,
      title: 'a',
      content: 'content',
      createTime: '1611804525719',
      author: 'zx'
    }
  ]
}

const getDetail = (id) => {
  return {
    id: 1,
    title: 'a',
    content: 'content',
    createTime: '1611804525713',
    author: 'zx'
  }
}

module.exports = {
  getList,
  getDetail
}