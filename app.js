console.log("Hello World");
console.warn("Keep Practicing");
console.error("KEEP PRACTICING");

let clubList = [["man u", 50], ["chelsea", 45], ["barca", 37], ["napoli", 35], ["arsenal", 40 ], ["juventus", 35] ];

function scoreSheet(val2){
    const val1 = 35
    if(val1 > val2){
        return "disaprroved"
    }else if(val1 < val2) {
        return "approved"
    }else if(val1 == val2){
        return "a tie"
    }else{
        return 'Try again';
    }
};

Object.freeze(clubList)
let runThrough = Object.isFrozen(clubList)
console.log(`${runThrough}, it is `)


function loopCall(){
    clubList.forEach(function(value){
        console.log(scoreSheet(value[1]))
    })
}


function clubProfiling(values){
    return scoreSheet(values[1])
}

function callScoreBoard(){
    let scoreBoard = clubList.map(clubProfiling)

    console.log(scoreBoard)
}

console.log(scoreSheet(clubList[clubList.length-2][1]), scoreSheet(clubList[clubList.length-1][1]) );
callScoreBoard()
//clubProfiling()
loopCall()



let profile = [
    {
        name:"deborah",
        age:23,
        hobby:["outings", "crafting", "reading"],
        status:"pending"
    },
    
    {
        name:"jason",
        age:23,
        hobby:["playing games", "surfing the internet", "reading"],
        status:"pending"
    },

    {
        name:"george",
        age:29,
        hobby:["playing games", "surfing the internet", "swimming"],
        status:"successful"
    },

    {
        name:"quincy",
        age:25,
        hobby:["watching movies", "volleyball", "reading"],
        status:"pending"
    },

    {
        name:"pascal",
        age:31,
        hobby:["surfing the internet", "reading"],
        status:"successful"
    },
];


function checkList(input2){
    const averageAge = 24
    if(averageAge > input2){
        return "you are below 24"        
    }else if(averageAge < input2){
        return  "your are above 24";
    }else if (averageAge === input2){
        return "A clash";
    }else{
        return "invalid";
    }
};

function Runprogram(){
    let runner = profile.filter(function(values){
        return values
    })
    console.log(runner)
}


function callNames(){
    let nameCallers = profile.map(function(values){
        return values.name
    })
    console.log(nameCallers)
}

function callChecker(){
    let callers = profile.map(function(values){
        return checkList(values.age)
    })
    console.log(callers)
    
}


function checkLetter(letter){
    let letterChecker = profile.filter(function(items){
        return items.name.includes(letter)
    })
    return letterChecker
}

let g = "g"
let p = "p"
Runprogram()
callNames()
callChecker()
console.log(checkLetter(g))
console.log(checkLetter(p))








/*
let league = [
    {
        clubName:"manchester united",
        coach:"ole",
        points:44,
        status:"pending"
    },
    {
        clubName:"napoli",
        coach:'lampard',
        points:40,
        status:"successful"
    },
    {
        clubName:"spurs",
        coach:"mourinho",
        points:37,
        status:"successful"
    },

]
//foreach block of code
league.forEach(function(callRow){
    console.log(callRow)
})

console.log(league)

let pointCompiler = league.map(function(pointer){
    return pointer.points
})
console.log(pointCompiler)



//block of code for callback method
function communicator(callRow){
    console.log(JSON.stringify(callRow))

}

function communicator1(callrowcoach){
    console.log(JSON.stringify(callrowcoach.coach))
    
}
//call back method n fig
let number = [2,3,4,5,6]

function mulitpyby3(values){
    return (values*2)
}
//mapping methods
let triple = number.map(function(values){
    return(values*3)
});

let double = number.map(mulitpyby3)
console.log(triple)
console.log(double)
*/

let house = {
    kitchen:["utensils", "apron", "cutleries,"]
}

house.parlour=["bread", "tea"]

console.log(house)

let home = [
    {
        firstFloor:1

    },
    {
        secondFloor:2
        
    },
    {
        thirdFloor:3
        
    }
]

function printHome(){
    
    console.log(home)
}

function insertFloor(){
    let addFloor = home.push({fourthFloor:4})
    return (addFloor) 
}

function addMoreKey(){
    let keyadder = home[0].actvity="console operator"
    return (keyadder)
}


