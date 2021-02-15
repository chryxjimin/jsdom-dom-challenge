const counterH1 = document.querySelector("#counter")
const buttonGroup = document.querySelector("#button-group")
const likesUl = document.querySelector(".likes")
const pauseBtn = document.querySelector("#pause")


let counter = 0
let likedNumbers = {}
let paused = false



buttonGroup.addEventListener("click", event => {
    if (event.target.id === "plus") {
        changeCounter(1);
    } else if (event.target.id === "minus") {
        changeCounter(-1);
    } else if (event.target.id === "heart") {
        updateLikes();
    } else if (event.target.id === "pause") {
        togglePause()
    }
   
})

setInterval(() => {
    if (!paused) {
        changeCounter(1);
    }
}, 1000)

function togglePause() {
    paused = !paused
    const allBtns = document.querySelectorAll("button")
    allBtns.forEach(btn => {
        if (btn.id !== "pause") {
            console.log(btn);
            btn.disabled = paused;
        }
    })

    if (paused) {
        pauseBtn.textContent = "resume";
    } else {
        pauseBtn.textContent = "pause";
    }
}

function changeCounter(changeAmount) {
    counter = counter + changeAmount;
    counterH1.textContent = counter
}

function updateLikes() {
    if (likedNumbers[counter]) {
        likedNumbers[counter] += 1
        const li = document.querySelector(`[data-number='${counter}']`)
        li.textContent = `${counter} has been liked ${likedNumbers[counter]} times`
        // console.log(li)
    } else {
        likedNumbers[counter] = 1
        const li = document.createElement("li")
        li.textContent = `${counter} has been liked 1 time`
        li.dataset.number = counter
        likesUl.append(li)
       
    }
    document.getElementById("submit").addEventListener("click", function(event) {
        event.preventDefault();
        let comment = document.querySelector('input#comment-input').value 
        let commentsList = document.querySelector('.comments')
        let p = document.createElement("p");
        let node = document.createTextNode(comment)
        p.appendChild(node);
        commentsList.appendChild(p);
        document.querySelector('input#comment-input').value = '';
        console.log(commentsList)
    })
 
}





