import React, { useEffect, useState } from "react";
import * as emailjs from "emailjs-com";

function ContactForm() {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    companyName: "",
    email: "",
    phoneNum: "",
    message: "",
  });

  useEffect(() => {});

  const submitForm = (e) => {
    e.preventDefault();
    if (contactInfo.name && contactInfo.email && contactInfo.phoneNum) {
      const { name, companyName, email, phoneNum, message } = contactInfo;
      var template_params = {
        from_name: email,
        customer_name: name,
        company_name: companyName,
        customer_number: phoneNum,
        custmer_message: message,
      };
      var service_id = "default_service";
      var template_id = "hermits_contacts";
      var user_id = "user_08YFRVmanS4QXCBcwsEh1";
      emailjs.send(service_id, template_id, template_params, user_id);
      resetForm();
    } else {
    }
  };

  const resetForm = () => {
    setContactInfo({
      name: "",
      companyName: "",
      email: "",
      phoneNum: "",
      message: "",
    });
  };

  return (
    <>
      <form onSubmit={submitForm} className="form-tag">
        <div className="form-row">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={contactInfo.name}
              onChange={(e) =>
                setContactInfo({ ...contactInfo, name: e.target.value })
              }
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Company"
              value={contactInfo.companyName}
              onChange={(e) =>
                setContactInfo({ ...contactInfo, companyName: e.target.value })
              }
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={contactInfo.email}
              onChange={(e) =>
                setContactInfo({ ...contactInfo, email: e.target.value })
              }
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Number"
              value={contactInfo.phoneNum}
              onChange={(e) =>
                setContactInfo({ ...contactInfo, phoneNum: e.target.value })
              }
            />
          </div>
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            rows="3"
            placeholder="Message"
            value={contactInfo.message}
            onChange={(e) =>
              setContactInfo({ ...contactInfo, message: e.target.value })
            }
          ></textarea>
        </div>
        <div className="submit-button">
          <button type="submit">Send</button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
