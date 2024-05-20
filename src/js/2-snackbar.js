import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const delay = +form.elements.delay.value;
    const state = form.elements.state.value;

    const promise = new Promise((resolve, rejected) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve(delay);
            } else {
                rejected(delay)
            }

        }, delay)
    })

    promise
        .then(delay => {
            iziToast.show({
                title: '✅',
                message: `Fulfilled promise in ${delay}ms`,
                backgroundColor: '#59a10d',
                messageColor: '#FFFFFF',
                position: 'topRight',
            });
        })
        .catch(delay => {
            iziToast.show({
                title: '❌',
                message: `Rejected promise in ${delay}ms`,
                backgroundColor: '#EF4040',
                messageColor: '#FFFFFF',
                position: 'topRight',
            });
        });
}