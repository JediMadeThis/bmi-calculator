const weight = document.getElementById('weight');
const height = document.getElementById('height');
const bmi = document.getElementById('bmi');

weight.addEventListener('input', check);
height.addEventListener('input', check);

check();

function check() {
  let w = weight.value;
  let h = height.value / 100;
  let res = w / h ** 2;

  if (!w && !h)
    return (bmi.textContent = 'Please fill in your weight and height.');

  if (!w) return (bmi.textContent = 'Please fill in your weight.');
  if (!h) return (bmi.textContent = 'Please fill in your height.');

  if (res === Infinity || res === NaN) return (bmi.textContent = 'Error');

  bmi.textContent = Number.isInteger(res) ? res : res.toFixed(1);
}
