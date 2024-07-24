function numbergenerate(){
    generatednumber.textContent = ""
    numberlanguages = {
        "en": {
            numbers: [
                ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
                ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
                ['one hundred', "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"],  
            ],
            scale: ["thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion"],
            silentone: false,
            numconnector: function(H, T, O){
                return `${H ?? ""} ${T ?? ""}${T && O ? "-" : ""}${O ?? ""}`
            },
            toCardinal: function(W){
                if(W.trim() != W) alert("TRIM ERROR")
                if(W.endsWith("one")) return W.slice(0,-3) + "first"
                else if(W.endsWith("two")) return W.slice(0,-3) + "second"
                else if(W.endsWith("three")) return W.slice(0,-3) + "ird"
                else if(W.endsWith("eight")) return W + "h"
                else if(W.endsWith("nine")) return W.slice(0,-1) + "th"
                else if(W.endsWith("ve")) return W.slice(0,-2) + "fth"
                else if(W.endsWith("y")) return W.slice(0,-1) + "ieth"
                else return W + "th"
            }
        },
        "eo": {
            numbers: [
                ['nul', 'unu', 'du', 'tri', 'kvar', 'kvin', 'ses', 'sep', 'ok', 'naŭ'],
                ['dek', "dudek", "tridek", "kvardek", "kvindek", "sesdek", "sepdek", "okdek", "naŭdek"],
                ['cent', "ducent", "tricent", "kvarcent", "kvincent", "sescent", "sepcent", "okcent", "naŭcent"],  
            ],
            scale: ["mil", "miliono/milionoj", "miliardo/miliardoj", "duiliono/duilionoj", "duiliardo/duiliardoj", "triiliono/triilionoj", "triiliardo/triiliardoj"],
            silentone: true,
            numconnector: function(H, T, O){
                return `${H ?? ""} ${T ?? ""} ${O ?? ""}`
            },
            toCardinal: W => `${W}a`,
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
            scale: ["mil", "un millón/millones", "un millardo/millardos", "un billón/billones", "un billardo/billardos", "un trillón/trillón", "un trillardo/trillardos"],
            silentone: true,
            numconnector: function(H, T, O){
                return `${H ?? ""} ${T ?? ""}${T && O ? " y " : ""}${O ?? ""}`
            },
            cardinalLimit: 1000000000,
            toCardinal: function(W){
                W = W.replace(/ y/g, "").split(" ")
                lower = {
                    "uno": "primero",
                    "dos": "segundo",
                    "tres": "tercero",
                    "cuatro": "cuarto",
                    "cinco": "quinto",
                    "seis": "sexto",
                    "siete": "séptimo",
                    "ocho": "octavo",
                    "nueve": "noveno",
                    "diez": "décimo",
                    "once": "undécimo",
                    "doce": "duodécimo",
                    "trece": "decimotercero",
                    "catorce": "decimocuarto",
                    "quince": "decimoquinto",
                    "dieciséis": "decimosexto", 
                    "diecisiete": "decimoséptimo",
                    "dieciocho": "decimoctavo",
                    "diecinueve": "decimonoveno",
                    "veinte": "vigésimo",
                    "veintiuno": "vigesimoprimero",
                    "veintidos": "vigesimosegundo",
                    "veintitrés": "vigesimotercero",
                    "veinticuatro": "vigesimocuarto",
                    "veinticinco": "vigesimoquinto",
                    "veintiséis": "vigesimosexto",
                    "veintisiete": "vigesimoséptimo",
                    "veintiocho": "vigesimoctavo",
                    "veintinueve": "vigesimonoveno",
                    "treinta": "trigésimo",
                    "cuarenta": "cuadragésimo",
                    "cincuenta": "quincuagésimo",
                    "sesenta": "sexagésimo",
                    "setenta": "septuagésimo",
                    "ochenta": "octogésimo",
                    "noventa": "nonagésimo",
                    "cien": "centésimo",
                    "ciento": "centésimo",
                    "doscientos": "ducentésimo",
                    "trescientos": "tricentésimo",
                    "cuatrocientos": "cuadringentésimo",
                    "quinientos": "quingentésimo",
                    "seiscientos": "sexcentésimo",
                    "setecientos": "septingentésimo",
                    "ochocientos": "octingentésimo",
                    "novecientos": "noningentésimo",
                    "mil": "milésimo",
                }
                higher = {
                    "un": "un",
                    "millón": "millonésimo",
                }
                newW = []
                higherOrdinal = false
                for(V = 0; V < W.length; V++){
                    WW = W[W.length - (V + 1)]
                    if(lower[WW] != undefined){
                        if(higherOrdinal) newW.unshift(WW)
                        else{
                            if(WW.includes("il")) higherOrdinal = true
                            newW.unshift(lower[WW])
                        }
                    }
                    else if(higher[WW] != undefined){
                        newW.unshift(higher[WW])
                        higherOrdinal = true
                    }
                }
                
                return newW.join(" ")
            }
        },
        "it": {
            "numbers": [
                ["zero", "uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove", "dieci", "undici", "dodici", "tredici", "quattordici", "quindici", "sedici", "diciassette", "diciotto", "diciannove"],
                ["venti", "trenta", "quaranta", "cinquanta", "sessanta", "settanta", "ottanta", "novanta"],
                ["cento", "duecento", "trecento", "quattrocento", "cinquecento", "seicento", "settecento", "ottocento", "novecento"]
            ],
            "scale": ["mille/mila", "milione/milioni", "miliardo/miliardi", "bilione/bilioni", "biliardo/biliardi", "trilione/trilioni", "triliardo/triliardi"],
            silentone: true,
            numconnector: function(H, T, O){
                if(T != undefined && O == "tre") O = "tré"
                if(T != undefined && ["uno", "otto"].includes(O)) T = T.slice(0, -1)
                return `${H ?? ""}${T ?? ""}${O ?? ""}`
            },
            thousandconnector: function(W){
                return W.split(" ").join("")
            },
            toCardinal: function(W){
                return {
                    "uno": "primo",
                    "due": "secondo",
                    "tre": "terzo",
                    "quattro": "quarto",
                    "cinque": "quinto",
                    "sei": "sesto",
                    "sette": "settimo",
                    "otto": "ottavo",
                    "nove": "nono",
                    "diece": "decimo",
                }[W] ?? W.slice(0, -1) + "esimo"

            }
        },
        "scn":  {
            "numbers": [
                ["zeru", "unu", "dui", "tri", "quattru", "cincu", "sei", "setti", "ottu", "novi", "deci", "ùnnici", "dùdici", "trìdici", "quattòrdici", "quìnnici", "sìdici", "dicissetti", "dicidottu", "dicinnovi"],
                ["vinti", "trenta", "quaranta", "cinquanta", "sissanta", "sittanta", "uttanta", "novanta"],
                ["centu", "ducentu", "tricentu", "quattrucentu", "cinquecentu", "seicentua", "settecentu", "ottocentu", "novecentu"]
            ],
            "scale": ["milli/mila", "miliuni/miliuna", "miliardu/miliardi"],
            silentone: true,
            numconnector: function(H, T, O){
                if(T != undefined && O == "ottu") T = T.slice(0,-1)
                return `${H ?? ""}${T ?? ""}${O ?? ""}`
            },
            thousandconnector: function(W){
                W = W.split(" ")
                if(W[0] == "dui") W[0] = "du"
                return W.join("")
            },
            toCardinal: function(W){
                
                lowcardinal = {
                    "unu": "primu",
                    "dui": "sicunnu",
                    "tri": "terzu",
                    "quattru": "quartu",
                    "cincu": "quintu",
                    "sei": "sestu",
                    "setti": "sèttimu",
                    "ottu": "uttavu",
                    "novi": "nonu",
                    "deci": "dècimu",
                }
                if(lowcardinal[W] != undefined) return lowcardinal[W]
                else{
                    W = W.slice(0, -1)
                    alert(W)
                    if(W.endsWith("c")) W += "h"
                    W += "èsimu"
                }
                return W

            }
        },
        "osa": {
            numbers: [
                ['Zero does not exist in Osage', '𐓏𐒻́͘𐓐𐓊𐒻', '𐓏𐒷𐓍𐓂̋͘𐓄𐒰', '𐓏𐒷́𐓍𐒰̄𐒴𐒻͘', '𐓈𐓂̋𐓄𐒰', '𐓆𐒰́𐓉𐒰͘', '𐓇𐒰́𐓅𐒷', '𐓅𐒷̋𐓍𐓂̄͘𐓄𐒰', '𐒽𐒻𐒷𐓈𐓂̋𐓄𐒰', '𐒿𐒷́𐒴𐒰͘ 𐓋𐒷 𐓏𐒻̋͘𐒼𐒷', '𐒿𐒷́𐒴𐒰͘'],
                ["𐒿𐒷́𐒴𐒰͘", "𐒿𐒷́𐒴𐒰͘ 𐓍𐓂̄͘𐓄𐒰́", "𐒿𐒷́𐒴𐒰͘ 𐓍𐒰̋𐒴𐒻͘", "𐒿𐒷́𐒴𐒰͘ 𐓈𐓂̋𐓄𐒰", "𐒿𐒷́𐒴𐒰͘ 𐓆𐒰́𐓉𐒰͘", "𐒿𐒷́𐒴𐒰͘ 𐓇𐒰́𐓅𐒷", "𐒿𐒷́𐒴𐒰͘ 𐓅𐒷́𐓍𐓂̄͘𐓄𐒰", "𐒿𐒷́𐒴𐒰͘ 𐒽𐒻𐒷𐓈𐓂̋𐓄𐒰", "𐒿𐒷́𐒴𐒰͘ 𐒿𐒷́𐒴𐒰͘ 𐓋𐒷 𐓏𐒻̋͘𐒼𐒷"],
                ['𐒿𐒷́𐒴𐒰͘ 𐒹𐓎̄𐓓𐒻́͘', "𐒿𐒷́𐒴𐒰͘ 𐒹𐓎̄𐓓𐒻́͘ 𐓍𐓂̄͘𐓄𐒰́", "𐒿𐒷́𐒴𐒰͘ 𐒹𐓎̄𐓓𐒻́͘ 𐓍𐒰̋𐒴𐒻͘", "𐒿𐒷́𐒴𐒰͘ 𐒹𐓎̄𐓓𐒻́͘ 𐓈𐓂̋𐓄𐒰", "𐒿𐒷́𐒴𐒰͘ 𐒹𐓎̄𐓓𐒻́͘ 𐓆𐒰́𐓉𐒰͘", "𐒿𐒷́𐒴𐒰͘ 𐒹𐓎̄𐓓𐒻́͘ 𐓇𐒰́𐓅𐒷", "𐒿𐒷́𐒴𐒰͘ 𐒹𐓎̄𐓓𐒻́͘ 𐓅𐒷́𐓍𐓂̄͘𐓄𐒰", "𐒿𐒷́𐒴𐒰͘ 𐒹𐓎̄𐓓𐒻́͘ 𐒽𐒻𐒷𐓈𐓂̋𐓄𐒰", "𐒿𐒷́𐒴𐒰͘ 𐒹𐓎̄𐓓𐒻́͘ 𐒿𐒷́𐒴𐒰͘ 𐓋𐒷 𐓏𐒻̋͘𐒼𐒷"],  
            ],
            scale: ["𐓓𐒰̋͘𐒽𐓂𐒼𐒷", "𐓏𐒰𐓍𐒰̋𐓏𐒰 𐓉𐒰́͘𐒼𐒷"],
            silentone: false,
            numconnector: function(H, T, O){
                return `${H ?? ""}${T || O ? " 𐒰́𐒿𐒻̄͘ " : ""}${T ?? ""}${T && O ? " 𐒰́𐒿𐒻̄͘ " : ""}${O ?? ""}`
            },
            toCardinal: function(W){
                return {
                    "𐓏𐒻́͘𐓐𐓊𐒻": "𐓅𐒰𐒹𐒰́͘𐒿𐒷",
                    "𐓏𐒷𐓍𐓂̋͘𐓄𐒰": "",
                    "𐓏𐒷́𐓍𐒰̄𐒴𐒻͘": "",
                    "𐓈𐓂̋𐓄𐒰": "𐓏𐒷́𐓈𐓂̄𐓄𐒰",
                    "𐓆𐒰́𐓉𐒰͘": "𐓏𐒷𐓆𐒰́𐓉𐒰͘",
                    "𐓇𐒰́𐓅𐒷": "𐓏𐒷𐓇𐒰́𐓅𐒷",
                }[W]
            },
            cardinalLimit: 7,
        },
    }
    N = numberlanguages[langtonumeralize.value]
    eo = N.numbers[0]
    eo2 = N.numbers[1]
    eo3 = N.numbers[2]
    enterdigits.value = enterdigits.value.replace(/[-\.\,]/g, "")
    wrdnmbr = enterdigits.value
    if(wrdnmbr.trim() === "" || (isNaN(wrdnmbr))){
        generatednumber.textContent = "Enter a number"
        return 0
    }
    else if(+wrdnmbr === 0){
        newwrdnmbr= generatednumber.textContent = eo[0]
        return 0
    }
    function smallesperantoloop(wordnumber, cunt){
        special = N.specialnumber
        newwordnumber = ""
        if(special?.[wordnumber] ?? false) newwordnumber = " " + special[wordnumber]
        else if(wordnumber == 0){
            return "" 
        }
        else if(wordnumber == 0 && arraywrdnmbr[cunt - 1] == 0 && cunt > 1){
            return " " + N.scale[cunt - 1].split("/").slice(-1)
        }
        else if(wordnumber == 0){
            return ""
        }
        else if(cunt > 0 && wordnumber == 1 && N.silentone) newwordnumber = ""
        else if(wordnumber < eo.length){
            newwordnumber = eo[wordnumber]
        }
        else if(wordnumber <= 99){
            if(wordnumber % 10 == 0) newwordnumber = eo2[Math.floor(wordnumber / 10) - (eo.length / 10)]
            else newwordnumber = N.numconnector("", eo2[Math.floor(wordnumber / 10) - (eo.length / 10)], eo[wordnumber % 10])
        }
        else if(wordnumber <= 999){ //456, 405, 400, 450
            if(wordnumber % 100 == 0) newwordnumber = eo3[Math.floor(wordnumber / 100) - 1] //400
            else if(wordnumber % 100 < eo.length) newwordnumber = N.numconnector(eo3[Math.floor(wordnumber / 100) - 1], "", eo[Math.floor(wordnumber % 100)]) //405
            else if(wordnumber % 10 == 0) newwordnumber = eo3[Math.floor(wordnumber / 100) - 1] + " " + eo2[Math.floor(wordnumber % 100) / 10 - (eo.length / 10)] // 450
            else newwordnumber = N.numconnector(eo3[Math.floor(wordnumber / 100) - 1], eo2[Math.floor(wordnumber % 100 / 10) - (eo.length / 10)],eo[wordnumber % 10])//456
        }
        if(cunt > 0){
         
            scalar = " " + N.scale[cunt - 1]
            if(!scalar.includes("/")) newwordnumber += " " + scalar
            else if(wordnumber > 1){
                newwordnumber += " " + scalar.split("/")[1]
                if(N.thousandconnector != undefined && cunt == 1) newwordnumber = N.thousandconnector(newwordnumber)
            }
            else newwordnumber += " " + scalar.split("/")[0]
        }
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

    if(wrdnmbr.length > (N.scale.length + 1) * 3){
        generatednumber.textContent = "Too long...sorry"
    }
    else{
        newwrdnmbr = ""
        for([cnt, arrwnm] of arraywrdnmbr.entries()){
            SEL = smallesperantoloop(+arrwnm, cnt).trim()
            if(!(SEL.endsWith("mille") || SEL.endsWith("mila"))) SEL = SEL + " " 
            newwrdnmbr = SEL + newwrdnmbr
        }
        newwrdnmbr = newwrdnmbr.trim()
        generatednumber.innerHTML = newwrdnmbr
        if(N.toCardinal != undefined && (N.cardinalLimit == undefined || N.cardinalLimit > +enterdigits.value)){
            generatednumber.innerHTML += "<br>" +  N.toCardinal(newwrdnmbr)
        }
    }
}

numbergenerate()