var TIMEOUT = 10000;

var interval = setInterval(handleNext, TIMEOUT);

function handleSwipe(direction) {
  clearInterval(interval)

  var $radios = $('input[class*="slide-radio"]');
  var $activeRadio = $('input[class*="slide-radio"]:checked');

  var currentIndex = $activeRadio.index();
  var radiosLength = $radios.length;

  $radios.attr("checked", false);

  if (direction == "left") {
    console.log("Swipe", direction);
    if (currentIndex >= radiosLength - 1) {
      $radios.first().attr("checked", true);
    } else {
      $activeRadio.next('input[class*="slide-radio"]').attr("checked", true);
    }
  } else if (direction == "right") {
    if (currentIndex == 0) {
      $radios.last().attr("checked", true);
    } else {
      $activeRadio.prev('input[class*="slide-radio"]').attr("checked", true);
    }

  }
  interval = setInterval(handleNext, TIMEOUT);

}


function handleNext() {
  var $radios = $('input[class*="slide-radio"]');
  var $activeRadio = $('input[class*="slide-radio"]:checked');

  var currentIndex = $activeRadio.index();
  var radiosLength = $radios.length;

  $radios.attr("checked", false);

  if (currentIndex >= radiosLength - 1) {
    $radios.first().attr("checked", true);
  } else {
    $activeRadio.next('input[class*="slide-radio"]').attr("checked", true);
  }
}
