import React from 'react'
import TitlePageWrapper from '../TitlePage/TitlePageWrapper'
import s from './PrivacyPolicy.module.scss'
const PrivacyPolicy = () => {
	return (
		<section>
			<TitlePageWrapper about='Privacy Policy' />
			<div className={s.privacy}>
				<div className={s.privacy__top}>
					<div className={s.text}>
						PRIVACY POLICY
					</div>
					<p className={s.info}>
						This Privacy Policy describes how [Company Name] collects, uses, and protects the personal information of our
						website visitors and customers.
					</p>
				</div>
				<div className={s.privacy__center}>
					<div className={s.information}>
						<div className={s.information__text}>Information We Collect</div>
						<div className={s.information__wrapper}>
							We may collect the following types of personal information:
							<ul className={s.list}>
								<li>	Name, email address, and other contact information.</li>
								<li>Demographic information such as age, gender, and location.</li>
								<li>	Payment information such as credit card details.</li>
								<li>		Information about how you use our website and services.</li>
							</ul>
						</div>
					</div>
					<div className={s.privacy__center}>
						<div className={s.information}>
							<div className={s.information__text}>How We Use Your Information</div>
							<div className={s.information__wrapper}>
								We may use your personal information for the following purposes:
								<ul className={s.list}>
									<li>	To provide you with our services and products.</li>
									<li>To process payments and fulfill orders.</li>
									<li>	To process payments and fulfill orders..</li>
									<li>	To improve our website and services..</li>
								</ul>
							</div>
						</div>
					</div>
					<div className={s.privacy__center}>
						<p className={s.information__text}>How We Protect Your Information</p>
						<p className={s.information__wrapper}>
							We implement a variety of security measures to maintain the safety of your personal information when you
							place an order or enter, submit, or access your personal information. We use encryption to protect sensitive
							information transmitted online, and we also protect your information offline.
						</p>
					</div>
					<div className={s.privacy__center}>
						<div className={s.information__text}>Information Sharing</div>
						<p className={s.information__wrapper}>
							We do not sell or rent your personal information to third parties. However, we may share your information
							with our trusted third-party service providers who assist us in operating our website and services.
						</p>
					</div>
					<div className={s.privacy__center}>
						<div className={s.information__text}>Cookies and Tracking</div>
						<p className={s.information__wrapper}>
							We use cookies and other tracking technologies to collect information about your browsing behavior and
							preferences. This information is used to personalize your experience on our website and to analyze how
							visitors use our website.
						</p>
					</div>
					<div className={s.privacy__center}>
						<div className={s.information__text}>Your Rights</div>
						<p className={s.information__wrapper}>
							You have the right to access, update, or delete your personal information. You can contact us using the
							information provided on our contact page to exercise these rights.
						</p>
					</div>
					<div className={s.privacy__center}>
						<div className={s.information__text}>Changes to Privacy Policy</div>
						<p className={s.information__wrapper}>
							We reserve the right to update this Privacy Policy at any time. We will notify you of any changes by posting
							the new Privacy Policy on our website.
						</p>
					</div>
					<div className={s.privacy__center}>
						<div className={s.information__text}>Contact Us</div>
						<p className={s.information__wrapper}>
							If you have any questions about our Privacy Policy, please contact us using the information provided on our
							contact page.
						</p>
					</div>
				</div>
			</div>
		</section >
	)
}

export default PrivacyPolicy