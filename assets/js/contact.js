/*-------------EMAIL JS---------------------*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publickey
    emailjs.sendForm('service_s17noji','template_8r4n3yq','#contact-form','vaSyHZF2Jay6ennpb')
    .then(() => {
        //Show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        //remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        //clear input fields
        contactForm.reset()
    }, ()=> {
        //show errror message
        contactMessage.textContent = 'Message not sent (service error)'
    })
}

contactForm.addEventListener('submit', sendEmail)