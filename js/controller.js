/**
 * Created by pmcc on 16/10/10.
 */


routeApp.controller('mainApp', function ($scope) {

    setTimeout(function () {
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: 2000,
            pagination: '.pagination',
            loop: true,
            grabCursor: true,
            paginationClickable: true
        })
    }, 1500)

});


//swiper
routeApp.controller('swiperCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/indexHotAndFocusList')
        .success(function (data) {
            $scope.dataList = data.slice(0, 15);
            $scope.ip = "http://210.76.0.33";
        })
});

routeApp.controller('swiperDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/indexHotAndFocusList')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data[num];
            $scope.url = "http://210.76.0.33" + data[num].url;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=' + $scope.info.categoryId)
                .success(function (data) {
                    $scope.relateList = data;

                })
        })
});

//相关视频 播放
function videoChange(e) {
    var url = "http://210.76.0.33" + $(e).attr("data-url");
    var title = $(e).attr("data-title");
    $("video").attr("src", url);
    $(".video-title p").text(title);
}


//importantNews
routeApp.controller('importantNewsCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=2')
        .success(function (data) {
            $scope.indexData = data.slice(-4);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
        })
});
//要闻首页直接播放
routeApp.controller('importantNewsDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=2')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data.slice(-4)[num];
            $scope.url = "http://210.76.0.33" + data.slice(-4)[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }

                $(".relate-video-wrapper").css("margin-top", videoHeigh);

            });

            $http.get(ip + '/api/mobile/vodList?catid=' + $scope.info.categoryId)
                .success(function (data) {
                    $scope.relateList = data;

                })
        })
});

//要闻列表转播放
routeApp.controller('importantListNewsDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=2')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data[num];
            $scope.url = "http://210.76.0.33" + data[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=2')
                .success(function (data) {
                    $scope.relateList = data;

                })
        })
});

//pmcc news
routeApp.controller('pmccNewsCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=1')
        .success(function (data) {
            $scope.indexData = data.reverse().slice(1, 5);
            $scope.firstData = data[0];
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
        })
});

//pmccnews首页直接播放
routeApp.controller('pmccNewsDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=1')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            data = data.reverse();
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data[num];
            $scope.url = "http://210.76.0.33" + data[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=1')
                .success(function (data) {
                    $scope.relateList = data.reverse();

                })
        })
});

//pmccnews列表转播放
routeApp.controller('pmccNewsListNewsDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=1')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data.reverse()[num];
            $scope.url = "http://210.76.0.33" + data.reverse()[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=1')
                .success(function (data) {
                    $scope.relateList = data.reverse();

                })
        })
});

//color life

routeApp.controller('colorLifeCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=32')
        .success(function (data) {
            data = data.reverse();
            $scope.indexData = data.slice(1, 5);
            $scope.firstData = data[0];
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
        })
});

//colorlife首页直接播放
routeApp.controller('colorLifeDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=32')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            data = data.reverse();
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data[num];
            $scope.url = "http://210.76.0.33" + data[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=32')
                .success(function (data) {
                    $scope.relateList = data.reverse();

                })
        })
});

//colorlife列表转播放
routeApp.controller('colorLifeListNewsDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=32')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data.reverse()[num];
            $scope.url = "http://210.76.0.33" + data.reverse()[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=32')
                .success(function (data) {
                    $scope.relateList = data.reverse();

                })
        })
});

//weather

routeApp.controller('weatherCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=36')
        .success(function (data) {
            data = data.reverse();
            $scope.indexData = data.slice(1, 5);
            $scope.firstData = data[0];
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
        })
});

//weather首页直接播放
routeApp.controller('weatherDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=36')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            data = data.reverse();
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data[num];
            $scope.url = "http://210.76.0.33" + data[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=36')
                .success(function (data) {
                    $scope.relateList = data.reverse();

                })
        })
});

//weather列表转播放
routeApp.controller('weatherListNewsDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=36')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data.reverse()[num];
            $scope.url = "http://210.76.0.33" + data.reverse()[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=36')
                .success(function (data) {
                    $scope.relateList = data.reverse();

                })
        })
});

