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
            shoeoutput.innerHTML += "UK/AU Men's: " + (uksize - .5) + " - " + (uksize + .5) + "<br>"
            shoeoutput.innerHTML += "UK Women's: " + (uksize - .5) + "<br>"
            shoeoutput.innerHTML += "US Men's: " + (uksize + .5) + " - " + (uksize + 1.5) + "<br>"
            shoeoutput.innerHTML += "US/AU Women's: " + (uksize + 2.5) + "<br>"
        }
        else{
            shoeoutput.innerHTML += "UK/AU Men's: " + uksize + "<br>"
            shoeoutput.innerHTML += "UK Women's: " + (uksize - .5) + "<br>"
            shoeoutput.innerHTML += "US Men's: " + (uksize + 1) + "<br>"
            shoeoutput.innerHTML += "US/AU Women's: " + (uksize + 2.5) + "<br>"
        }
        cm = val / 6 * 2.54
        shoeoutput.innerHTML += "Mondopoint: " + Math.round(cm * 2) * 5 + "<br>"
        shoeoutput.innerHTML += "Japan: " + Math.round(cm * 2) / 2 + "<br>"
        shoeoutput.innerHTML += "EU: " + Math.round((1.5 * cm) + 2) + "<br>"
        shoeoutput.innerHTML += "Argentina: " + Math.round((1.5 * cm) + 1) + "<br>"
        shoeoutput.innerHTML += "Brazil: " + Math.round(1.5 * cm) + "<br>"
    }
    else if(["centimeters", "mondopoint", "eu", "argentina", "brazil"].includes(sec)){
        if(sec == "mondopoint") val /= 10
        if(sec == "eu") val = (val - 2) / 1.5
        if(sec == "argentina") val = (val - 1) / 1.5
        if(sec == "brazil") val /= 1.5
        val1 = Math.floor(val * 2.3622 - 46) / 2
        val2 = Math.ceil(val * 2.3622 - 46) / 2
        if(sec != "mondopoint") shoeoutput.innerHTML += "Mondopoint: " + Math.round(val * 2) * 5 + "<br>"
        if(sec != "centimeters") shoeoutput.innerHTML += "Japan: " + Math.round(val * 2) / 2 + "<br>"
        if(sec != "eu") shoeoutput.innerHTML += "EU: " + Math.round((1.5 * val) + 2) + "<br>"
        if(sec != "argentina") shoeoutput.innerHTML += "Argentina: " + Math.round((1.5 * val) + 1) + "<br>"
        if(sec != "brazil") shoeoutput.innerHTML += "Brazil: " + Math.round(1.5 * val) + "<br>"
        //if(sec != "china") shoeoutput.innerHTML += "China: " + Math.round(val *  2 - 10) + "<br>"
        shoeoutput.innerHTML += "UK/AU Men's: " + val1 + " - " + val2 + "<br>"
        shoeoutput.innerHTML += "UK Women's: " + (val1 - .5) + " - " + (val2 - .5) + "<br>"
        shoeoutput.innerHTML += "US Men's: " + (+val1 + 1) + " - " + (+val2 + 1) + "<br>"
        shoeoutput.innerHTML += "US/AU Women's: " + (+val1 + 2.5) + " - " + (+val2 + 2.5) + "<br>"
    }
    else if(sec.endsWith("n")){
        halfbarleycorns = val * 2 + {"ukmen": 46, "ukwomen": 47, "usmen": 44, "uswomen": 41}[sec]
        cm = halfbarleycorns / 6 * 2.54
        if(sec != "ukmen") shoeoutput.innerHTML += "UK Men's: " + (val) + "<br>"
        if(sec != "ukwomen") shoeoutput.innerHTML += "UK Women's: " + (val - .5) + "<br>"
        if(sec != "usmen") shoeoutput.innerHTML += "US Men's: " + (+val + 1) + "<br>"
        if(sec != "uswomen") shoeoutput.innerHTML += "US/AU Women's: " + (+val + 2.5) + "<br>"
        shoeoutput.innerHTML += "Mondopoint: " + Math.round(cm * 2) * 5 + "<br>"
        shoeoutput.innerHTML += "Japan: " + Math.round(cm * 2) / 2 + "<br>"
        shoeoutput.innerHTML += "EU: " + Math.round((1.5 * cm) + 2) + "<br>"
        shoeoutput.innerHTML += "Argentina: " + Math.round((1.5 * cm) + 1) + "<br>"
        shoeoutput.innerHTML += "Brazil: " + Math.round(1.5 * cm) + "<br>"
    }
}


function generateshoesizes(){
    sec = shoesizesystem.value
    shoesizes.innerHTML = ""
    shoesizearray = []
    if(sec == "inches") for(x = 48; x <= 74; x++) shoesizearray.push(Math.floor(x / 6) + ["", "⅙", "⅓", "½", "⅔", "⅚"][x % 6])
    else if(sec == "centimeters") for(x = 40; x <= 60; x++) shoesizearray.push(x * .5)
    else if(sec == "mondopoint") for(x = 40; x <= 60; x++) shoesizearray.push(x * 5)
    else if(sec == "eu") for(x = 32; x <= 47; x++) shoesizearray.push(x)
    else if(sec == "argentina") for(x = 31; x <= 46; x++) shoesizearray.push(x)
    else if(sec == "brazil") for(x = 30; x <= 45; x++) shoesizearray.push(x)
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