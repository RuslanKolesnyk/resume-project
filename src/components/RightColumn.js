import React from 'react'
import { FaGraduationCap, FaLanguage, FaLaptopCode, FaUser } from 'react-icons/fa'

const RightColumn = () => {
	return (
		<div className='resume__right'>
			<h1 className='resume__name'>Kolesnyk Ruslan</h1>
			<h2 className='resume__title'>Junior frontend vývojář</h2>
			<div className='resume__section'>
				<h2><FaUser /> O mně</h2>
				<p>
					Jsem začínající frontend vývojář a úspěšně jsem absolvoval kurzy HTML a CSS, JavaScriptu a Reactu.
					Neustále se snažím rozvíjet své dovednosti a učit se nové technologie, abych byl schopen vytvářet moderní a efektivní webové aplikace.
				</p>
			</div>
			<div className='resume__section'>
				<h2><FaGraduationCap /> Vzdělání</h2>
				<p>06.08.2006-03.12.2010 - Vyšší odborné vzdělání.(Ukrajina)</p>
			</div>
			<div className='resume__section'>
				<h2><FaLaptopCode /> Dovednosti</h2>
				<ul className='resume__skills-list'>
					<li>HTML5/CSS3/SCSS</li>
					<li>JavaScript</li>
					<li>React.js</li>
					<li>GitHub</li>
					<li>Figma</li>
				</ul>
			</div>
			<div className='resume__section'>
				<h2><FaLanguage /> Jazykové znalosti</h2>
				<ul className='resume__languages'>
					<li>Český jazyk - Středně pokročilý</li>
					<li>Anglický jazyk - Pokročilý začátečník (A2)</li>
					<li>Ruský jazyk – Rodilý mluvčí</li>
					<li>Ukrajinský jazyk - Rodilý mluvčí</li>
				</ul>
			</div>
		</div>
	)
}
export default RightColumn