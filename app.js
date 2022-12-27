(function(){

    //handling the input form first
    const form = document.querySelector("#message-form")
    form.addEventListener('submit', function(e){
        e.preventDefault()

        //get the user input
        const message = document.querySelector('#message')     //since message is id add #
        const feedback = document.querySelector('.feedback')  // since feedback is class add .
        const messageContent = document.querySelector('.message-content')

        if(message.value === '')
        {
            //show feedback for few seconds when user encounters for the first time
            feedback.classList.add('show')
            setTimeout(function(){
                feedback.classList.remove('show')
            },3000)
        }

        else
        {
            messageContent.textContent = message.value
            message.value = ''
        }
    })
})()