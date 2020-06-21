var videodata = {
  "https://www.nnn.ed.nico/lessons/4825287てすと7": [143123, "titele"],
  "https://www.nnn.ed.nico/lessons/482528777": [610, "英作文 第1講 - N予備校"],
  "https://www.nnn.ed.nico/lessons/482529131": [
    "https://www.nnn.ed.nico/lessons/482529131",
    610,
    "【2019年度】生物演習 第7講 - N予備校",
  ],
  "https://www.nnn.ed.nico/lessons/482527679": [
    "https://www.nnn.ed.nico/lessons/482527679",
    605,
    "【2018年度】数学IIB ベーシック 第1講 - N予備校",
  ],
  "https://www.nnn.ed.nico/lessons/482527398": [
    "https://www.nnn.ed.nico/lessons/482527398",
    609.825475,
    "【2018年度】英文読解 ベーシック 第3講 - N予備校",
  ],
};
var app = new Vue({
  el: "#vue-app",
  data: {
    message: "Hello Vue!",
    waaa: "わああああああああああい",
    videos: videodata,
  },
  computed: {
    // 配列の要素順番を逆順にする
    reverseItems() {
      return this.videos.slice().reverse();
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