//jtxw
routeApp.controller('jtxwCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=1')
        .success(function (data) {
            $scope.dataList = data.reverse();
            $scope.aUrl = "#/index/pmccnews/list/videoXsj:";
            $scope.ip = "http://210.76.0.33";
        })
});
//jtxw yw
routeApp.controller('jtxwYwCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=2')
        .success(function (data) {
            $scope.dataList = data;
            $scope.aUrl = "#/index/important/list/videoXsj:";
            $scope.ip = "http://210.76.0.33";
        })
});
//jtxw zjjc
routeApp.controller('jtxwZjjcCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=3')
        .success(function (data) {
            $scope.dataList = data.reverse();
            $scope.aUrl = "#/index/zjjc/list/videoXsj:";
            $scope.ip = "http://210.76.0.33";
        })
});
//zjjc播放
routeApp.controller('zjjcListDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=3')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data.reverse()[num];
            $scope.url = "http://210.76.0.33" + data.reverse()[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=3')
                .success(function (data) {
                    $scope.relateList = data.reverse();

                })
        })
});
//jtxw eccy
routeApp.controller('jtxwEccyCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=5')
        .success(function (data) {
            $scope.aUrl = "#/index/eccy/list/videoXsj:";
            $scope.dataList = data.reverse();
            $scope.ip = "http://210.76.0.33";
        })
});
//eccy播放
routeApp.controller('eccyListDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=5')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data.reverse()[num];
            $scope.url = "http://210.76.0.33" + data.reverse()[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=5')
                .success(function (data) {
                    $scope.relateList = data.reverse();

                })
        })
});
//jtxw zjc
routeApp.controller('jtxwZjcCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=6')
        .success(function (data) {
            $scope.aUrl = "#/index/zjc/list/videoXsj:";
            $scope.dataList = data.reverse();
            $scope.ip = "http://210.76.0.33";
        })
});
//zjc播放
routeApp.controller('zjcListDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=6')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data.reverse()[num];
            $scope.url = "http://210.76.0.33" + data.reverse()[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=6')
                .success(function (data) {
                    $scope.relateList = data.reverse();

                })
        })
});
//jtxw aqr
routeApp.controller('jtxwAqrCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=31')
        .success(function (data) {
            $scope.aUrl = "#/index/aqr/list/videoXsj:";
            $scope.dataList = data.reverse();
            $scope.ip = "http://210.76.0.33";
        })
});
//aqr播放
routeApp.controller('aqrListDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=31')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data.reverse()[num];
            $scope.url = "http://210.76.0.33" + data.reverse()[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=31')
                .success(function (data) {
                    $scope.relateList = data.reverse();

                })
        })
});

//安全天地
//aqtd aqbb
routeApp.controller('aqtdAqbbCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=9')
        .success(function (data) {
            $scope.aUrl = "#/index/aqbb/list/videoXsj:";
            $scope.dataList = data.reverse();
            $scope.ip = "http://210.76.0.33";
        })
});
//aqbb播放
routeApp.controller('aqbbListDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=9')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data.reverse()[num];
            $scope.url = "http://210.76.0.33" + data.reverse()[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=9')
                .success(function (data) {
                    $scope.relateList = data.reverse();

                })
        })
});
//aqtd aksh
routeApp.controller('aqtdAkshCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=11')
        .success(function (data) {
            $scope.aUrl = "#/index/aksh/list/videoXsj:";
            $scope.dataList = data.reverse();
            $scope.ip = "http://210.76.0.33";
        })
});
//aksh播放
routeApp.controller('akshListDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=11')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data.reverse()[num];
            $scope.url = "http://210.76.0.33" + data.reverse()[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=11')
                .success(function (data) {
                    $scope.relateList = data.reverse();

                })
        })
});
//aqtd jsjy
routeApp.controller('aqtdJsjyCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=12')
        .success(function (data) {
            $scope.aUrl = "#/index/jsjy/list/videoXsj:";
            $scope.dataList = data.reverse();
            $scope.ip = "http://210.76.0.33";
        })
});
//jsjy播放
routeApp.controller('jsjyListDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=12')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data.reverse()[num];
            $scope.url = "http://210.76.0.33" + data.reverse()[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=12')
                .success(function (data) {
                    $scope.relateList = data.reverse();

                })
        })
});
//aqtd aqft
routeApp.controller('aqtdAqftCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=15')
        .success(function (data) {
            $scope.aUrl = "#/index/aqft/list/videoXsj:";
            $scope.dataList = data.reverse();
            $scope.ip = "http://210.76.0.33";
        })
});
//aqft播放
routeApp.controller('aqftListDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=15')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data.reverse()[num];
            $scope.url = "http://210.76.0.33" + data.reverse()[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=15')
                .success(function (data) {
                    $scope.relateList = data.reverse();

                })
        })
});
//dcrs
routeApp.controller('dcrsCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=32')
        .success(function (data) {
            $scope.aUrl = "#/index/dcrs/list/videoXsj:";
            $scope.dataList = data.reverse();
            $scope.ip = "http://210.76.0.33";
        })
});
//dcrs播放
routeApp.controller('dcrsListDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=32')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data.reverse()[num];
            $scope.url = "http://210.76.0.33" + data.reverse()[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=32')
                .success(function (data) {
                    $scope.relateList = data.reverse();

                })
        })
});

//ztbd xlzb
routeApp.controller('ztbdXlzbCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=26')
        .success(function (data) {
            $scope.aUrl = "#/index/xlzb/list/videoXsj:";
            $scope.dataList = data.reverse();
            $scope.ip = "http://210.76.0.33";
        })
});
//xlzb播放
routeApp.controller('xlzbListDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=26')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data.reverse()[num];
            $scope.url = "http://210.76.0.33" + data.reverse()[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=26')
                .success(function (data) {
                    $scope.relateList = data.reverse();

                })
        })
});
//ztbd djt
routeApp.controller('ztbdDjtCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=27')
        .success(function (data) {
            $scope.aUrl = "#/index/djt/list/videoXsj:";
            $scope.dataList = data.reverse();
            $scope.ip = "http://210.76.0.33";
        })
});
//djt播放
routeApp.controller('djtListDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=27')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data.reverse()[num];
            $scope.url = "http://210.76.0.33" + data.reverse()[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=27')
                .success(function (data) {
                    $scope.relateList = data.reverse();

                })
        })
});
//ztbd dqpp
routeApp.controller('ztbdDqppCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=29')
        .success(function (data) {
            $scope.aUrl = "#/index/dqpp/list/videoXsj:";
            $scope.dataList = data.reverse();
            $scope.ip = "http://210.76.0.33";
        })
});
//dqpp播放
routeApp.controller('dqppListDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=29')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data.reverse()[num];
            $scope.url = "http://210.76.0.33" + data.reverse()[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=29')
                .success(function (data) {
                    $scope.relateList = data.reverse();

                })
        })
});

