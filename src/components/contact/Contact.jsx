

export default function Contact() {
    return (
        <section className="contact">
            <form action="form" className="contact-form">
                <label htmlFor="input">Your name</label>
                <input type="text" name="input" className="input" />
                
                <label htmlFor="input">Your email</label>
                <input type="text" name="input" className="input" />
                
                <label htmlFor="textarea">Your message</label>
                <textarea name="textarea" className="msg"></textarea>

                <input type="button" value="submit" />
            </form>
        </section>
    );
}