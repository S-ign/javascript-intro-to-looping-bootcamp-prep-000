var forLoop = (array) => {
    for (var i = 0; i < 25; i++) {
        array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`)
    }

    return array
}

var whileLoop = (n) => {
    while (n > 0 || n < 0) {
        if (n > 0) {
            n--
        }
        else if (n < 0)
            n++
        console.log(n)
    }

    return n === 0 ? 'done' : '<---'
}

var doWhileLoop = (array) => {
    var maybeTrue = () => { return Math.random() >= 0.5 ? true : false }

    do {
        array.pop()
    } while (maybeTrue());

    return array
}
