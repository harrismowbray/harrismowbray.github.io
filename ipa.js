
function ipagenerate(){
    generatedipa.textContent = hawaiianword(enteripa.value)
}

function changelangtoipaize(ourlang){
    enteripa.value = {
        "haw": "Leleākūhonua",
        "nv": "ínsadoobíídiiya",
    }[ourlang]
    ipagenerate()
}


hawaiiankey = {
    "haw": {
        breaks: [
            "=ʻ", "=B", "=D", "=G", "=H", "=K", "=L", "=M", "=N", "=P", "=R", "=S", "=W", "E=A", "E=Ā", "I=Ā", "I=A", "I=O", "O=A", "U=Ā", "U=A",
        ],
        alphabet: {
            "W": {
                normal: "ʋ",
            },
            "AI": {
                normal: "aj",
            },
            "AU": {
                normal: "əw",
            },
            "BA": {
                normal: "pɐ",
            },
            "GA": {
                normal: "kɐ",
            },
            "D": {
                normal: "k",
            },
            "A": {
                normal: "ə",
                emphasis: "ɐ",
                after: {
                    "E": "jə", 
                    "O": "wə",
                    "U": "wə",
                },
                emphasisafter: {
                    "U": "wɐ",
                },
            },
            "ĀI": {
                normal: "aːj"
            },
            "Ā": {
                normal: "aː",
                after: {
                    "E": "jaː",
                    "I": "jaː",
                    "U": "waː",
                },
            },
            "O": {
                normal: "o",
                after: {
                   // "e": "jo",
                    "I": "jo",
                },
            },        
            "Ō": {
                normal: "oː",
            },
            "H": {
                normal: "h",
            },
            "Ī": {
                normal: "iː",
            },
            "I": {
                normal: "i",
            },
            "ʻ": {
                normal: "ʔ",
            },
            "Ē": {
                normal: "eː",
            },
            "E": {
                normal: "e",
                emphasis: "ɛ",
            },
            "T": {
                normal: "k",
            },
            "M": {
                normal: "m",
            },
            "N": {
                normal: "n",
            },
            "P": {
                normal: "p",
            },
            "S": {
                normal: "k",
            },
            "R": {
                normal: "l",
            },
            "K": {
                normal: "k",
                before: {
                    "I": "t",
                    "Ī": "t",
                }
            },
            "Ū": {
                normal: "uː",
            },
            "U": {
                normal: "u",
            },
        },
    },
    "nv": {
        alphabet: {
            "ÓYÉ": {normal: "ÓʝÉ"},
            "ĄĄ": {normal: "ɑ̃̀ː"},
            "ÁÁ": {normal: "ɑ́ː"},
            "ÁA": {normal: "ɑ̂ː"},
            "AA": {normal: "ɑ̀ː"},
            "Á": {normal: "ɑ́"},
            "A": {normal: "ɑ̀"},
            "B": {normal: "p"},
            "CH": {normal: "t͡ʃʰ"},
            "DZ": {normal: "t͡s"},
            "D": {normal: "t"},
            "ÉÉ": {normal: "éː"},
            "ÉE": {normal: "êː"},
            "EE": {normal: "èː"},
            "É": {normal: "ɛ́"},
            "E": {normal: "ɛ̀"},
            "G": {normal: "k"},
            "HW": {normal: "xʷ"},
            "Į́Į́": {normal: "ĩ́ː"},
            "\\/Í": {normal: "/ʔɪ́"},
            "ÍÍ": {normal: "íː"},
            "ÍI": {normal: "îː"},
            "II": {normal: "ìː"},
            "Í": {normal: "ɪ́"},
            "I": {normal: "ɪ̀"},
            "L": {normal: "l"},
            "ŁH": {normal: "ɬx"},
            "Ł": {normal: "ɬ"},
            "M": {normal: "m"},
            "N": {normal: "n"},
            "ÓÓ": {normal: "óː"},
            "ÓO": {normal: "ôː"},
            "OO": {normal: "òː"},
            "Ó": {normal: "ó"},
            "O": {normal: "ò"},
            "\\/TS": {normal: "/t͡sʰ"},
            "TS`": {normal: "t͡sʼ"},
            "TS": {normal: "t͡ʃʰ"},
            "SH": {normal: "ʃ"},
            "S": {normal: "s"},
            "ZH": {normal: "ʒ"},
            "T`": {normal: "tʼ"},
            "`": {normal: "ʔ"},
            "H": {normal: "h"},
            "X": {normal: "x"},
            "Y": {normal: "j"},
        },
        breaks: [],
    },
}

