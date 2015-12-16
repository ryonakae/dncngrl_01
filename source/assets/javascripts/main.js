'use strict';

(function(){

// require npm package
window.jQuery = window.$ = require('jquery');
var velocity = require('velocity-animate');
var imagesLoaded = require('imagesloaded');
imagesLoaded.makeJQueryPlugin($);
var isMobile = require('./modules/isMobile.js');


// ページ読み込み後の処理
$(function(){
  init();
});


// 初期化関数
function init(){
  // PCだけパララックス有効
  if(!isMobile) require('./modules/parallax.js');

  // 画像取得
  require('./modules/getImages.js')();

  // アイキャッチのmodel画像のロードと回転有効化
  $('.eyecatch__model').imagesLoaded(function(){
    $('.eyecatch__model').velocity({
      opacity: 1,
      top: 0
    }, {
      duration: 500,
      delay: 500,
      easing: 'ease',
      complete: function(){
        // PCだけ回転&浮遊有効化
        if(!isMobile){
          require('./modules/rotateModel.js')();
          setTimeout(function(){
            $('.eyecatch__model').addClass('is-animation');
          }, 1000);
        }
      }
    });
  });
};


})();