printHome()
insertFloor()
addMoreKey()


let storeRoom = []

let truckLoad = [
    {
        id:0,
        product:"snacks",
        price:50
    },
    {
        id:1,
        product:"noodles",
        price:350
    },
    {
        id:2,
        product:"drinks",
        price:250
    },
    {
        id:3,
        product:"cosmetics",
        price:500,
        date:new Date (2021, 2, 16)
    }
]

function printstoreRoom(){
    console.log(storeRoom)
}

function offloadTruck(){
    let offLoader = truckLoad.filter(function(items){
        return items
    })
    storeRoom = offLoader
}

function remove(id){
    let remover = storeRoom.splice(id,1)
    console.log(remover)
    
}

function findByLetter(letter){
   
    let letterFinder = storeRoom.filter(function(items){
        return items.product.includes(letter)
    })
    console.log(letterFinder)
}

function getDate(id){
    let dateGetter = storeRoom.find(function(item){
        return item.id === id
    })
    dateGetter.date = dateGetter.date.getFullYear()
    console.log(dateGetter)
}
let n = "n"

function arrangeStore(){
    let arranger = storeRoom.sort()
    console.log(arranger)
}


let fruits = ["apple", "lime", 'grape', "banana"]

function collectFruits(){
    let collector = fruits.sort()
    console.log(collector)
}


// printstoreRoom()
// offloadTruck()
// printstoreRoom()
// //remove(3)
// printstoreRoom()
// //dateSet()
// printstoreRoom()
// findByLetter(n)
// getDate(3)
// collectFruits()
// arrangeStore()

let school = []

let commonEntrance = [
    {
        id:0,
        studentName:"patrick",
        examScore:55,
        hobbies:["reading", "sports", "surfing the internet"]
    },
    {
        id:1,
        studentName: "racheal",
        examScore:85,
        hobbies:["running", "games", "skit making"]
    },
    {
        id:2,
        studentName: "baton",
        examScore:60,
        hobbies:["reading", "sports", "video games"],
    },
    {
        id:3,
        studentName:"olson",
        examScore:70,
        hobbies:["hiking", "swimming"]
    }
]
// create a checklist formula/function
let scienceDept =[]
let commercialDept = []
let artDept = []


function callSchool(){
    console.log(school)
}
function collateResults(){
    school = commonEntrance
}

function findStudent(id){
    let studentFinder = school.find(function(result){
        return result.id === id
    })
    return(studentFinder)
}

function findStudentByLetter(letter){
    let letterFinder = school.filter(function(results){
        return results.studentName.includes(letter)
    })
    console.log(letterFinder)
}

function expelStudent(id){
    let expeller = school.splice(id,1)
    
    return expeller
}

function shareClassById(id){
    let finder = school.find(function(item){
        return item.id === id
    })
    scienceDept.push(finder)
    console.log(finder)
}

function printDeptSci(){
    console.log(scienceDept)
}
function printDeptCom(){
    console.log(commercialDept)
}
function printDeptArt(){
    console.log(artDept)
}


function checkerList(inputs){
    let averageScore = 60
    if(averageScore > inputs){
        return artDept.push(inputs)
    }else if(averageScore < inputs){
        return scienceDept.push(inputs)
    }else if(averageScore === inputs){
        return commercialDept.push(inputs)
    }
    else{
        return "invalid"
    }
}

function shareClass(){
    school.forEach(function(values){
        return(checkerList(values.examScore))
    })
    
}



// callSchool()
// collateResults()
// callSchool()
//shareClassById(1)
// shareClass()
// printDeptSci()
// printDeptCom()
// printDeptArt()
// findStudent(2)
//findStudentByLetter(("p"))
//callSchool()
//expelStudent()



let colours = [["red"],["blue"],["brown"],["red"],["white"],["red"],]

colours.forEach(function(type){
    console.log(type=="red")
})

let coloursfinder = colours.filter(function(type){
    return type == "red"
})
console.log(coloursfinder)
//keyHolder(("a"))




