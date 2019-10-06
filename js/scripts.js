// business logic



// user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

  var numberInput = $(".numberInput").val();
  var numberArray = []
    for (var i = 0; i <= numberInput; i++) {
      numberArray.push(i)
    }
    // console.log(numberArray)

    var results = numberArray.map(function(number) {
      // console.log(number)
      var numberToString = number.toString();
      // console.log(numberToString.indexOf(1))

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
    // console.log(results);
    $("#result").text(results);
    $("form").hide();
  })
})
