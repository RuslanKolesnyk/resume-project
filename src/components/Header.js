import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Header = () => {
	return (
		<header className='resume__header'>
			<div className='resume__header-icons'>
				<a href="https://www.linkedin.com/in/ruslan-kolesnyk-453421324/" target="_blank" rel="noopener noreferrer">
					<FaLinkedin />
				</a>
				<a href="https://github.com/RuslanKolesnyk" target="_blank" rel="noopener noreferrer">
					<FaGithub />
				</a>
			</div>
		</header>
	)
}
export default Header