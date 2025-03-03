document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const firstQuestion = document.getElementById("first");
    const lastQuestion = document.getElementById("seventh");
    const result = document.getElementById("final-result")

    const leone = document.getElementById("leone")
    const orso = document.getElementById("orso")
    const lupo = document.getElementById("lupo")
    const delfino = document.getElementById("delfino")

    const buttonsContainer = document.querySelectorAll(".buttons");

    const finishQuiz = document.getElementById("submit-form");

 
    const errorMessage = document.createElement("div");
    errorMessage.innerHTML = "Seleziona un'opzione!";
    errorMessage.style.color = "red";
    errorMessage.style.marginTop = "3rem";
    
    let punteggio = 0;
    let chosenAnswer = 0;

    const startQuiz = document.getElementById("start-quiz");
    startQuiz.addEventListener("click", (e)=>{
        e.preventDefault();
        header.style.display = "none";
        firstQuestion.style.display = "flex";
    })

    buttonsContainer.forEach(buttonContainer => {

        const question = buttonContainer.parentElement;
        const nextButton = buttonContainer.querySelector(".submit-question");
        const previousButton = buttonContainer.querySelector(".previous-question");
        const answers = question.querySelectorAll("input"); 

        nextButton.addEventListener("click", (e) => {
            e.preventDefault();  
            let atLeastOneChecked = false;
            
            answers.forEach(answer =>{
                    if(answer.checked){
                        atLeastOneChecked = true;
                        if(answer.value === "delfino"){
                            punteggio += 4;
                            chosenAnswer = "delfino";
                            console.log(chosenAnswer);
                            console.log(punteggio);
                        }
                        if(answer.value === "orso"){
                            punteggio += 2;
                            chosenAnswer = "orso";
                            console.log(chosenAnswer);
                            console.log(punteggio)
                        }
                        if(answer.value === "lupo"){
                            punteggio += 3;
                            chosenAnswer = "lupo";
                            console.log(chosenAnswer);
                            console.log(punteggio)
                        }
                        if(answer.value === "leone"){
                            punteggio += 1;
                            chosenAnswer = "leone";
                            console.log(chosenAnswer);
                            console.log(punteggio)
                        }
                    }
                })

           
            if (atLeastOneChecked) {
                successSubmit = true;
                
                // console.log("un input è selezionato " + successSubmit);
                let nextQuestion = question.nextElementSibling;
                if (nextQuestion === null) {
                    return; 
                }
                question.style.display = "none";
                nextQuestion.style.display = "flex";
            } else {
                successSubmit = false;
                // console.log("un input è selezionato " + successSubmit);
                question.appendChild(errorMessage);
            }
            atLeastOneChecked = true;
        
        })
            
        
        previousButton.addEventListener("click", (e) =>{
            e.preventDefault();
            let previousQuestion = question.previousElementSibling;
            if(chosenAnswer === "delfino"){
                punteggio -= 4
            }
            if(chosenAnswer === "orso"){
                punteggio -= 2
            }
            if(chosenAnswer === "lupo"){
                punteggio -= 3
            }
            if(chosenAnswer === "leone"){
                punteggio -= 1
            }
            question.style.display = "none";
            previousQuestion.style.display = "flex";
            errorMessage.style.display = "none";
        })
    })   

    console.log(punteggio)

    finishQuiz.addEventListener("click", (e)=> {
        e.preventDefault();
        const lastAnswer = lastQuestion.querySelectorAll("input"); 
        let isChecked = false;
        lastAnswer.forEach(answer =>{
            if(answer.checked){
                isChecked = true;
            }
        })
        
        if(isChecked){
            successSubmit = true; 
            console.log("un input è selezionato " + successSubmit);
            lastQuestion.style.display = "none";
            result.style.display = "flex";
            if(punteggio >= 7 && punteggio <= 12){
                leone.style.display = "block";
            }
            if(punteggio >= 13 && punteggio <= 18){
                orso.style.display = "block";
            }
            if(punteggio >= 19 && punteggio <= 24){
                lupo.style.display = "block";
            }
            if(punteggio >= 25 && punteggio <= 28){
                delfino.style.display = "block";
            }
        }else{
            successSubmit = false;
            console.log("un input è selezionato " + successSubmit);
            lastQuestion.appendChild(errorMessage);

        }
    })

})


// let answers = domandaAttuale.querySelectorAll("input");
// let atLeastOneChecked = false;
// risposte.forEach(risposta =>{
//     if(risposta.checked){
//         atLeastOneChecked = true;
//         domande[i].style.display = "none";
//     }
// })
// if (atLeastOneChecked) {
//     successSubmit = true;
//     domande[i].style.display = "none";
// } else {
//     successSubmit = false;
    // const errorMessage = document.createElement("div");
    // console.log(errorMessage)
    // errorMessage.innerHTML = "Seleziona un'opzione!"
    // domande[i].appendChild(errorMessage)
  
    // alert("please select one answer")
//}

// domande[i].removeChild(errorMessage)
//nextQuestion.className("flexa");
// 