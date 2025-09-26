import '../../SASS/item/contact.css';

function ContactForm() {
  return (
    <div className="contact-content">
      <form
        action="https://formsubmit.co/contacthh.dev@gmail.com"
        method="POST"
        style={{ maxWidth: '500px', margin: '0 auto' }}
      >
        <input type="hidden" name="_subject" value="Nouveau message du portfolio !" />
        <input type="hidden" name="_next" value="https://houmadi-hairou-z9fj.vercel.app/merci" />

        <label htmlFor="nom">Nom</label>
        <input
          id="nom"
          type="text"
          name="nom"
          placeholder="Nom"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Votre e-mail"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          className="message"
          name="message"
          placeholder="Votre message"
          required
        />

        <input
          type="submit"
          value="Contactez-moi"
          style={{ marginTop: '1em' }}
        />
      </form>
    </div>
  );
}

export default ContactForm;