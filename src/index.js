import React, {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./styles.css";
import App from "./App";

const rentLink = document.getElementById('rentLink');
const faqLink = document.getElementById('faqLink');
const locationsLink = document.getElementById('locationsLink');

const step1Content = document.getElementById('step1Content');
const step2Content = document.getElementById('step2Content');
const step3Content = document.getElementById('step3Content');

const progressBarStep1 = document.getElementById('progress-bar-step-1');
const progressBarStep2 = document.getElementById('progress-bar-step-2');
const progressBarStep3 = document.getElementById('progress-bar-step-3');

const backButton = document.getElementById('backButton');
const nextButton = document.getElementById('nextButton');
const submitButton = document.getElementById('submitButton');

const rentDiv = document.getElementById('rentDiv');
const faqDiv = document.getElementById('faqDiv');
const locationsDiv = document.getElementById('locationsDiv');

var rentStep = 1;


const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);



window.onload = () => {
    faqDiv.classList.add('hide');
    locationsDiv.classList.add('hide');
    rentDiv.classList.remove('hide');

    backButton.classList.add('hide');
    nextButton.classList.remove('hide');
    submitButton.classList.add('hide');

    progressBarStep1.classList.remove('hide');
    progressBarStep2.classList.add('hide');
    progressBarStep3.classList.add('hide');

    step1Content.classList.remove('hide');
    step2Content.classList.add('hide');
    step3Content.classList.add('hide');
}

backButton.addEventListener('click', () => {
    if (rentStep == 2) {
        step1Content.classList.remove('hide');
        step2Content.classList.add('hide');
        step3Content.classList.add('hide');

        progressBarStep1.classList.remove('hide');
        progressBarStep2.classList.add('hide');
        progressBarStep3.classList.add('hide');

        backButton.classList.add('hide');
        nextButton.classList.remove('hide');
        submitButton.classList.add('hide');
    }
    else if (rentStep == 3) {
        step1Content.classList.add('hide');
        step2Content.classList.remove('hide');
        step3Content.classList.add('hide');

        progressBarStep1.classList.add('hide');
        progressBarStep2.classList.remove('hide');
        progressBarStep3.classList.add('hide');

        backButton.classList.remove('hide');
        nextButton.classList.remove('hide');
        submitButton.classList.add('hide');
    }
    rentStep--;
});

nextButton.addEventListener('click', () => {
    if (rentStep == 1) {
        step1Content.classList.add('hide');
        step2Content.classList.remove('hide');
        step3Content.classList.add('hide');

        progressBarStep1.classList.add('hide');
        progressBarStep2.classList.remove('hide');
        progressBarStep3.classList.add('hide');

        backButton.classList.remove('hide');
        nextButton.classList.remove('hide');
        submitButton.classList.add('hide');
    }
    else if (rentStep == 2) {
        step1Content.classList.add('hide');
        step2Content.classList.add('hide');
        step3Content.classList.remove('hide');

        progressBarStep1.classList.add('hide');
        progressBarStep2.classList.add('hide');
        progressBarStep3.classList.remove('hide');

        backButton.classList.remove('hide');
        nextButton.classList.add('hide');
        submitButton.classList.remove('hide');
    }
    rentStep++;
});

rentLink.addEventListener('click', () => {
    faqDiv.classList.add('hide');
    locationsDiv.classList.add('hide');
    rentDiv.classList.remove('hide');
});

faqLink.addEventListener('click', () => {
    rentDiv.classList.add('hide');
    locationsDiv.classList.add('hide');
    faqDiv.classList.remove('hide');
});

locationsLink.addEventListener('click', () => {
    rentDiv.classList.add('hide');
    faqDiv.classList.add('hide');
    locationsDiv.classList.remove('hide');
});
