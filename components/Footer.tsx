import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import footerStyles from '../styles/Footer.module.css';

export default function Footer() {
  const path = useRouter().pathname;

  const [input, setInput] = useState<string>('');

  function handleSubmit(e): void {
    e.preventDefault();
    setInput('Sending...');

    function validateEmail(email): boolean {
      const re: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    setTimeout(() => {
      if (validateEmail(input)) {
        setInput('Message sent');
      } else {
        setInput('Invalid Email');
      }
    }, 700);
  }
  useEffect(() => {
    setInput('');
  }, [path]);

  return (
    <footer>
      <section className={footerStyles.main__content}>
        <div>
          <h2>About us</h2>
          <div className={footerStyles.content}>
            <span>© 2020 THE NOMAD B COMPANY</span>
          </div>
        </div>

        <div>
          <h2>CONTACT ME</h2>
          <div className={footerStyles.content}>
            <span>goodnajohn19@gmail.com</span>
          </div>
        </div>

        <div>
          <h2>sign up for the next journey</h2>
          <div className={footerStyles.content}>
            <form action="#" onSubmit={(e) => handleSubmit(e)}>
              <input
                placeholder="Email Address"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </form>
          </div>
        </div>
      </section>
    </footer>
  );
}
