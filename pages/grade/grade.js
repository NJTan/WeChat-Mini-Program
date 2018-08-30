//index.js
//获取应用实例
Page({
    'data': {
        'pickerHidden': true,
        'chosen': ''
    },
    'pickerConfirm': function (e) {
        this.setData({
            'pickerHidden': true
        });
        this.setData({
            'chosen': e.detail.value
        });
    },
    'pickerCancel': function () {
        this.setData({
            'pickerHidden': true
        });
    },
    'pickerShow': function () {
        this.setData({
            'pickerHidden': false
        });
    },
    'formSubmit': function (e) {
        var that = this;
        /*********************
wx.redirectTo({
  url:'create_photo'
})
**********************/

        wx.request({
            'url': 'https://csnoob.cn/api',
            'data':
        {
            'sid': e.detail.value.sid,
            'cid': e.detail.value.cid
        },

            'method': 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            'header': {
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            'success': function (res) {
                that.setData({
                    'name': '姓名：' + e.detail.value.name,
                    'sid': '学号：' + e.detail.value.sid,
                    'cid': '课程号：' + e.detail.value.cid,
                    'score': '成绩：' + res.data.data.score
                });
            },
            'fail': function () {
                // fail
            },
            'complete': function () {
                // complete
            }
        });
    },
    'formReset': function () {
        this.setData({
            'chosen': ''
        });
    }
});