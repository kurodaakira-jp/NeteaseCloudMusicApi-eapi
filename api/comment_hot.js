// 更多热评

module.exports = (query, request) => {
  const data = {
    limit: query.limit,
    offset: query.offset
  }

  query.type = {
    0: 'R_SO_4_',   //  歌曲
    1: 'R_MV_5_',   //  MV
    2: 'A_PL_0_',   //  歌单
    3: 'R_AL_3_',   //  专辑
    4: 'A_DJ_1_',   //  电台
    5: 'R_VI_62_',  //  视频
    6: 'A_EV_2_'    //  动态
  }[query.type]

  // 请求
  return request(
    'POST', `http://interface3.music.163.com/eapi/v1/resource/hotcomments/${query.type + query.id}`, data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: `/api/v1/resource/hotcomments/${query.type + query.id}`
    }
  )
}