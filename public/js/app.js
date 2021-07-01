console.log('Client Side javascript file is loaded')


const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')
const msg1 = document.querySelector('#message-1')
const msg2 = document.querySelector('#message-2')


//msg1.textContent = 'qwee'

weatherForm.addEventListener('submit', (ev) => {
    ev.preventDefault()
    const location = searchElement.value

    msg1.textContent = 'Loading...'
    msg2.textContent = ' '


    fetch('http://localhost:3000/weather?address=' + location).then((response) => {

        response.json().then((data) => {
            if (data.error) {
                msg1.textContent = data.error
                console.log(data.error)
            } else {
                msg1.textContent = data.address
                msg2.textContent = data.forecast.temperature


            }
        })
    })

})