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
    sections.forEach(section => {
        section.classList.remove('hidden');
        section.classList.add('visible');
    });

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        sections.forEach(section => {
            if (section.offsetTop + section.offsetHeight / 2 < scrollPosition) {
                section.classList.add('visible');
                section.classList.remove('hidden');
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

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username === 'admin' && password === '1234') {
            alert('Login bem-sucedido!');
        } else {
            alert('Usuário ou senha incorretos!');
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

    let currentSlide = 0;
    const slides = document.querySelectorAll('#slideshow img');
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000);
    showSlide(currentSlide);

    document.getElementById('hamburger').addEventListener('click', function() {
        const navList = document.getElementById('nav-list');
        navList.style.display = (navList.style.display === 'block') ? 'none' : 'block';
    });
});
document.getElementById('loginButton').addEventListener('click', function() {
    const loginSection = document.getElementById('login');
    loginSection.scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('loginButton').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'block';
});

document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == document.getElementById('loginModal')) {
        document.getElementById('loginModal').style.display = 'none';
    }
};

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'admin' && password === '1234') {
        alert('Login bem-sucedido!');
        document.getElementById('loginModal').style.display = 'none';
    } else {
        alert('Usuário ou senha incorretos!');
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginButton');
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.getElementsByClassName('close')[0];

    loginBtn.addEventListener('click', function() {
        loginModal.style.display = 'block';
    });

    closeModal.addEventListener('click', function() {
        loginModal.style.display = 'none';
    });

    window.onclick = function(event) {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    };

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username === 'admin' && password === '1234') {
            alert('Login bem-sucedido!');
            loginModal.style.display = 'none';
        } else {
            alert('Usuário ou senha incorretos!');
        }
    });
});
