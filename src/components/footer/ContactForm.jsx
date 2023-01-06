import '../../styles/global.css';
import '../../styles/contactForm.css';

export const Contact = () => {
    return (
        <section className="contact">
            <form action="form" className="contact-form">
                {/* <label htmlFor="input">Your name</label> */}
                <input type="text" name="input" className="input" placeholder='Name'/>
                
                {/* <label htmlFor="input">Your email</label> */}
                <input type="text" name="input" className="input" placeholder='Email'/>
                
                {/* <label htmlFor="textarea">Your message</label> */}
                <textarea name="textarea" className="input msg" placeholder='Message'></textarea>

                <input type="submit" value="Let´s work &#128588;" className='btn' />
            </form>
        </section>
    );
}