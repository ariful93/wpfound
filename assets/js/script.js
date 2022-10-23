(function ($) {
    $(document).ready(function () {
      var clock;
          
      $(document).ready(function() {
        var clock;
  
        clock = $('.clock').FlipClock({
              clockFace: 'DailyCounter',
              autoStart: false,
              callbacks: {
                stop: function() {
                  $('.message').html('The clock has stopped!')
                }
              }
          });

          var huh  = new Date(Date.UTC(2022, 11, 60));
          var duh  = new Date();
          var wha  = huh.getTime()/1000 - duh.getTime()/1000;

          clock.setTime(wha);
          clock.setCountdown(true);
          clock.start();
  
      });
    });
  })(jQuery);
  