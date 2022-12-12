function scuberGreetingForFeet(feet){
  let result
  if (feet <=400) {
    result = "This one is on me!";
  }
  if (feet >400 && feet <=2000) {
     result = "That will be twenty bucks."
  }
  if(feet >=2001) {
     result = "I will gladly take your thirty bucks.";
  }
  if(feet >=2501) {
    result ="No can do.";
  }
  return result
  }
  


function ternaryCheckCity(city){
 return city==='NYC' ? "Ok, sounds good." : "No go.";

}

function switchOnCharmFromTip(tip){
  switch(tip) { 
    case "generous":
      return "Thank you so much.";
      case 'not as generous':
        return 'Thank you.';
        default: 
        return 'Bye.';
  }
  
}