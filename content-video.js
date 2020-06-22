// https://www.nnn.ed.nico/lessons/* で動く
/**
 * TODO スペースで再生停止ができるようにする
 */
// https://www.nnn.ed.nico/lessons/482528777?videoplayed=1355 URLパラメータのテスト
(function () {
  "use strict";

  var video_url = location.href;
  var time_played_second = null;

  var url_streage = {
    /**
     * TODO テスト用後で消す
     */
    // "https://www.nnn.ed.nico/lessons/4825287てすと7": [143123, "titele"],
  };

  try {
    url_streage = JSON.parse(
      document.cookie.replace(
        /(?:(?:^|.*;\s*)video_urls\s*\=\s*([^;]*).*$)|^.*$/,
        "$1"
      )
    ); //Cookieに入れてた最生履歴を戻す
  } catch {
    url_streage = {};
  }

  console.log(url_streage);

  console.log(url_streage);

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
    try {
      url_streage = JSON.parse(
        document.cookie.replace(
          /(?:(?:^|.*;\s*)video_urls\s*\=\s*([^;]*).*$)|^.*$/,
          "$1"
        )
      ); //Cookieに入れてた最生履歴を戻す
    } catch {
      url_streage = {};
    }

    time_played_second = document.querySelector("#vjs_video_3_html5_api")
      .currentTime; //再生時間を取得するところ

    url_streage[`${location.origin + location.pathname}`] = [
      new Date().getTime(), //再生してるときの時間順番のソートにつかう
      location.origin + location.pathname, //動画のURL
      time_played_second, //動画の再生した時間
      Math.floor(time_played_second / 60), //動画を再生した時間 〇〇分
      time_played_second % 60, //動画を再生した時間 〇〇秒
      document.title, //動画のタイトル
    ];
    // chrome.storage.local.set({ "noyobibi": url_streage }, function () {}); //Chromeストレージ
    // chrome.storage.local.get("noyobibi", function (value) {
    //   var value_data = value.key;
    //   console.log(value_data);
    // });
    // console.log(url_streage);
    document.cookie = `video_urls=${JSON.stringify(url_streage)};path=/`;

    // console.log(video_url + "  " + time_played_second);
    // console.log(location.origin + location.pathname);
    // console.log(document.cookie);
    var cookieValue = document.cookie.replace(
      /(?:(?:^|.*;\s*)video_urls\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    console.log(JSON.parse(cookieValue));
    console.log(cookieValue);

    // console.log(
    //   url_streage[`${location.origin + location.pathname}`].time_played_second
    // );
  }, 1000);

  let vm = new Vue({
    el: "#vue-app",
    data: {
      name: "world",
    },
  });
})();
//"https://www.nnn.ed.nico/lessons/482527633"
//#vjs_video_3_html5_apiビデオのセレクター