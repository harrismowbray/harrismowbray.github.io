function signdevelop(){
    SLang = signlang.value

    
    lets = signinput.value
    
    if(SLang == "AİD"){
        lets = lets.replace(/İ/g, "i").replace(/I/g, "ı")
    }
    
    lets = lets.toLowerCase()

    if(SLang == "LSF"){
        lets = lets
        .replace(/[àâ]/g, "a")
        .replace(/ç/g, "c")
        .replace(/[éèêë]/g, "e")
        .replace(/[ïî]/g, "i")
        .replace(/ô/g, "o")
        .replace(/[ùüû]/g, "u")
    }

    lets = lets.split("")
    LETTERS = []

    for(ls of lets){
        if("ւ" == ls && "ԵՈ".includes(LETTERS[LETTERS.length - 1])){
            LETTERS[LETTERS.length - 1] += "Ւ"
        }
        else if(SLang == "AİD" && ls == "i"){
            LETTERS.push("İ")
        }
        else if(SLang != "GSL"){
            LETTERS.push(ls.toUpperCase())
        }
        else{
            LETTERS.push(ls)
        }
    }

    signoutput.innerHTML = LETTERS.map(L => `<img src="sign/${SLang}/${L}.png"></img>`).join("")
}
function resetsign(){
    signinput.value = ""
    signoutput.innerHTML = ""
}