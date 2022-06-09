class buecher{

    constructor(Seiten, Autor, Art, Exemplare) {
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
    let TributeVonPanem = new buecher("356", "Susanne Collins", "gedbunden", "16")
    let HerrDerRinge1 = new buecher("1658", "Tolkin", "taschenbuch", "56")
    let HarryPotter = new buecher("795", "J. K. Rowling", "gebunden", "45")
    let HarryPotter6 = new buecher("786", "J. K. rowling", "digital","564" )

    lager.push(TributeVonPanem, HerrDerRinge1, HarryPotter, HarryPotter6)
}

function lagerListe() {
    for (let i = 0; i < lager.length; i++) {
        console.log(lager[i])
    }

}



