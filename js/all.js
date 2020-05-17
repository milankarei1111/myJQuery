/** 
 * ready()      => 確保有載入jquery
 * $(selector)  =>  選擇器
 * hide()       => 隱藏
 * toggle()     => 顯示/隱藏切換
 * slideToggle(毫秒)     => 滑入/出切換
 * fadeToggle(毫秒)     => 淡入/出切換
 */
$(document).ready(function () {
   
  // $('h1') => 所有 <h1> element
  $('h1').hide();
  
  // $('.className') => 所有 class="className" element
  $('.className').hide();

  // $('#idName') => 所有 id="idName" element
  $('#idName').hide();

  // 功能: 點擊 <h4> 隱藏 <p>
  $('h4').click(function (event) {
      $('p').fadeToggle(2000);
      $('div').slideToggle(2000);

      // 鏈式效果:執行slideUp後再執行slideDown
      $('.chainEffect').slideUp(2000).slideDown(3000);
  });
});
