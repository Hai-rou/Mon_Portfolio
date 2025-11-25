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
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/contacthh.dev@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          nom: formData.nom,
          email: formData.email,
          message: formData.message,
          _subject: 'Nouveau message du portfolio !',
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nom: '', email: '', message: '' });
        setFocused({ nom: false, email: false, message: false });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
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
            onSubmit={handleSubmit}
            className="contact-form"
          >
            {status === 'success' && (
              <div className="form-message success">
                <Icon icon="mdi:check-circle" width="24" height="24" />
                <p>Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.</p>
              </div>
            )}
            
            {status === 'error' && (
              <div className="form-message error">
                <Icon icon="mdi:alert-circle" width="24" height="24" />
                <p>Erreur lors de l'envoi. Veuillez réessayer ou m'envoyer un email directement.</p>
              </div>
            )}

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

            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
              <span className="btn-text">
                {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
              </span>
              <Icon 
                icon={status === 'sending' ? 'mdi:loading' : 'mdi:send'} 
                width="20" 
                height="20" 
                className={`btn-icon ${status === 'sending' ? 'spinning' : ''}`}
              />
              <div className="btn-shine"></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;