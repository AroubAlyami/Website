function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function showGift() {
  document.getElementById('giftText').classList.remove('hidden');
}

// Easter egg
console.log("Happy Birthday. You are deeply loved. No bugs here.");
