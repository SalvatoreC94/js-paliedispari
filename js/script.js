
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





//-------------------------------------------------------------------------------------------------------
//PARI E DISPARI
//-------------------------------------------------------------------------------------------------------


function gioca() {
    // Prendiamo la scelta dell'utente (pari o dispari)
    let sceltaUtente = document.getElementById("scelta").value;
    console.log("Scelta utente:", sceltaUtente);

    // Prendiamo il numero inserito dall'utente e lo convertiamo in intero
    let numeroUtente = parseInt(document.getElementById("numero").value);
    console.log("Numero utente:", numeroUtente);

    // Verifichiamo che il numero sia valido (tra 1 e 5)
    if (numeroUtente < 1 || numeroUtente > 5) {
        document.getElementById("risultato").innerText = "Numero non valido. Inserisci un numero da 1 a 5.";
        console.log("Numero non valido");
        return;
    }

    // Generiamo un numero random per il computer (da 1 a 5)
    let numeroComputer = Math.floor(Math.random() * 5) + 1;
    console.log("Numero computer:", numeroComputer);

    // Sommiamo i due numeri (utente e computer)
    let somma = numeroUtente + numeroComputer;
    console.log("Somma:", somma);

    // Determiniamo se la somma è pari o dispari
    let risultatoPariDispari = (somma % 2 === 0) ? "pari" : "dispari";
    console.log("Risultato pari o dispari:", risultatoPariDispari);

    // Dichiariamo chi ha vinto
    if (risultatoPariDispari === sceltaUtente) {
        document.getElementById("risultato-2").innerText = `Hai vinto! La somma di ${numeroUtente} e ${numeroComputer} è ${somma}, che è ${risultatoPariDispari}.`;
        console.log("Hai vinto!");
    } else {
        document.getElementById("risultato-2").innerText = `Hai perso! La somma di ${numeroUtente} e ${numeroComputer} è ${somma}, che è ${risultatoPariDispari}.`;
        console.log("Hai perso!");
    }
}
