import '../../styles/global.css';
import '../../styles/contactForm.css';

export const ContactForm = () => {
    return (
        <div className="contact-form">
            <form action="form" className="form">
                <input type="text" name="input" className="input" placeholder='Name'/>
                <input type="text" name="input" className="input" placeholder='Email'/>
                <textarea name="textarea" className="input msg" placeholder='Message'></textarea>

                <input type="submit" value="Let´s work &#128588;" className='btn' />
            </form>
        </div>
    );
}