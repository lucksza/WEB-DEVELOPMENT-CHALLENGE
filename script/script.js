document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        sections.forEach(section => {
            if (section.offsetTop + section.offsetHeight / 2 < scrollPosition) {
                section.classList.add('visible');
            }
        });
    });

    document.getElementById('betForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const race = document.getElementById('race').value;
        const driver = document.getElementById('driver').value;
        const amount = document.getElementById('amount').value;
        if (amount < 10) {
            alert('O valor mínimo para aposta é R$10');
        } else {
            alert(`Aposta de R$${amount} no piloto ${driver} para a corrida ${race} registrada com sucesso!`);
            document.getElementById('betForm').reset();
        }
    });

    const raceResults = [
        { race: 'New York E-Prix', winner: 'Piloto 1' },
        { race: 'Berlin E-Prix', winner: 'Piloto 2' },
        { race: 'Monaco E-Prix', winner: 'Piloto 3' }
    ];

    function displayRaceResults() {
        const resultsContainer = document.getElementById('raceResults');
        raceResults.forEach(result => {
            const resultDiv = document.createElement('div');
            resultDiv.className = 'result';
            resultDiv.innerHTML = `<strong>${result.race}</strong>: Vencedor - ${result.winner}`;
            resultsContainer.appendChild(resultDiv);
        });
    }

    displayRaceResults();
});
