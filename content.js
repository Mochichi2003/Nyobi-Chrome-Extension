(function () {
  "use strict";
  document
    .querySelector(
      "#root > div > div.sc-bdVaJa.kuInPi > div.sc-bdVaJa.sc-bwzfXH.gZVkGd > div > div.sc-bdVaJa.btuxgu"
    )
    .insertAdjacentHTML(
      "beforeEnd",
      `
      <style>
      #nyobi-extensin-app {
        width: 384px;
        height: 518px;
        line-height: 1.15;
        color: #222;
        font-family: Avenir, Open Sans, -apple-system, BlinkMacSystemFont, ZaneYuGothicM, Meiryo, sans-serif;
        font-size: 1.4rem;
        box-sizing: border-box;
        min-width: 0px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 1px;
        background-color: rgb(255, 255, 255);
        /* display: flex; */
        margin: 0px 0px 16px;
        border-style: solid;
        border-width: 1px 0px 0px;
        border-color: rgb(246, 246, 246);
        padding: 0px;
        overflow: scroll;
        margin-top: 16px;
      }
  
      a {
        text-decoration: blink;
  
      }
  
      #nyobi-extensin-app .main a p {
        overflow-wrap: break-all;
      }
  
      .sc-1otp79h-0 {
        line-height: 1.15;
        font-family: Avenir, Open Sans, -apple-system, BlinkMacSystemFont, ZaneYuGothicM, Meiryo, sans-serif;
        font-size: 1.4rem;
        color: #1b1b1b;
        cursor: pointer;
        box-sizing: border-box;
        min-width: 0px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 1px;
        background-color: rgb(255, 255, 255);
        display: flex;
        margin: 0px;
        border-style: solid;
        border-width: 1px 0px 0px;
        border-color: rgb(246, 246, 246);
        padding: 24px;
        position: relative;
        transition: background-color 0.2s linear 0s;
  
  
      }
  
      .sc-1otp79h-0:hover {
        line-height: 1.15;
        font-family: Avenir, Open Sans, -apple-system, BlinkMacSystemFont, ZaneYuGothicM, Meiryo, sans-serif;
        font-size: 1.4rem;
        color: #1b1b1b;
        box-sizing: border-box;
        min-width: 0px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 1px;
        display: flex;
        margin: 0px;
        border-style: solid;
        border-width: 1px 0px 0px;
        border-color: rgb(246, 246, 246);
        padding: 24px;
        position: relative;
        transition: background-color 0.2s linear 0s;
        background-color: rgb(226, 238, 255);
        cursor: pointer;
      }
  
      .video-histry {
        line-height: 1.15;
        color: #222;
        font-family: Avenir, Open Sans, -apple-system, BlinkMacSystemFont, ZaneYuGothicM, Meiryo, sans-serif;
        font-size: 1.4rem;
        box-sizing: border-box;
        min-width: 0px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 1px;
        background-color: rgb(255, 255, 255);
        flex-direction: row;
        -webkit-box-pack: justify;
        justify-content: space-between;
        width: 100%;
        display: flex;
        margin: 0px;
        border-style: solid;
        border-width: 1px 0px 0px;
        border-color: rgb(246, 246, 246);
        padding: 24px 14px;
      }
    </style>
    <div id="nyobi-extensin-app">
      <div class="video-histry">
        <h3>動画の再生履歴</h3>
      </div>
      <div class="main">
        <div>
  
          <!-- ここから履歴 -->
          <a href="">
            <p class="sc-1otp79h-0">動画の名前ええええええええええええええええええええええええええええ<span>13:20</span></p>
          </a>
        </div>
        <div>
          <a href="">
            <p class="sc-1otp79h-0">動画の名前ええええええええええええええええええええええええええええ<span>13:20</span></p>
          </a>
        </div>
        <div>
          <a href="">
            <p class="sc-1otp79h-0">動画の名前ええええええええええええええええええええええええええええ<span>13:20</span></p>
          </a>
        </div>
        <div>
          <a href="">
            <p class="sc-1otp79h-0">asdffff fffffffffffffffffffffffffffffffffffffffffffff fffffffffffffff<span
                class="video-was-played">13:20</span>
            </p>
          </a>
        </div>
        <div>
          <a href="">
            <p class="sc-1otp79h-0">asdfja;lsdkfjlaksjdflkja<span>13:20</span></p>
          </a>
        </div>
        <div>
          <a href="">
            <p class="sc-1otp79h-0">asdfja;lsdkfjlaksjdflkja<span>13:20</span></p>
          </a>
        </div>
        <div>
          <a href="">
            <p class="sc-1otp79h-0">asdfja;lsdkfjlaksjdflkja<span>13:20</span></p>
          </a>
        </div>
  
  
      </div>
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
