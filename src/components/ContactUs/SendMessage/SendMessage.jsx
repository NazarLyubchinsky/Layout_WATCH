import React from 'react'

import './SendMessage.scss'

import bigImage from '../../../images/Contact/SendMessage/bigImage.png'
import { useState } from 'react';
// import twitterContact from '../../../images/Contact/SendMessage/twitterContact.svg'

const SendMessage = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validate the form data
		if (firstName === "") {
			alert("Please enter your first name.");
			return;
		}

		if (lastName === "") {
			alert("Please enter your last name.");
			return;
		}

		if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
			alert("Please enter a valid email address.");
			return;
		}

		if (phoneNumber === "") {
			alert("Please enter your phone number.");
			return;
		}

		if (message === "") {
			alert("Please enter a message.");
			return;
		}

		// Submit the form data
		alert("Thank you for your message!");
	};
	return (
		<>
			<div className="box">
				<div className="box__contact">
					<div className="overlap">
						<form className="form" onSubmit={handleSubmit}>
							<div className="form__text">
								<div className="text-wrapper">CONTACT US</div>
								<h1 className="subtext">Get in Touch</h1>
							</div>
							<p className="form__question">
								We're always happy to hear from our clients and potential clients. Whether you
								have a question, want to discuss  project, or just want to say hello, we're here to help.
							</p>
							<div className="field__name">
								<div className="overlap-group">
									<input className="overlap__group-input" placeholder='First Name' required
										value={firstName}
										onChange={(e) => setFirstName(e.target.value)} />
								</div>
							</div>
							<div className="field__lstname">
								<div className="overlap-group">
									<input className="overlap__group-input" placeholder='Last Name' required
										value={lastName}
										onChange={(e) => setLastName(e.target.value)} />
								</div>
							</div>
							<div className="field__email">
								<div className="overlap-group">
									<input className="overlap__group-input" placeholder='Email' required
										value={email}
										onChange={(e) => setEmail(e.target.value)} />
								</div>
							</div>
							<div className="field__number">
								<div className="overlap-group">
									<input className="overlap__group-input" placeholder='Phone Number' required
										value={phoneNumber}
										onChange={(e) => setPhoneNumber(e.target.value)} />
								</div>
							</div>
							<div className="field-2">
								<div className="overlap-2">
									<textarea className="textarea__message" placeholder='Message' required
										value={message}
										onChange={(e) => setMessage(e.target.value)}></textarea>
								</div>
							</div>
							<button className="send-message">SEND MESSAGE</button>
						</form>
						<div className="image">
							<div className="overlap-3">
								<div className="overlap-4">
									<div className="ellipse" />
									<div className="ellipse-2" />
									<div className="element">
									</div>
									<div className="logo-github-wrapper">
									</div>
									<div className="image-2">
										<div className="overlap-group-2">
											<img className="big__image" alt="big__image" src={bigImage} />
										</div>
									</div>
							<div className="logo-instagram-wrapper"></div>
								<div className="logo-fb-simple-wrapper"></div>
							<div className="logo-telegram-wrapper"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default SendMessage