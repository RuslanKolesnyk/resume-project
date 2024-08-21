import React from 'react'
import Header from './components/Header'
import LeftColumn from './components/LeftColumn'
import RightColumn from './components/RightColumn'
import Footer from './components/Footer'


function App() {
	return (
		<div className="resume">
			<Header />
			<div className='resume__body'>
				<LeftColumn />
				<RightColumn />
			</div>
			<Footer />
		</div>
	)
}

export default App