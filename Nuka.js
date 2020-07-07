/* 

This program will list off all of the types of Nuka Cola in the Fallout
series. It will also display the ingredients for them and their side-effects.

*/


//* Nuka Cola Types Array
const colaBook = [
    {
        name: 'Nuka-Cola',
        ingredients: 'Carbonated H20, Carmel color, Aspartame, Phosphoric acid, Potassium benzoate, Natural flavors, Citric acid, Caffeine',
        sideEffects: '+20 HP, +10 AP, +5 Rads'
    },
    {
        name: 'Nuka-Cola (Ice Cold)',
        ingredients: 'Same as Nuka-Cola but at 32 Degrees F',
        sideEffects: '+45 HP, +20 AP, +5 Rads'
    },
    {
        name: 'Nuka-Cola Quantum',
        ingredients: 'Excessive amounts of Caffeine, 120% Daily Value of Sugar, Vitamins, Minerals',
        sideEffects: '+400 HP, +100 AP, +5 Rads, Glowing Urine, Possible Dizzines'
    },
    {
        name: 'Nuka-Cola Quantum (Ice Cold)',
        ingredients: 'Same as Nuka-Cola Quantum but at 32 Degrees F',
        sideEffects: 'Same as Nuka-Cola Quantum'
    },
    {
        name: 'Nuka-Cola Clear',
        ingredients: 'Lemon Lime taste',
        sideEffects: 'UNKNOWN'
    },
    {
        name: 'Nuka-Cola Quartz',
        ingredients: 'UNKNOWN',
        sideEffects: '+240 AP, +15 Rads, Low-Light Vision, You feel tougher (+2 DT)'
    },
    {
        name: 'Nuka-Cola Victory',
        ingredients: '3 Nuka-Colas',
        sideEffects: '+840 HP, +15 Rads, -1 Perception'
    },
    {
        name: 'Rum & Nuka',
        ingredients: 'UNKNOWN'
    },
    {
        name: 'Nuka-Cherry',
        ingredients: '1 Nuka-Cola, Cherry Mixture'
    },
    {
        name: 'Nuka-Cherry (Ice Cold)',
        ingredients: 'Same as Nuka-Cherry but at 32 Degrees F'
    },
    {
        name: 'Newka-Cola',
        ingredients: '1 Nuka-Cola, 1 Nuka-Cherry'
    },
    {
        name: 'Nuka-Berry',
        ingredients: '1 Nuka-Cherry, 1 Nuka-Cola, 1 Nuka-Grape'
    },
    {
        name: 'Nuka-Bombdrop',
        ingredients: '1 Bourbon, 1 Nuka-Cola Dark, 1 Nuka-Cola, 1 Rum, 1 Vodka'
    },
    {
        name: 'Nuka-Buzz',
        ingredients: '2 Nuka-Cola Wild'
    },
    {
        name: 'Nuka-Cide',
        ingredients: '1 Nuka-Cola Dark, 1 Nuka-Grape, 1 Nuka-Cola Orange, 1 Nuka-Cola Quartz, 1 Nuka-Cola Victory, 1 Nuka-Cola Wild, 1 Nuka-Cola, 1 Nuka-Cherry, 1 Nuka-Cola Quantum'
    },
    {
        name: 'Nuka-Cola Dark',
        ingredients: '3 Boiled water, 2 Nuka-Cola, 3 Snaptail reed, 5 Wood'
    },
    {
        name: 'Nuka-Cola Orange',
        ingredients: 'UNKNOWN'
    },
    {
        name: 'Nuka-Cola Wild',
        ingredients: '1 Nuka-Cola, 1 Root beer'
    },
    {
        name: 'Nuka-Cooler',
        ingredients: '1 Nuka-Cola Quartz, 1 Nuka-Cola Victory, 1 Nuka-Cola Quantum'
    },
    {
        name: 'Nuka-Fancy',
        ingredients: '1 Nuka-Cola Wild, 1 Nuka-Cherry'
    },
    {
        name: 'Nuka-Free',
        ingredients: '1 Nuka-Cola, 1 Dirty water'
    },
    {
        name: 'Nuka-Frutti',
        ingredients: '1 Nuka-Grape, 1 Nuka-Cola Orange, 1 Nuka-Cola, 1 Nuka-Cherry'
    },
    {
        name: 'Nuka-Grape',
        ingredients: '1 Nuka-Cola, 1 Grape'
    },
    {
        name: 'Nuka-Hearty',
        ingredients: '1 Carrot flower, 1 Nuka-Cola Dark, 1 Nuka-Cola, 1 Tato'
    },
    {
        name: 'Nuka-Lixir',
        ingredients: '1 Nuka-Cola Orange, 1 Med-X, 1 Nuka-Cola'
    },
    {
        name: 'Nuka-Love',
        ingredients: '1 Nuka-Cola Quartz, 1 Nuka-Cherry'
    },
    {
        name: 'Nuka-Power',
        ingredients: '2 Nuka-Cola Dark, 1 Nuka-Cola'
    },
    {
        name: 'Nuka-Punch',
        ingredients: '1 Nuka-Grape, 1 Nuka-Cola Orange, 1 Nuka-Cola Quartz, 1 Nuka-Cherry'
    },
    {
        name: 'Nuka-Ray',
        ingredients: '1 Nuka-Cola Orange, 1 Nuka-Cola Victory'
    },
    {
        name: 'Nuka-Rush',
        ingredients: '1 Nuka Cola Victory, 1 Nuka-Cola Wild'
    },
    {
        name: 'Nuka-Sunrise',
        ingredients: '1 Nuka-Cola Orange, 1 Nuka-Cherry'
    },
    {
        name: 'Nuka-Twin',
        ingredients: '1 Nuka-Cola Wild, 1 Nuka-Cola'
    },
    {
        name: 'Nuka-Void',
        ingredients: '1 Nuka-Cola Dark, 1 Nuka-Cola Quantum'
    },
    {
        name: 'Nuka-Xtreme',
        ingredients: '1 Nuka-Grape, 1 Nuka-Cola, 1 Nuka-Cola Quantum'
    },
    {
        name: 'Nuka-Cola Cranberry',
        ingredients: '1 Nuka-Cola, Cranberries'
    },
    {
        name: 'NukaShine',
        ingredients: '2 Boiled Water, 5 Corn, 3 Nuclear Material, 1 Nuka-Cola Quantum, 5 Razorgrain, 5 Wood'
    },
    {
        name: 'Nuka-Cola Vaccinated/Scorched/My Bloods In It',
        ingredients: '1 Blood pack, 2 Corn, 1 Glass, 1 Mutfruit, 1 Purified water'
    } 
] 







