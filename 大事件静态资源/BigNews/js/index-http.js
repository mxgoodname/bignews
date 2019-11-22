// 前后放“；”防止bug

/* 沙箱模式 */
; (function (w) {
    var baseURL = 'http://localhost:8080/api/v1'
    var BigNewIndex = {
        baseURL: baseURL,//基地址
        search: baseURL + '/index/search',//文章搜索
        category: baseURL + '/index/category',//文章类型
        hotpic: baseURL + '/index/hotpic',//热点图
        rank: baseURL + '/index/rank',//文章热门排行
        latest: baseURL + '/index/latest',//最新资讯
        latest_comment: baseURL + '/index/latest_comment',//最新评论
        attention: baseURL + '/index/attention',//焦点关注
        article: baseURL + '/index/article',//文章详细内容
        post_comment: baseURL + '/index/post_comment',//发表评论
        get_comment: baseURL + '/index/get_comment',//评论列表

    };

    //暴露接口
    w.BigNewIndex = BigNewIndex;
})(window);