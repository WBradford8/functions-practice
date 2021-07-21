const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7
    return ageInDogYears
}

const dogAge = Math.round(calculateAgeInDogYears(45))
console.log(dogAge)

const favDogBreed = (myPet) => {
    if (myPet === "cattle dog") {
        return (`My favorite dog breed is ${myPet}`)
    } else if (myPet === "poodle") {
        return (`My favorite dog breed is ${myPet}`)
    } else if (myPet === "meow") {
        return (`I like cats`)
    } else {
        return ("I am a loser")
    }
}

const result = favDogBreed("mooooooo")
console.log(result)

const add = (x, y, z) => {
    const sum = x + y + z
    return sum
}

const answer = add(12, 6, 2)
console.log(answer)


const go = (direction, speed) => {
    const message = `The car is moving ${direction} at ${speed} mph.`
    if (speed > 75) {
        return (message + " SLOW DOWN!!!")
    } else {
        return message
    }
}

const travel = go("forwards", 76)
console.log(travel)


const evenOrOdd = (a) => {
    if (a % 2 === 0) {
        return ("even")
    } else {
        return ("odd")
    }
}

const evenOrOddAnswer = evenOrOdd(13)
console.log(evenOrOddAnswer)

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for (const number of numbers) {
    const container = evenOrOdd(number)
    console.log(container)
}

const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

/*
    Function to filter out `k` words
    (Google 'javascript startswith' to get started)
 */
const filter = () => {
    const emptyArray = []
    if words.startsWith("k") {
        
    }
}
/*
    Function to build a single string from the array
    (Google 'javascript combine all items in array' to get started)
 */


/*
    Invoke the filtering function and store its return value
 */


/*
    Invoke the string building function, and pass the
    return value of the previous function as an argument
*/


console.log()