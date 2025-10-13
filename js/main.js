document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('clickMeBtn');
  const output = document.getElementById('output');

  let count = 0;

  button.addEventListener('click', () => {
    count++;
    output.textContent = `Вы нажали кнопку ${count} раз(а)!`;
  });
});
