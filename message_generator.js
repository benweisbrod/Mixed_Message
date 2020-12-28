// Creating my Object to store three random components

const fortune = {
    first: ['The love of your life', 'You', 'Your mate', 'Your family', 'A friend'],
    second: ['will finally receive', 'is going to find', 'will achieve', 'is going to invest in', 'will recieve'],
    third: ['enlightenment', 'a million dollars', "life's greatest mysteries", "Einstein's theory of relativity", 'the concept of skin in the game']
};

//  Helper function to randomly generate an index given an array

function generateRandomNum(num) {
    let ran = Math.floor(Math.random() * num);
    return ran;
};


// fucntion that adds together object properties

function generateRandomMessage() {
    let one = fortune.first[generateRandomNum(fortune.first.length)];
    let two = fortune.second[generateRandomNum(fortune.second.length)];
    let three = fortune.third[generateRandomNum(fortune.third.length)];
    return `Your fortune has been defined as: ${one} ${two} ${three}`;
};



// log the randomized message
console.log(generateRandomMessage());
