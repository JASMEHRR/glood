// Loaded first by every page: fonts, styles, and the motion preference.
import '@fontsource/lilita-one/400.css';
import '@fontsource/bungee/400.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/600.css';
import '@fontsource/space-grotesk/700.css';
import './styles.css';
import { applyMotionClass } from './js/chrome.js';

document.documentElement.classList.add('js');
applyMotionClass();
