function changelangtodecline(ourlang){
    enternoun.value = {
        "be-noun": "арышт",
        "en-adj": "smart",
        "en-noun": "crisis",
        "en-verb": "shear",
        "eo-adj": "ruĝa",
        "eo-noun": "virino",
        "eo-verb": "paroli",
        "es-adj": "amarillo",
        "es-noun": "avión",
        "es-verb": "venir",
        "ext-noun": "autol",
        "fr-noun": "mademoiselle",
        "it-noun": "arancia",
        "nl-verb": "zijn",
        "pl-noun": "kooperacja",
        "scn-adj": "scafazzatu",
        "scn-noun": "agugghia",
        "scn-verb": "chiànciri",
    }[ourlang]
    decline()
}

mynotes = {
    "es-noun": {
        "mar": "<b>mar</b> is only feminine in nautical contexts",
        "arte": "'arte' is masculine in the singular, but feminine in the plural",
        "radio": "in some countries like Mexico, 'radio' is feminine but only when referring to an electronic radio and not <i>radius</i> or <i>radium</i>",
        "sartén": "<b>sartén</b> is masculine in Spain but feminine in Latin America",
        "azúcar": "<b>azúcar</b> can use the article 'el' while being used with feminine adjectives"
    },
}

function decline(){
    notes.innerHTML = ""
    ourlang = langtodecline.value
    adj = enternoun.value.toLowerCase()
    englishnoun.innerHTML = ""
    if(adj.trim() == ""){
        return 0
    }
    switch(ourlang){
        case "en-adj":
            irregulars = {
                "good": ["better", "best"],
                "old": ["older/elder", "oldest/eldest"],
                "far": ["farther/further", "farthest/furthest"],
                "bad": ["worse", "worst"],
                "late": ["later/latter", "latest/last"],
                "little": ["littler/less", "littlest/least"],
            }
            if(irregulars[adj] != undefined){
                comp = irregulars[adj][0]
                superl = irregulars[adj][1]
            }
            if(adj.length > 4 && adj.endsWith("e")){
                comp = `more ${adj}/${adj}r`
                superl = `most ${adj}/${adj}st`
            }
            else if(adj.length > 7 || adj.endsWith("ed") || adj.endsWith("wn") || adj.endsWith("id")){
                comp = `more ${adj}`
                superl = `most ${adj}`
            }
            else if(adj.endsWith("e")){
                comp = `${adj}r`
                superl = `${adj}st`
            }
            else if(adj.endsWith("y")){
                if(["icy", "dry"].includes(adj)){
                    comp = `${adj.slice(0,1)}ier}`
                    superl = `${adj.slice(0,1)}iest}`
                }
                else{
                    comp = `${adj.slice(0,-1)}ier/${adj}er`
                    superl = `${adj.slice(0,-1)}iest/${adj}est`
                }
    
            }
            else if([6,7].includes(adj.length) || adj.length == 5 && "aeiou".includes(adj[0])){
                comp = `more ${adj}/${adj}er`
                superl = `most ${adj}/${adj}est`
            }
            else if(adj.length < 6 && "glmnpt".includes(adj.slice(-1)) && "aeiou".includes(adj[adj.length - 2])){
                comp = adj + adj.slice(-1) + "er"
                superl = adj + adj.slice(-1) + "est"
            }
            else{
                comp = adj + "er"
                superl = adj + "est"
            }
    
            englishnoun.innerHTML =
            `<h5>Default: ${adj}</h5>
            <h5>Comparative: ${comp}</h5>
            <h5>Superlative: ${superl}</h5>`
            break
        case "en-noun":
            irregularnouns = {
                "alga": "algae",
                "alumna": "alumnae",
                "antenna": "antennae",
                "aorta": "aortae/aorta",
                "apparatus": "apparatus/apparatusses/appartatus",
                "aurora": "aurorae/auroras",
                "beef": "beef/beefs",
                "buffalo": "buffalo/buffaloes",
                "bus": "bus/busses",
                "calf": "calves",
                "calyx": "calyces/calyxes",
                "cactus": "cacti/cactuses/cactusses/cactus",
                "cherub": "cherubs/cherubim",
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
                "larva": "larvae",
                "leaf": "leaves",
                "lentigo": "lentigos/lentigines",
                "loch": "lochs",
                "louse": "lice",
                "mouse": "mice",
                "octopus": "octopuses/octopusses/octopodes/octopi",
                "oryx": "oryxes/oryx",
                "ox": "oxen",
                "person": "people/persons",
                "passerby": "passersby",
                "penny": "pennies/pence",
                "persona non grata": "personae non gratae",
                "phalanx": "phalanxes/phalanges",
                "potato": "potatoes",
                "quincunx": "quincunxes/quincunces",
                "sphinx": "sphinxes/sphinges",
                "staff": "staffs/staves",
                "status": "statuses/status",
                "testudo": "testudos/testudoes/testudines",
                "tooth": "teeth",
                "tomato": "tomatoes",
                "volcano": "volcanoes/volcanos",
                "zero": "zeroes/zeros",
            }

            noplural = ["fish", "deer", "sheep", "elk", "bison", "salmon", "trout", "cod", "moose", "squid", "pike"]

            if(Object.keys(irregularnouns).includes(adj)){
                plural = irregularnouns[adj]
            }
            else if(adj.length == 1){
                plural = adj + "'s"
                notes.innerHTML += "Individual letters add 'S in the plural"
            }
            else if(noplural.includes(adj)){
                plural = adj
                notes.innerHTML += "Many words for animals are the same in singular and plural"
            }
            else if(adj.endsWith("ies")){
                notes.innerHTML += "Words ending in -IES are the same in singular and plural"
            }
            else if(adj.endsWith("polis")){
                plural = adj.slice(0, -2) + "eis"
                notes.innerHTML += "Words ending in -POLIS become -POLEIS in the plural"
            }
            else if(adj.endsWith("man")){
                plural = adj.slice(0, -3) + "men"
                notes.innerHTML += "Words ending in -MAN become -MEN in the plural"
            }
            else if(adj.endsWith("ful")){
                plural = adj.slice(0, -3) + "sful/" + adj + "s"
                notes.innerHTML += "Words ending in -FUL become -SFUL in the plural, or simply add -S"
            }
            else if(adj.endsWith("is")){
                plural = adj.slice(0, -2) + "es"
                notes.innerHTML += "Words ending in -IS become -ES in the plural"
            }
            else if(adj.endsWith("nx")){
                plural = adj.slice(0, -1) + "ges/" + adj + "es"
                notes.innerHTML += "Words ending in -NX become -GES in the plural or simply add ES"
            }
            else if(adj.endsWith("fe")){
                plural = adj.slice(0, -2) + "ves"
                notes.innerHTML += "Words ending in -FE become -VES in the plural"
            }
            else if(adj.endsWith("ex") || adj.endsWith("ix")){
                plural = adj.slice(0, -2) + "ices/" + adj + "es"
                notes.innerHTML += "Words ending in -EX or -IX become -ICES in the plural, or simply add -ES"
            }
            else if(adj.endsWith("ax")){
                plural = adj.slice(0, -2) + "aces/" + adj + "es" 
                notes.innerHTML += "Words ending in -AX can either become -ACES in the plural or simply add ES"
            }
            else if(adj.endsWith("us") && adj.length > 3){
                plural = adj.slice(0, -2) + "i/" + adj + "es"
                notes.innerHTML += "Words ending in -US can either become -I in the plural or simply add ES"
            }
            else if(adj.endsWith("um") && adj.length > 3){
                plural = adj.slice(0, -2) + "a/" + adj + "s"
                notes.innerHTML += "Words ending in -UM can either become -A in the plural or simply add S"
            }
            else if("sxz".includes(adj.slice(-1)) || adj.endsWith("ch") || adj.endsWith("sh")){
                plural = adj + "es"
                notes.innerHTML += "Words ending in S, X, Z, CH, or SH add ES in the plural"
            }
            else if("y" == adj.slice(-1) && !"aeo".includes(adj[adj.length - 2])){        
                plural = adj.slice(0, -1) + "ies"
                notes.innerHTML += "Words ending in -Y after a consonant or QU become -IES in the plural"
            }
            else{
                plural = adj + "s"
                notes.innerHTML += "Most words in English just add an S in the plural"
            }

            englishnoun.innerHTML += 
            `<h5>Singular: ${adj}</h5>
            <h5>Plural: ${plural}</h5>`
            break
        case "eo-adj":
            englishnoun.innerHTML =
            `<h5>Singular Nominative: ${adj}</h5>
            <h5>Singular Accusative: ${adj}n</h5>
            <h5>Plural Nominative: ${adj}j</h5>
            <h5>Plural Accusative: ${adj}jn</h5>`
            break
        case "eo-noun":
            englishnoun.innerHTML = 
            `<h5>Singular Nominative: ${adj}</h5>
            <h5>Singular Accusative: ${adj}n</h5>
            <h5>Plural Nominative: ${adj}j</h5>
            <h5>Plural Accusative: ${adj}jn</h5>`
            break
        case "es-adj":
            singularmale = adj
            if(adj.endsWith("o")){
                singularfemale = adj.slice(0, -1) + "a"
            }
            else{
                singularfemale = adj
            }
            if(adj.endsWith("z")){ //-Z+CES
                pluralmale = pluralfemale = singularmale.slice(0,-1) + "ces"
            }
            else if(adj.endsWith("ín")){//-ÓN+ONES
                pluralmale = pluralfemale = singularmale.slice(0,-2) + "ines"
            }
            else if(adj.endsWith("ón")){//-ÓN+ONES
                pluralmale = pluralfemale = singularmale.slice(0,-2) + "ones"
            }
            else if(adj.endsWith("és")){//-ÉS+ESES
                singularfemale = singularmale.slice(0,-2) + "esa"
                pluralmale = pluralfemale = singularmale.slice(0,-2) + "eses"
            }
            else if(adj.endsWith("amen")){//-AMEN+ÁMENES
                pluralmale = pluralfemale = singularmale.slice(0,-4) + "ámenes"
            }
            else if(adj.endsWith("oven")){//-OVEN+ÓVENES
                pluralmale = pluralfemale = singularmale.slice(0,-4) + "óvenes"
            }
            else if(adj.endsWith("imen")){//-IMEN+ÍMENES
                pluralmale = pluralfemale = singularmale.slice(0,-4) + "ímenes"
            }
            else if( //-
                "sx".includes(adj.slice(-1)) ||
                ["st", "zt"].includes(adj.slice(-2)) ||
                ("lrndzj".includes(adj.slice(-1)) &&
                adj.length >= 7 &&
                ("áéíóú".includes(x.slice(-7, -6)) || "áéíóú".includes(x.slice(-6, -5))))
            ){
                pluralmale = pluralfemale = adj
            }
            else if( //+ES
                "dhjlnr".includes(adj.slice(-1)) || 
                "sz".includes(adj.slice(-1)) && adj.length == 3 ||
                ["sí", "no", "club", "álbum", "espécimen"].includes(adj)
            ){
                pluralmale = pluralfemale = singularmale + "es"
            }
            else if( //+ES/+S
                "íú".includes(adj.slice(-1)) ||
                adj == "yo"
            ){
                pluralmale = pluralfemale = singularmale + "es/" + singularmale + "s"
            }
            else{ //+S
                pluralmale = singularmale + "s"
                pluralfemale = singularfemale + "s"
            }
    
            if(singularmale == "bueno"){
                singularmalecomparative = singularfemalecomparative = "mejor"
                pluralmalecomparative = pluralfemalecomparative = "mejores"
            }
            else if(singularmale == "malo"){
                singularmalecomparative = singularfemalecomparative = "peor"
                pluralmalecomparative = pluralfemalecomparative = "peores"
            }
            else if(["viejo", "grande"].includes(singularmale)){
                singularmalecomparative = singularfemalecomparative = "mayor"
                pluralmalecomparative = pluralfemalecomparative = "mayores"
            }
            else if(["joven", "pequeño"].includes(singularmale)){
                singularmalecomparative = singularfemalecomparative = "menor"
                pluralmalecomparative = pluralfemalecomparative = "menores"
            }
            else{
                singularmalecomparative = "más " + singularmale
                singularfemalecomparative = "más " + singularfemale 
                pluralmalecomparative = "más " + pluralmale
                pluralfemalecomparative = "más " + pluralfemale
            }
    
            if(singularmale.endsWith("go")){
                superlativebase = singularmale.slice(0, -1) + "uísim"
            }
            else if(singularmale.endsWith("n") || singularmale.endsWith("or") && singularmale != "común"){
                superlativebase = singularmale.replace("ó", "o") + "císim"
            }
            else if(singularmale.endsWith("és")){
                superlativebase = singularmale.slice(0, -2) + "esísim"
            }
            else if(singularmale.endsWith("ble")){
                superlativebase = singularmale.replace("é", "e").slice(0, -2) + "ilísim"
            }
            else if(singularmale.endsWith("bre") || singularmale.endsWith("cre")){
                superlativebase = singularmale.replace("é", "e").slice(0, -2) + "érrim"
            }
            else if(singularmale.endsWith("co")){
                superlativebase = singularmale.replace("á", "a").replace("ó", "o").slice(0, -2) + "quísim"
            }
            else if(singularmale.endsWith("z")){
                superlativebase = singularmale.slice(0, -1) + "císim"
            }
            else if(singularmale.endsWith("ero")){
                superlativebase = singularmale.replace("é", "e").slice(0, -3) + "érrim"
            }
            else if(singularmale.endsWith("cro")){
                superlativebase = singularmale.slice(0, -3) + "quérrim"
            }
            else if(singularmale.endsWith("gro")){
                superlativebase = singularmale.replace("í", "i").slice(0, -2) + "érrim"
            }
            else if(singularmale.endsWith("guo")){
                superlativebase = singularmale.replace("í", "i").slice(0, -2) + "üísim"
            }
            else if(singularmale.endsWith("e") || singularmale.endsWith("o") || singularmale.endsWith("a")){
                superlativebase = singularmale.slice(0, -1).replace("í", "i").replace("ó", "o").replace("ú", "u") + "ísim"
            }
            else if(singularmale == "negro"){
                superlativebase = "nigérrim"
            }
            else if(singularmale == "caliente"){
                superlativebase = "calentísim"
            }
            else if(singularmale == "antiguo"){
                superlativebase = "antiquísim"
            }
            else{
                superlativebase = singularmale.replace("í", "i").replace("ó", "o").replace("ú", "u") + "ísim"
            }
            singularmalesuperlative = superlativebase + "o"
            singularfemalesuperlative = superlativebase + "a"
            pluralmalesuperlative = superlativebase + "os"
            pluralfemalesuperlative = superlativebase + "as"
            //irregular
            if(singularmale == "pobre"){
                singularmalesuperlative = "pobrísimo/paupérrimo"
                singularfemalesuperlative = "pobrísima/paupérrima"
                pluralmalesuperlative = "pobrísimos/paupérrimos"
                pluralfemalesuperlative = "pobrísimas/paupérrimas"
            }
            else if(singularmale == "malo"){
                singularmalesuperlative = "malísimo/pésimo"
                singularfemalesuperlative = "malísima/pésima"
                pluralmalesuperlative = "malísimos/pésimos"
                pluralfemalesuperlative = "malísimas/pésimas"
            }
            else if(singularmale == "bueno"){
                singularmalesuperlative = "buenísimo/bonísimo/óptimo"
                singularfemalesuperlative = "buenísima/bonísima/óptima"
                pluralmalesuperlative = "buenísimos/bonísimos/óptimos"
                pluralfemalesuperlative = "buenísimas/bonísimas/óptimas"
            }
    
    
            englishnoun.innerHTML =
            `<table><thead>
                <tr>
                    <th></th>
                    <th>Regular</th>
                    <th>Comparative</th>
                    <th>Superlative</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Masculine Singular</th>
                    <td>${singularmale}</td>
                    <td>${singularmalecomparative}</td>
                    <td>${singularmalesuperlative}</td>
                </tr>
                <tr>
                    <th>Feminine Singular</th>
                    <td>${singularfemale}</td>
                    <td>${singularfemalecomparative}</td>
                    <td>${singularfemalesuperlative}</td>
                </tr>
                <tr>
                    <th>Masculine Plural</th>
                    <td>${pluralmale}</td>
                    <td>${pluralmalecomparative}</td>
                    <td>${pluralmalesuperlative}</td>
                </tr>
                <tr>
                    <th>Feminine Plural</th>
                    <td>${pluralfemale}</td>
                    <td>${pluralfemalecomparative}</td>
                    <td>${pluralfemalesuperlative}</td>
                </tr>
            </tbody></table>`
            break
        case "be-noun":
            if(
                adj.endsWith("ё") ||
                adj.endsWith("е") ||
                adj.endsWith("я") ||
                adj.endsWith("ства")
            ){
                gender = "Neuter"
            }
            else if(adj.endsWith("а") || adj.endsWith("ць")) gender = "Feminine"
            else if("дтскьзгмр".includes(adj[adj.length - 1])){
                gender = "Masculine"
            }
            else gender = ""
            if(gender != "") englishnoun.innerHTML += "<p>Gender: " + gender + "</p>"
            //
            if(adj.endsWith("т")){
                pluralnom = `${adj}ы`
                genitive = `${adj}у`
                pluralgenitive = `${adj}аў`
                dative = `${adj}у`
                pluraldative = `${adj}ам`
                pluralaccusative = `${adj}ы`
                instrumental = `${adj}ам`
                pluralinstrumental = `${adj}амі`
                locative = `${adj.slice(0, -1)}це`
                plurallocative = `${adj}ах`
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
                    <td>${adj}</td>
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
                    <td>${adj}</td>
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
        case "en-verb":
            if(adj == "be"){
                Present = "(I) am, (we/you/they) are, (he/she/it) is"
            }
            else{
                if(adj.endsWith("y") && !"aeiou".includes(adj[adj.length - 2])){
                    Third = adj.slice(0, -1) + "ies"
                }
                else if(adj.endsWith("h") || adj.endsWith("x") || adj.endsWith("ss") || adj.endsWith("o")) Third = adj + "es"
                else Third = adj + "s"
                
                Present = adj + ", (he/she/it) " + Third
            }
            if(adj.endsWith("e") && !adj.endsWith("ee") && !adj.endsWith("oe") && adj != "be") Stem = adj.slice(0, -1)
            else if(
                "trbdmnpl".includes(adj[adj.length - 1])
                && (
                    ("aeiou".includes(adj[adj.length - 2]))
                    && !"aeiou".includes(adj[adj.length - 3])
                )
                && !["debut", "exit", "budget", "benefit", "cancel", "counsel", "happen", "listen", "marvel", "offer", "open", "quarrel", "ripen", "visit", "travel", "vomit", "worship"].includes(adj)
            ){
                Stem = adj + adj[adj.length - 1]
            }
            else Stem = adj
            irregularpast = {
                abide: "abode/abided",
                be: "(I/he/she/it) was, (you/we/they) were",
                bear: "bore/beared",
                become: "became",
                begin: "began",
                bend: "bent",
                bereave: "bereaved/bereft",
                beseech: "beseeched/besought",
                bet: "bet",
                bite: "bit",
                bleed: "bled",
                blow: "blew",
                break: "broke",
                breed: "bred",
                bring: "brought",
                build: "built",
                burst: "burst",
                buy: "bought",
                catch: "caught",
                chide: "chid/chided",
                choose: "chose",
                cleave: "cleft/clove/cleaved",
                cling: "clung",
                come: "came",
                cost: "cost",
                creep: "crept/creeped",
                cut: "cut",
                dive: "dove/dived",
                do: "did",
                draw: "drew",
                drink: "drank",
                drive: "drove",
                eat: "ate",
                fall: "fell",
                feel: "felt",
                fight: "fought",
                find: "found",
                fly: "flew",
                forbear: "forbore",
                forget: "forgot",
                forgive: "forgave",
                forsake: "forsook",
                freeze: "froze",
                get: "got",
                give: "gave",
                go: "went",
                grow: "grew",
                have: "had",
                hear: "heard",
                heave: "heaved/hove",
                hide: "hid",
                hit: "hit",
                hold: "held",
                keep: "kept",
                ken: "kenned/kent",
                kneel: "knelt/kneeled",
                know: "knew",
                learn: "learned/learnt",
                leave: "left",
                lend: "lent",
                let: "let",
                lie: "lay",
                lose: "lost",
                make: "made",
                meet: "met",
                overbear: "overbore",
                put: "put",
                read: "read",
                rend: "rended/rent",
                ride: "rode",
                ring: "rang",
                rise: "rose",
                run: "ran",
                say: "said",
                see: "saw",
                seek: "sought",
                sell: "sold",
                send: "sent",
                set: "set",
                shake: "shook",
                shear: "sheared/shore",
                shine: "shone",
                shit: "shit/shat/shitted",
                shrink: "shrank/shrunk",
                shrive: "shrove/shrived",
                shoe: "shod/shoed",
                shoot: "shot",
                shut: "shut",
                sing: "sang",
                sink: "sank",
                sit: "sat",
                sleep: "slept",
                slide: "slid",
                slink: "slunk/slinked",
                smell: "smelled/smelt",
                speak: "spoke",
                spend: "spent",
                spill: "spilled/spilt",
                spin: "spun",
                spit: "spat",
                split: "split",
                spread: "spread",
                spring: "sprang",
                stand: "stood",
                stave: "staved/stove",
                steal: "stole",
                stick: "stuck",
                sting: "stung",
                stink: "stank",
                strew: "strewed",
                stride: "strode",
                strike: "struck/striked",
                string: "strung",
                strive: "strove",
                swear: "swore",
                sweep: "swept",
                swell: "swelled",
                swim: "swam",
                swing: "swung",
                take: "took",
                teach: "taught",
                tear: "tore",
                tell: "told",
                think: "thought",
                throw: "threw",
                thrust: "thrust",
                tread: "trod",
                underbear: "underborn",
                understand: "understood",
                wake: "woke",
                wear: "wore",
                weave: "wove",
                weep: "wept",
                wet: "wet/wetted",
                win: "won",
                wind: "wound",
                withdraw: "withdrew",
                wreak: "wreaked/wrought",
                write: "wrote",
                writhe: "whrothe",
            }[adj]
            if(irregularpast != undefined){
                Past = irregularpast
            }
            else if(adj.endsWith("y") && !"aeiou".includes(adj[adj.length - 2])){
                Past = adj.slice(0, -1) + "ied"
            }
            else{
                Past = Stem + "ed"
            }
            irregularparticiple = {
                abide: "abode/abided",
                be: "been",
                bear: "borne/bore/born/beared",
                become: "become",
                begin: "begun",
                bend: "bent",
                bereave: "bereaved/bereft",
                beseech: "beseeched/besought",
                bet: "bet",
                bite: "bitten",
                bleed: "bled",
                blow: "blown",
                break: "broken",
                breed: "bred",
                bring: "brought",
                build: "built",
                burst: "burst",
                buy: "bought",
                catch: "caught",
                chide: "chid/chided/chidden",
                choose: "chosen",
                cleave: "cleft/cloven/cleaved",
                cling: "clung",
                come: "come",
                cost: "cost",
                creep: "crept/creeped",
                cut: "cut",
                do: "done",
                draw: "drawn",
                drink: "drunk",
                drive: "driven",
                eat: "eaten",
                fall: "fallen",
                feel: "felt",
                fight: "fought",
                find: "found",
                fly: "flown",
                forbear: "forborne",
                forget: "forgotten",
                forgive: "forgiven",
                forsake: "forsaken",
                freeze: "frozen",
                get: "gotten/got",
                give: "given",
                go: "gone",
                grow: "grown",
                have: "had",
                hear: "heard",
                heave: "heaved/hove/hoven",
                hide: "hidden",
                hit: "hit",
                hold: "held",
                keep: "kept",
                ken: "kenned/kent",
                kneel: "knelt/kneeled",
                know: "known",
                lade: "laden/lade",
                learn: "learned/learnt",
                leave: "left",
                lend: "lent",
                let: "let",
                lie: "lain",
                lose: "lost",
                make: "made",
                meet: "met",
                overbear: "overborne",
                put: "put",
                read: "read",
                rend: "rended/rent",
                ride: "ridden",
                ring: "rung",
                rise: "risen",
                run: "run",
                say: "said",
                see: "seen",
                seek: "sought",
                sell: "sold",
                send: "sent",
                set: "set",
                sew: "sewn",
                shake: "shaken",
                shave: "shaven",
                shear: "shorn/sheared",
                shine: "shone",
                shit: "shit/shat/shitted",
                shoe: "shod/shoed",
                shoot: "shot",
                show: "shown",
                shrink: "shrunk/shrunken",
                shrive: "shriven/shrived",
                shut: "shut",
                sing: "sung",
                sink: "sunk",
                sit: "sat",
                sleep: "slept",
                slide: "slid",
                slink: "slunk/slinked",
                smell: "smelled/smelt",
                speak: "spoken",
                spend: "spent",
                spill: "spilled/spilt",
                spin: "spun",
                spit: "spat",
                split: "split",
                spread: "spread",
                spring: "sprung",
                stand: "stood",
                stave: "staved/stove/stoven",
                steal: "stolen",
                stick: "stuck",
                sting: "stung",
                stink: "stunk",
                strew: "strewn/strewed",
                stride: "stridden/strode",
                strike: "struck/stricken",
                string: "strung",
                strive: "striven",
                swear: "sworn",
                sweep: "swept",
                swell: "swelled",
                swim: "swum",
                swing: "swung",
                take: "taken",
                teach: "taught",
                tear: "torn",
                tell: "told",
                think: "thought",
                throw: "thrown",
                thrust: "thrust",
                tread: "trodden",
                underbear: "underborn",
                understand: "understood",
                wake: "woken",
                wear: "worn",
                weave: "woven",
                weep: "wept",
                wet: "wet/wetted",
                win: "won",
                wind: "wound",
                withdraw: "withdrawn",
                wreak: "wreaked/wrought",
                write: "written",
            }[adj]
            if(irregularparticiple != undefined){
                Participle = irregularparticiple
            }
            else if(adj.endsWith("y") && !"aeiou".includes(adj[adj.length - 2])){
                Participle = adj.slice(0, -1) + "ied"
            }
            else{
                Participle = Stem + "ed"
            }
            if(adj.endsWith("ie")){
                Gerund = adj.slice(0, -2) + "ying"
            }
            else Gerund = Stem + "ing"
            englishnoun.innerHTML = 
            `<h5>Infinitive: to ${adj}</h5>
            <h5>Gerund: ${Gerund}</h5>
            <h5>Present: ${Present}</h5>
            <h5>Past: ${Past}</h5>
            <h5>Participle: ${Participle}</h5>`
            break
        case "es-noun":
            //determine gender
            if([
                "mano", "libido", "foto", "disco", 
                "cama", "víctima", "espuma", 
                "plata", 
                "flor"
            ].includes(adj)){
                gender = "Feminine"
            }
            else if([
                "análisis", "apocalipsis", "oasis", "énfasis", "paréntesis", "chasis", 
                "avión", "camión", "bastión", 
                "día", 
                "césped", "ataúd",
                "alumbre", "relumbre", "vislumbre"
            ].includes(adj)){
                gender = "Masculine"
            }
            else if(adj.endsWith("ante") || adj.endsWith("ista") || 
            ["bebé", "azúcar", "dracma", "arte", "calor", "color", "chinche", "internet", "lente", "linde", "mar", "mimbre", "pelambre", "prez", "pringue", "radio", "sartén", "vodka", "web"].includes(adj)){
                gender = "Masculine/Feminine"
            }
            else if(
                adj.endsWith("o") || 
                adj.endsWith("ma") ||
                adj.endsWith("ta") ||
                adj.endsWith("pa") ||
                adj.endsWith("or")
            ){
                gender = "Masculine"
            }
            else if(
                adj.endsWith("a") ||
                adj.endsWith("ión") ||
                adj.endsWith("umbre") ||
                adj.endsWith("d") ||
                adj.endsWith("is")
            ){
                gender = "Feminine"
            }
            else if(adj.endsWith("ón")){
                gender = "Masculine"
            }
            else gender = ""
            if(gender != "") englishnoun.innerHTML += "<p>Gender: " + gender + "</p>"

            //ARTICLE
            if(adj == "arte"){
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
            else if((adj.startsWith("a") && (adj.match(/[áéíóú]/g) == null || adj.length > 5)) || (adj.startsWith("á"))){
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

            if(adj.endsWith("z")){ //-Z+CES
                plural = adj.slice(0,-1) + "ces"
            }
            else if(adj == "dracma"){
                plural = "dracmas/dracmae"
            }
            else if(adj.endsWith("ín")){//-ÓN+ONES
                plural = adj.slice(0,-2) + "ines"
            }
            else if(adj.endsWith("ón")){//-ÓN+ONES
                plural = adj.slice(0,-2) + "ones"
            }
            else if(adj.endsWith("és")){//-ÉS+ESES
                plural = adj.slice(0,-2) + "eses"
            }
            else if(adj.endsWith("amen")){//-AMEN+ÁMENES
                plural = adj.slice(0,-2) + "ámenes"
            }
            else if(adj.endsWith("oven")){//-OVEN+ÓVENES
                plural = adj.slice(0,-2) + "óvenes"
            }
            else if(adj.endsWith("imen")){//-IMEN+ÍMENES
                plural = adj.slice(0,-2) + "ímenes"
            }
            else if( //-
                "sx".includes(adj.slice(-1)) ||
                ["st", "zt"].includes(adj.slice(-2)) ||
                ("lrndzj".includes(adj.slice(-1)) &&
                adj.length >= 7 &&
                ("áéíóú".includes(x.slice(-7, -6)) || "áéíóú".includes(x.slice(-6, -5))))
            ){
                plural = adj
            }
            else if( //+ES
                "dhjlnr".includes(adj.slice(-1)) || 
                "sz".includes(adj.slice(-1)) && adj.length == 3 ||
                ["sí", "no", "club", "álbum", "espécimen"].includes(adj)
            ){
                plural = adj + "es"
            }
            else if( //+ES/+S
                "íú".includes(adj.slice(-1)) ||
                adj == "yo"
            ){
                plural = adj + "es/" + adj + "s"
            }
            else{ //+S
                plural = adj + "s"
            }
        
        
            englishnoun.innerHTML += 
            `<h5>Singular Definitive: ${article1}${adj}</h5>
            <h5>Singular Indefinitive: ${article3}${adj}</h5>
            <h5>Plural Definitive: ${article2}${plural}</h5>
            <h5>Plural Indefinitive: ${article4}${plural}</h5>`
            break
        case "ext-noun":

            //
            //determine gender
            if(
                adj.endsWith("u") || 
                adj.endsWith("ma") ||
                adj.endsWith("ol") ||
                adj.endsWith("is") ||
                adj.endsWith("mbri")
            ){
                gender = "Masculine"
            }
            else if(
                adj.endsWith("ón") ||
                adj.endsWith("á") ||
                adj.endsWith("a") ||
                adj.endsWith("i")
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
            if("aeiouáéíóú".includes(adj[0])) article1 = "l'"
            if(gender == ""){
                article1 = article2 = ""
            }

            //

            if(adj.endsWith("ción")) plural = adj.slice(0, -2) + "onis"
            else if(adj.endsWith("n") || adj.endsWith("s")) plural = adj
            else if(adj.endsWith("al") || adj.endsWith("el") || adj.endsWith("il") || adj.endsWith("ol")) plural = adj.slice(0, -1) + "ris"
            else if(!"aeiou".includes(adj[adj.length - 1])) plural = adj + "es"
            else plural = adj + "s"
            englishnoun.innerHTML += 
            `<h5>Singular Definitive: ${article1}${adj}</h5>
            <h5>Singular Indefinitive: ${article3}${adj}</h5>
            <h5>Plural Definitive: ${article2}${plural}</h5>
            <h5>Plural Indefinitive: ${article4}${plural}</h5>`
            break
        case "fr-noun":

            if([
                "boisson", "façon", "liaison", "maison", "raison", "rançon", "saison", "chanson",
                "cage", "image", "nage", "page", "plage", "rage",
                "eau", "peau",
                "jument",
            ].includes(adj)) gender = "Feminine"
            else if([
                "stade",
                "silence",
                "murmure",
                "musée", "lycée", "trophée", "apogée", "mausolée",
                "incendie",
                "comité", "côté", "été", "pâté",
            ].includes(adj)) gender = "Masculine"
            else if(adj.endsWith("iste")) gender = "Masculine/Feminine"
            else if(
                adj.endsWith("eur") ||
                adj.endsWith("ien") ||
                adj.endsWith("ier") ||
                adj.endsWith("on") ||
                adj.endsWith("age") ||
                adj.endsWith("al") ||
                adj.endsWith("eau") ||
                adj.endsWith("ent") ||
                adj.endsWith("et") ||
                adj.endsWith("asme") ||
                adj.endsWith("isme") ||
                adj.endsWith("in") ||
                adj.endsWith("oir") ||
                adj.endsWith("ail")
            ){
                gender = "Masculine"
            }
            else if(
                adj.endsWith("esse") ||
                adj.endsWith("euse") ||
                adj.endsWith("ienne") ||
                adj.endsWith("ère") ||
                adj.endsWith("onne") ||
                adj.endsWith("trice") ||
                adj.endsWith("ade") ||
                adj.endsWith("ance") ||
                adj.endsWith("ence") ||
                adj.endsWith("ée") ||
                adj.endsWith("elle") ||
                adj.endsWith("ette") ||
                adj.endsWith("ie") ||
                adj.endsWith("ine") ||
                adj.endsWith("ise") ||
                adj.endsWith("aille") ||
                adj.endsWith("tié") ||
                adj.endsWith("té") ||
                adj.endsWith("ure")
            ){
                gender = "Feminine"
            }
            else gender = ""
            if(gender != "") englishnoun.innerHTML += "<p>Gender: " + gender + "</p>"

            //
            if(gender == "Masculine"){
                article1 = "aeiouhé".includes(adj[0]) ? "l'" : "le "
                article2 = "les "
                article3 = "un "
                article4 = "des "
            }
            else if(gender == "Feminine"){
                article1 = "aeiouhé".includes(adj[0]) ? "l'" : "la "
                article2 = "les "
                article3 = "une "
                article4 = "des "
            }
            else if(gender == "Masculine/Feminine"){
                article1 = "aeiouhé".includes(adj[0]) ? "l'" : "le/la "
                article2 = "les "
                article3 = "un/une "
                article4 = "des "
            }
            else if(gender == ""){
                article1 = article2 = article3 = article4 = ""
            }

            //

            if(
                adj.endsWith("eau") ||
                adj.endsWith("au") ||
                (adj.endsWith("eu") && adj != "pneu" && adj != "bleu") ||
                adj.endsWith("ou")
            ){
                plural = adj + "x"
            }
            else if(adj.endsWith("al") && !["bal", "cal", "carnaval", "chacal", "festival", "régal"].includes(adj)){
                plural = adj.slice(0, -1) + "ux"
            }
            else if(adj.endsWith("ail")){
                plural = adj.slice(0, -2) + "ux"
            }
            else if(adj.endsWith("s") || adj.endsWith("x") || adj.endsWith("z")) plural = adj
            else plural = adj + "s"
            irregular = {
                "madame": "mesdames",
                "mademoiselle": "mesdemoiselles",
                "monseiur": "messieurs",
                "ciel": "cieux/ciels",
                "œil": "yeux/œils",
                "aïeul": "aïeuls/aïeux",
            }[adj]
            if(irregular != undefined) plural = irregular
            englishnoun.innerHTML += 
            `<h5>Singular Definitive: ${article1}${adj}</h5>
            <h5>Singular Indefinitive: ${article3}${adj}</h5>
            <h5>Plural Definitive: ${article2}${plural}</h5>
            <h5>Plural Indefinitive: ${article4}${plural}</h5>`
            break
        case "pl-noun":
            if(adj.endsWith("ysta") || adj.endsWith("ista")) gender = "Masculine"
            else if(adj.endsWith("a") || adj.endsWith("i") || adj.endsWith("ć")) gender = "Feminine"
            else if(
                adj.endsWith("o") ||
                adj.endsWith("e") ||
                adj.endsWith("um")
            ){
                gender = "Neuter"
            }
            else if("mkż".includes(adj[adj.length - 1])){
                gender = "Masculine"
            }
            else gender = ""
            if(gender != "") englishnoun.innerHTML += "<p>Gender: " + gender + "</p>"

            //
            if(adj.endsWith("o") || adj.endsWith("e")) plural = adj.slice(0, -1) + "a"
            else if(adj.endsWith("sta")) plural = adj.slice(0, -1) + "ści"
            else if(adj.endsWith("ż") || adj.endsWith("ja") || adj.endsWith("ysa")) plural = adj.slice(0, -1) + "e"
            else if(adj.endsWith("sa")) plural = adj.slice(0, -1) + "e/" + adj.slice(0, -1) + "y" 
            else if(adj.endsWith("a")) plural = adj.slice(0, -1) + "y"
            else if(adj.endsWith("icz")) plural = adj + "owie"
            else if(adj.endsWith("k")) plural = adj.slice(0, -1) + "i"
            else if(adj.endsWith("um")) plural = adj.slice(0, -2) + "a"
            else if(adj.endsWith("ć") || adj.endsWith("ant")) plural = adj.slice(0, -1) + "ci"
            else plural = adj + "y"
            englishnoun.innerHTML += 
            `<table><thead>
                <tr>
                    <th>Singular</th>
                    <th>Plural</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${adj}</td>
                    <td>${plural}</td>
                </tr>
            </tbody></table>`
            break
        case "scn-adj":
            if(adj.endsWith("i")){
                femadj = mpl = fempl = adj
            }
            else{
                femadj = adj.slice(0, -1) + "a"
                mpl = adj.slice(0, -1) + "i"
                if(adj[adj.length - 2] == "c"){
                    fempl = adj.slice(0, -1) + "hi"
                }
                else fempl = mpl
            }
            
            englishnoun.innerHTML =
            `<h5>Masculine Singular: ${adj}</h5>
            <h5>Masculine Plural: ${mpl}</h5>
            <h5>Feminine Singular: ${femadj}</h5>
            <h5>Feminine Plural: ${fempl}</h5>`
            break
        case "scn-noun":
            if(
                adj.endsWith("uni") ||
                adj.endsWith("u")
            ){
                gender = "Masculine"
                if("aeiouàèù".includes(adj[0])) article1 = "l'"
                else article1 = "lu "
                article2 = "li "
                if("aeiouàèù".includes(adj[0])) article3 = "n'"
                else if((adj.startsWith("z")) && (adj.startsWith("s") && "bcdfglmnprt".includes(adj[1]))){
                    article3 = "nu "
                }
                else{
                    article3 = "un "
                }   
            }
            else if(
                adj.endsWith("i") ||
                adj.endsWith("a") ||
                adj.endsWith("à")
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
            if(adj == "omu") plural = "òmini"
            else if(adj.endsWith("iu")) plural = adj.slice(0, -1)
            else if(adj.endsWith("ia")) plural = adj.slice(0, -1)
            else if(adj[adj.length - 2] == "c") plural = adj.slice(0, -1) + "hi"
            else if(adj.endsWith("i") || adj.endsWith("à")) plural = adj
            else plural = adj.slice(0, -1) + "i"
            englishnoun.innerHTML += 
            `<h5>Singular Definitive: ${article1}${adj}</h5>
            <h5>Singular Indefinitive: ${article3}${adj}</h5>
            <h5>Plural Definitive: ${article2}${plural}</h5>
            <h5>Plural Indefinitive: ${plural}</h5>`
            break
        case "it-noun":
            if(
                adj.endsWith("o") ||
                adj.endsWith("ma")
            ){
                gender = "Masculine"
            }
            else if(adj.endsWith("ista")){
                gender = "Masculine/Feminine"
            }
            else if(
                adj.endsWith("e") ||
                adj.endsWith("a") ||
                adj.endsWith("à") ||
                adj.endsWith("ione")
            ){
                gender = "Feminine"
            }
            else{
                gender = ""
            }
            if(gender != "") englishnoun.innerHTML += "<p>Gender: " + gender + "</p>"
            //
            
            if(
                adj.endsWith("à") ||
                adj.endsWith("è") ||
                adj.endsWith("ù") ||
                ["video", "stereo", "moto", "serie", "specie", "hotel"].includes(adj)
            ){
                plural = adj
            }
            else if(adj == "uomo"){
                plural = "uomini"
            }
            else if(adj == "dio"){
                plural = "dei"
            }
            else if(adj == "bue"){
                plural = "buoi"
            }
            else if(adj == "moglie"){
                plural = "mogli"
            }
            else if((adj.endsWith("cia") || adj.endsWith("gia")) && (!"aeiou".includes(adj[adj.length - 4]))){
                plural = adj.slice(0, -2) + "e"
            }
            else if(adj.endsWith("ca") || adj.endsWith("ga")){
                if(gender == "Feminine"){
                    plural = adj.slice(0, -1) + "he"
                }
                else{
                    plural = adj.slice(0, -1) + "hi"
                }
            }
            else if(adj.endsWith("co") || adj.endsWith("go") && adj.length >= 4 && adj.length <= 6){
                plural = adj.slice(0, -1) + "hi"
            }
            else if(gender == "Feminine" && adj.endsWith("a")){
                plural = adj.slice(0, -1) + "e"
            }
            else{
                plural = adj.slice(0, -1) + "i"
            }

            //

            if(gender == "Masculine"){
                if("aeiou".includes(adj[0])){
                    article1 = "l'"
                    article2 = "gli "
                    article3 = "un "
                }
                else if(
                    adj.startsWith("z") ||
                    adj.startsWith("y") ||
                    adj.startsWith("x") ||
                    adj.startsWith("j") ||
                    adj.startsWith("gn") ||
                    adj.startsWith("ps") ||
                    adj.startsWith("pn") ||
                    (adj.length > 2 && adj.startsWith("s") && "bcdfglmnprt".includes(adj[1]))
                ){
                    article1 = "lo "
                    article2 = "gli "
                    article3 = "uno "
                }
                else if(adj == "dio"){
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
                article1 = "aeiou".includes(adj[0]) ? "l'" : "la "
                article2 = "le "
                article3 = "aeiou".includes(adj[0]) ? "un'" : "una "
            }
            else{
                article1 = article2 = article3 = ""
            }

            //
            englishnoun.innerHTML += 
            `<h5>Singular Definitive: ${article1}${adj}</h5>
            <h5>Singular Indefinitive: ${article3}${adj}</h5>
            <h5>Plural Definitive: ${article2}${plural}</h5>
            <h5>Plural Indefinitive: ${plural}</h5>`
            break
        case "nl-verb":
            dutchverbs = ["zijn", "spreken", "dichten"]
            //present1
            if(adj == "zijn") present1 = "ben"
            else if(adj == "spreken") present1 = "spreek"
            else present1 = adj.slice(0, -2)
            //present2
            if(adj == "zijn") present2= "bent"
            else{
                present2 = present1.endsWith("t") ? present1 : present1 + "t"
            }
            //present3
            if(adj == "zijn") present3 = "is"
            else{
                present3 = present1.endsWith("t") ? present1 : present1 + "t"
            }    
            //present4
            if(adj == "zijn") present4 = "zijt"
            else{
                present4 = present1.endsWith("t") ? present1 : present1 + "t"
            }    
            //present5
            if(adj == "zijn") present5 = "is"
            else{
                present5 = present1.endsWith("t") ? present1 : present1 + "t"
            }    
            //past1
            if(adj == "zijn") past1 = "was"
            else if(adj == "spreken") past1 = "sprak"
            else{
                if("aelr".includes(adj.charAt(adj.length - 3))) past1 = adj.slice(0, -2) + "de"
                else past1 = adj.slice(0, -2) + "te"
            }
            //past2
            if(adj == "zijn") past2 = "waart"
            else if(adj == "spreken") past2 = "spraakt"
            else{
                if("aelr".includes(adj.charAt(adj.length - 3))) past2 = adj.slice(0, -2) + "de"
                else past2 = adj.slice(0, -2) + "te"
            }
            //past3
            if(adj == "zijn") past3 = "waren"
            else if(adj == "spreken") past3 = "spraken"
            else past3 = past1 + "n"
            //subj1
            subj1 = adj.slice(0, -1)
            //subj2
            if(adj == "zijn") subj2 = "ware"
            else if(adj == "spreken") subj2 = "sprake"
            else{
                if("aelr".includes(adj.charAt(adj.length - 3))) subj2 = adj.slice(0, -2) + "de"
                else subj2 = adj.slice(0, -2) + "te"
            }
            //subj3
            if(adj == "zijn") subj3 = "waren"
            else if(adj == "spreken") subj3 = "spraken"
            else subj3 = subj2 + "n"
            //imp1
            if(adj == "zijn") imp1 = "wees"
            else imp1 = present1
            //imp2
            if(imp1.endsWith("t")) imp2 = imp1
            else imp2 = imp1 + "t"
            //participle1
            participle1 = adj + "d"
            //participle2
            if(adj == "zijn") participle2 = "geweest"
            else if(adj == "spreken") participle2 = "gesproken"
            else{
                if(present1.endsWith("t")) participle2 = "ge" + present1
                else if(present1.startsWith("aa") || present1.startsWith("b")) participle2 = present1
                else participle2 = "ge" + present1 + "d"
            }
            englishnoun.innerHTML = 
            `<table>
            <thead>
                <tr>
                    <td style="border:none"></td>
                    <th>1st p. sing.</th>
                    <th>2nd p. sing. (jij)</th>
                    <th>2nd p. sing. (u)</th>
                    <th>2nd p. sing. (gij)</th>
                    <th>3rd p. sing.</th>
                    <th>Plural</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Present</th>
                    <td>${present1}</td>
                    <td>${present2}</td>
                    <td>${present3}</td>
                    <td>${present4}</td>
                    <td>${present5}</td>
                    <td>${adj}</td>
                </tr>
                <tr>
                    <th>Past</th>
                    <td>${past1}</td>
                    <td>${past1}</td>
                    <td>${past1}</td>
                    <td>${past2}</td>
                    <td>${past1}</td>
                    <td>${past3}</td>
                </tr>
                <tr>
                    <th>Subjunctive Present</th>
                    <td colspan="5">${subj1}</td>
                    <td>${adj}</td>
                </tr>
                <tr>
                    <th>Subjunctive Past</th>
                    <td colspan="5">${subj2}</td>
                    <td>${subj3}</td>
                </tr>
                <tr>
                    <th>Imperative</th>
                    <td colspan="5">${imp1}</td>
                    <td>${imp2}</td>
                </tr>
                <tr>
                    <th>Present Participle</th>
                    <td colspan="6">${participle1}</td>
                </tr>
                <tr>
                    <th>Past Participle</th>
                    <td colspan="6">${participle2}</td>
                </tr>
            </tbody>
            </table>`
            break
        case "scn-verb":
            ostem = adj.slice(0, -3)
            stem = ostem.replace("à", "a")
            ustem = stem.endsWith("c") ? stem + "i" : stem
            if(adj.endsWith("iri")){
                gerund = `${stem}ennu`
                participle = `${stem}itu`
                present = [`${ustem}u`, `${stem}i`, `${stem}i`, `${stem}emu`, `${stem}iti`, `${ostem}inu`]
                preterite = [`${stem}ivi`, `${stem}isti`, `${stem}ìu`, `${stem}emmu`, `${stem}ìstivu`, `${stem}eru`]
                imperfect = [`${stem}ìa`, `${stem}ivi`, `${stem}ìa`, `${stem}ìamu`, `${stem}ìavu`, `${stem}ìanu`]
                imperfect2 = [`${stem}eva`, `${stem}evi`, `${stem}eva`, `${stem}èvamu`, `${stem}èvavu`, `${stem}èvanu`]
                subjpres = present
                subjpast = [`${stem}issi`, `${stem}issi`, `${stem}issi`, `${stem}ìssimu`, `${stem}ìssivu`, `${stem}ìssiru`]
                conditional = [`${stem}irìa`, `${stem}irissi`, `${stem}irìa`, `${stem}irìamu`, `${stem}irìavu`, `${stem}irìanu`]
                imperative = [`${stem}i`, `${stem}issi`, `${stem}emu`, `${stem}iti`]
            }
            else if(adj.endsWith("ari")){
                gerund = `${stem}annu`
                participle = `${ustem}utu`
                present = [`${ustem}u`, `${stem}i`, `${stem}a`, `${stem}amu`, `${stem}ati`, `${ostem}anu`]
                preterite = [`${stem}ai`, `${stem}asti`, `${stem}au`, `${stem}ammu`, `${stem}àstivu`, `${stem}àrunu`]
                imperfect = [`${stem}ava`, `${stem}avi`, `${stem}ava`, `${stem}àvamu`, `${stem}àvavu`, `${stem}àvanu`]
                imperfect2 = [`${stem}ava`, `${stem}avi`, `${stem}ava`, `${stem}àvamu`, `${stem}àvavu`, `${stem}àvanu`]
                subjpres = present
                subjpast = [`${stem}assi`, `${stem}assi`, `${stem}assi`, `${stem}àssimu`, `${stem}àssivu`, `${stem}àssiru`]
                conditional = [`${stem}irìa`, `${stem}irissi`, `${stem}irìa`, `${stem}irìamu`, `${stem}irìavu`, `${stem}irìanu`]
                imperative = [`${stem}a`, `${stem}assi`, `${stem}amu`, `${stem}ati`]
            }

            englishnoun.innerHTML = 
            `<h3>Gerund: ${gerund}, Participle: ${participle}</h3>
            <table>
            <thead>
                <tr>
                    <td style="border:none"></td>
                    <th>iu/jo/jeu</th>
                    <th>tu</th>
                    <th>iḍḍu/iḍḍa</th>
                    <th>nuiautri</th>
                    <th>vuiautri</th>
                    <th>iḍḍi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Present</th>
                    <td>${present[0]}</td>
                    <td>${present[1]}</td>
                    <td>${present[2]}</td>
                    <td>${present[3]}</td>
                    <td>${present[4]}</td>
                    <td>${present[5]}</td>
                </tr>
                <tr>
                    <th>Preterite</th>
                    <td>${preterite[0]}</td>
                    <td>${preterite[1]}</td>
                    <td>${preterite[2]}</td>
                    <td>${preterite[3]}</td>
                    <td>${preterite[4]}</td>
                    <td>${preterite[5]}</td>
                </tr>
                <tr>
                    <th>Indicative Imperfect₁</th>
                    <td>${imperfect[0]}</td>
                    <td>${imperfect[1]}</td>
                    <td>${imperfect[2]}</td>
                    <td>${imperfect[3]}</td>
                    <td>${imperfect[4]}</td>
                    <td>${imperfect[5]}</td>
                </tr>
                <tr>
                <th>Indicative Imperfect₂</th>
                    <td>${imperfect2[0]}</td>
                    <td>${imperfect2[1]}</td>
                    <td>${imperfect2[2]}</td>
                    <td>${imperfect2[3]}</td>
                    <td>${imperfect2[4]}</td>
                    <td>${imperfect2[5]}</td>
                </tr>
                <tr>
                    <th>Subjunctive Present</th>
                    <td>${subjpres[0]}</td>
                    <td>${subjpres[1]}</td>
                    <td>${subjpres[2]}</td>
                    <td>${subjpres[3]}</td>
                    <td>${subjpres[4]}</td>
                    <td>${subjpres[5]}</td>
                </tr>
                <tr>
                    <th>Subjunctive Imperfect</th>
                    <td>${subjpast[0]}</td>
                    <td>${subjpast[1]}</td>
                    <td>${subjpast[2]}</td>
                    <td>${subjpast[3]}</td>
                    <td>${subjpast[4]}</td>
                    <td>${subjpast[5]}</td>
                </tr>
                <tr>
                    <th>Conditional</th>
                    <td>${conditional[0]}</td>
                    <td>${conditional[1]}</td>
                    <td>${conditional[2]}</td>
                    <td>${conditional[3]}</td>
                    <td>${conditional[4]}</td>
                    <td>${conditional[5]}</td>
                </tr>
                <tr>
                    <th>Imperative</th>
                    <td> - </td>
                    <td>${imperative[0]}</td>
                    <td>${imperative[1]}</td>
                    <td>${imperative[2]}</td>
                    <td>${imperative[3]}</td>
                    <td> - </td>
                </tr>
            </tbody>
            </table>`
            break
        case "eo-verb":
            stem = adj.slice(0, -1)
            englishnoun.innerHTML = 
            `<h5>Infinitive: ${stem}i</h5>
            <h5>Present: ${stem}as</h5>
            <h5>Past: ${stem}is</h5>
            <h5>Future: ${stem}os</h5>
            <h5>Conditional: ${stem}us</h5>
            <h5>Volitive: ${stem}u</h5>`
            break
        case "es-verb":
            stem = adj.slice(0, -2)
            ending = adj.slice(-2)
            if(!(adj.endsWith("ar") || adj.endsWith("er") || adj.endsWith("ir") || adj.endsWith("ír"))){
                englishnoun.innerHTML = "Verbs must end in -AR, -ER, -IR, or -ÍR"
                return 0
            }
            accentinfinit = adj.replace("á", "a").replace("é", "e").replace("í", "i").replace("ó", "o").replace("ú", "u")
            FCstem = {"valer": "valdr", "caber": "cabr", "tener": "tendr", "saber": "sabr", "venir": "vendr", "decir": "dir", "hacer": "har", "querer": "querr", "poner": "pondr", "salir": "saldr", "poder": "podr", "haber": "habr"}[adj] ?? accentinfinit
            
            futuretense = ["é", "ás", "á", "emos", "éis", "án"].map(x => `<td>${FCstem}${x}</td>`).join("")
            conditionaltense = ["ía", "ías", "ía", "íamos", "íais", "ían"].map(x => `<td>${FCstem}${x}</td>`).join("")

            conditionalfuturenote = FCstem != accentinfinit ? `Note: this uses an irregular stem in the conditional/future tenses: <u>${FCstem}</u>` : `This verb is regular in the conditional/future tenses :)`
            imperfectnote = "SER, IR, and VER are the only three irregular verbs in the imperfect tense"
            if(adj == "ser"){
                imperfecttense = ["era", "eras", "era", "éramos", "erais", "eran"].map(x => `<td>${x}</td>`).join("")
            }
            else if(adj == "ir"){
                imperfecttense = ["iba", "ibas", "iba", "íbamos", "íbais", "iban"].map(x => `<td>${x}</td>`).join("")
            }
            else if(adj == "ver"){
                imperfecttense = ["veía", "veías", "veía", "veíamos", "veíais", "veían"].map(x => `<td>${x}</td>`).join("")
            }
            else{
                if(ending == "ar"){
                    imperfecttense = ["aba", "abas", "aba", "ábamos", "aba", "aban"].map(x => `<td>${stem}${x}</td>`).join("")
                }
                else{
                    imperfecttense = ["ía", "ías", "ía", "íamos", "íais", "ián"].map(x => `<td>${stem}${x}</td>`).join("")
                }
                imperfectnote = "This is a regular verb in the imperfect tense :)"
            }

            englishnoun.innerHTML = 
            `<table>
            <thead>
                <tr>
                    <td style="border:none"></td>
                    <th>Yo</th>
                    <th>Tú</th>
                    <th>Él|Ella|Usted</th>
                    <th>Nosotros/as</th>
                    <th>Vosotros/as</th>
                    <th>Ellos/as</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Imperfect</th>
                    ${imperfecttense}
                </tr>
                <tr>
                    ${note(imperfectnote)}
                </tr>
                <tr>
                    <th>Conditional</th>
                    ${conditionaltense}
                </tr>
                <tr>
                    <th>Future</th>
                    ${futuretense}
                </tr>
                <tr>
                    ${note(conditionalfuturenote)}
                </tr>
            </tbody>
            </table>`
            break
        case "sv-noun":
            //determine gender
            if(adj == "fönster" || adj == "finger"){
                gender = "neuter"
            }
            else if(adj.endsWith("er")){
                gender = "common"
            }
            else if(
                adj.endsWith("e") || 
                adj.endsWith("")){
                    gender = "neuter"
                }
            englishnoun.innerHTML = gender
            break
    }


    if(mynotes[ourlang] != undefined){
        if(mynotes[ourlang][adj] != undefined) notes.innerHTML += `<br><small>*${mynotes[ourlang][adj]}</small>`
    }
}

changelangtodecline(langtodecline.value)