const strings = ["This","That","They","Them","Who"]
const numbers = [12,45,7,2,4]
const booleans = [true,false,false,true,false]


const addData = (arr) => { 
    const type = typeof(arr[0])
    if (type == "string") {
        arr.unshift("Assignment")
        console.log(`String added to array. ${arr}`,)
    }
    else if (type == "number") {
        arr.unshift(69)
        console.log(`Number added to array. ${arr}`,)
    }
    else {
        arr.unshift(true)
        console.log(`Boolean added to array. ${arr}`)
    }
} 

addData(strings)
addData(numbers)
addData(booleans)