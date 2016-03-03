$(document).ready(function(){

  $.stratus({
    auto_play: false,
    animate: 'fade',
    align: 'top',
    offset: 15,
    position: 'fixed',
    user: false,
    color:'FFF',
    volume: 90,
    key: "b2664aa670958ea8430fad34ceb85776",
    links: 'https://soundcloud.com/a-j-e/',
    theme: 'https://dl.dropbox.com/s/b868uuem9qmla49/light_theme.css?dl=0'
  });

  $("#top").fadeIn(2000);
  
  $("#stratus").hover(
    function() {$("#dblclick-for-playlist").fadeIn("fast");}, 
    function() {$("#dblclick-for-playlist").fadeOut("fast");}
  );

  $(document).on('click', '.listen', function(e){
    var link = $(this).attr('link');
    if (link){
      play_this(link);
    }
  });
});

function play_this(urls){
  document.getElementById('stratus').remove();
  $(document).ready(function(){
    //remove_player();
    $.stratus({
      auto_play: true,
      animate: 'fade',
      align: 'top',
      position: 'fixed',
      user: false,
      color:'fff',
      volume: 80,
      key: "b2664aa670958ea8430fad34ceb85776",
      links: urls,
      theme: 'https://dl.dropbox.com/s/b868uuem9qmla49/light_theme.css?dl=0'
    });
    $("#stratus").hover(
      function() {$("#dblclick-for-playlist").fadeIn("fast");}, 
      function() {$("#dblclick-for-playlist").fadeOut("fast");}
    );
  });
}

/*function remove_player(){
 var frame = document.getElementById("stratus");
 frame.parentNode.removeChild(frame);
}*/

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
  for(var i = 0, len = this.length; i < len; i++) {
    if(this[i] && this[i].parentElement) {
      this[i].parentElement.removeChild(this[i]);
    }
  }
}