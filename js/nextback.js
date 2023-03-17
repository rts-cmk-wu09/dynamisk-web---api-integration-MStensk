const prevButton = document.createElement("button");
const nextButton = document.createElement("button");
nextButton.setAttribute("id","next");
prevButton.setAttribute("id","back");
body.append(prevButton);
body.append(nextButton);
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

// event listeners

const HandleNext = (e) => {

};




nextButton.addEventListener("click",HandleNext);
prevButton.addEventListener("click")