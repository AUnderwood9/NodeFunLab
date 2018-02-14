let path = require("path");
let fs = require("fs");
let rp = require("request-promise");
let redditArr = [];

let dataPath = path.join(__dirname, "temp.json");
let popularDataPath = path.join(__dirname, "popular-articles.json");

rp("https://www.reddit.com/r/popular.json",(err, res, body) => {
    if(err) console.log(err);

    // console.log(res);
    // console.log(body);

    // fs.writeFile(dataPath, res.body, 
    //     (err) => {
    //         if(err) console.log(err);
    //     }
    // )
    // console.log(JSON.parse(res.body).data.children);

    JSON.parse(res.body).data.children.map(
        (item) => {
            // console.log(item.data.title);
            redditArr.push(
                {
                    title: item.data.title,
                    url: "https://www.reddit.com" + item.data.permalink,
                    author: item.data.author
                }
            )
        }
    )

    // console.log(redditArr);
    fs.writeFile(popularDataPath, JSON.stringify(redditArr), err => {
        if(err) console.log(err);
    })
    // redditArr.push(res.body.data.children)
})