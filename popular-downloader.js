let path = require("path");
let fs = require("fs");
let rp = require("request-promise");

rp("https://reddit.com/r/popular.json", 
    (err, res, body) => {
        if(err) console.log(err);
        // console.log(JSON.parse(body));
        JSON.parse(res.body).data.children.map(
            (item, index) => {
                if(item.data.media){
                    if(item.data.media.reddit_video !== undefined || item.data.media.oembed !== undefined){
                        console.log(`${item.data.title}, is gif? ${item.data.media.reddit_video}`);
                        console.dir(item.data.media.reddit_video);
                    }
                    // console.log(item)
                }
                // console.log(item.data);
            }
        )
    }
)