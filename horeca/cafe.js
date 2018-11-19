function totaal() {
    var totaal = totaalbier + totaalfris + totaalwijn
    totaal
}

function bestellen() {
    drank = prompt("wat wilt u bestellen?")

    berekening()


    function berekening() {
        if (drank == "bier"){
            prijsbier = "2.50"
            bier = prompt("hoeveel bier")
            if (bier >= "0" ) {
                totaalbier = bier * prijsbier
            }
        }
        else if (drank == "fris"){
            prijsfris = "2.00"
            fris = prompt("hoeveel fris")
            if (fris >= "0" ){
                totaalfris = fris * prijsfris
            }
        }
        else if (drank == "wijn"){
            prijswijn = "3.00"
            wijn = prompt("hoeveel wijn")
            if (wijn >= "0" ){
                totaalwijn = wijn * prijswijn
            }
        }
        else{
            alert("drank niet beschikbaar")
        }
        };

}