let league = [
    {
        id:0,
        clubName:"manchester united",
        pts: 54,
    },
    {
        id:1,
        clubName:"manchester city",
        pts: 68,
    },
    {
        id:2,
        clubName:"leiscter city",
        pts: 53,
    },
    {
        id:3,
        clubName:"everton",
        pts: 46,
    },
    {
        id:4,
        clubName:"chelsea",
        pts: 50,
    },
    {
        id:5,
        clubName:"westham united",
        pts: 48
    },
    {
        id:6,
        clubName:"tottenham hotspur",
        pts: 45
    },
    
    {
        id:7,
        clubName:"liverpool",
        pts: 43
    },
    {
        id:8,
        clubName:"aston villa",
        pts: 40
    },
    {
        id:9,
        clubName:"arsenal",
        pts: 38
    },
]
//get or sort the classified leagues. getting the lowest and the highest
let classifiedLeague = {
    "toplist":[],
    "lowlist":[]
}

let league1 = [...league]
console.log(league1)

function callLeague(){
    console.log(league)
}

function callClassifiedLeague(){
    console.log(classifiedLeague)
}

function findClub(id){
    let clubFinder = league.find(function(value){
        return value.id === id
    })
    console.log(clubFinder)
}

function findClubByLetter(letter){
    let letterFinder = league.filter(function(values){
        return values.clubName.includes(letter)
    })
    console.log(letterFinder)
}

function arrangeTeam(){
    let teamArranger = league.sort(function(a,b){
        return b.pts - a.pts
    })
    console.log(teamArranger)
}

function spliter(id){
    let averagePts = 50
    if(id >= averagePts){
        return classifiedLeague.toplist.push(id)
    }else if(id < averagePts){
        return classifiedLeague.lowlist.push(id)
    }else{
        return "invalid"
    }
}

function clubDistributor(){
     league.forEach(function(values){
        return spliter(values.pts)
    })
    
}



callLeague()
arrangeTeam()
clubDistributor()
callClassifiedLeague()




let storeHouse = []

let trailer = [
    {
        id:0,
        product:"rice",
        amount:23000
    },
    {
        id:1,
        product:"beans",
        amount:25000
    },
    {
        id:2,
        product:"garri",
        amount:15000
    },
    {
        id:3,
        product:"indomie pack",
        amount:1000
    },
    {
        id:4,
        product:"Drinks",
        amount:3000
    }
]

let priceTag = {
    highPrice:[],
    lowPrice:[]
}
function callStore(){
    console.log(storeHouse)
}
function offloadTrailer(){
    storeHouse = [...trailer]
}
function getProduct(id){
    let productGetter = storeHouse.find(function(item){
        return item.id === id
    })
    return productGetter
}
function getByLetter(letter){
    let letterGetter = storeHouse.filter(function(items){
        return items.product.includes(letter)
    })
    console.log(letterGetter) 
}
function removeProduct(id){
    let remover = storeHouse.splice(id,1)
    console.log(remover)
}
function getHighest(){
    let getter = storeHouse.sort(function(a,b){
        return b.amount - a.amount
    })
    console.log(getter)
}

function priceInflater(id){
    let inflater = getProduct(id)
    inflater.amount = inflater.amount *2
    return(inflater)
}

function sector(id){
    if(id >= 5000){
        return priceTag.highPrice.push(id)
    }else if(id < 5000){
        return priceTag.lowPrice.push(id)
    }
    else{
        return "invalid"
    }
}

function section(){
    storeHouse.forEach(function(items){
        return sector(items.amount)
    })
}

function inflateAll(){
    let inflate = storeHouse.map(function(valu){
        return valu.amount *3
    })
    console.log(inflate)
}
callStore()
offloadTrailer()
callStore()
console.log(getProduct(2))
getByLetter(("a"))
getHighest()
//removeProduct(2)
callStore()
priceInflater(3)
section()
console.log(priceTag)
inflateAll()
callStore()

let foodStuff = []

let market = [
    {
        id:0,
        stuff:"rice",
        amount:3000
    },
    {
        id:1,
        stuff:"beans",
        amount:4000
    },
    {
        id:2,
        stuff:"cassava",
        amount:700
    },
    {
        id:3,
        stuff:"beverages",
        amount:5000
    },
    {
        id:4,
        stuff:"garri",
        amount:1000
    },
]

let storage = {
    costly:[],
    costless:[]
}
function callFoodstuff(){
    console.log(foodStuff)
}

function buyFoodstuff(){
    let buyer = market.filter(function(items){
        return items.amount > 700
    })
    foodStuff = buyer
}

