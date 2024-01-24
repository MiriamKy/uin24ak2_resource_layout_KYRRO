console.log(resources) //Sjekker om jeg har fått linket opp ressurser. js og arkivscript.js(denne filen) korrekt

let arrayIndex = 0
let aktivtInnhold = 
    `<h2>${resources[arrayIndex].category}</h2>
    <p>${resources[arrayIndex].text}</p>
    <ul>
        <li><a href=${resources[arrayIndex].sources[0].url}>${resources[arrayIndex].sources[0].title}</a></li>
        <li><a href=${resources[arrayIndex].sources[1].url}>${resources[arrayIndex].sources[1].title}</a></li>
        <li><a href=${resources[arrayIndex].sources[2].url}>${resources[arrayIndex].sources[2].title}</a></li>
    </ul>`

document.getElementById("aktivtInnhold").innerHTML = aktivtInnhold

document.getElementById("HTML").addEventListener("click", function() {
    arrayIndex = 0
    overskrivInnhold()
})
document.getElementById("CSS").addEventListener("click", function() {
    arrayIndex = 1
    overskrivInnhold()
})
document.getElementById("script").addEventListener("click", function() {
    arrayIndex = 2
    overskrivInnhold()
})
document.getElementById("react").addEventListener("click", function() {
    arrayIndex = 3
    overskrivInnhold()
})
document.getElementById("sanity").addEventListener("click", function() {
    arrayIndex = 4
    overskrivInnhold()
})

function overskrivInnhold() {
    console.log(arrayIndex)
    console.log(aktivtInnhold)
    document.getElementById("aktivtInnhold").innerHTML = aktivtInnhold
}
