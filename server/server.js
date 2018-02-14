let path = require("path");
let fs = require("fs");
let chirpArray = [
    {
        usrName: "Tyrion Lannister",
        comment: "A mind needs books as a sword needs a whetstone, if it is to keep its edge."
    },{
        usrName: "Eddard Stark",
        comment: "The man who passes the sentence should swing the sword."
    },{
        usrName: " Jaqen H'ghar",
        comment: "A girl gives a man his own name?"
    },{
        usrName: "Dany",
        comment: "I'm not going to stop the wheel. I'm going to break the wheel."
    },{
        usrName: "Jon Snow",
        comment: "The more you give a king, the more he wants. We are walking on a bridge of ice with an abyss on either side. Pleasing one king is difficult enough, pleasing two is hardly possible."
    }
];

let dataPath = path.join(__dirname, "../chrips.json");

// console.log(path);
// console.log(fs);

// console.log(chirpArray);

fs.writeFile(dataPath, JSON.stringify(chirpArray), 
    (err) => {
        if (err) console.log(err);
    }
)