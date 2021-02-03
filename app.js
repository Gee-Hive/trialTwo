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

let 
