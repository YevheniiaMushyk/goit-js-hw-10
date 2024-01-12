import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
let userSelectedDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate.getTime() <= this.defaultDate) {
      alert('Please choose a date in the future');
    }
  },
};

userSelectedDate = new Date();

const btn = document.querySelector('.button-str');
btn.setAttribute('disabled', 'disabled');

const dateSelect = document.querySelector('#datetime-picker');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

dateSelect.addEventListener('click', () => {
  options.dateFormat = 'Y-m-d H:i';
  const myInput = flatpickr('#datetime-picker', options);
});

dateSelect.addEventListener('input', () => {
  // if (userSelectedDate.getTime() > Date.now()) {
  //   btn.removeAttribute('disabled');
  //   btn.addEventListener('click', handlstart);
  // } else {
  // }
});

const handlstart = () => {
  btn.setAttribute('disabled', 'disabled');
  const dateInterval = setInterval(() => {
    const resultDate = userSelectedDate.getTime() - Date.now();
    const currentDate = convertMs(resultDate);
    const currentDay = currentDate.days;
    const currentHour = currentDate.hours;
    const currentMinute = currentDate.minutes;
    const currentSecond = currentDate.seconds;

    if (currentDay < 10) {
      dataDays.textContent = addLeadingZero(currentDay);
    } else {
      dataDays.textContent = currentDay;
    }

    if (currentHour < 10) {
      dataHours.textContent = addLeadingZero(currentHour);
    } else {
      dataHours.textContent = currentHour;
    }

    if (currentMinute < 10) {
      dataMinutes.textContent = addLeadingZero(currentMinute);
    } else {
      dataMinutes.textContent = currentMinute;
    }

    if (currentSecond < 10) {
      dataSeconds.textContent = addLeadingZero(currentSecond);
    } else {
      dataSeconds.textContent = currentSecond;
    }

    if (
      currentDay == 0 &&
      currentHour == 0 &&
      currentMinute == 0 &&
      currentSecond == 0
    ) {
      clearInterval(dateInterval);
    }
  }, 1000);
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  const fullZeroNumber = String(value).padStart(2, '0');
  return fullZeroNumber;
}
