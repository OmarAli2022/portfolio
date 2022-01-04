import "./Contact.css";
import Phone from "../../img/phone_number.png";
import Email from "../../img/mail.png";
import Address from "../../img/address.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_m3jcxbp",
        "template_i56yoaj",
        formRef.current,
        "user_ecJcqqEBCp9xkvX4aMzGG"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Want to build a project?</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +46 73 667 56 39
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              omar.ali@omarabdiali.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Kronoberg county 365 32 Lessebo Sweden. 
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Fullfill your dream!</b> Get in touch. Always available for
            freelancing if the right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor:"#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;