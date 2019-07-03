import React from 'react';
import Header from './component/header/index';
import Headline from './component/headline/index';
import './app.scss';

const tempArr = [{
	fName: 'John',
	lName: 'Block',
	email: 'john.block@gmal.com',
	age: 24,
	onlineStatus: true
}];

function App() {
  return (
    <div className="App">
    	<Header />
    	<section className='main'>
			<Headline header='Posts' description='Click the button to render posts' tempArr={tempArr} />    		
    	</section>
    </div>
  );
}

export default App;
