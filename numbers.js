function numbergenerate(){
    generatednumber.textContent = ""
    numlang = langtonumeralize.value
    numberlanguages = {
        "en": {
            numbers: [
                ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
                ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
                ['one hundred', "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"],  
            ],
            scale: ["thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion"],
            silentone: false,
            thousandmillion: false,
            numconnector: "-",
        },
        "eo": {
            numbers: [
                ['nul', 'unu', 'du', 'tri', 'kvar', 'kvin', 'ses', 'sep', 'ok', 'naŭ'],
                ['dek', "dudek", "tridek", "kvardek", "kvindek", "sesdek", "sepdek", "okdek", "naŭdek"],
                ['cent', "ducent", "tricent", "kvarcent", "kvincent", "sescent", "sepcent", "okcent", "naŭcent"],  
            ],
            scale: ["mil", "miliono/milionoj", "miliardo/miliardoj", "duiliono/duilionoj", "duiliardo/duiliardoj", "triiliono/triilionoj", "triiliardo/triiliardoj"],
            silentone: true,
            thousandmillion: false,
            numconnector: " ",
        },
        "es": {
            specialnumber: {
                100: "cien",
            },
            numbers: [
                ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte', 'veintiuno', 'veintidos', 'veintitrés', 'veinticuatro', 'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve'],
                ["treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"],
                ['ciento', "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"],  
            ],
            scale: ["mil", "un millón/millones", "un billón/billones"],
            silentone: true,
            thousandmillion: true,
            numconnector: " y ",
        },
    }
    eo = numberlanguages[numlang].numbers[0]
    eo2 = numberlanguages[numlang].numbers[1]
    eo3 = numberlanguages[numlang].numbers[2]
    enterdigits.value = enterdigits.value.replace(/[-\.\,]/g, "")
    wrdnmbr = enterdigits.value
    if(isNaN(wrdnmbr)){
        generatednumber.textContent = "Not a number"
        return 0
    }
    function smallesperantoloop(wordnumber, cunt){
        console.log(wordnumber)
        special = numberlanguages[numlang].specialnumber
        newwordnumber = ""
        if(wordnumber == 0 && (cunt % 2 == 1 || !numberlanguages[numlang].thousandmillion)){
            return "" 
        }
        else if(wordnumber == 0 && arraywrdnmbr[cunt - 1] == 0 && cunt > 1){
            console.log(cunt)
            console.log(numberlanguages[numlang].scale[cunt - 1].split("/").slice(-1))
            return " " + numberlanguages[numlang].scale[cunt - 1].split("/").slice(-1)
        }
        else if(wordnumber == 0){
            return ""
        }
        else if(special?.[wordnumber] ?? false) newwordnumber = " " + special[wordnumber]
        else if(cunt > 0 && wordnumber == 1 && numberlanguages[numlang].silentone) newwordnumber = ""
        else if(wordnumber < eo.length){
            newwordnumber = eo[wordnumber]
        }
        else if(wordnumber <= 99){
            if(wordnumber % 10 == 0) newwordnumber = eo2[Math.floor(wordnumber / 10) - (eo.length / 10)]
            else newwordnumber = eo2[Math.floor(wordnumber / 10) - (eo.length / 10)] + numberlanguages[numlang].numconnector + eo[wordnumber % 10]
        }
        else if(wordnumber <= 999){ //456, 405, 400, 450
            if(wordnumber % 100 == 0) newwordnumber = eo3[Math.floor(wordnumber / 100) - 1] //400
            else if(wordnumber % 10 == 0) newwordnumber = eo3[Math.floor(wordnumber / 100) - 1] + " " + eo2[Math.floor(wordnumber % 100) / 10 - (eo.length / 10)] // 450
            else if(wordnumber % 100 < eo.length) newwordnumber = eo3[Math.floor(wordnumber / 100) - 1] + " " + eo[Math.floor(wordnumber % 100)] //405
            else newwordnumber = eo3[Math.floor(wordnumber / 100) - 1] + " " + eo2[Math.floor(wordnumber % 100 / 10) - (eo.length / 10)] + numberlanguages[numlang].numconnector + eo[wordnumber % 10] //456
        }
        if(cunt > 0){
            if(numberlanguages[numlang].thousandmillion && cunt > 2 && cunt % 2 == 1){
                scalar = " " + numberlanguages[numlang].scale[0]
            }
            else{                 
                scalar = " " + numberlanguages[numlang].scale[numberlanguages[numlang].thousandmillion ? Math.floor(cunt / 2) : cunt - 1]
            }
            console.log(scalar)
            if(!scalar.includes("/")) newwordnumber += " " + scalar
            else if(wordnumber > 1) newwordnumber += " " + scalar.split("/")[1]
            else newwordnumber += " " + scalar.split("/")[0]
        }
        console.log(newwordnumber)
        return newwordnumber
    }
    arraywrdnmbr = []
    if(wrdnmbr.length < 4){
        arraywrdnmbr = [wrdnmbr]
    }
    else{
        wrdnmbr = wrdnmbr.split("")

        if(wrdnmbr.length % 3 == 1){
            arraywrdnmbr = [wrdnmbr[0]]
        }
        else if(wrdnmbr.length % 3 == 2){
            arraywrdnmbr = [`${wrdnmbr[0]}${wrdnmbr[1]}`]
        }
        for(xx = wrdnmbr.length % 3; xx < wrdnmbr.length; xx += 3){
            arraywrdnmbr.unshift(`${wrdnmbr[xx]}${wrdnmbr[xx + 1]}${wrdnmbr[xx + 2]}`)
        }
    }

    if(wrdnmbr === 0){
        generatednumber.textContent = eo[0]
    }
    else if(wrdnmbr.length > (numberlanguages[numlang].scale.length + 1) * 3){
        generatednumber.textContent = "Too long...sorry"
    }
    else{
        newwrdnmbr = ""
        for([cnt, arrwnm] of arraywrdnmbr.entries()){
            newwrdnmbr = " " + smallesperantoloop(+arrwnm, cnt) + newwrdnmbr
        }
        generatednumber.textContent = newwrdnmbr
    }
}