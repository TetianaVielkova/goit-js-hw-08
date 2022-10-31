import throttle from 'lodash.throttle';

const FEEDBACK_FORM = "feedback-form-state";
const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('input');
const textareaRef = document.querySelector('textarea');

const formData = {};

formRef.addEventListener('input', throttle(onFormData, 500));
formRef.addEventListener('submit', onFormSubmit);

function onFormData(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formData));
}

function onFormSubmit(e) {
    e.preventDefault();
    console.log('formData: ', formData);
    e.currentTarget.reset();
    localStorage.removeItem(FEEDBACK_FORM);
}

getMessage();

function getMessage() {
    const feedback = JSON.parse(localStorage.getItem(FEEDBACK_FORM));
    if(feedback) {
        inputRef.value = feedback.email;
        textareaRef.value = feedback.message;
    }
}
