function signdevelop(){
    signoutput.innerHTML = ""
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
        else if(SLang == "LSM" && ls.toUpperCase() == "L" && "L" == LETTERS[LETTERS.length - 1]){
            LETTERS[LETTERS.length - 1] += "L"
        }
        else if(SLang == "LSM" && ls.toUpperCase() == "R" && "R" == LETTERS[LETTERS.length - 1]){
            LETTERS[LETTERS.length - 1] += "R"
        }
        else if(SLang == "AİD" && ls == "i"){
            LETTERS.push("İ")
        }
        else if(SLang != "GESL"){
            LETTERS.push(ls.toUpperCase())
        }
        else{
            LETTERS.push(ls)
        }
    }

    for(L of LETTERS){
        signoutput.innerHTML += `<img onerror="this.style.display='none'" src="sign/${SLang}/${L}.png"></img>`
    }
}
function resetsign(){
    signinput.value = ""
    signoutput.innerHTML = ""
}