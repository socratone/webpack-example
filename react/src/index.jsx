import React from 'react';
import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(
  <div>
    <h1>Hello, world</h1>
    <img src="./assets/images/fish.png" />
  </div>
);
