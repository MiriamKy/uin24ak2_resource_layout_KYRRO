
// Skriver kategoriknappene ved hjelp av nøkkelen category fra resources.js til index.html
resources.map(knapp => {
document.getElementById("knapper").innerHTML += `<li><button type="button" onClick="oppdaterInnhold('${knapp.category}')">${knapp.category}</button></li>`
})

// Skriver forhåndsvalgt innhold fra resources.js til index.html
let valgtInnhold = 
    `<h2>${resources[0].category}</h2>
    <p>${resources[0].text}</p>`
document.getElementById("aktivtInnhold").innerHTML = valgtInnhold

resources[0].sources.map(kilde => { 
    document.getElementById("aktivtInnhold").innerHTML += 
        `<ul><li><a href=${kilde.url}>${kilde.title}</a></li></ul>`
    })

// Funksjon som kalles ved onClick-eventet på kategoriknappene
// Det deklareres en variabel (nyArray) som inneholder en ny array kun de objektene (her: det objektet) som har nøkkel category lik parameteren kategori. 
// Når parameteren får verdien sin fra knappen som ble klikket, gjør det at den nye arrayen kun inneholder informasjonen som er relevant for klikket kategoriknapp.
// Variabelen brukes så til å skrive ut relevant innhold til HTML-en, i forlond til hvilken knapp som er klikket, fordi den nye arrayen nå kun inneholder det tilhørende objektet.
// Går så igjennom den nye arrayen som er lagret i variabelen nyArray, for å skrive ut de tilhørende linkene som listepunkter
function oppdaterInnhold(kategori) {
    //console.log("Klikket" + kategori // Sjekker i konsollen at funskjonen kjører ved klikk, og om parameteren kategori har fått en verdi, og om det er riktig verdi, altså stringen på category-nøkkelen i det objektet/knappen som er klikket på.
    
    let nyArray = resources.filter((objekt) => objekt.category === kategori)
    //console.log(nyArray[0].category) // Sjekker syntsax for hvordan variabelen nyArray skal refereres til for å sende
        
    document.getElementById("aktivtInnhold").innerHTML = 
        `<h2>${nyArray[0].category}</h2>
        <p>${nyArray[0].text}</p>`

    nyArray[0].sources.map(kilde => { 
        document.getElementById("aktivtInnhold").innerHTML += 
            `<ul><li><a href=${kilde.url}>${kilde.title}</a></li></ul>`
        })
}

// Kilder:
// Kursmateriale i Webtriks LMS
// Veiledning fra studentassistenter - ca 1 time
// Veiledning fra familiemedlem med bakgrunn innen programmering - ca 3 timer tilgjengelig for meg til å stille spørsmål