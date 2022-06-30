class buecher{

    constructor(Titel, Seiten, Autor, Art, Exemplare) {
       this.Titel = Titel
        this.Seitenanzahl = Seiten
        this.Autor = Autor
        this.Bund = Art
        this.Anzahl = Exemplare
    }

    verfuegbar(){
        if (this.Anzahl >= 1){
            console.log("Du kannst dieses Buch kaufen")
        }
    }

    verkauft(){
        this.Anzahl = this.Anzahl - 1
    }
}


let lager = []

function init() {
    let TributeVonPanem = new buecher("TributeVonPanem", "356", "Susanne Collins", "gedbunden", "16")
    let HerrDerRinge1 = new buecher("HerrDerRinge1", "1658", "Tolkin", "taschenbuch", "56")
    let HarryPotter = new buecher("HarryPotter","795", "J. K. Rowling", "gebunden", "45")
    let HarryPotter6 = new buecher("HarryPotter6","786", "J. K. rowling", "digital","564" )

    lager.push(TributeVonPanem, HerrDerRinge1, HarryPotter, HarryPotter6)
}

function lagerListe() {
    for (let i = 0; i < lager.length; i++) {
        console.log(lager[i])
    }

}

function lagerListeTitel(){
    for (let i = 0; i < lager.length; i++) {
        console.log(lager[i].Titel)
        console.log(lager[i].Autor)
    }
}

function titelSuchen(Titel) {
    for (let i = 0; i < lager.length; i++) {
        if(Titel === lager[i].Titel)
        {
        console.log(lager[i].Anzahl)
        }
       else{
           console.log("Das Buch haben wir leider nciht")
        }
    }
}
function nachbestellen(Titel, Anzahl) {

}


function ausDemSortiment(buchtitel) {
    for (let i = 0; i < lager.length; i++) {
        if(buchtitel === lager[i].Titel){
            lager.slice(i)
        }else{
            console.log("Wir haben dieses Buch nicht und können es somit nicht löschen")
        }
    }


}

