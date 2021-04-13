const obj = {
    vector: [1, 11, 2, 22, 3, 33, 4, 44,5],
    line: [2, 7, 11, 12, 19, 23, 31, 39, 44, 56],
    chaos: [5, 1, 66, 24, 1, 78, 52, 40],
    strings: ['a', 'bb', 'ass', 'more', 'c', 'let', 'smile']
}

//-------------------

let newObj = modify(obj)

function modify(object) {
    let result = {}
    result.vector = [];
    
    for (let i in object.vector) {
        if (object.vector[i * 2]) {
            result.vector.push([object.vector[i * 2], object.vector[i * 2 + 1]?object.vector[i * 2 + 1]:""])
        }
    }

    // result.vector = object.vector.filter(elem => elem)

    result.line = object.line.filter(elem => elem % 2 == 0)
    result.chaos = object.chaos.filter(elem => elem > 50)
    result.strings = object.strings.filter(elem => elem.length > 3)

    return result
}

console.log(newObj)