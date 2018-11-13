// Promise 用于 XMLHttpRequest

get = (url) => new Promise((resolve, reject) => {
        // do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('get', url);

        req.onload = () => {
            if(req.status == 200) {
                resolve(req.response);
            } else {
                reject(Error(req.statusText));
            }
        }

        req.send();
    });

    //使用它
    get('story.json').then(res => console.log(res), err => console.log(err));