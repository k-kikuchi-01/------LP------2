// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');
// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-button').on('click', function () {
  // .hamburgerの表示・非表示を繰り返す
if($('nav').hasClass('hamburger-menu-active')){
  hamburger.removeClass('hamburger-menu-active', 100);
}else{
  hamburger.addClass('hamburger-menu-active');
}
});
// 画面幅のサイズが変わったら
$(window).on('resize', function () {
  // ハンバーガーメニューを閉じる
  hamburger.removeClass('hamburger-menu-active');
});
// ハンバーガーメニューをクリックしたら
$('.hamburger-menu-list-group').on('click', function () {
  // ハンバーガーメニューを閉じる
  hamburger.removeClass('hamburger-menu-active');
});
// スクロール
$('.voices__slick').slick({
  infinite: true,
  slidesToShow: 3,//スライドを画面に3枚見せる
	slidesToScroll: 3,//1回のスクロールで3枚の写真を移動して見せる
  dots: true,
  arrows: true,
  prevArrow: '<div class="slick__slide-arrow slick__slide-arrow-prev bi bi-arrow-left-short"></div>',
  nextArrow: '<div class="slick__slide-arrow slick__slide-arrow-next bi bi-arrow-right-short"></div>',
  // fade: true,
  // centerPadding: '40px',
  responsive: [
    {
      breakpoint: 1200,//モニターの横幅が769px以下の見せ方
      settings: {
        slidesToShow: 2,//スライドを画面に2枚見せる
        slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
      }
    },
    {
      breakpoint: 768,//モニターの横幅が426px以下の見せ方
      settings: {
        slidesToShow: 1,//スライドを画面に1枚見せる
        slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
      }
    }
  ]
});

// アコーディオンのタイトルがクリックされたら
$('.qanda__accordion-title').on('click', function(e) {

  // .accordion-contentを選択
  var content = $(e.target).next();

  // .accordion-contentを表示・非表示
  content.slideToggle();
  //openクラスをつける
  $(this).toggleClass("open");
});