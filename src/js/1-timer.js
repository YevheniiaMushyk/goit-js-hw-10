import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate = '';
const btn = document.querySelector('[data-start]');
btn.setAttribute('disabled', 'disabled');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];

    if (userSelectedDate.getTime() > Date.now()) {
      btn.removeAttribute('disabled');
    } else {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
      userSelectedDate = '';
    }
  },
};
flatpickr('#datetime-picker', options);

const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

btn.addEventListener('click', handlestart);
const handlestart = () => {
  btn.setAttribute('disabled', 'disabled');
  const dateInterval = setInterval(() => {
    const resultDate = userSelectedDate.getTime() - Date.now();
    const currentDate = convertMs(resultDate);

    if (currentDate.days < 10) {
      dataDays.textContent = addLeadingZero(currentDate.days);
    } else {
      dataDays.textContent = currentDate.days;
    }

    if (currentDate.hours < 10) {
      dataHours.textContent = addLeadingZero(currentDate.hours);
    } else {
      dataHours.textContent = currentDate.hours;
    }

    if (currentDate.minutes < 10) {
      dataMinutes.textContent = addLeadingZero(currentDate.minutes);
    } else {
      dataMinutes.textContent = currentDate.minutes;
    }

    if (currentDate.seconds < 10) {
      dataSeconds.textContent = addLeadingZero(currentDate.seconds);
    } else {
      dataSeconds.textContent = currentDate.seconds;
    }

    if (resultDate <= 0) {
      clearInterval(dateInterval);
      userSelectedDate = '';
    }
  }, 1000);
};

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
  const fullZeroNumber = String(value).padStart(2, '0');
  return fullZeroNumber;
}
