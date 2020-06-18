// https://www.nnn.ed.nico/lessons/* で動く

// https://www.nnn.ed.nico/lessons/482528777?videoplayed=1355 URLパラメータのテスト
(function () {
  "use strict";

  var video_url = location.href;
  var time_played_second = null;

  var url_streage = {
    /**
     * TODO テスト用後で消す
     */
    "https://www.nnn.ed.nico/lessons/482528777": [143123, "titele"],
  };

  // window.onload(() => {
  var arg = new Object();

  // 変数pairにURLの?の後ろを&で区切ったものを配列にして代入
  var pair = location.search.substring(1).split("&");
  // location.search.substring(1)は、URLから最初の1文字 (?記号) を除いた文字列を取得する
  // .split('&')は&で区切り配列に分割する

  // for文でrairがある限りループさせる
  for (var i = 0; pair[i]; i++) {
    // 変数kvにpairを=で区切り配列に分割する
    var kv = pair[i].split("="); // kvはkey-value // 最初に定義したオブジェクトargに連想配列として格納

    arg[kv[0]] = kv[1]; // kv[0]がkey,kv[1]がvalue
  }
  console.log(Number(arg.videoplayed));
  var saiseisurutoko = parseInt(arg.videoplayed);
  console.log(saiseisurutoko);

  window.onload = function () {
    document.querySelector(
      "#vjs_video_3_html5_api"
    ).currentTime = saiseisurutoko; //ページ読み込んで動画の再生を開始するところを指定するところ
  };
  // });

  setInterval(() => {
    time_played_second = document.querySelector("#vjs_video_3_html5_api")
      .currentTime; //再生時間を取得するところ
    url_streage[`${location.origin + location.pathname}`] = [
      time_played_second,
      document.title,
    ];
    // chrome.storage.local.set({ "noyobibi": url_streage }, function () {}); //Chromeストレージ
    // chrome.storage.local.get("noyobibi", function (value) {
    //   var value_data = value.key;
    //   console.log(value_data);
    // });
    // console.log(video_url + "  " + time_played_second);
    // console.log(location.origin + location.pathname);
    console.log(document.cookie);

    console.log(
      url_streage[`${location.origin + location.pathname}`].time_played_second
    );
  }, 1000);
  let vm = new Vue({
    el: "#vue-app",
    data: {
      name: "world",
    },
  });
})();
