$(function () {

  $(window).scroll(function () {
    var header = $("header");
    if ($(window).scrollTop() > $(window).height()) {
      header.addClass("scroll-nav");
    } else {
      header.removeClass("scroll-nav");
    }
  });

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  /*=================================================
  スムーススクロール
  ===================================================*/
  // ページ内のリンクをクリックした時に動作する
  $('a[href^="#"]').click(function () {
    // クリックしたaタグのリンクを取得
    let href = $(this).attr("href");
    // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
    let target = $(href == "#" || href == "" ? "html" : href);
    // ページトップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
    // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
    $("html, body").animate({ scrollTop: position }, 600, "swing");
    // urlが変化しないようにfalseを返す
    return false;
  });



  $(window).scroll(function () {
    // photosクラスに対して順に処理を行う
    $(".fade-in").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // photosクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // photosクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });

  /*=================================================
  スマホメニュー
  ===================================================*/
  // ハンバーガーメニューのクリックイベント
  $(".toggle_btn").on("click", function () {
    // .toggle_btnをクリックしたときに実行する
    //  function:実行する

    ($("header").toggleClass("open"));
  });
  // headerに対してopenクラスを追加または削除する。
  // クラスの追加と削除は、ハンバーガーメニューの表示と非表示を切り替えるために使用される。

  // toggleClassメソッドを使用することで、hamburgerクラスにopenクラスが存在する場合は削除、
  // 存在しない場合を追加する処理を自動で行ってくれる


  // #maskのエリアをクリックした時にメニューを閉じる
  $("#mask").on("click", function () {
    // #maskをクリックしたときに実行する
    $("header").toggleClass("open");

  });

  // リンクをクリックした時にメニューを閉じる
  $("#navi a").on("click", function () {
    // #navi aをクリックしたときに実行する

    $("header").toggleClass("open");
  });



});


