import React, { Suspense } from "react";
import ReactDOM from 'react-dom';
import "./styles.css";
import App from "./App";
import "./i18n.js"

const rentLink = document.getElementById('rentLink');
const faqLink = document.getElementById('faqLink');
const locationsLink = document.getElementById('locationsLink');

const rentDiv = document.getElementById('rentDiv');
const faqDiv = document.getElementById('faqDiv');
const locationsDiv = document.getElementById('locationsDiv');

ReactDOM.render(
    <React.StrictMode>
        {/* Make sure i18next is done fetching the string prior to the app loading */}
        <Suspense fallback="Loading...">
            <App />
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);

window.onload = () => {
    faqDiv.classList.add('hide');
    locationsDiv.classList.add('hide');

    if (rentDiv.classList.contains('hide')) {
        rentDiv.classList.remove('hide');
    }
}

rentLink.addEventListener('click', () => {
    faqDiv.classList.add('hide');
    locationsDiv.classList.add('hide');
    
    if (rentDiv.classList.contains('hide')) {
        rentDiv.classList.remove('hide');
    }
});

faqLink.addEventListener('click', () => {
    rentDiv.classList.add('hide');
    locationsDiv.classList.add('hide');

    if (faqDiv.classList.contains('hide')) {
        faqDiv.classList.remove('hide');
    }
});

locationsLink.addEventListener('click', () => {
    rentDiv.classList.add('hide');
    faqDiv.classList.add('hide');

    if (locationsDiv.classList.contains('hide')) {
        locationsDiv.classList.remove('hide');
    }
});
