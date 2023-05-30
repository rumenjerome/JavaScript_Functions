// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds (count) {
    for (let i = 1; i <= count; ++i) {
        if (i % 2 != 0) {
            console.log(i) 
        }
    }
}

printOdds(22)

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge (userName, age) {
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
    if (age >= 16) {
        console.log (aboveSixteen);
    }
    else console.log (belowSixteen);
}

checkAge("Rumen", 14)

// Exercise 3 section
console.log("EXERCISE 3:\n==========\n");

function checkQuadruant (x, y) {
    if (x == 0) {
        console.log (`This is on the Y-Axis. (${x}, ${y})`);
    }
    else if (y == 0) {
        console.log (`This is on the X-Axis. (${x}, ${y})`);
    }
    else if (X > 0 && y > 0) {
        console.log(`This is in Quadrant 1 (${x}, ${y})`);
    }
    else if (x < 0 && y > 0) {
        console.log (`This is in Quadrant 2 (${x}, ${y})`);
    }
    else if (x < 0 && y < 0) {
        console.log (`This is in Quadrant 3 (${x}, ${y})`);
    }
    else if (x > 0 && y < 0) {
        console.log (`This is in Quadrant 4 (${x}, ${y})`);
    }
}

checkQuadruant(3,0);

// Exercise 4
console.log("EXERCISE 4:\n==========\n");

function triangleType (a, b, c) {
    if (a == b && b == c && c == a) {
        console.log (`This is an equilateral triangle.`);
    }
    else if (a == b || b == c || a ==c ) {
        console.log (`This is an isosceles triangle`);
    }
    else if (a + b <= c || b + c <= a || a + c <= b) {
        console.log (`This is an invalid triangle`)
    }
    else if (a * a + b * b === c * c) {
        console.log (`This is a right triangle`)
    }
}

triangleType(3, 3, 4)

// Exercise 5
console.log("EXERCISE 4:\n==========\n");

function cellData (planLimit, day, usage) {
    let userMsg = `Average daily use: ${dailyAvgUse} GB/day \n You are ${aboveOrBelow} your daily use (${idealDailyAvguse})`;
    let idealDailyAvguse = planLimit/30;
    let actualDailyAvgUse = usage/day;
    let usagePerDay = usage/day;
    let remainingDate = planLimit - usage;
}