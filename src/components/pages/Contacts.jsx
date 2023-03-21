import React, { useState } from "react";
import { Heading } from "../common/Heading";
import { contacts } from "../data/my-data";
import { Button, TextField } from "@mui/material";
// import { styled } from '@mui/material/styles';

/*const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'var(--primaryColor)',
  },
  '& label': {
    color: 'var(--primaryColor)',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'var(--primaryColor)',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'var(--primaryColor)',
    },
    '&:hover fieldset': {
      borderColor: 'var(--white)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--primaryColor)',
    },
  },
});*/

export const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    }
    if (!subject) {
      errors.subject = "Subject is required";
    }
    if (!message) {
      errors.message = "Message is required";
    }
    setErrors(errors);

    // Submit logic
    // ...
  };

  return (
    <section id="conatacts" className="bg_dark py-5">
      <div className="container">
        <Heading title="contactMe" param=" " />
        {contacts.map((cont) => (
          <>
            <p className="description pb-0 pb-md-5">
              <span>{cont.text}</span>
            </p>
            <div className="row gap-md-0 gap-5 align-items-start">
              <div className="urlsContactDiv col-md-6 position-relative d-flex flex-column align-items-center gap-3">
                {cont.urls.map((url) => (
                  <Button
                    target="blank"
                    href={url.url}
                    className="socialBox d-flex justify-content-center py-4 w-100"
                  >
                    <div className="content d-flex align-items-center justify-content-start gap-4">
                      <img src={url.icon} alt="icon" />
                      <span className="text fw-bold">{url.text}</span>
                    </div>
                  </Button>
                ))}
              </div>
              <div className="col-md-6 formContactDiv">
                <form onSubmit={handleSubmit}>
                  <div className="row gap-3">
                    <div className="col-md-12">
                      <TextField
                        label="Name"
                        size="small"
                        fullWidth
                        //sx={{ m: 1 }}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        error={!!errors.name}
                        helperText={errors.name}
                      />
                    </div>
                    <div className="col-md-12">
                      <TextField
                        label="Email"
                        type="email"
                        size="small"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={!!errors.email}
                        helperText={errors.email}
                      />
                    </div>
                    <div className="col-md-12">
                      <TextField
                        label="Subject"
                        size="small"
                        fullWidth
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        error={!!errors.subject}
                        helperText={errors.subject}
                      />
                    </div>
                    <div className="col-md-12">
                      <TextField
                        label="Message"
                        multiline
                        rows={4}
                        size="small"
                        fullWidth
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        error={!!errors.message}
                        helperText={errors.message}
                      />
                    </div>
                    <div className="col-md-12 d-flex justify-content-end gap-3">
                      <Button
                        className="btn sendMail"
                        /*sx={{ m: 1 }}*/ type="submit"
                        endIcon={<img src={cont.mail} alt="" />}
                      >
                        Send
                      </Button>
                      <Button
                        className="btn primaryBtn"
                        /*sx={{ m: 1 }}*/ type="submit"
                        endIcon={<img src={cont.zap} alt="" />}
                      >
                        Send
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};
