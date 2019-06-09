const images = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg'];

function loadImage(url) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.src = url;
        img.onload = () => resolve(img);
        img.onerror = () => reject(img);
    })
}

const promise = [];
for (let item of images) {
    promise[promise.length] = loadImage(item);
}

Promise.all(promise)
    .then(item => {
        for (let key of item) {
            document.body.appendChild(key);
        }
    })
    .catch(error => {
        console.log(error)
    });