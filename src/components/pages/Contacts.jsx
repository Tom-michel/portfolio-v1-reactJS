import React from "react";
import { Heading } from "../common/Heading";
import { contacts } from "../data/my-data";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: 'green',
    borderWidth: 2,
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 2,
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 6,
    padding: '4px !important', // override inline-style
  },
});

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'var(--primaryColor)',
  },
  '& label': {
    color: 'var(--primaryColor)',
  },
  '& defaultValue': {
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
});

export const Contacts = () => {
	const [name, setName] = React.useState('Cat in the Hat');
	const [email, setEmail] = React.useState('Cat in the Hat');
	const [subject, setSubject] = React.useState('Cat in the Hat');
	const [message, setMessage] = React.useState('Cat in the Hat');

  return (
    <section id="conatcts" className="bg_dark py-5">
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
		          <div className="col-md-6 formContactDi">
		          	<form
									onSubmit={(event) => {
										event.preventDefault();
									}}
								>
									<div className="row">
										<div className="col-md-6">
											<TextField
												id="outlined-controlled"
												label="Name"
												helperText="Please enter your name"
												//value={name}
												size="small"
												onChange={(event) => {
													setName(event.target.value);
												}}
											/>
											<p>{name}</p>
										</div>
										<div className="col-md-6">
											<CssTextField defaultValue="TOM" label="Custom CSS" id="custom-css-outlined-input" />
										</div>
										<div className="col-md-12">
											
										</div>
										<div className="col-md-12">
											
										</div>
										<div className="col-md-12">
											<Button type="submit">Submit</Button>
											<Button type="submit">Submit</Button>
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
