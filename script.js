
    
    
   function dayMessage () {
    
    switch (new Date().getDay()) {
    case 1:
        return "Today is Monday, oh boy.";
        break;
    case 2:
        return "Today is Tuesday, let's keep rocking to the weekend.";
        break;
    case 3: 
        return "Today is Wednesday, only a few days until Saturday.";
        break;
    case 4:
        return "Today is Thursday, Saturday is the day after tomorrow!";
        break;
    case 5:
        return "Happy Friday, tomorrow is SATURDAY!";
        break;
    case 6:
        return "Finally, it's saturday baby!!!";
      break;
    default:
        return "What a great weekend it's been. Looking forward to next weekend.";
  }
}

    const welcomeString = dayMessage();


document.getElementById('message').innerHTML = welcomeString;