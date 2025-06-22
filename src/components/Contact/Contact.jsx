import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Contact.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import { Icon } from '@iconify/react';
import SocialLinks from '../SocialLinks/SocialLinks';
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';

const Contact = ({ data, socialData }) => {
  const { title, text, subTitle } = data;
  const formRef = useRef();
  const [alert, setAlert] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_xuk6n3a',    // à remplacer
      'template_6w8m15m',   // à remplacer
      formRef.current,
      'gObdomjwP7_7aMKRv'      // à remplacer
    )
    .then(() => {
      setAlert('Message envoyé avec succès !');
      formRef.current.reset();
    }, () => {
      setAlert('Erreur lors de l\'envoi du message.');
    });
  };

  return (
    <section id="contact" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Contact" />
      <div className="container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
        <div className="row d-flex">
          <div className="col-lg-6">
            <h3 className="st-contact-title">Dis juste bonjour</h3>
            <div id="st-alert"></div>
            <form ref={formRef} onSubmit={handleSubmit} className="st-contact-form" id="contact-form">
              <div className="st-form-field">
                <input type="text" id="name" name="name" placeholder="Votre Nom" required />
              </div>
              <div className="st-form-field">
                <input type="text" id="email" name="email" placeholder="Vodre Adresse Email" required />
              </div>
              <div className="st-form-field">
                <input type="text" id="subject" name="subject" placeholder="Votre Sujet" required />
              </div>
              <div className="st-form-field">
                <textarea cols="30" rows="10" id="message" name="message" placeholder="Votre Message" required></textarea>
              </div>
              <button className='st-btn st-style1 st-color1' type="submit" id="submit" name="submit">Envoyer le Message</button>
            </form>
            {alert && <div id="st-alert">{alert}</div>}
            <div className="st-height-b0 st-height-lg-b30"></div>
          </div>
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b40"></div>
            <h3 className="st-contact-title">{title}</h3>
            <div className="st-contact-text">{text}</div>
            <div className="st-contact-info-wrap">
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="fa-regular:envelope" />
                </div>
                <div className="st-single-info-details">
                  <h4>Email</h4>
                  <Link to="#">alphredtatong@gmail.com</Link>
                </div>
              </div>
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="fa-solid:phone-alt" />
                </div>
                <div className="st-single-info-details">
                  <h4>Téléphone</h4>
                  <span>+237 6 51 13 84 33 </span>
                  <span>+237 6 94 97 98 61</span>
                </div>
              </div>
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="mdi:location" />
                </div>
                <div className="st-single-info-details">
                  <h4>Adresse</h4>
                  <span>Douala, Cameroun <br />pk 10, pk 17</span>
                </div>
              </div>
              <div className="st-social-info">
                <div className="st-social-text">{subTitle}</div>
                <SocialLinks data={socialData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  )
}

Contact.propTypes = {
  data: PropTypes.object,
  socialData: PropTypes.array,
}

export default Contact;
