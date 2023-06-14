// Code your solutions in this file
function writeCards(names) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
      console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return thankYouMessages;
  }
  
  writeCards(names);
  
  function countDown(number) {
    let i= number;
    while (i >= 0) {
      console.log(i); i--;
    }
    return number;
  }
  countDown(10)
