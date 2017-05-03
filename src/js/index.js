// Import CSS
import '../css/index.sass';

// Import React and ReactDOM
import React from 'react'; // Necessary for JSX
import ReactDOM from 'react-dom';

// Import our JS code
 import HelloWorld from './hello-world';
 import FormProfile from './add-profile-form';

 let FormProfileAdd = (
	 <div>
		<FormProfile />
		<HelloWorld />
 	</div>
 );
// Attach React to #app-container inside index.html
ReactDOM.render(
  FormProfileAdd,
  document.getElementById('app-container')
);

/*
ReactDOM.render(
  <addProfileForm />,
  document.getElementById('app-container')
);
*/
