import React, { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaChevronDown } from 'react-icons/fa'
import profilePhoto from '../assets/images/Profile.jpg'
import projectImage from '../assets/images/bmw-website.png'

const LeftColumn = () => {
	const [showImage, setShowImage] = useState(false)

	const toggleImage = () => {
		setShowImage(!showImage)
	}
	return (
		<div className='resume__left'>
			<div className='resume__photo'>
				<img src={profilePhoto} alt="Profile" />
			</div>
			<div className='resume__contact'>
				<p><FaMapMarkerAlt className="resume__left-icon" /> Praha 4, Babická 2344/1, 14900</p>
				<p><FaPhone className="resume__left-icon" />
					<a href="tel:+420773091852">+420773091852</a>
				</p>
				<p><FaEnvelope className="resume__left-icon" />
					<a href="mailto:kolesnukruslan91@gmail.com">kolesnukruslan91@gmail.com</a>
				</p>
				<p>
					<FaGlobe className="resume__left-icon" />
					<a
						href='https://ruslankolesnyk.github.io/BMW---website/'
						target="_blank"
						rel="noopener noreferrer"
					>
						Můj první projekt
					</a>
					<FaChevronDown
						className={`toggle-icon ${showImage ? 'clicked' : ''}`}
						onClick={toggleImage}
					/>
				</p>
			</div>
			<img
				src={projectImage}
				alt='Project Screenshot'
				className={`project-image-click ${showImage ? 'project-image-click-visible' : ''}`}
			/>
		</div>
	)
}
export default LeftColumn