//jczb
routeApp.controller('jczbCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=34')
        .success(function (data) {
            $scope.aUrl = "#/index/jczb/list/videoXsj:";
            $scope.dataList = data.reverse();
            $scope.ip = "http://210.76.0.33";
        })
});
//jczb播放
routeApp.controller('jczbListDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=34')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data.reverse()[num];
            $scope.url = "http://210.76.0.33" + data.reverse()[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=34')
                .success(function (data) {
                    $scope.relateList = data.reverse();

                })
        })
});

//wytd jchg
routeApp.controller('wytdJchgCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=20')
        .success(function (data) {
            $scope.aUrl = "#/index/jchg/list/videoXsj:";
            $scope.dataList = data.reverse();
            $scope.ip = "http://210.76.0.33";
            if (data.length == 0) {
                $scope.dataLength = true;
            } else {
                $scope.dataLength = false;
            }
        })
});
//jchg播放
routeApp.controller('jchgListDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=20')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data.reverse()[num];
            $scope.url = "http://210.76.0.33" + data.reverse()[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=20')
                .success(function (data) {
                    $scope.relateList = data.reverse();

                })
        })
});

//wytd jdsk
routeApp.controller('wytdJdskCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=21')
        .success(function (data) {
            $scope.aUrl = "#/index/jdsk/list/videoXsj:";
            $scope.dataList = data.reverse();
            $scope.ip = "http://210.76.0.33";
            if (data.length == 0) {
                $scope.dataLength = true;
            } else {
                $scope.dataLength = false;
            }
        })
});
//jdsk播放
routeApp.controller('jdskListDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=21')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data.reverse()[num];
            $scope.url = "http://210.76.0.33" + data.reverse()[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=21')
                .success(function (data) {
                    $scope.relateList = data.reverse();

                })
        })
});
//wytd yckj
routeApp.controller('wytdYckjCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=22')
        .success(function (data) {
            $scope.aUrl = "#/index/yckj/list/videoXsj:";
            $scope.dataList = data.reverse();
            $scope.ip = "http://210.76.0.33";
            if (data.length == 0) {
                $scope.dataLength = true;
            } else {
                $scope.dataLength = false;
            }
        })
});
//yckj播放
routeApp.controller('yckjListDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=22')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data.reverse()[num];
            $scope.url = "http://210.76.0.33" + data.reverse()[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=22')
                .success(function (data) {
                    $scope.relateList = data.reverse();

                })
        })
});

//xxzs qyfc
routeApp.controller('xxzsQyfcCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=7')
        .success(function (data) {
            $scope.aUrl = "#/index/qyfc/list/videoXsj:";
            $scope.dataList = data.reverse();
            $scope.ip = "http://210.76.0.33";
            if (data.length == 0) {
                $scope.dataLength = true;
            } else {
                $scope.dataLength = false;
            }
        })
});
//qyfc播放
routeApp.controller('qyfcListDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=7')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data.reverse()[num];
            $scope.url = "http://210.76.0.33" + data.reverse()[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=7')
                .success(function (data) {
                    $scope.relateList = data.reverse();

                })
        })
});

//more pk
routeApp.controller('pkCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=33')
        .success(function (data) {
            $scope.aUrl = "#/index/pk/list/videoXsj:";
            $scope.dataList = data.reverse();
            $scope.ip = "http://210.76.0.33";
            if (data.length == 0) {
                $scope.dataLength = true;
            } else {
                $scope.dataLength = false;
            }
        })
});
//pk播放
routeApp.controller('pkListDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=33')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data.reverse()[num];
            $scope.url = "http://210.76.0.33" + data.reverse()[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=33')
                .success(function (data) {
                    $scope.relateList = data.reverse();

                })
        })
});

//more lsly
routeApp.controller('lslyCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=37')
        .success(function (data) {
            $scope.aUrl = "#/index/lsly/list/videoXsj:";
            $scope.dataList = data.reverse();
            $scope.ip = "http://210.76.0.33";
            if (data.length == 0) {
                $scope.dataLength = true;
            } else {
                $scope.dataLength = false;
            }
        })
});
//lsly播放
routeApp.controller('lslyListDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=37')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data.reverse()[num];
            $scope.url = "http://210.76.0.33" + data.reverse()[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=37')
                .success(function (data) {
                    $scope.relateList = data.reverse();

                })
        })
});