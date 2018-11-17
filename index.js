function scuberGreetingForFeet(someValue) {
  let result =""
  if (someValue === 199) {
    result = 'This one is on me!'
  } else if (someValue === 2001) {
      result = 'I will gladly take your thirty bucks.'
    } else if (someValue === 2501) {
      result = 'No can do.'
    }
  return result
}

function ternaryCheckCity(city) {
  let ternaryCheckCity = ""
if(city === 'NYC' ?  true : false) {
   ternaryCheckCity = 'Ok, sounds good.'
 } else if(city === 'Pittsburgh' ? true : false){
   ternaryCheckCity = 'No go.'
 }
return ternaryCheckCity
}

function switchOnCharmFromTip(l) {
let l = ""
switch (tip) {
  case 'generous':
  tip = 'Thank you so much.'
    break;

    case 'not as generous':
    tip = 'Thank you.'
      break;
      case 'thanks for everything':
      tip = 'Bye.'
}

}
