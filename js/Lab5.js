let array = Array.from({length: 1000}, () => Math.floor(Math.random() * 1000))
console.log(array)

let min = function(array) {
    min = 100000000
    for (let i = 0; i < array.length; i++){
        if (array[i] <= min)
            min = array[i]
    }
    return min
}

let max = function(array) {
    max = -1
    for (let i = 0; i < array.length; i++){
        if (array[i] >= max)
            max = array[i]
    }
    return max
}

let median = function(array){
    return array[Math.round(array.length/2)]
}

let quickSort = function(array) {
    if (array.length < 2) {
        return array
    }

    let pivot = array[Math.floor(Math.random()*array.length)];
    array.splice(array.indexOf(pivot), 1)
    
    let left_array = new Array
    let right_array = new Array

    array.forEach(element => {
        if (element <= pivot) {
            left_array.push(element)
        }
        else {
            right_array.push(element)
        }
    });

    return quickSort(left_array).concat([pivot]).concat(quickSort(right_array))
}


console.log(min(array))
console.log(max(array))
console.log(median(array))

console.log(quickSort(array))

let countTags = function(){
    let tags = Array.from(document.getElementsByTagName('*')).map(node => node.tagName)
    let countDict = new Map

    tags.forEach(tag => {
        if (!countDict.has(tag)){
            countDict.set(tag, 0)
        }
        countDict.set(tag, countDict.get(tag) + 1)
    });

    console.log(countDict)
}