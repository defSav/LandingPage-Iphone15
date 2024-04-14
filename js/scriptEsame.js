document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita l'invio del form automatico

    const firstNameInput = document.getElementById("firstName");
    if (firstNameInput.value.trim().length < 1) {
      alert("Il campo Nome non può essere vuoto.");
      return;
    }

    const phoneNumberInput = document.getElementById("phoneNumber");
    const phoneNumber = phoneNumberInput.value.trim();
    if (!phoneNumber.startsWith("+") && isNaN(phoneNumber.charAt(0))) {
      alert('Il numero di telefono deve iniziare con un "+" o un numero.');
      return;
    }
    if (phoneNumber.length < 8 || isNaN(phoneNumber.replace("+", "").trim())) {
      alert("Il numero di telefono deve contenere almeno 8 cifre numeriche.");
      return;
    }

    const emailAddressInput = document.getElementById("emailAddress");
    if (!/\S+@\S+\.\S+/.test(emailAddressInput.value.trim())) {
      alert("Inserisci un indirizzo email valido.");
      return;
    }

    const cognomeInput = document.getElementById("lastName");
    const cognome = cognomeInput.value.trim().toUpperCase();

    const currentDate = new Date();
    const anno = currentDate.getFullYear().toString();
    const mese = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const giorno = ("0" + currentDate.getDate()).slice(-2);
    const codiceSconto = `${anno}${mese}${giorno}${cognome}10`;
    console.log("Codice sconto:", codiceSconto);

    alert("Form inviato con successo!");
    form.submit();
  });
});

const persone = [
  {
    nome: "Mario",
    cognome: "Rossi",
    telefono: "123456789",
    email: "mario.rossi@hotmail.com",
  },
  {
    nome: "Luigi",
    cognome: "Verdi",
    telefono: "987654321",
    email: "luigi.verdi@hotmail.com",
  },
  {
    nome: "Giovanna",
    cognome: "Bianchi",
    telefono: "456789123",
    email: "giovanna.bianchi@hotmail.com",
  },
  {
    nome: "Francesca",
    cognome: "Neri",
    telefono: "789123456",
    email: "francesca.neri@hotmail.com",
  },
  {
    nome: "Marco",
    cognome: "Gialli",
    telefono: "321654987",
    email: "marco.gialli@hotmail.com",
  },
];

function selezioneCasuale(persone) {
  let resultDiv = document.querySelector("#result");
  if (persone.length > 0) {
    let rand = Math.floor(Math.random() * persone.length);
    let vincitore = persone[rand];
    resultDiv.textContent =
      " Complimenti  " + vincitore.nome + "  " + vincitore.cognome + " hai vinto un Iphone 15";
  } else {
    resultDiv.textContent = " Effettua l'iscrizione ";
  }
}

function aggiungiIscritto(persone) {
  
  let nuovoNome = document.querySelector("#firstName").value;
  let nuovoCognome = document.querySelector("#lastName").value;

  persone.push({ nome: nuovoNome, cognome: nuovoCognome });

  console.log("Nuovo iscritto aggiunto:", nuovoNome, nuovoCognome);
}
