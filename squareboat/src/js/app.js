(function(){
    var _window = $(window);
    var _header = $('header');
    var _tabsDiv = $('#tabs div');
    var _tabsSVG = $('#tabs svg');
    var _addMoreFeatures = $('.add-more-features');
    var _chatInput = $('.chat-input input');
    var _personalChat = $(".personal-chat");
    _window.scroll(function(){
        var scroll = _window.scrollTop();   
        if (scroll >= 50) {
            _header.addClass('header-fixed');
        } else 
        {
            _header.removeClass('header-fixed');
        }
    });

    $('header #tabs').tabs();
    $("header #tabs>div a[href^='#']").click(function() {
        _tabsDiv.removeClass('active');
        _tabsSVG.removeClass('svgfill');
        if($("#tabs").find('div').hasClass('animation') || $('#tabs').find('svg').hasClass('svgfill')){
            _tabsDiv.removeClass('animation');
            _tabsSVG.removeClass('svgfill');
        }
        var index = $($(this).attr('href')).index() - 1;
        $("#tabs").tabs("option", "active", index).removeClass('animation');
        $(this).parent().addClass('animation');
        $(this).siblings('svg').addClass('svgfill');
        return false;
      });
      _addMoreFeatures.click(function(){
          _addMoreFeatures.toggleClass('rotate');
            $( ".features,.features svg,.features span").fadeToggle('slow');
         
      });
      $('.chat-input button').click(function(e) {
          var value= _chatInput.val();
          if(value!=='') {
            var timespan=document.createElement('div');
            var dt = new Date();
            var time = dt.getHours() + ":" + dt.getMinutes();
            var p = document.createElement('p');
                div = document.createElement('div');
                $(div).addClass('message-container');
                $(p).addClass('text-right p-3 mb-1 dummy-msg');
                $(p).html(value);
                $(div).append(p);
                _personalChat.append(div);
                $(timespan).addClass('timeofmsg');
                $(timespan).html(time);
                $(div).append(timespan);
                _chatInput.val('');
          }
    });
    
})();