
//Lager et array for kjøpte billetter
let kjop = [];

//Funksjonen som setter hver verdi inn i arrayet og validerer om det er noe input. Bruker
// så boolean for om det er en verdi i inputboksen eller ikke
function kjoper() {

    let input = [
        document.getElementById("dropdown").value,
    ];

    if (document.getElementById("antall").value === ''){
        document.getElementById("antall-error").innerText = "Må fylle ut et antall";
    } else {
        input[1] = document.getElementById("antall").value;
        var godkjent1 = true;
    }

    if (document.getElementById("fornavn").value === ''){
        document.getElementById("fornavn-error").innerText = "Må fylle ut fornavn";
    }else {
        input[2] = document.getElementById("fornavn").value;
        var godkjent2 = true;
    }

    if (document.getElementById("etternavn").value === ''){
        document.getElementById("etternavn-error").innerText = "Må fylle ut etternavn";
    }else {
        input[3] = document.getElementById("etternavn").value;
        var godkjent3 = true;
    }

    if (document.getElementById("telefon").value === ''){
        document.getElementById("telefon-error").innerText = "Må fylle ut et telefonnummer";
    }else {
        input[4] = document.getElementById("telefon").value;
        var godkjent4 = true;
    }

    if (document.getElementById("email").value === ''){
        document.getElementById("email-error").innerText = "Må fylle ut email";
    }else {
        input[5] = document.getElementById("email").value;
        var godkjent5 = true;
    }

    if (godkjent1 && godkjent2 && godkjent3 && godkjent4 && godkjent5 === true){
        kjop.push(input);
        clearErrorOutput()
    }else{
        console.log("Noe feil")
    }

    updateArray();
}

//Her oppdateres tabellen i arrayet, med riktig tabell

function updateArray(){

    let ut = "<table><tr>" + "<th>Film  </th>"+ "<th>Antall  </th>" +
        "<th>Fornavn  </th>"+ "<th>Etternavn  </th>"+
        "<th>Telefon  </th>"+ "<th>Email  </th>" + "</tr>";

    for (let i = 0; i < kjop.length; i++) {
        ut += "<tr>";
        for (let j = 0; j < kjop[i].length; j++) {
            ut += "<td>" + kjop[i][j] +", " +"</td>";
        }
        ut += "</tr>";
    }

    ut += "</table>";

    document.getElementById("output").innerHTML = ut;
}

//Her er funskjonen for å slette alt innhold i arrayet

function deleteArray(){ 
    kjop.splice(0, kjop.length);
    updateArray()
}


//Koden for å nullstille inputbokser og dropdown meny
function clearInput(){

    //Her lager jeg en ny variabel som har verdien til de ulike elementene
    var fornavnInput = document.getElementById("fornavn");
    var etternavnInput = document.getElementById("etternavn");
    var telefonInput = document.getElementById("telefon");
    var emailInput = document.getElementById("email");
    var antallInput = document.getElementById("antall");
    var filmInput = document.getElementById("dropdown");

    //Her setter jeg verdien til blankt
    filmInput.selectedIndex = -1;
    filmInput.value = '';
    fornavnInput.value = '';
    etternavnInput.value = '';
    telefonInput.value = '';
    emailInput.value = '';
    antallInput.value = '';
}

//Koden for å nullstille error teksten når du taster inn en riktig 'syntax'
function clearErrorOutput(){
    var antallError = document.getElementById("antall-error");
    var fornavnError = document.getElementById("fornavn-error");
    var etternavnError = document.getElementById("etternavn-error");
    var telefonError = document.getElementById("telefon-error");
    var emailError = document.getElementById("email-error");

    antallError.innerText = '';
    fornavnError.innerText = '';
    etternavnError.innerText = '';
    telefonError.innerText = '';
    emailError.innerText = '';
}