//* Nuka Cola Type Output Variables
const nukaCola = `Name: ${colaBook[0].name} | Ingredients: ${colaBook[0].ingredients} | Side-effects: ${colaBook[0].sideEffects}`;
const nukaColaIced = `Name: ${colaBook[1].name} | Ingredients: ${colaBook[1].ingredients} | Side-effects: ${colaBook[1].sideEffects}`;
const nukaColaQuantum = `Name: ${colaBook[2].name} | Ingredients: ${colaBook[2].ingredients} | Side-effects: ${colaBook[2].sideEffects}`;
const nukaColaQuantumIced = `Name: ${colaBook[3].name} | Ingredients: ${colaBook[3].ingredients} | Side-effects: ${colaBook[3].sideEffects}`;
const nukaColaClear = `Name: ${colaBook[4].name} | Ingredients: ${colaBook[4].ingredients} | Side-effects: ${colaBook[4].sideEffects}`;
const nukaColaQuartz = `Name: ${colaBook[5].name} | Ingredients: ${colaBook[5].ingredients} | Side-effects: ${colaBook[5].sideEffects}`;
const nukaColaVictory = `Name: ${colaBook[6].name} | Ingredients: ${colaBook[6].ingredients}`;
const rumNuka = `Name: ${colaBook[7].name} | Ingredients: ${colaBook[7].ingredients}`;
const nukaCherry = `Name: ${colaBook[8].name} | Ingredients: ${colaBook[8].ingredients}`;
const nukaCherryIced = `Name: ${colaBook[9].name} | Ingredients: ${colaBook[9].ingredients}`;
const newkaCola = `Name: ${colaBook[10].name} | Ingredients: ${colaBook[10].ingredients}`;
const nukaBerry = `Name: ${colaBook[11].name} | Ingredients: ${colaBook[11].ingredients}`;
const nukaBombdrop = `Name: ${colaBook[12].name} | Ingredients: ${colaBook[12].ingredients}`;
const nukaBuzz = `Name: ${colaBook[13].name} | Ingredients: ${colaBook[13].ingredients}`;
const nukaCide = `Name: ${colaBook[14].name} | Ingredients: ${colaBook[14].ingredients}`;
const nukaColaDark = `Name: ${colaBook[15].name} | Ingredients: ${colaBook[15].ingredients}`;
const nukaColaOrange = `Name: ${colaBook[16].name} | Ingredients: ${colaBook[16].ingredients}`;
const nukaColaWild = `Name: ${colaBook[17].name} | Ingredients: ${colaBook[17].ingredients}`;
const nukaCooler = `Name: ${colaBook[18].name} | Ingredients: ${colaBook[18].ingredients}`;
const nukaFancy = `Name: ${colaBook[19].name} | Ingredients: ${colaBook[19].ingredients}`;
const nukaFree = `Name: ${colaBook[20].name} | Ingredients: ${colaBook[20].ingredients}`;
const nukaFrutti = `Name: ${colaBook[21].name} | Ingredients: ${colaBook[21].ingredients}`;
const nukaGrape = `Name: ${colaBook[22].name} | Ingredients: ${colaBook[22].ingredients}`;
const nukaHearty = `Name: ${colaBook[23].name} | Ingredients: ${colaBook[23].ingredients}`;
const nukaLixir = `Name: ${colaBook[24].name} | Ingredients: ${colaBook[24].ingredients}`;
const nukaLove = `Name: ${colaBook[25].name} | Ingredients: ${colaBook[25].ingredients}`;
const nukaPower = `Name: ${colaBook[26].name} | Ingredients: ${colaBook[26].ingredients}`;
const nukaPunch = `Name: ${colaBook[27].name} | Ingredients: ${colaBook[27].ingredients}`;
const nukaRay = `Name: ${colaBook[28].name} | Ingredients: ${colaBook[28].ingredients}`;
const nukaRush = `Name: ${colaBook[29].name} | Ingredients: ${colaBook[29].ingredients}`;
const nukaSunrise = `Name: ${colaBook[30].name} | Ingredients: ${colaBook[30].ingredients}`;
const nukaTwin = `Name: ${colaBook[31].name} | Ingredients: ${colaBook[31].ingredients}`;
const nukaVoid = `Name: ${colaBook[32].name} | Ingredients: ${colaBook[32].ingredients}`;
const nukaXtreme = `Name: ${colaBook[33].name} | Ingredients: ${colaBook[33].ingredients}`;
const nukaColaCranberry = `Name: ${colaBook[34].name} | Ingredients: ${colaBook[34].ingredients}`;
const nukaShine = `Name: ${colaBook[35].name} | Ingredients: ${colaBook[35].ingredients}`;
const nukaColaVaccine_Scorched_MyBloodsInIt = `Name: ${colaBook[36].name} | Ingredients: ${colaBook[36].ingredients}`;



