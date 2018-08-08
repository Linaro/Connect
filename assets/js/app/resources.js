$(function() {
    function count($this){
        var current = parseInt($this.html(), 10);
        $this.html(++current);
        if(current !== $this.data('count')){
            setTimeout(function(){count($this)}, 1);
        }
    }        
  $("span.count-to-number").each(function() {
      $(this).data('count', parseInt($(this).html(), 10));
      $(this).html('0');
      count($(this));
  });
});

$(".resource-block").each(function(index) {
    $(this).delay(200*index).fadeIn(300);
});