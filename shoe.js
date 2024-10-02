function convertshoesizes(){
    sec = shoesizesystem.value
    val = shoesizes.value
    shoeoutput.innerHTML = ""
    if(sec == "inches"){
        if(isNaN(val)){
            val = val.slice(0, -1) * 6 + ["⅙", "⅓", "½", "⅔", "⅚"].indexOf(val[val.length - 1]) + 1
        }
        else val = val * 6
        uksize = 0.5 * (val - 46) 
        if(uksize > 12 && uksize % 1 == .5){
            shoeoutput.innerHTML += "UK/AU Men's: between " + (uksize - .5) + " and " + (uksize + .5) + "<br>"
            shoeoutput.innerHTML += "UK Women's: " + (uksize - .5) + "<br>"
            shoeoutput.innerHTML += "US Men's: between " + (uksize + .5) + " and " + (uksize + 1.5) + "<br>"
            shoeoutput.innerHTML += "US/AU Women's: " + (uksize + 2.5) + "<br>"
        }
        else{
            shoeoutput.innerHTML += "UK/AU Men's: " + uksize + "<br>"
            shoeoutput.innerHTML += "UK Women's: " + (uksize - .5) + "<br>"
            shoeoutput.innerHTML += "US Men's: " + (uksize + 1) + "<br>"
            shoeoutput.innerHTML += "US/AU Women's: " + (uksize + 2.5) + "<br>"
        }
    }
    else if(sec == "centimeters"){
        val1 = Math.floor(val * 2.3622 - 46) / 2
        val2 = Math.ceil(val * 2.3622 - 46) / 2
        shoeoutput.innerHTML += "UK/AU Men's: between " + val1 + " and " + val2 + "<br>"
        shoeoutput.innerHTML += "UK Women's: between " + (val1 - .5) + " and " + (val2 - .5) + "<br>"
        shoeoutput.innerHTML += "US Men's: between " + (+val1 + 1) + " and " + (+val2 + 1) + "<br>"
        shoeoutput.innerHTML += "US/AU Women's: between " + (+val1 + 2.5) + " and " + (+val2 + 2.5) + "<br>"
    }
    else if(sec == "ukmen"){
        halfbarleycorns = val * 2 + 46
        shoeoutput.innerHTML += "UK Women's: " + (val - .5) + "<br>"
        shoeoutput.innerHTML += "US Men's: " + (+val + 1) + "<br>"
        shoeoutput.innerHTML += "US/AU Women's: " + (+val + 2.5) + "<br>"
    }
    else if(sec == "ukwomen"){
        halfbarleycorns = val * 2 + 47
        shoeoutput.innerHTML += "UK/AU Men's: " + (+val + .5) + "<br>"
        shoeoutput.innerHTML += "US Men's: " + (+val + 1.5) + "<br>"
        shoeoutput.innerHTML += "US/AU Women's: " + (+val + 3) + "<br>"
    }
    else if(sec == "usmen"){
        halfbarleycorns = val * 2 + 44
        shoeoutput.innerHTML += "US/AU Women's: " + (+val + 1.5) + "<br>"
        shoeoutput.innerHTML += "UK/AU Men's: " + (val - 1) + "<br>"
        shoeoutput.innerHTML += "UK Women's: " + (val - 1.5) + "<br>"
    }
    else if(sec == "uswomen"){
        halfbarleycorns = val * 2 + 41
        shoeoutput.innerHTML += "US Men's: " + (val - 1.5) + "<br>"
        shoeoutput.innerHTML += "UK/AU Men's: " + (val - 2.5) + "<br>"
        shoeoutput.innerHTML += "UK Women's: " + (val - 3) + "<br>"
    }
}


function generateshoesizes(){
    sec = shoesizesystem.value
    shoesizes.innerHTML = ""
    shoesizearray = []
    if(sec == "inches") for(x = 48; x <= 74; x++) shoesizearray.push(Math.floor(x / 6) + ["", "⅙", "⅓", "½", "⅔", "⅚"][x % 6])
    else if(sec == "centimeters") for(x = 40; x <= 50; x++) shoesizearray.push(x * .5)
    else if(sec == "ukmen"){
        for(x = 2; x <= 29; x++){
            if(x <= 24 || x % 2 == 0){
                shoesizearray.push(x / 2)
            }
        }
    }
    else if(sec == "ukwomen"){
        for(x = 1; x <= 28; x++){
            if(x <= 24 || x % 2 == 0){
                shoesizearray.push(x / 2)
            }
        }
    }
    else if(sec == "usmen"){
        for(x = 4; x <= 31; x++){
            if(x <= 26 || x % 2 == 0){
                shoesizearray.push(x / 2)
            }
        }
    }
    else if(sec == "uswomen"){
        for(x = 7; x <= 34; x++){
            if(x <= 31 || x % 2 == 0){
                shoesizearray.push(x / 2)
            }
        }
    }
    console.log(shoesizearray)
    shoesizes.innerHTML = shoesizearray.map(x => `<option value="${x}">${x}</option>`).join("")
    convertshoesizes()
}
generateshoesizes()