import React from 'react'

const Footer = () => {
	const currentDate = new Date().toLocaleDateString()
	return (
		<footer className='resume__footer'>
			<p className='resume__footer-date'>{currentDate}</p>
		</footer>
	)
}
export default Footer