function callStorage(){
    console.log(storage)
}

function checkFoodprice(id){
    let averagePrice = 2000
    if(id > averagePrice){
        return storage.costly.push(id)
    }else if(id < averagePrice){
        return storage.costless.push(id)
    }else{
        return "invalid"
    }
}

function storeFoodstuff(){
    let storer = foodStuff.map(function(items){
        return checkFoodprice(items.amount)
    })
    return storer
}

function increasePrice(id){
    let increaser = foodStuff.find(function(item){
        return item.id === id 
    })
    console.log(increaser)
    increaser.amount = increaser.amount * 2
    console.log(increaser)
}

function findFoodstuff(id){
    let foodFinder = foodStuff.find(function(item){
        return item.id === id
    })
    console.log(foodFinder)
}

function trashFoodstuff(id){
    let trasher = foodStuff.splice(id, 1)
    return trasher
}

function arrangeFood(){
    let sorter = foodStuff.sort(function(a,b){
        return b.amount - a.amount
    })
    console.log(sorter)
}

callFoodstuff()
buyFoodstuff()
callFoodstuff()
callStorage()
storeFoodstuff()
callStorage()
increasePrice(0)
findFoodstuff(4)
trashFoodstuff(3)
arrangeFood()

let postUtme = [
    {
        id:0,
        firstName:"helen",
        lastName:"gabriel",
        age:18,
        paperScore:50
    },
    {
        id:1,
        firstName:"nancy",
        lastName:"forlan",
        age:20,
        paperScore:80
    },
    {
        id:2,
        firstName:"metilda",
        lastName:"nelson",
        age:19,
        paperScore:60
    },
    {
        id:3,
        firstName:"john",
        lastName:"garry",
        age:24,
        paperScore:75
    },
    {
        id:4,
        firstName:"patrick",
        lastName:"bridd",
        age:22,
        paperScore:55
    },
    {
        id:5,
        firstName:"clement",
        lastName:"clinton",
        age:18,
        paperScore:90
    },
    {
        id:6,
        firstName:"larry",
        lastName:"clifford",
        age:23,
        paperScore:39
    },
    {
        id:7,
        firstName:"daniel",
        lastName:"davies",
        age:28,
        paperScore:70
    },
    {
        id:8,
        firstName:"oliver",
        lastName:"twist",
        age:25,
        paperScore:20
    },
    {
        id:9,
        firstName:"hilton",
        lastName:"barry",
        age:16,
        paperScore:65
    },
]

let university = []

let facultyArts = {
    dept:{
        "french":[],
        "history":[],
        "english":[],
        "international Relation":[]
    }
}
function callFaculty(){
    console.log(facultyArts)
}

function markingAndCompiling(id){
    if(id > 10 && id < 40 ){
        return facultyArts.dept.french.push(id)
    }else if (id < 65 && id > 40){
        return facultyArts.dept.history.push(id)
    }else if(id > 65 && id < 90){
        return facultyArts.dept.english.push(id)
    }else if(id >= 90 && id <= 100){
        return facultyArts.dept["international Relation"].push(id)
    }else if(id < 100){
        return "above limit! kindly report to appropraite authorities"
    }else{
        return "try again"
    }
}

function distributingStudent(){
    let district = postUtme.map(function(values){
        return markingAndCompiling(values.paperScore)
    })
    return district
}

function getStudent(id){
    let studentGetter = postUtme.find(function(item){
        return item.id === id
    })
    return studentGetter
}

function getStudentByLetter(letter){
    let letterGetter = postUtme.filter(function(items){
        return items.lastName.includes(letter)
    })
    return letterGetter
}

function bestStudent(){
    let getter = postUtme.sort(function(a,b){
        return b.paperScore - a.paperScore
    })
    console.log(getter)
}

function sortAge(){
    let getter = postUtme.sort(function(a,b){
        return a.age - b.age
    })
    university=getter
}

function removeStudent(id){
    let remover = postUtme.splice(id,1)
    console.log(remover)
}
//google about how to use findIndex function 
function findIndex(id){
    let indexFinder = university.findIndex(function(value){
        return value.id === id
    })
    console.log(indexFinder)
}
function callUniversity(){
    console.log(university)
}

sortAge()
callUniversity()
findIndex(3)