function hawaiianword(word){


    word = word.toUpperCase().trim()
    word = word.replace(/ʼ/g, "`")

    if(langtoipaize.value == "haw") word = "[" + word + "]"
    else word = "/" + word + "/"

    for(brks of hawaiiankey[langtoipaize.value].breaks){
        word = word.replace(new RegExp(brks.replace("=", ""), "g"), brks)
    }

    word = word.split("=").filter(d=>d)

    newprivarr = []
    for(priv = 0; priv < word.length; priv++){
        if(priv == word.length - 2) type = "emph"
        else if(word.length > 4 && priv == 0 && "hʻ".includes(word[priv][0])) type = "semiemph"
        else if(word.length >= 6 && priv % 2 == 0 && priv != word.length - 1) type = "semiemph"
        else type = "normal"
        ekis = word[priv] + ""
        for(haw of Object.entries(hawaiiankey[langtoipaize.value].alphabet)){
            if(type == "emph" && word[priv].startsWith(haw[0]) && priv > 0 && haw[1].emphasisafter != undefined && haw[1].emphasisafter[word[priv - 1].slice(-1)] != undefined){
                haww = haw[1].emphasisafter[word[priv - 1].slice(-1)]
            }
            else if(type == "emph" && haw[1].emphasis != undefined){
                haww = haw[1].emphasis
            }
            else if(word[priv].startsWith(haw[0]) && priv > 0 && haw[1].after != undefined && haw[1].after[word[priv - 1].slice(-1)] != undefined){
                haww = haw[1].after[word[priv - 1].slice(-1)]
            }
            else if(word[priv].startsWith(haw[0]) && haw[1].before != undefined && haw[1].before[word[priv].slice(-1)] != undefined){
                haww = haw[1].before[word[priv].slice(-1)]
            }
            else{
                haww = haw[1].normal
            }
            ekis = ekis.replace(new RegExp(haw[0], "g"), haww)
        }
        if(type == "emph") ekis = "ˈ" + ekis
        else if(type == "semiemph") ekis = "ˌ" + ekis
        else if(priv > 0) ekis = "." + ekis
        newprivarr.push(ekis)
    }
    //find emphasis
    //ipaize
    word = newprivarr.join("")
    return word
}

//TESTING


/*
mynewanswers = {
    "humuhumunukunukuāpuaʻa": "[ˌhu.muˌhu.muˌnu.kuˌnu.kuˌwaː.puˈwɐ.ʔə]",
    "Banagaladesa": "[ˌpɐ.nəˌkɐ.ləˈkɛ.kə]",
    //"ʻElikapeka": "[ʔe.li.kəˈpɛ.kə]",
    //"Heleʻekela": "[he.le.ʔɛˈkɛ.lə]",
    "hikiāloa": "[ˌhi.ti.jaːˈlo.wə]",
    "hoʻoʻulaʻula": "[ˌho.ʔoˌʔu.ləˈʔu.lə]",
    "Kēhaulani": "[keː.həwˈlɐ.ni]",
    "kīwila": "[tiːˈʋi.lə]",
    "Laʻakea": "[lə.ʔəˈkɛ.jə]",
    //"Leleākūhonua": "[le.le.jaː.kuː.hoˈnu.wə]",
    "Lukemapuka": "[lu.ke.məˈpu.kə]",
    "māiʻuʻu": "[maːjˈʔu.ʔu]",
    "Pōmaikaʻi": "[poː.məjˈkɐ.ʔi]",
    "Tesalonike": "[ke.kə.loˈni.ke]",
    "uniona": "[u.niˈjo.nə]",
    "ʻAikupika": "[ʔəj.kuˈpi.kə]",
    "ʻāhewa": "[ʔaːˈhɛ.ʋə]",
    "ʻōmaʻimaʻi": "[ˌʔoː.mə.ʔiˈmɐ.ʔi]",
    //"ʻUsepekikana": "[ʔu.ke.pe.tiˈkɐ.nə]",
   // "ʻIseraʻela": "[ʔi.kɛ.ləˈʔɛ.lə]", 
}


mynewanswers = {
    "Méelin": "/mêːlɪ̀n/",
    "hahoodzo": "/hɑ̀hòːt͡sò/",
    "chąąshtʼezhiitsoh": "/t͡ʃʰɑ̃̀ːʃtʼɛ̀ʒìːt͡ʃʰòh/",
    "dį́į́ʼtsʼáadah": "/tĩ́ːʔt͡sʼɑ̂ːtɑ̀h/",
    "gohwééh": "/kòxʷéːh/",
    "iłhóyééʼ": "/ɪ̀ɬxóʝéːʔ/",
    "ínsadoobíídiiya": "/ʔɪ́nsɑ̀tòːpíːtìːjɑ̀/",
    "tseebíítsʼáadah": "/t͡sʰèːpíːt͡sʼɑ̂ːtɑ̀h/",
    "yáázh": "/jɑ́ːʒ/",
    "łichxííʼ": "/ɬɪ̀t͡ʃʰxíːʔ/",
    //"biłʼéʼélʼíní": "/pɪ̀ɬ.ʔɛ́.ʔɛ́l.ʔɪ́.nɪ́/",
}

allsafe = true
for(mynew of Object.entries(mynewanswers)){
    hawaii = hawaiianword(mynew[0])
    if(hawaii != mynew[1]){
        console.log("ERROR @ " + mynew[0])
        console.log("Expected: " + mynew[1])
        console.log("Recieved: " + hawaii)
        allsafe = false
    }
}
if(allsafe) console.log("All safe")
*/
