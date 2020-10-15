import * as React from 'react'

import { MAIN_PIC_URL } from '../../constants'

const Home = () => (
	<div
		className="main__banner"
	>
		<img className="responsive-img" src={MAIN_PIC_URL} />
	</div>
)

export default Home
