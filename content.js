(function () {
  "use strict";
  document
    .querySelector(
      "#root > div > div.sc-bdVaJa.kuInPi > div.sc-bdVaJa.sc-bwzfXH.gZVkGd > div > div.sc-bdVaJa.btuxgu"
    )
    .insertAdjacentHTML(
      "beforeEnd",
      `
    <div id="vue-app">
      <div>
        Hello {{ name }} from vue
      </div>
      <input type="text" v-model="name">
    </div>
    `
    );
  let vm = new Vue({
    el: "#vue-app",
    data: {
      name: "world",
    },
  });
})();
