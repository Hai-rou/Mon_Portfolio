import '../../SASS/item/contact.css'

function Contact () {
    return(
        <div className="contact-content">
            <form>
                
                <input 
                type="text"
                placeholder="Nom"

                />
                <input 
                type="text"
                placeholder="Votre e-mail"
                />

                <input 
                type="text"
                placeholder="Votre message"
                />
                
                <button className='submit'>Me contacter</button>

            </form>
        </div>
    )
}

export default Contact;