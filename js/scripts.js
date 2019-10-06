// business logic

var boopBeepFormatter = function (numberInput) {
  var numberArray = [];
  for (var i = 0; i <= numberInput; i++) {
    numberArray.push(i);
  }
  var results = numberArray.map(function(number) {
  var numberToString = number.toString();
  if (numberToString.indexOf(3) > -1) {
     return " I'm sorry -- Friend";
   } else if (numberToString.indexOf(2) > -1) {
     return " Boop";
   } else if (numberToString.indexOf(1) > -1) {
      return " Beep";
    } else {
      return " " + number;
    }
  })
  return results;
}

  var colorRandomizer = function(defaultOrder) {
    var colorArray = ["yellow", "cyan", "lime", "lavendar", "red", "royal", "black", "navy", "magenta"]
    $(".flex-container > div").removeClass();
    // $(".flex-container > div").addClass("red");
    var elementArray = $(".flex-container > div").toArray();
      elementArray.forEach(function(color,i) {
        if(defaultOrder) {
          $(color).addClass(colorArray[i])
        } else {
          $(color).addClass(colorArray[Math.floor(Math.random()*colorArray.length)]);
        }
    })
  }


// user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var numberInput = $(".numberInput").val();

    var results = boopBeepFormatter(numberInput);

    $("#result").text(results);
    $("form").hide();
    colorRandomizer();
    setTimeout(function(){
      colorRandomizer(true)
      $("#result").empty();
      $("form").show();
      $(".numberInput").val(null)
    },5000)
  })
})
