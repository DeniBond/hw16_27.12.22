const database = [
    {name: "John", country: "Israel", age: 19, isMarried: true},
    {name: "Mary", country: "Israel", age: 29, isMarried: false},
    {name: "Bill", country: "Belgium", age: 10, isMarried: false},
    {name: "Jane", country: "France", age: 30, isMarried: true},
    {name: "Hanna", country: "France", age: 9, isMarried: false},
    {name: "George", country: "Israel", age: 80, isMarried: true}
];
function isMarriedCheck(array) {
    const res = array.filter(function (value) {
        if (value.isMarried) {
            return array.values()
        }
    });
    return res
}
console.log("Married objects :)", isMarriedCheck(database))

// Database sort by ascending
const sortAgeAsc = database.sort(function (a, b) {
    return a.age - b.age
})
console.log("Sorted age by ascending:", sortAgeAsc)

//  Average age
function avgAge(array) {
    const res = array.reduce(function (acc, value, index, array) {
        acc += value.age
        if (index === array.length - 1) {
            return acc / array.length
        }
        return acc
    }, 0)
    return res
}
console.log("Average age = " + avgAge(database))

// Statistic by country
const countryStat = database.reduce(function (acc, value) {
    acc[value.country] = (acc[value.country] || 0) + 1
    return acc
}, {})
console.log("Statistic by country:", countryStat)

//Married:ASC, notMarried:DESC, MarriedAvgAge
console.log("5: Married:ASC, notMarried:DESC, MarriedAvgAge")
oddlySort()
function oddlySort() {
    const isMarried = database.filter(function (value){
        if (value.isMarried){
            return database.values()
        }
    })
    console.log(isMarried.sort(function (a, b) {
        return a.age-b.age;
    }))
    const notMarried = database.filter(function (value){
        if (!value.isMarried){
            return database.values()
        }
    })
    console.log(notMarried.sort(function (a, b) {
        return b.age-a.age
    }))
    console.log(avgAge(isMarried))
}

//Deleting by position
const ElementToDelete = 2
deleteByPos(database, ElementToDelete)
function deleteByPos(array, index) {
    array.splice(index-1, 1)
}
console.log(database)