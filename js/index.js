
// =====================================
// Swiper
// =========================================
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 40,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
// ===============================================
// to-top
// ===============================================
jQuery(window).on('scroll', function(){

  // console.log(jQuery(this).scrollTop());
  // ↑で上から何pxスクロールしたか取得できる

  // ↓スクロールに応じて表示するコーディング例
  if(100 < jQuery(this).scrollTop()) {
    jQuery('.to-top').addClass('is-show');

  } else{
    jQuery('.to-top').removeClass('is-show');

    // .to-top{
    //   opacity:0;
    //   visibility:hidden;
    // transition: all 0.3s ease 0s; 
    // &.is-show {
    //   opacity:1;
    //   visibility:visible;
    // }
    // }
    // をSCSSに記載
  }
})
// ===============================================
// ページ内スクロール
// ===============================================

jQuery('a[href^="#"]').on('click', function(){
  // alert('click!!'); を書いて機能しているか確認

  var header = jQuery('.header').innerHeight();
  var id = jQuery(this).attr('href');

  var position = 0;
  if( id != '#'){
position = jQuery(id).offset().top - header;
  }

  console.log(id);
  console.log(position);

   jQuery('html,body').animate({
     scrollTop: position
   },
   300);
});

// ============================================
// アコーディオンメニュー
// ============================================
  jQuery('.qa-box__q').on('click', function(){
    // alert('click!!');で確認
    jQuery(this).next().slideToggle();
    jQuery(this).children('.qa-box__icon').toggleClass('is-open');
  })
// ================================================
// drawer
// ================================================
$(document).ready(function() {
  $('.drawer').drawer();
});


// ==================================================
// contact form 
// ==================================================
//formの入力確認
let $submit = $('#js-submit')
$('#js-form input, #js-form textarea').on('change', function(){
  if(
    $( '#js-form input[type="text"]').val() !=="" &&
    $( '#js-form input[type="email"]').val() !=="" &&
    $( '#js-form input[type="checkbox"]').prop( 'checked' ) === true
  ) {
    //全て入力された時
    $submit.prop( 'disabled' , false )
    $submit.addClass( '-active' )
  } else {
    //入力されていない時
    $submit.prop( 'disabled' , true )
    $submit.removeClass( '-active' )
  }
 })