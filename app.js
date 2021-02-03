console.log("Hello World");
console.warn("Keep Practicing");
console.error("KEEP PRACTICING");

let clubList = [["man u", 50], ["chelsea", 45], ["barca", 37], ["napoli", 35], ["arsenal", 40 ], ["juventus", 35] ];

function scoreSheet(val1, val2){
    if(val1 > val2){
        return "approved";
    }else if(val1 < val2) {
        return "not approved";
    }else if(val1 === val2){
        return "a tie";
    }else{
        return 'try again';
    }
};
console.log(scoreSheet(clubList[-1], clubList[-3]));

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
        status:"pending"
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
        status:"pending"
    },
];

function checkList(input1, input2){
    if(input1 > input2){
        return true
    }else if(input1 < input2){
        return false
    }else{
        return "tie"
    }
};
console.log(checkList(profile[4].age, profile[2].age))


