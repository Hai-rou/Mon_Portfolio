import '../../SASS/item/contact.scss';
import { Icon } from '@iconify/react';
import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });
  const [focused, setFocused] = useState({
    nom: false,
    email: false,
    message: false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (field) => {
    setFocused({ ...focused, [field]: true });
  };

  const handleBlur = (field) => {
    if (!formData[field]) {
      setFocused({ ...focused, [field]: false });
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">
              <Icon icon="mdi:email-outline" width="32" height="32" />
            </div>
            <div className="info-content">
              <h3>Email</h3>
              <p>contacthh.dev@gmail.com</p>
            </div>
          </div>
          
          <div className="info-card">
            <div className="info-icon">
              <Icon icon="mdi:map-marker-outline" width="32" height="32" />
            </div>
            <div className="info-content">
              <h3>Localisation</h3>
              <p>France, Disponible en remote</p>
            </div>
          </div>
          
          <div className="info-card">
            <div className="info-icon">
              <Icon icon="mdi:clock-outline" width="32" height="32" />
            </div>
            <div className="info-content">
              <h3>Disponibilité</h3>
              <p>Lun - Ven, 7h - 18h</p>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form
            action="https://formsubmit.co/contacthh.dev@gmail.com"
            method="POST"
            className="contact-form"
          >
            <input type="hidden" name="_subject" value="Nouveau message du portfolio !" />
            <input type="hidden" name="_next" value="https://houmadi-hairou-z9fj.vercel.app/" />
            <input type="hidden" name="_captcha" value="false" />

            <div className={`form-group ${focused.nom || formData.nom ? 'focused' : ''}`}>
              <label htmlFor="nom">
                <Icon icon="mdi:account-outline" width="20" height="20" />
                <span>Nom complet</span>
              </label>
              <input
                id="nom"
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                onFocus={() => handleFocus('nom')}
                onBlur={() => handleBlur('nom')}
                placeholder="Votre nom"
                required
              />
              <div className="input-border"></div>
            </div>

            <div className={`form-group ${focused.email || formData.email ? 'focused' : ''}`}>
              <label htmlFor="email">
                <Icon icon="mdi:email-outline" width="20" height="20" />
                <span>Adresse email</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
                placeholder="votre.email@exemple.com"
                required
              />
              <div className="input-border"></div>
            </div>

            <div className={`form-group message-group ${focused.message || formData.message ? 'focused' : ''}`}>
              <label htmlFor="message">
                <Icon icon="mdi:message-text-outline" width="20" height="20" />
                <span>Votre message</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={() => handleBlur('message')}
                placeholder="Décrivez votre projet ou votre demande..."
                rows="6"
                required
              />
              <div className="input-border"></div>
            </div>

            <button type="submit" className="submit-btn">
              <span className="btn-text">Envoyer le message</span>
              <Icon icon="mdi:send" width="20" height="20" className="btn-icon" />
              <div className="btn-shine"></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;