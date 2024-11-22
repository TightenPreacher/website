export function getClientType() {
    let client = 'web'
    if (/(iphone|ipad|ipod|ios)/i.test(navigator.userAgent.toLowerCase())) { // 判断iPhone|iPad|iPod|iOS
      client = 'ios'
      const iostf = sessionStorage.getItem('iostf')
      if(iostf){
        client = iostf
      }
    } else if (/(android)/i.test(navigator.userAgent.toLowerCase())) { // 判断Android
      client = 'android'
    }
    return client
  }