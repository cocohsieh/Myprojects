let questions = document.querySelectorAll(".question-box")

// 因為是querySelectorAll，要用forEach loop 每個內容
questions.forEach(function(question){
    // console.log(question)
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", function(){
        question.classList.toggle("show-text")
    })
})

// questions.addEventListener("click", function(){
//     console.log("ya")
// })



// // select three btns -> use querySelectorAll
// let btns = document.querySelectorAll(".question-btn");

// // loop over all that btns
// btns.forEach(function(btn){ //btn -> value
//     btn.addEventListener("click", function(e){
//         const question = e.currentTarget.parentElement.parentElement 
//         // 找目前按的按鈕的父元素的父元素 
//         // = 當前question-btn -> 父question-title -> 父的父question-box
//         question.classList.toggle("show-text")
//     })
// })