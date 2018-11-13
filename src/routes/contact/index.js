import { h } from 'preact';
import style from './style';
import instagram from '../../assets/social/instagram.svg'
import github from '../../assets/social/github.svg'
import twitter from '../../assets/social/twitter.svg'
import linkedin from '../../assets/social/linkedin.svg'
import email from '../../assets/social/email.svg'


const Contact = () => (
  <section id="contact" class={style.contact}>
  	<div className="contact-container">
    	<h3 className="gradient-text">slide into my DMs</h3>

    	<div class={style.contactSocial}>
    		<a href="https://github.com/kellsbells" target="_blank" rel="noopener noreferrer">
    			<img src={github} alt="Github" />
    		</a>
    		<a href="https://www.instagram.com/kelleebutton/" target="_blank" rel="noopener noreferrer">
    			<img src={instagram} alt="Instagram" />
    		</a>
    		
    		<a href="https://twitter.com/kelleebutton" target="_blank" rel="noopener noreferrer">
    			<img src={twitter} alt="Twitter" />
    		</a>
    		<a href="https://www.linkedin.com/in/kelleemartins" target="_blank" rel="noopener noreferrer">
    			<img src={linkedin} alt="LinkedIn" />
    		</a>
    		<a href="mailto:kelleemartins@gmail.com" rel="noopener noreferrer">
    			<img src={email} alt="Email" />
    		</a>
    	</div>
		</div>
	</section>
);

export default Contact;
