/** 
 * ready()      => 確保有載入jquery
 * $(selector)  =>  選擇器
 * hide()       => 隱藏
 * toggle()     => 顯示/隱藏切換
 * slideToggle(毫秒)     => 滑入/出切換
 * fadeToggle(毫秒)     => 淡入/出切換
 */
$(document).ready(function () {
  /**
   * jQuery HTML
   * 取得內容
   * text() 設定或傳回所選元素的文字內容
   * html() 設定或傳回所選元素的文字內容(包含HTML)
   * val()  設定或取得 text 欄位中的值
   */
  $('#btn1').click(function (ecent) {
    ecent.
    alert($('#test').text());
  });
  $('#btn2').click(function (ecent) {
    alert($('#test').html());
  });
  $('#btn3').click(function (ecent) {
    alert($('#showVal').val());
  });

  // 設定值
  $('#btn4').click(function (ecent) {
    $('#p1').text("Hello world!");
  });
  $('#btn5').click(function (ecent) {
    $('#p1').html("<b>Hello world!</b>");
  });
  $('#btn6').click(function (ecent) {
    $('#showVal').val("米奇妙妙屋");
  });

  // 功能:html() 動態載入html標籤效果 網頁html碼不會顯示，僅在js有顯示
  //$('body').html('<h1>動態載入html的h1標籤</h1>');

  // 所有 <h1> element
  $('h1').hide();

  // 所有 class="className" element
  $('.className').hide();

  // 所有 id="idName" element
  $('#idName').hide();

  // 功能: 點擊 <h4> 隱藏 <p>
  $('h4').click(function (event) {
    $('p').fadeToggle(2000);
    $('div').slideToggle(2000);

    // 鏈式效果:執行slideUp後再執行slideDown
    $('.chainEffect').slideUp(2000).slideDown(3000);

    // 功能:addClass() 動態載入css效果 搭配 all.css文件
    // $('p').addClass('orange');
    $('p').toggleClass('orange');

    // 功能:attr(屬性, 值) 動態載入屬性效果 搭配 Console
    $('a').attr('href', 'https://www.google.com.tw/');
  });
});