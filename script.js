//var resultValue;

function calculate(){
  var height = document.getElementById('height').value / 100;
  var weight = document.getElementById('weight').value;

  var bmi = weight / (height * height);

  document.getElementById('result').innerHTML = Math.floor(bmi);

  var resultValue = bmi;

  /*  if (resultValue <= 15.99){
      result.style.color = "#082E79";}
    else if (resultValue >= 16 && resultValue <= 16.99){
      result.style.color = "#4169E1";}
      else if (resultValue >= 17 && resultValue <= 18.49){
        result.style.color = "#ACE1AF";}
        else if (resultValue >= 18.5 && resultValue <= 24.99){
          result.style.color = "#CDEBA7";}
//wait a sec, maybe just use switch instead, lol
        else {
          result.style.color = "black";}
*/

switch (true) {
  case resultValue <= 15.99:
    //result.style.color = "#082E79";
    resultSquare.style.backgroundColor = "#082E79";
  break;

  case resultValue >= 16 && resultValue <= 16.99:
    //result.style.color = "#4169E1";
    resultSquare.style.backgroundColor = "#4169E1";
  break;

  case resultValue >= 17 && resultValue <= 18.49:
    //result.style.color = "#ACE1AF";
    resultSquare.style.backgroundColor = "#ACE1AF";
  break;

  case resultValue >= 18.5 && resultValue <= 24.99:
    //result.style.color = "#CDEBA7";
    resultSquare.style.backgroundColor = "#CDEBA7";
  break;

  case resultValue >= 25 && resultValue <= 29.99:
    //result.style.color = "#FFFF99";
    resultSquare.style.backgroundColor = "#FFFF99";
  break;

  case resultValue >= 30 && resultValue <= 34.99:
    //result.style.color = "#FDE456";
    resultSquare.style.backgroundColor = "#FDE456";
  break;

  case resultValue >= 35 && resultValue <= 39.99:
    //result.style.color = "#CF2929";
    resultSquare.style.backgroundColor = "#CF2929";
  break;

  case resultValue >= 40:
    //result.style.color = "#801818";
    resultSquare.style.backgroundColor = "#801818";
  break;
}

}
/*function coloring(){
resultValue = 29 //document.getElementById('result').innerHTML;

console.log(resultValue);

  if (resultValue == 29) {
    resultValue.style.color = "red";
  }
} */
