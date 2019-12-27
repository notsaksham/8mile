var TIMEOUT = 6000;
 
var interval = setInterval(handleNext, TIMEOUT);
 
function handleNext() {
 
  var $radios = $('input[class*=&quot;slide-radio&quot;]');
  var $activeRadio = $('input[class*=&quot;slide-radio&quot;]:checked');
 
  var currentIndex = $activeRadio.index();
  var radiosLength = $radios.length;
 
  $radios
    .attr('checked', false);
 
  if (currentIndex &gt;= radiosLength - 1) {
 
    $radios
      .first()
      .attr('checked', true);
 
  } else {
 
    $activeRadio
      .next('input[class*=&quot;slide-radio&quot;]')
      .attr('checked', true);
 
  }
 
}