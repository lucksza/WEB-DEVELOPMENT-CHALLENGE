document.getElementById('betForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const race = document.getElementById('race').value;
    const driver = document.getElementById('driver').value;
    const amount = document.getElementById('amount').value;

    if (amount < 10) {
        alert('O valor mínimo para aposta é R$10');
    } else {
        alert(`Aposta de R$${amount} no piloto ${driver} para a corrida ${race} registrada com sucesso!`);
    }
});
