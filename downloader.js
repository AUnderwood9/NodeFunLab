let path = require("path");
let fs = require("fs");
let rp = require("request-promise");

let savePath = path.join(__dirname, "downloads/stuff.jpeg");
let filePath = path.join(__dirname, "downloads/temp.json");

// console.log(savePath);

// rp("https://i.redd.it/ykzqnszry9g01.jpg",
// (err, res, body) => {
//     console.log(res);

//     fs.writeFile(filePath,JSON.stringify(res), 
//         (err) => {
//             if(err) console.log(err);
//         }
//     )
// })

// fetch("https://hospodarets.com/images/img/about.jpeg")
// .then((res) => {
//     return Promise.resolve(response)
// })
// .then((res) => {
//     return response.blob();
// })
// .catch((err) => {
//     if(err) console.log(err);
// })

rp("https://hospodarets.com/images/img/about.jpeg")
.then((response) => {
    return Promise.resolve(response)
})
.then((response) => {
    return response.blob();
})
.catch((err) => {
    if(err) console.log(err);
})