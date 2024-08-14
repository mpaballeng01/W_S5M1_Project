function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const widgets = document.querySelectorAll('.widget');
  widgets.forEach(widget => {
    widget.classList.add('widget');
  });
  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "Do not watch the clock. Do what it does. Keep going. – Sam Levenson"
  ];
  
  function displayQuoteOfTheDay() {
    const quoteContainer = document.querySelector('#quote-widget');
    const today = new Date().getDate();
    const quote = quotes[today % quotes.length];
    quoteContainer.textContent = quote;
  }
  
  displayQuoteOfTheDay();
  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "Do not watch the clock. Do what it does. Keep going. – Sam Levenson"
  ];
  
  function displayQuoteOfTheDay() {
    const quoteContainer = document.querySelector('#quote-widget');
    const today = new Date().getDate();
    const quote = quotes[today % quotes.length];
    quoteContainer.textContent = quote;
  }
  
  displayQuoteOfTheDay();
  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  function countdown(targetDate) {
    const countdownContainer = document.querySelector('#countdown-widget');
    const now = new Date().getTime();
    const timeLeft = targetDate - now;
  
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    countdownContainer.textContent = $`{days}d ${hours}h ${minutes}m ${seconds}s;`
  
    setTimeout(() => countdown(targetDate), 1000);
  }
  
  const newYear = new Date('Jan 1, 2025 00:00:00').getTime();
  countdown(newYear);
  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  const friends = ["Alice", "Bob", "Charlie", "Diana"];

  function displayFriends() {
    const friendsContainer = document.querySelector('#friends-widget');
    friendsContainer.innerHTML = '';
  
    friends.forEach(friend => {
      const friendItem = document.createElement('li');
      friendItem.textContent = friend;
      friendsContainer.appendChild(friendItem);
    });
  }
  
  displayFriends();
  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here
  const widgetContainers = document.querySelectorAll('.widget');

  widgetContainers.forEach(container => {
    container.setAttribute('tabindex', '0');
  });
  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
