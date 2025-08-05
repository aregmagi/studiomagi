document.addEventListener("DOMContentLoaded", function () {
    const tipoContatto = document.getElementById("tipo-contatto");
    const campoMessaggio = document.getElementById("campo-messaggio");
    const campoModalita = document.getElementById("campo-modalita");
    const calendarioWrapper = document.getElementById("calendar-button-wrapper");
    const hiddenSubject = document.getElementById("hiddenSubject");

    function aggiornaVisibilitaCampi() {
        const valore = tipoContatto.value;

        // Imposta l'oggetto email
        if (valore === "appuntamento") {
            hiddenSubject.value = "Richiesta appuntamento";
        } else if (valore === "info") {
            hiddenSubject.value = "Richiesta informazioni";
        } else {
            hiddenSubject.value = "Richiesta contatto";
        }

        if (valore === "info") {
            campoMessaggio.style.display = "block";
            campoModalita.style.display = "none";
            calendarioWrapper.style.display = "none";
        } else if (valore === "appuntamento") {
            campoMessaggio.style.display = "none";
            campoModalita.style.display = "block";
            calendarioWrapper.style.display = "block";
        } else {
            campoMessaggio.style.display = "none";
            campoModalita.style.display = "none";
            calendarioWrapper.style.display = "none";
        }
    }

    tipoContatto.addEventListener("change", aggiornaVisibilitaCampi);
    aggiornaVisibilitaCampi(); // inizializzazione
});
