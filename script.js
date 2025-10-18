const form = document.getElementById('swapForm');
const matchesDiv = document.getElementById('matches');

if (form) {
  const sampleUsers = [
    { name: 'Alex', teach: 'Spanish', learn: 'Web Design' },
    { name: 'Jamie', teach: 'Python', learn: 'Guitar' },
    { name: 'Taylor', teach: 'Writing', learn: 'Marketing' },
    { name: 'Jordan', teach: 'Cooking', learn: 'JavaScript' }
  ];

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const teach = document.getElementById('teach').value.toLowerCase();
    const learn = document.getElementById('learn').value.toLowerCase();

    const matches = sampleUsers.filter(user =>
      user.teach.toLowerCase().includes(learn) ||
      user.learn.toLowerCase().includes(teach)
    );

    matchesDiv.innerHTML = matches.length
      ? matches.map(m => `
        <div class="match-card">
          <strong>${m.name}</strong><br>
          Can teach: ${m.teach}<br>
          Wants to learn: ${m.learn}
        </div>
      `).join('')
      : `<p>No exact matches yet — try different skills!</p>`;
  });
}
