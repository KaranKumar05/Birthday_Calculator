const calculateBtn = document.getElementById('calculate');
calculateBtn.addEventListener('click', () => {
  const birthdate = document.getElementById('birthdate').value;
  const today = new Date();
  const birthday = new Date(birthdate);
  const age = today.getFullYear() - birthday.getFullYear();
  const monthDiff = today.getMonth() - birthday.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }
  const nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
  if (today > nextBirthday) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
  }
  const daysUntilBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
  const result = `You are ${age} years old.`;
  const secondResult = `Your next birthday is on ${nextBirthday.toLocaleDateString()} which is in ${daysUntilBirthday} days.`
  document.getElementById('results').textContent = result;
  document.getElementById('secondResult').textContent = secondResult;
});