
//-------------------------------------------------------------------------------------------------------
//PAROLA PALINDROMA                               
//-------------------------------------------------------------------------------------------------------



// Funzione per verificare se una parola è palindroma
function checkPalindrome() {
    // Prendiamo la parola inserita dall'utente
    let parola = document.getElementById("parola").value;
    console.log("Parola inserita:", parola);

    // Rimuoviamo eventuali spazi e trasformiamo tutto in minuscolo per la verifica
    let parolaPulita = parola.replace(/\s+/g, '').toLowerCase();
    console.log("Parola pulita:", parolaPulita);

    // Invertiamo la parola pulita
    let parolaInvertita = parolaPulita.split('').reverse().join('');
    console.log("Parola invertita:", parolaInvertita);

    // Verifichiamo se la parola pulita è uguale alla parola invertita
    if (parolaPulita === parolaInvertita) {
        document.getElementById("risultato").innerText = `La parola "${parola}" è palindroma.`;
        console.log("La parola è palindroma.");
    } else {
        document.getElementById("risultato").innerText = `La parola "${parola}" non è palindroma.`;
        console.log("La parola non è palindroma.");
    }
}
