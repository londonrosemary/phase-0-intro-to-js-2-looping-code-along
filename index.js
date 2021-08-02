// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts); 

const cards = [];
function writeCards(names, eventName){
    for (let x=0; x <names.length; x++) {
        cards.push(`Thank you, ${names[x]}, for the wonderful ${eventName} gift!`)
    }
    return cards;
}

function countDown(number) {
    let x = 0
    while (x <= number){
        console.log(number--)
    }
}
countDown(10);