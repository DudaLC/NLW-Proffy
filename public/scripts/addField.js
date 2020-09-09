//Achar o bottão de adicionar horario
document.querySelector("#add-time")

//QUANDO clicar no botão
.addEventListener('click', cloneField)

// vai acontecer:
function cloneField() {
    // duplicar campos.Quais campos?
   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

   //Quero que meu segundo campo venha limpo.
   //tenho que pegar esses campos.. que campos?
   const fields = newFieldContainer.querySelectorAll('input')

   //para cada campo, limpar
   fields.forEach(function(field) {

    //essa função pega o field e limpa ele
       field.value = ""
   });

   //o novo campo é colocado na pagina.. aonde?
   document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    //duplicar os campos

    //colocar na página