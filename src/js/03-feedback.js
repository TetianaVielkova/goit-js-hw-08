import throttle from 'lodash.throttle';

const FEEDBACK_FORM = "feedback-form-state";

const formRef = document.querySelector('.feedback-form');


const formData = {};

formRef.addEventListener('input', throttle(onFormData, 500));
formRef.addEventListener('submit', onFormSubmit);


function onFormData(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formData));
}


function onFormSubmit(e) {
    e.preventDefault();
    
    e.currentTarget.reset();

    localStorage.removeItem(FEEDBACK_FORM);
}

getMessage();

function getMessage() {
    const savedData = localStorage.getItem(FEEDBACK_FORM);
    if(savedData) {
        const feedback = JSON.parse(savedData);

    }
    console.log(formData);
}
