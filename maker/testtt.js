var videodata = {
  "https://www.nnn.ed.nico/lessons/482527698": [
    1592785131257,
    "https://www.nnn.ed.nico/lessons/482527698",
    608,
    10,
    8,
    "【2018年度】数学IIB ベーシック 第20講 - N予備校",
  ],
  "https://www.nnn.ed.nico/lessons/482529125": [
    1592785131260,
    "https://www.nnn.ed.nico/lessons/482529125",
    610,
    10,
    10,
    "【2019年度】生物演習 第1講 - N予備校",
  ],
  "https://www.nnn.ed.nico/lessons/482530635": [
    1592785103411,
    "https://www.nnn.ed.nico/lessons/482530635",
    3036.914637,
    50,
    36.91463699999986,
    "プログラミング入門コースをはじめる方へ / プログラミングを体験してみよう - N予備校",
  ],
  "https://www.nnn.ed.nico/lessons/482527680": [
    1592785131935,
    "https://www.nnn.ed.nico/lessons/482527680",
    613.480649,
    10,
    13.480648999999971,
    "【2018年度】数学IIB ベーシック 第2講 - N予備校",
  ],
};

// var arr = videodata.reverse()
// console.log(arr);

var app = new Vue({
  el: "#vue-app",
  data: {
    message: "Hello Vue!",
    waaa: "わああああああああああい",
    videos: videodata,
  },
  computed: {
    // 配列の要素順番を逆順にする
    timesort: function () {},
  },
  filters: {
    rounded_down: function (val) {
      return Math.ceil(val);
    },
    Subtract_ten: function (value) {
      return value - 10;
    },
  },
});
// var vm = new vue({
//   el: "#vue-app",
//   data: {
//     waaa: "わああああああああああい",
//     videos: vid
//   }
// })
