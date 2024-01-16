import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate = '';
const btn = document.querySelector('[data-start]');
const userInput = document.getElementById('datetime-picker');

const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

btn.setAttribute('disabled', 'disabled');
console.log('Block 17');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    console.log('вибрали дату в onLose');

    if (userSelectedDate.getTime() > Date.now()) {
      btn.removeAttribute('disabled');
      console.log('Active Btn 30');
    } else {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topCenter',
      });

      dataDays.textContent = '00';
      dataHours.textContent = '00';
      dataMinutes.textContent = '00';
      dataSeconds.textContent = '00';
    }
  },
};
flatpickr(userInput, options);

const startCountdown = () => {
  btn.setAttribute('disabled', 'disabled');
  console.log('Block 49');
  userInput.disabled = true;
  const dateInterval = setInterval(() => {
    const resultDate = userSelectedDate.getTime() - Date.now();
    if (resultDate <= 0) {
      clearInterval(dateInterval);
      console.log('stop Interval 58');
      return (userSelectedDate = '');
    }
    console.log('counting...');
    const currentDate = convertMs(resultDate);
    dataDays.textContent = addLeadingZero(currentDate.days);
    dataHours.textContent = addLeadingZero(currentDate.hours);
    dataMinutes.textContent = addLeadingZero(currentDate.minutes);
    dataSeconds.textContent = addLeadingZero(currentDate.seconds);
  }, 1000);
};

btn.addEventListener('click', startCountdown);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value < 10 ? String(value).padStart(2, '0') : value;
}