const allTypesList = [colaBook[0].name , colaBook[1].name , colaBook[2].name , colaBook[3].name , colaBook[4].name , colaBook[5].name , colaBook[6].name , colaBook[7].name , colaBook[8].name , colaBook[9].name , colaBook[10].name , colaBook[11].name , colaBook[12].name , colaBook[13].name , colaBook[14].name , colaBook[15].name , colaBook[16].name , colaBook[17].name , colaBook[18].name , colaBook[19].name , colaBook[20].name , colaBook[21].name , colaBook[22].name , colaBook[23].name , colaBook[24].name , colaBook[25].name , colaBook[26].name , colaBook[27].name , colaBook[28].name , colaBook[29].name , colaBook[30].name , colaBook[31].name , colaBook[32].name , colaBook[33].name , colaBook[34].name , colaBook[35].name , colaBook[36].name]


console.log(`\n`);
console.log(`There are a total of ${colaBook.length} Cola types!`); //! There are 37 different Nuka-Cola types!
console.log(`\n`);
console.log(`| Here is a list of all of the Nuka-Cola types |`);
console.log(`\n`);
console.log(allTypesList);
console.log(`\n`);





//* Cola Input
console.log(`| Here is the Nuka-Cola type you have chosen |`);
console.log(`\n`);
userInput = 'Nuka-Cola Quartz'; //! This is the user input




