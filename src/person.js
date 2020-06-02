console.log('person.js is running!!')

const isAdult = (age) => {
    if (age >= 18) {
        console.log('You are an Adult!')
    } else {
        alert('You must be 18 or older to play!')
    }  
}

export { isAdult };



