document.addEventListener("DOMContentLoaded", () => {
    const mainContainer = document.getElementById("main-container");
    const nextButton = document.querySelectorAll(".submit-question");
    const goBackButton = document.querySelectorAll(".previous-question");
    const submitButton = document.getElementById("submit-button");
    const finalResult = document.getElementById("final-result");
    const header = document.getElementById("header");
    const firstQuestion = document.getElementById("first");
    const secondQuestion = document.getElementById("second");

    const domande = document.querySelectorAll("fieldset");
     

    let domandaAttualeContatore = 0;

    const startQuiz = document.getElementById("start-quiz");
    startQuiz.addEventListener("click", (e)=>{
        e.preventDefault();
        header.style.display = "none";
        firstQuestion.style.display = "flex";
    } )

    // goBackButton.forEach(button =>{
    //     button.addEventListener("click", (e)=>{
    //         e.preventDefault();
    //         for (let i = 0; i < domande.length; i++) {
    //             let domandaAttuale = domande[domandaAttualeContatore];
    //             let previousQuestion = domandaAttuale.previousElementSibling
    //             domande[i].style.display = "none";
    //             previousQuestion[i].style.display = "flex";
                
    //         }
    //     })
    // })

    nextButton.forEach(button =>{
        button.addEventListener("click", (e)=>{
            e.preventDefault();
            // domande.forEach(domanda =>{
            //     let answers = domanda.querySelectorAll("input");
            //     let nextQuestion = domanda.nextElementSibling;
            //     console.log(nextQuestion)
            //     // domanda.style.display = "none";
            //     domanda.classList.remove("hidden");
            //     if(domanda.id = "seventh"){
            //         return
            //     }
            //     // nextQuestion.style.display = "flex";
            // })

            // for (let i = 0; i < domande.length; i++) {
            //     let domandaAttuale = domande[domandaAttualeContatore];
            //     let nextQuestion = domandaAttuale.nextElementSibling;
            //     console.log(nextQuestion)


                // domandaAttuale = domandaAttualeContatore + 1;

                // if(domandaAttuale.id = "seventh"){
                //     return
                // }
        
                
             
                /*

                let answers = domandaAttuale.querySelectorAll("input");
                let atLeastOneChecked = false;
                risposte.forEach(risposta =>{
                    if(risposta.checked){
                        atLeastOneChecked = true;
                        domande[i].style.display = "none";
                    }
                })
                if (atLeastOneChecked) {
                    successSubmit = true;
                    domande[i].style.display = "none";
                } else {
                    successSubmit = false;
                    // const errorMessage = document.createElement("div");
                    // console.log(errorMessage)
                    // errorMessage.innerHTML = "Seleziona un'opzione!"
                    // domande[i].appendChild(errorMessage)
                  
                    // alert("please select one answer")
                }
                */
                // domande[i].removeChild(errorMessage)
                //nextQuestion.className("flexa");
                // 
                
                
            })


        //     let atLeastOneChecked = false;
        //     const inputQ1 = document.getElementsByName("q1");
        //     inputQ1.forEach(input => {
        //         if(input.checked) {
        //             atLeastOneChecked = true;
        //             question.style.display = "none";
        //         }
        //     });
        //     if (atLeastOneChecked) {
        //         successSubmit = true;
        //         question.style.display = "none";
        //     } else {
        //         successSubmit = false;
        //         alert("please select one answer")
        //         return
        //     }
        //     // let nextQuestion = question.nextElementSibling;
        //     secondQuestion = firstQuestion.nextElementSibling;
        //     firstQuestion.style.display = "none"
        //     secondQuestion.style.display = "flex"
        })
    })

    submitButton.addEventListener("click", (e)=>{
        e.preventDefault();
        mainContainer.style.display = "none";
        finalResult.style.display = "block";
    })

        
})

