// 登录接口
export function login () {
    return {
      // isOpen: false,
      url: 'http://localhost:8080/login',
      type: 'post',
      data: {
        'msg': 'success',
        'code': 0,
        'data': {
          'token': '111111111111'
          // 其他数据
        }
      }
    }
  }