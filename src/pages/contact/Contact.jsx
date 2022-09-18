import './contact.css';

export default function Contact() {
    return (
        <section className="contact">
            <form action="form" className="contact-form">
                <label htmlFor="input">Your name</label>
                <input type="text" name="input" className="input" placeholder='enter your name here'/>
                
                <label htmlFor="input">Your email</label>
                <input type="text" name="input" className="input" placeholder='enter your email here'/>
                
                <label htmlFor="textarea">Your message</label>
                <textarea name="textarea" className="input msg" placeholder='enter your message here'></textarea>

                <input type="submit" value="SUBMIT" className='btn' />
            </form>
        </section>
    );
}