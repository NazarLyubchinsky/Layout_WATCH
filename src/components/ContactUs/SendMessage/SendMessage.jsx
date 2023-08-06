import React from 'react'

import './SendMessage.scss'

import bigImage from '../../../images/Contact/SendMessage/bigImage.png'
// import twitterContact from '../../../images/Contact/SendMessage/twitterContact.svg'

const SendMessage = () => {
	return (
		<>
			<div className="box">
				<div className="CONTACT-US">
					<div className="overlap">
						{/* <form className="div">
							<div className="CONTACT-US-2">
								<div className="text-wrapper">CONTACT US</div>
								<h1 className="h-1">Get in Touch</h1>
							</div>
							<p className="at-vrnas-we-re">
								We're always happy to hear from our clients and potential clients. Whether you
								have a question, want to discuss  project, or just want to say hello, we're here to help.
							</p>
							<div className="field">
								<div className="overlap-group">
									<input className="text-wrapper-2" placeholder='First Name' />
								</div>
							</div>
							<div className="overlap-wrapper">
								<div className="overlap-group">
									<input className="text-wrapper-2" placeholder='Last Name' />
								</div>
							</div>
							<div className="overlap-group-wrapper">
								<div className="overlap-group">
									<input className="text-wrapper-2" placeholder='Email' />
								</div>
							</div>
							<div className="div-wrapper">
								<div className="overlap-group">
									<input className="text-wrapper-2" placeholder='Phone Number' />
								</div>
							</div>
							<div className="field-2">
								<div className="overlap-2">
									<textarea className="textarea__message" placeholder='Message'></textarea>
								</div>
							</div>
							<div className="button">
								<button className="send-message">SEND MESSAGE</button>
							</div>
						</form> */}


						{/*  */}
						<form className="form">
							<div className="CONTACT-US-2">
								<div className="text-wrapper">CONTACT US</div>
								<h1 className="h-1">Get in Touch</h1>
							</div>
							<p className="at-vrnas-we-re">
								We're always happy to hear from our clients and potential clients. Whether you
								have a question, want to discuss  project, or just want to say hello, we're here to help.
							</p>
							<div className="field__name">
								<div className="overlap-group">
									<input className="overlap__group-input" placeholder='First Name' 		required />
								</div>
							</div>
							<div className="field__lstname">
								<div className="overlap-group">
									<input className="overlap__group-input" placeholder='Last Name' 		required />
								</div>
							</div>
							<div className="field__email">
								<div className="overlap-group">
									<input className="overlap__group-input" placeholder='Email' 		required/>
								</div>
							</div>
							<div className="field__number">
								<div className="overlap-group">
									<input className="overlap__group-input" placeholder='Phone Number' 		required/>
								</div>
							</div>
							<div className="field-2">
								<div className="overlap-2">
									<textarea className="textarea__message" placeholder='Message' 		required></textarea>
								</div>
							</div>
							<button className="send-message">SEND MESSAGE</button>
						</form>
						{/*  */}






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
											<img className="nkjnb-clipdrop" alt="Nkjnb clipdrop" src={bigImage} />
										</div>
									</div>
								</div>
								<div className="logo-fb-simple-wrapper"></div>
							</div>
							<div className="logo-instagram-wrapper"></div>
							<div className="logo-telegram-wrapper"></div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default SendMessage