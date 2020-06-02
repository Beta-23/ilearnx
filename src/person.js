console.log('person.js is running!!')

const isAdult = (age) => {
    if (age >= 18) {
        console.log('You are an Adult!')
    } else {
        console.log('You must be 18 or older to play!')
    }  
}

const canDrink = (over21) => {
    if (over21 >=21) {
        alert('You are old to drink Alcohol!')
    } else {
        console.log('You need to go home!')
    }
}

export { isAdult, canDrink };



