import fish from './assets/fish.png';

const image = document.createElement('img');
image.src = fish;
image.width = 100;
image.height = 100;

const root = document.getElementById('root');
root.append(image);