if (userInput === 'Nuka-Cola') {
    console.log(nukaCola);
} else if (userInput === 'Nuka-Cola Iced') {
    console.log(nukaColaIced);
} else if (userInput === 'Nuka-Cola Quantum') {
    console.log(nukaColaQuantum);
} else if (userInput === 'Nuka-Cola Quantum Iced') {
    console.log(nukaColaQuantumIced);
} else if (userInput === 'Nuka-Cola Clear') {
    console.log(nukaColaClear);
} else if (userInput === 'Nuka-Cola Quartz') {
    console.log(nukaColaQuartz);
} else if (userInput === 'Nuka-Cola Victory') {
    console.log(nukaColaVictory);
} else if (userInput === 'Rum Nuka') {
    console.log(rumNuka);
} else if (userInput === 'Nuka-Cola Quantum Iced') {
    console.log(nukaColaQuantumIced);
} else if (userInput === 'Nuka-Cherry') {
    console.log(nukaCherry);
} else if (userInput === 'Nuka-Cherry Iced') {
    console.log(nukaCherryIced);
} else if (userInput === 'Newka-Cola') {
    console.log(newkaCola);
} else if (userInput === 'Nuka-Berry') {
    console.log(nukaBerry);
} else if (userInput === 'Nuka-Bombdrop') {
    console.log(nukaBombdrop);
} else if (userInput === 'Nuka-Buzz') {
    console.log(nukaBuzz);
} else if (userInput === 'Nuka-Cide') {
    console.log(nukaCide);
} else if (userInput === 'Nuka-Cola Dark') {
    console.log(nukaColaDark);
} else if (userInput === 'Nuka-Cola Orange') {
    console.log(nukaColaOrange);
} else if (userInput === 'Nuka-Cola Wild') {
    console.log(nukaColaWild);
} else if (userInput === 'Nuka-Cooler') {
    console.log(nukaCooler);
} else if (userInput === 'Nuka-Fancy') {
    console.log(nukaFancy);
} else if (userInput === 'Nuka-Free') {
    console.log(nukaFree);
} else if (userInput === 'Nuka-Frutti') {
    console.log(nukaFrutti);
} else if (userInput === 'Nuka-Grape') {
    console.log(nukaGrape);
} else if (userInput === 'Nuka-Hearty') {
    console.log(nukaHearty);
} else if (userInput === 'Nuka-Lixir') {
    console.log(nukaLixir);
} else if (userInput === 'Nuka-Love') {
    console.log(nukaLove);
} else if (userInput === 'Nuka-Power') {
    console.log(nukaPower);
} else if (userInput === 'Nuka-Punch') {
    console.log(nukaPunch);
} else if (userInput === 'Nuka-Ray') {
    console.log(nukaRay);
} else if (userInput === 'Nuka-Rush') {
    console.log(nukaRush);
} else if (userInput === 'Nuka-Sunrise') {
    console.log(nukaSunrise);
} else if (userInput === 'Nuka-Twin') {
    console.log(nukaTwin);
} else if (userInput === 'Nuka-Void') {
    console.log(nukaVoid);
} else if (userInput === 'Nuka-Xtreme') {
    console.log(nukaXtreme);
} else if (userInput === 'Nuka-Cola Cranberry') {
    console.log(nukaColaCranberry);
} else if (userInput === 'Nuka-Shine') {
    console.log(nukaShine);
} else if (userInput === 'Nuka-Cola Vaccinated') {
    console.log(nukaColaVaccine_Scorched_MyBloodsInIt);
} else if (userInput === 'Scorched') {
    console.log(nukaColaVaccine_Scorched_MyBloodsInIt);
} else if (userInput === 'My Bloods In It') {
    console.log(nukaColaVaccine_Scorched_MyBloodsInIt);
} else {
    console.log(`You did not choose a Cola type OR You have inputted a invalid Cola type!`);
}
 



    
