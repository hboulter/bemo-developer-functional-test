import React from "react";

const Contact = () => {
  return (
    <div>
      <img
        src="../images/contact-us.png"
        alt="cda-interview-guide"
        className="cda-img"
      />
      <h1 className="contact-heading">BeMo Academic Consulting Inc.</h1>
      <h3 className="contact-info">
        <span className="contact-info__heading">Toll Free</span>: 1-855-900-BeMo
        (2366) <br />
        <span className="contact-info__heading">Email</span>:
        info@bemoacademicconsulting.com
      </h3>
      <div className="form">
        <form className="font">
          Name: * <br />
          <input type="text" className="text-box" required />
          <br />
          Email Address: * <br />
          <input type="email" className="text-box" required />
          <br />
          How can we help you? * <br />
          <textarea type="text" className="text-box-2" required />
          <div>
            <input
              type="reset"
              className="reset"
              name="resetButton"
              value="Reset"
            />
            <input
              type="submit"
              className="submit"
              name="submitButton"
              value="Submit"
            />
          </div>
        </form>
        <div className="form-note">
          <span className="form-note__note"> Note</span>
          <span className="form-note__body">
            : If you are having difficulties with our contact us form above,
            send us an email to info@bemoacademicconsulting.com (copy & paste
            the email address)
          </span>
        </div>
      </div>
    </div>
  );
};
export default Contact;
