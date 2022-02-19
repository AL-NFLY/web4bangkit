
const dislikeNumber = "NUMBERDislike";
if(typeof(Storage) !== "undefined"){
    if(localStorage.getItem(dislikeNumber) === "undefined"){
        localStorage.setItem(dislikeNumber, 0);
    }
    const dislikeButton = document.querySelector("#dislikeButton");
    const countDislike = document.querySelector("#countDislike");
    dislikeButton.addEventListener('click', function(event){
        let dislike = localStorage.getItem(dislikeNumber);
        dislike++;
        localStorage.setItem(dislikeNumber, dislike);
        countDislike.innerText = localStorage.getItem(dislikeNumber);
    });
}

const likeNumber = "NUMBERLike";
if(typeof(Storage) !== "undefined"){
    if(localStorage.getItem(likeNumber) === "undefined"){
        localStorage.setItem(likeNumber, 0);
    }
    const likeButton = document.querySelector("#likeButton");
    const countLike = document.querySelector("#countLike");

    likeButton.addEventListener('click', function(event){
        let like = localStorage.getItem(likeNumber);
        like++;
        localStorage.setItem(likeNumber, like);
        countLike.innerText = localStorage.getItem(likeNumber);
    });
}

if(localStorage.getItem(dislikeNumber)){
    const dislikeEle = document.querySelector("#countDislike")
    dislikeEle.innerText = localStorage.getItem(dislikeNumber);
}

if(localStorage.getItem(likeNumber)){
    const likeEle = document.querySelector("#countLike");
    likeEle.innerText = localStorage.getItem(likeNumber);
}