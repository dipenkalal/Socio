import React from 'react';
import UnderConstruction from 'react-under-construction';
import 'react-under-construction/build/css/index.css';
import url from 'url';

const App = () => (
  <UnderConstruction
    background={{
      image: 'https://static.pexels.com/photos/259698/pexels-photo-259698.jpeg',
      textColor: '#fff',
      overlay: {
        color: '#000',
        opacity: '.5'
      }
    }}
    title={{
      text: 'GreenRoute - Transit Module'
    }}
    description={{
      text: 'This Module is under construction. We\'ll be here soon',
      style: {
        maxWidth: '440px',
      }
    }}
  />
);

export default App;