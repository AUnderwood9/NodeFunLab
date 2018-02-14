let path = require("path");
let fs = require("fs");
let rp = require("request-promise");

rp("https://reddit.com/r/popular.json", 
    (err, res, body) => {
        if(err) console.log(err);
        // console.log(JSON.parse(body));
        JSON.parse(res.body).data.children.map(
            (item, index) => {
                if(!item.data.is_video){
                    console.log(`${item.data.title}, This ain't a Video/Gif`);
                    // console.log(item)
                }
                // console.log(item.data);
            }
        )
    }
)