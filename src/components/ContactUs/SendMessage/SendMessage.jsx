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
						<div className="div">
							<div className="CONTACT-US-2">
								<div className="text-wrapper">CONTACT US</div>
								<h1 className="h-1">Get in Touch</h1>
							</div>
							<p className="at-vrnas-we-re">
								At VRNas, we&#39;re always happy to hear from our clients and potential clients. Whether you have a
								question about our VR services, want to discuss a potential project, or just want to say hello, we&#39;re
								here to help.
							</p>
							<div className="field">
								<div className="overlap-group">
									<input className="text-wrapper-2" placeholder='First Name'/>
								</div>
							</div>
							<div className="overlap-wrapper">
								<div className="overlap-group">
									<input className="text-wrapper-2" placeholder='Last Name'/>
								</div>
							</div>
							<div className="overlap-group-wrapper">
								<div className="overlap-group">
									<input className="text-wrapper-2" placeholder='Email'/>
								</div>
							</div>
							<div className="div-wrapper">
								<div className="overlap-group">
									<input className="text-wrapper-2" placeholder='Phone Number'/>
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
						</div>
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