$(document).ready(function () {
    $("form").submit(function () {
        var formID = $(this).attr('id');
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formNm.serialize(),
            success: function (data) {
                  
               $.magnificPopup.open({
                   items: {
                       src: '#preorder_window_thank'
                   },
                });
            },
            error: function (jqXHR, text, error) {
                $(formNm).html(error);         
            }
        });
        return false;
    });
});
$(document).ready(function() {

    // Burger
  
    function burger(btn, elem) {
        $(btn).click(function(){
            $(this).children().toggleClass('active');
            $(elem).toggleClass('active');
            return false;
        });
    }

    burger('.burger-nav', '.nav ul');
    burger('.burger-sidebar', '.sidebar');
  
    // Article tabs

    $('.article-tabs li').click(function(e){
        e.preventDefault();
        $('.article-item').hide().removeClass('active');
        $('.article-item').eq($(this).index()).fadeIn().addClass('active');
        $('.article-tabs li').removeClass('active');
        $(this).addClass('active');
    });
   


});



$(document).ready(function(){
    $('#arrow_top').hide();
    var top_show = 250; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 1000; // Задержка прокрутки
  $(document).ready(function() {
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
      /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      if ($(this).scrollTop() > top_show) $('#arrow_top').fadeIn();
      else $('#arrow_top').fadeOut();
    });
    $('#arrow_top a[href*=#]').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка наверх */
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });

    
});
