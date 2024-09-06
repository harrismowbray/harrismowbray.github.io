function changelangtodecline(ourlang){
    enternoun.value = {
        "be": "арышт",
        "en": "crisis",
        "eo": "virino",
        "es": "avión",
        "ext": "autol",
        "fr": "mademoiselle",
        "it": "arancia",
        "pl": "kooperacja",
        "scn": "agugghia",
    }[ourlang]
    decline()
}

mynotes = {
    "es": {
        "mar": "<b>mar</b> is only feminine in nautical contexts",
        "arte": "'arte' is masculine in the singular and feminine in the plural",
        "radio": "in some countries like Mexico, 'radio' is feminine but only when referring to an electronic radio and not <i>radius</i> or <i>radium</i>",
        "sartén": "<b>sartén</b> is masculine in Spain but feminine in Latin America",
        "azúcar": "<b>azúcar</b> can use the article 'el' while being used with feminine adjectives"
    },
}

function decline(){
    notes.innerHTML = ""
    ourlang = langtodecline.value
    singular = enternoun.value.toLowerCase()
    englishnoun.innerHTML = ""
    if(singular.trim() == ""){
        return 0
    }
    switch(ourlang){
        case "en":
            irregularnouns = {
                "alga": "algae",
                "alumna": "alumnae",
                "alumnus": "alumni",
                "antenna": "antennae",
                "aorta": "aortae/aorta",
                "apparatus": "apparatus/apparatusses/appartatus",
                "aurora": "aurorae/auroras",
                "buffalo": "buffalo/buffaloes",
                "bus": "bus/busses",
                "calf": "calves",
                "child": "children",
                "clitoris": "clitorises/clitorides",
                "coccyx": "coccyges",
                "die": "dice",
                "dormouse": "dormice",
                "dwarf": "dwarfs/dwarves",
                "echo": "echoes",
                "elf": "elfs/elves",
                "foot": "feet",
                "formula": "formulae/formulas",
                "goose": "geese",
                "hemiclitoris": "hemiclitorises/hemiclitorides",
                "hero": "heroes",
                "hoof": "hooves/hoofs",
                "impetigo": "impetigos/impetigoes/impetigines",
                "index": "indices/indexes",
                "larva": "larvae",
                "leaf": "leaves",
                "lentigo": "lentigos/lentigines",
                "loch": "lochs",
                "louse": "lice",
                "mouse": "mice",
                "octopus": "octopuses/octopusses/octopodes/octopi",
                "ox": "oxen",
                "person": "people/persons",
                "passerby": "passersby",
                "penny": "pennies/pence",
                "persona non grata": "personae non gratae",
                "phalanx": "phalanxes/phalanges",
                "potato": "potatoes",
                "staff": "staffs/staves",
                "testudo": "testudos/testudoes/testudines",
                "tooth": "teeth",
                "tomato": "tomatoes",
                "volcano": "volcanoes/volcanos",
                "zero": "zeroes/zeros",
            }

            noplural = ["fish", "deer", "sheep", "elk", "bison", "salmon", "trout", "cod", "moose", "squid", "pike"]

            if(Object.keys(irregularnouns).includes(singular)){
                plural = irregularnouns[singular]
            }
            else if(singular.length == 1){
                plural = singular + "'s"
                notes.innerHTML += "Individual letters add 'S in the plural"
            }
            else if(noplural.includes(singular)){
                plural = singular
                notes.innerHTML += "Many words for animals are the same in singular and plural"
            }
            else if(singular.endsWith("ies")){
                notes.innerHTML += "Words ending in -IES are the same in singular and plural"
            }
            else if(singular.endsWith("polis")){
                plural = singular.slice(0, -2) + "eis"
                notes.innerHTML += "Words ending in -POLIS become -POLEIS in the plural"
            }
            else if(singular.endsWith("man")){
                plural = singular.slice(0, -3) + "men"
                notes.innerHTML += "Words ending in -MAN become -MEN in the plural"
            }
            else if(singular.endsWith("is")){
                plural = singular.slice(0, -2) + "es"
                notes.innerHTML += "Words ending in -IS become -ES in the plural"
            }
            else if(singular.endsWith("nx")){
                plural = singular.slice(0, -1) + "ges/" + singular + "es"
                notes.innerHTML += "Words ending in -NX become -GES in the plural or simply add ES"
            }
            else if(singular.endsWith("fe")){
                plural = singular.slice(0, -2) + "ves"
                notes.innerHTML += "Words ending in -FE become -VES in the plural"
            }
            else if(singular.endsWith("ex") || singular.endsWith("ix")){
                plural = singular.slice(0, -2) + "ices"
                notes.innerHTML += "Words ending in -EX or -IX become -ICES in the plural"
            }
            else if(singular.endsWith("ax")){
                plural = singular.slice(0, -2) + "aces/" + singular + "es" 
                notes.innerHTML += "Words ending in -AX can either become -ACES in the plural or simply add ES"
            }
            else if(singular.endsWith("us") && singular.length > 3){
                plural = singular.slice(0, -2) + "i/" + singular + "es"
                notes.innerHTML += "Words ending in -US can either become -I in the plural or simply add ES"
            }
            else if(singular.endsWith("um") && singular.length > 3){
                plural = singular.slice(0, -2) + "a/" + singular + "s"
                notes.innerHTML += "Words ending in -UM can either become -A in the plural or simply add S"
            }
            else if("sxz".includes(singular.slice(-1)) || singular.endsWith("ch") || singular.endsWith("sh")){
                plural = singular + "es"
                notes.innerHTML += "Words ending in S, X, Z, CH, or SH add ES in the plural"
            }
            else if("y" == singular.slice(-1) && !"aeo".includes(singular[singular.length - 2])){        
                plural = singular.slice(0, -1) + "ies"
                notes.innerHTML += "Words ending in -Y after a consonant or QU become -IES in the plural"
            }
            else{
                plural = singular + "s"
                notes.innerHTML += "Most words in English just add an S in the plural"
            }

            englishnoun.innerHTML += 
            `<table><thead>
                <tr>
                    <th>Singular</th>
                    <th>Plural</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${singular}</td>
                    <td>${plural}</td>
                </tr>
            </tbody></table>`
            break
        case "eo":
            englishnoun.innerHTML += 
            `<h5>Singular Nominative: ${singular}</h5>
            <h5>Singular Accusative: ${singular}n</h5>
            <h5>Plural Nominative: ${singular}j</h5>
            <h5>Plural Accusative: ${singular}jn</h5>`
            break
        case "be":
            if(
                singular.endsWith("ё") ||
                singular.endsWith("е") ||
                singular.endsWith("я") ||
                singular.endsWith("ства")
            ){
                gender = "Neuter"
            }
            else if(singular.endsWith("а") || singular.endsWith("ць")) gender = "Feminine"
            else if("дтскьзгмр".includes(singular[singular.length - 1])){
                gender = "Masculine"
            }
            else gender = ""
            if(gender != "") englishnoun.innerHTML += "<p>Gender: " + gender + "</p>"
            //
            if(singular.endsWith("т")){
                pluralnom = `${singular}ы`
                genitive = `${singular}у`
                pluralgenitive = `${singular}аў`
                dative = `${singular}у`
                pluraldative = `${singular}ам`
                pluralaccusative = `${singular}ы`
                instrumental = `${singular}ам`
                pluralinstrumental = `${singular}амі`
                locative = `${singular.slice(0, -1)}це`
                plurallocative = `${singular}ах`
            }
            englishnoun.innerHTML += 
            `<table><thead>
                <tr>
                    <th></th>
                    <th>Singular</th>
                    <th>Plural</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Nominative</th>
                    <td>${singular}</td>
                    <td>${pluralnom}</td>
                </tr>
                <tr>
                    <th>Genitive</th>
                    <td>${genitive}</td>
                    <td>${pluralgenitive}</td>
                </tr>
                <tr>
                    <th>Dative</th>
                    <td>${dative}</td>
                    <td>${pluraldative}</td>
                </tr>
                <tr>
                    <th>Accusative</th>
                    <td>${singular}</td>
                    <td>${pluralaccusative}</td>
                </tr>
                <tr>
                    <th>Instrumental</th>
                    <td>${instrumental}</td>
                    <td>${pluralinstrumental}</td>
                </tr>
                <tr>
                    <th>Locative</th>
                    <td>${locative}</td>
                    <td>${plurallocative}</td>
                </tr>
            </tbody></table>`
            break
        case "es":
            //determine gender
            if([
                "mano", "libido", "foto", "disco", 
                "cama", "víctima", "espuma", 
                "plata", 
                "flor"
            ].includes(singular)){
                gender = "Feminine"
            }
            else if([
                "análisis", "apocalipsis", "oasis", "énfasis", "paréntesis", "chasis", 
                "avión", "camión", "bastión", 
                "día", 
                "césped", "ataúd",
                "alumbre", "relumbre", "vislumbre"
            ].includes(singular)){
                gender = "Masculine"
            }
            else if(singular.endsWith("ante") || singular.endsWith("ista") || 
            ["bebé", "azúcar", "dracma", "arte", "calor", "color", "chinche", "internet", "lente", "linde", "mar", "mimbre", "pelambre", "prez", "pringue", "radio", "sartén", "vodka", "web"].includes(singular)){
                gender = "Masculine/Feminine"
            }
            else if(
                singular.endsWith("o") || 
                singular.endsWith("ma") ||
                singular.endsWith("ta") ||
                singular.endsWith("pa") ||
                singular.endsWith("or")
            ){
                gender = "Masculine"
            }
            else if(
                singular.endsWith("a") ||
                singular.endsWith("ión") ||
                singular.endsWith("umbre") ||
                singular.endsWith("d") ||
                singular.endsWith("is")
            ){
                gender = "Feminine"
            }
            else if(singular.endsWith("ón")){
                gender = "Masculine"
            }
            else gender = ""
            if(gender != "") englishnoun.innerHTML += "<p>Gender: " + gender + "</p>"

            //ARTICLE
            if(singular == "arte"){
                article1 = "el "
                article2 = "las "
                article3 = "un "
                article4 = "unas "
            }
            else if(gender == "Masculine/Feminine"){
                article1 = "el/la "
                article2 = "los/las "
                article3 = "un/una "
                article4 = "unos/unas "
            }
            else if(gender == "Masculine"){
                article1 = "el "
                article2 = "los "
                article3 = "un "
                article4 = "unos "
            }
            else if((singular.startsWith("a") && (singular.match(/[áéíóú]/g) == null || singular.length > 5)) || (singular.startsWith("á"))){
                article1 = "el "
                article2 = "las "
                article3 = "un "
                article4 = "unas " 
            }
            else if(gender == "Feminine"){
                article1 = "la "
                article2 = "las "
                article3 = "una "
                article4 = "unas " 
            }
            else if(gender == ""){
                article1 = article2 = article3 = article4 = ""
            }

            //

            if(singular.endsWith("z")){ //-Z+CES
                plural = singular.slice(0,-1) + "ces"
            }
            else if(singular == "dracma"){
                plural = "dracmas/dracmae"
            }
            else if(singular.endsWith("ín")){//-ÓN+ONES
                plural = singular.slice(0,-2) + "ines"
            }
            else if(singular.endsWith("ón")){//-ÓN+ONES
                plural = singular.slice(0,-2) + "ones"
            }
            else if(singular.endsWith("és")){//-ÉS+ESES
                plural = singular.slice(0,-2) + "eses"
            }
            else if(singular.endsWith("amen")){//-AMEN+ÁMENES
                plural = singular.slice(0,-2) + "ámenes"
            }
            else if(singular.endsWith("oven")){//-OVEN+ÓVENES
                plural = singular.slice(0,-2) + "óvenes"
            }
            else if(singular.endsWith("imen")){//-IMEN+ÍMENES
                plural = singular.slice(0,-2) + "ímenes"
            }
            else if( //-
                "sx".includes(singular.slice(-1)) ||
                ["st", "zt"].includes(singular.slice(-2)) ||
                ("lrndzj".includes(singular.slice(-1)) &&
                singular.length >= 7 &&
                ("áéíóú".includes(x.slice(-7, -6)) || "áéíóú".includes(x.slice(-6, -5))))
            ){
                plural = singular
            }
            else if( //+ES
                "dhjlnr".includes(singular.slice(-1)) || 
                "sz".includes(singular.slice(-1)) && singular.length == 3 ||
                ["sí", "no", "club", "álbum", "espécimen"].includes(singular)
            ){
                plural = singular + "es"
            }
            else if( //+ES/+S
                "íú".includes(singular.slice(-1)) ||
                singular == "yo"
            ){
                plural = singular + "es/" + singular + "s"
            }
            else{ //+S
                plural = singular + "s"
            }
        
        
            englishnoun.innerHTML += 
            `<h5>Singular Definitive: ${article1}${singular}</h5>
            <h5>Singular Indefinitive: ${article3}${singular}</h5>
            <h5>Plural Definitive: ${article2}${plural}</h5>
            <h5>Plural Indefinitive: ${article4}${plural}</h5>`
            break
        case "ext":

            //
            //determine gender
            if(
                singular.endsWith("u") || 
                singular.endsWith("ma") ||
                singular.endsWith("ol") ||
                singular.endsWith("is") ||
                singular.endsWith("mbri")
            ){
                gender = "Masculine"
            }
            else if(
                singular.endsWith("ón") ||
                singular.endsWith("á") ||
                singular.endsWith("a") ||
                singular.endsWith("i")
            ){
                gender = "Feminine"
            }
            else gender = ""
            if(gender != "") englishnoun.innerHTML += "<p>Gender: " + gender + "</p>"


            //article
            if(gender == "Masculine"){
                article1 = "el "
                article2 = "los "
                article3 = "un "
                article4 = "unus "
            }
            else if(gender == "Feminine"){
                article1 = "la "
                article2 = "las "
                article3 = "una "
                article4 = "unas "
            }
            if("aeiouáéíóú".includes(singular[0])) article1 = "l'"
            if(gender == ""){
                article1 = article2 = ""
            }

            //

            if(singular.endsWith("ción")) plural = singular.slice(0, -2) + "onis"
            else if(singular.endsWith("n") || singular.endsWith("s")) plural = singular
            else if(singular.endsWith("al") || singular.endsWith("el") || singular.endsWith("il") || singular.endsWith("ol")) plural = singular.slice(0, -1) + "ris"
            else if(!"aeiou".includes(singular[singular.length - 1])) plural = singular + "es"
            else plural = singular + "s"
            englishnoun.innerHTML += 
            `<h5>Singular Definitive: ${article1}${singular}</h5>
            <h5>Singular Indefinitive: ${article3}${singular}</h5>
            <h5>Plural Definitive: ${article2}${plural}</h5>
            <h5>Plural Indefinitive: ${article4}${plural}</h5>`
            break
        case "fr":

            if([
                "boisson", "façon", "liaison", "maison", "raison", "rançon", "saison", "chanson",
                "cage", "image", "nage", "page", "plage", "rage",
                "eau", "peau",
                "jument",
            ].includes(singular)) gender = "Feminine"
            else if([
                "stade",
                "silence",
                "murmure",
                "musée", "lycée", "trophée", "apogée", "mausolée",
                "incendie",
                "comité", "côté", "été", "pâté",
            ].includes(singular)) gender = "Masculine"
            else if(singular.endsWith("iste")) gender = "Masculine/Feminine"
            else if(
                singular.endsWith("eur") ||
                singular.endsWith("ien") ||
                singular.endsWith("ier") ||
                singular.endsWith("on") ||
                singular.endsWith("age") ||
                singular.endsWith("al") ||
                singular.endsWith("eau") ||
                singular.endsWith("ent") ||
                singular.endsWith("et") ||
                singular.endsWith("asme") ||
                singular.endsWith("isme") ||
                singular.endsWith("in") ||
                singular.endsWith("oir") ||
                singular.endsWith("ail")
            ){
                gender = "Masculine"
            }
            else if(
                singular.endsWith("esse") ||
                singular.endsWith("euse") ||
                singular.endsWith("ienne") ||
                singular.endsWith("ère") ||
                singular.endsWith("onne") ||
                singular.endsWith("trice") ||
                singular.endsWith("ade") ||
                singular.endsWith("ance") ||
                singular.endsWith("ence") ||
                singular.endsWith("ée") ||
                singular.endsWith("elle") ||
                singular.endsWith("ette") ||
                singular.endsWith("ie") ||
                singular.endsWith("ine") ||
                singular.endsWith("ise") ||
                singular.endsWith("aille") ||
                singular.endsWith("tié") ||
                singular.endsWith("té") ||
                singular.endsWith("ure")
            ){
                gender = "Feminine"
            }
            else gender = ""
            if(gender != "") englishnoun.innerHTML += "<p>Gender: " + gender + "</p>"

            //
            if(gender == "Masculine"){
                article1 = "aeiouhé".includes(singular[0]) ? "l'" : "le "
                article2 = "les "
                article3 = "un "
                article4 = "des "
            }
            else if(gender == "Feminine"){
                article1 = "aeiouhé".includes(singular[0]) ? "l'" : "la "
                article2 = "les "
                article3 = "une "
                article4 = "des "
            }
            else if(gender == "Masculine/Feminine"){
                article1 = "aeiouhé".includes(singular[0]) ? "l'" : "le/la "
                article2 = "les "
                article3 = "un/une "
                article4 = "des "
            }
            else if(gender == ""){
                article1 = article2 = article3 = article4 = ""
            }

            //

            if(
                singular.endsWith("eau") ||
                singular.endsWith("au") ||
                (singular.endsWith("eu") && singular != "pneu" && singular != "bleu") ||
                singular.endsWith("ou")
            ){
                plural = singular + "x"
            }
            else if(singular.endsWith("al") && !["bal", "cal", "carnaval", "chacal", "festival", "régal"].includes(singular)){
                plural = singular.slice(0, -1) + "ux"
            }
            else if(singular.endsWith("ail")){
                plural = singular.slice(0, -2) + "ux"
            }
            else if(singular.endsWith("s") || singular.endsWith("x") || singular.endsWith("z")) plural = singular
            else plural = singular + "s"
            irregular = {
                "madame": "mesdames",
                "mademoiselle": "mesdemoiselles",
                "monseiur": "messieurs",
                "ciel": "cieux/ciels",
                "œil": "yeux/œils",
                "aïeul": "aïeuls/aïeux",
            }[singular]
            if(irregular != undefined) plural = irregular
            englishnoun.innerHTML += 
            `<h5>Singular Definitive: ${article1}${singular}</h5>
            <h5>Singular Indefinitive: ${article3}${singular}</h5>
            <h5>Plural Definitive: ${article2}${plural}</h5>
            <h5>Plural Indefinitive: ${article4}${plural}</h5>`
            break
        case "pl":
            if(singular.endsWith("ysta") || singular.endsWith("ista")) gender = "Masculine"
            else if(singular.endsWith("a") || singular.endsWith("i") || singular.endsWith("ć")) gender = "Feminine"
            else if(
                singular.endsWith("o") ||
                singular.endsWith("e") ||
                singular.endsWith("um")
            ){
                gender = "Neuter"
            }
            else if("mkż".includes(singular[singular.length - 1])){
                gender = "Masculine"
            }
            else gender = ""
            if(gender != "") englishnoun.innerHTML += "<p>Gender: " + gender + "</p>"

            //
            if(singular.endsWith("o") || singular.endsWith("e")) plural = singular.slice(0, -1) + "a"
            else if(singular.endsWith("sta")) plural = singular.slice(0, -1) + "ści"
            else if(singular.endsWith("ż") || singular.endsWith("ja") || singular.endsWith("ysa")) plural = singular.slice(0, -1) + "e"
            else if(singular.endsWith("sa")) plural = singular.slice(0, -1) + "e/" + singular.slice(0, -1) + "y" 
            else if(singular.endsWith("a")) plural = singular.slice(0, -1) + "y"
            else if(singular.endsWith("icz")) plural = singular + "owie"
            else if(singular.endsWith("k")) plural = singular.slice(0, -1) + "i"
            else if(singular.endsWith("um")) plural = singular.slice(0, -2) + "a"
            else if(singular.endsWith("ć") || singular.endsWith("ant")) plural = singular.slice(0, -1) + "ci"
            else plural = singular + "y"
            englishnoun.innerHTML += 
            `<table><thead>
                <tr>
                    <th>Singular</th>
                    <th>Plural</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${singular}</td>
                    <td>${plural}</td>
                </tr>
            </tbody></table>`
            break
        case "scn":
            if(
                singular.endsWith("uni") ||
                singular.endsWith("u")
            ){
                gender = "Masculine"
                if("aeiouàèù".includes(singular[0])) article1 = "l'"
                else article1 = "lu "
                article2 = "li "
                if("aeiouàèù".includes(singular[0])) article3 = "n'"
                else if((singular.startsWith("z")) && (singular.startsWith("s") && "bcdfglmnprt".includes(singular[1]))){
                    article3 = "nu "
                }
                else{
                    article3 = "un "
                }   
            }
            else if(
                singular.endsWith("i") ||
                singular.endsWith("a") ||
                singular.endsWith("à")
            ){
                gender = "Feminine"
                article1 = "la "
                article2 = "li "
                article3 = "na "
            }
            else{
                article1 = article2 = article3 = gender = ""
            }
            if(gender != "") englishnoun.innerHTML += "<p>Gender: " + gender + "</p>"
            //
            if(singular == "omu") plural = "òmini"
            else if(singular.endsWith("iu")) plural = singular.slice(0, -1)
            else if(singular.endsWith("ia")) plural = singular.slice(0, -1)
            else if(singular[singular.length - 2] == "c") plural = singular.slice(0, -1) + "hi"
            else if(singular.endsWith("i") || singular.endsWith("à")) plural = singular
            else plural = singular.slice(0, -1) + "i"
            englishnoun.innerHTML += 
            `<h5>Singular Definitive: ${article1}${singular}</h5>
            <h5>Singular Indefinitive: ${article3}${singular}</h5>
            <h5>Plural Definitive: ${article2}${plural}</h5>
            <h5>Plural Indefinitive: ${plural}</h5>`
            break
        case "it":
                if(
                    singular.endsWith("o") ||
                    singular.endsWith("ma")
                ){
                    gender = "Masculine"
                }
                else if(singular.endsWith("ista")){
                    gender = "Masculine/Feminine"
                }
                else if(
                    singular.endsWith("e") ||
                    singular.endsWith("a") ||
                    singular.endsWith("à") ||
                    singular.endsWith("ione")
                ){
                    gender = "Feminine"
                }
                else{
                    gender = ""
                }
                if(gender != "") englishnoun.innerHTML += "<p>Gender: " + gender + "</p>"
                //
                
                if(
                    singular.endsWith("à") ||
                    singular.endsWith("è") ||
                    singular.endsWith("ù") ||
                    ["video", "stereo", "moto", "serie", "specie", "hotel"].includes(singular)
                ){
                    plural = singular
                }
                else if(singular == "uomo"){
                    plural = "uomini"
                }
                else if(singular == "dio"){
                    plural = "dei"
                }
                else if(singular == "bue"){
                    plural = "buoi"
                }
                else if(singular == "moglie"){
                    plural = "mogli"
                }
                else if((singular.endsWith("cia") || singular.endsWith("gia")) && (!"aeiou".includes(singular[singular.length - 4]))){
                    plural = singular.slice(0, -2) + "e"
                }
                else if(singular.endsWith("ca") || singular.endsWith("ga")){
                    if(gender == "Feminine"){
                        plural = singular.slice(0, -1) + "he"
                    }
                    else{
                        plural = singular.slice(0, -1) + "hi"
                    }
                }
                else if(singular.endsWith("co") || singular.endsWith("go") && singular.length >= 4 && singular.length <= 6){
                    plural = singular.slice(0, -1) + "hi"
                }
                else if(gender == "Feminine" && singular.endsWith("a")){
                    plural = singular.slice(0, -1) + "e"
                }
                else{
                    plural = singular.slice(0, -1) + "i"
                }

                //

                if(gender == "Masculine"){
                    if("aeiou".includes(singular[0])){
                        article1 = "l'"
                        article2 = "gli "
                        article3 = "un "
                    }
                    else if(
                        singular.startsWith("z") ||
                        singular.startsWith("y") ||
                        singular.startsWith("x") ||
                        singular.startsWith("j") ||
                        singular.startsWith("gn") ||
                        singular.startsWith("ps") ||
                        singular.startsWith("pn") ||
                        (singular.length > 2 && singular.startsWith("s") && "bcdfglmnprt".includes(singular[1]))
                    ){
                        article1 = "lo "
                        article2 = "gli "
                        article3 = "uno "
                    }
                    else if(singular == "dio"){
                        article1 = "il "
                        article2 = "gli "
                        article3 = "un "
                    }
                    else{
                        article1 = "il "
                        article2 = "i "
                        article3 = "un "
                    }
                }
                else if(gender == "Feminine"){
                    article1 = "aeiou".includes(singular[0]) ? "l'" : "la "
                    article2 = "le "
                    article3 = "aeiou".includes(singular[0]) ? "un'" : "una "
                }
                else{
                    article1 = article2 = article3 = ""
                }

                //
                englishnoun.innerHTML += 
                `<h5>Singular Definitive: ${article1}${singular}</h5>
                <h5>Singular Indefinitive: ${article3}${singular}</h5>
                <h5>Plural Definitive: ${article2}${plural}</h5>
                <h5>Plural Indefinitive: ${plural}</h5>`
                break
    }


    if(mynotes[ourlang] != undefined){
        if(mynotes[ourlang][singular] != undefined) notes.innerHTML += `<br><small>*${mynotes[ourlang][singular]}</small>`
    }
}

changelangtodecline(langtodecline.value)