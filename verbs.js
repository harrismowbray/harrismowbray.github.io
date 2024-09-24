function changelangtoconjugate(){
    enterverb.value = {
        "en": "shear",
        "nl": "zijn",
        "scn": "chiànciri",
    }[langtoconjugate.value]
    conjugate()
}

function conjugate(){
    ourlang = langtoconjugate.value
    infinitive = enterverb.value.toLowerCase()
    if(infinitive.trim() == ""){
        dutchverb.innerHTML = ""
        recognizedverb.textContent = ""
        return 0
    }
    if(ourlang == "nl"){
        verblist = ["zijn", "dichten", "spreken", "barbecueën", "cijferen", "aanvaarden", "bedoelen"]
        recognizedverb.innerHTML = verblist.includes(infinitive) ? "recognized verb ✅" : "verb not recognized ❌"
        dutchverbs = ["zijn", "spreken", "dichten"]
        //present1
        if(infinitive == "zijn") present1 = "ben"
        else if(infinitive == "spreken") present1 = "spreek"
        else present1 = infinitive.slice(0, -2)
        //present2
        if(infinitive == "zijn") present2= "bent"
        else{
            present2 = present1.endsWith("t") ? present1 : present1 + "t"
        }
        //present3
        if(infinitive == "zijn") present3 = "is"
        else{
            present3 = present1.endsWith("t") ? present1 : present1 + "t"
        }    
        //present4
        if(infinitive == "zijn") present4 = "zijt"
        else{
            present4 = present1.endsWith("t") ? present1 : present1 + "t"
        }    
        //present5
        if(infinitive == "zijn") present5 = "is"
        else{
            present5 = present1.endsWith("t") ? present1 : present1 + "t"
        }    
        //past1
        if(infinitive == "zijn") past1 = "was"
        else if(infinitive == "spreken") past1 = "sprak"
        else{
            if("aelr".includes(infinitive.charAt(infinitive.length - 3))) past1 = infinitive.slice(0, -2) + "de"
            else past1 = infinitive.slice(0, -2) + "te"
        }
        //past2
        if(infinitive == "zijn") past2 = "waart"
        else if(infinitive == "spreken") past2 = "spraakt"
        else{
            if("aelr".includes(infinitive.charAt(infinitive.length - 3))) past2 = infinitive.slice(0, -2) + "de"
            else past2 = infinitive.slice(0, -2) + "te"
        }
        //past3
        if(infinitive == "zijn") past3 = "waren"
        else if(infinitive == "spreken") past3 = "spraken"
        else past3 = past1 + "n"
        //subj1
        subj1 = infinitive.slice(0, -1)
        //subj2
        if(infinitive == "zijn") subj2 = "ware"
        else if(infinitive == "spreken") subj2 = "sprake"
        else{
            if("aelr".includes(infinitive.charAt(infinitive.length - 3))) subj2 = infinitive.slice(0, -2) + "de"
            else subj2 = infinitive.slice(0, -2) + "te"
        }
        //subj3
        if(infinitive == "zijn") subj3 = "waren"
        else if(infinitive == "spreken") subj3 = "spraken"
        else subj3 = subj2 + "n"
        //imp1
        if(infinitive == "zijn") imp1 = "wees"
        else imp1 = present1
        //imp2
        if(imp1.endsWith("t")) imp2 = imp1
        else imp2 = imp1 + "t"
        //participle1
        participle1 = infinitive + "d"
        //participle2
        if(infinitive == "zijn") participle2 = "geweest"
        else if(infinitive == "spreken") participle2 = "gesproken"
        else{
            if(present1.endsWith("t")) participle2 = "ge" + present1
            else if(present1.startsWith("aa") || present1.startsWith("b")) participle2 = present1
            else participle2 = "ge" + present1 + "d"
        }
        dutchverb.innerHTML = 
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
                <td>${infinitive}</td>
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
                <td>${infinitive}</td>
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
    }
    else if(ourlang == "scn"){
        verblist = ["chiànciri", "nzunnari", "rapiri"]
        recognizedverb.innerHTML = verblist.includes(infinitive) ? "recognized verb ✅" : "verb not recognized ❌"
        ostem = infinitive.slice(0, -3)
        stem = ostem.replace("à", "a")
        ustem = stem.endsWith("c") ? stem + "i" : stem
        if(infinitive.endsWith("iri")){
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
        else if(infinitive.endsWith("ari")){
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

        dutchverb.innerHTML = 
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
    }
    else if(ourlang == "en"){
        recognizedverb.textContent = ""
        if(infinitive == "be"){
            Present = "(I) am, (we/you/they) are, (he/she/it) is"
        }
        else{
            if(infinitive.endsWith("y") && !"aeiou".includes(infinitive[infinitive.length - 2])){
                Third = infinitive.slice(0, -1) + "ies"
            }
            else if(infinitive.endsWith("h") || infinitive.endsWith("x") || infinitive.endsWith("ss") || infinitive.endsWith("o")) Third = infinitive + "es"
            else Third = infinitive + "s"
            
            Present = infinitive + ", (he/she/it) " + Third
        }
        if(infinitive.endsWith("e") && !infinitive.endsWith("ee") && !infinitive.endsWith("oe") && infinitive != "be") Stem = infinitive.slice(0, -1)
        else if(
            "trbdmnpl".includes(infinitive[infinitive.length - 1])
            && (
                ("aeiou".includes(infinitive[infinitive.length - 2]))
                && !"aeiou".includes(infinitive[infinitive.length - 3])
            )
            && !["debut", "exit", "budget", "benefit", "cancel", "counsel", "happen", "listen", "marvel", "offer", "open", "quarrel", "ripen", "visit", "travel", "vomit", "worship"].includes(infinitive)
        ){
            Stem = infinitive + infinitive[infinitive.length - 1]
        }
        else Stem = infinitive
        irregularpast = {
            be: "(I/he/she/it) was, (you/we/they) were",
            become: "became",
            begin: "began",
            bend: "bent",
            bereave: "bereaved/bereft",
            bet: "bet",
            bite: "bit",
            blow: "blew",
            break: "broke",
            bring: "brought",
            build: "built",
            buy: "bought",
            catch: "caught",
            choose: "chose",
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
            hide: "hid",
            hit: "hit",
            hold: "held",
            keep: "kept",
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
            put: "put",
            read: "read",
            ride: "rode",
            ring: "rang",
            rise: "rose",
            run: "ran",
            say: "said",
            see: "saw",
            sell: "sold",
            send: "sent",
            set: "set",
            shake: "shook",
            shear: "shore",
            shine: "shone",
            shit: "shit/shat",
            shoe: "shod/shoed",
            shoot: "shot",
            shut: "shut",
            sing: "sang",
            sink: "sank",
            sit: "sat",
            sleep: "slept",
            slide: "slid",
            slink: "slunk/slinked",
            speak: "spoke",
            spend: "spent",
            spin: "spun",
            spit: "spat",
            split: "split",
            spread: "spread",
            spring: "sprang",
            stand: "stood",
            steal: "stole",
            stick: "stuck",
            sting: "stung",
            stink: "stank",
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
            tread: "trod",
            understand: "understood",
            wake: "woke",
            wear: "wore",
            weave: "wove",
            weep: "wept",
            win: "won",
            wind: "wound",
            withdraw: "withdrew",
            write: "wrote",
            writhe: "whrothe",
        }[infinitive]
        if(irregularpast != undefined){
            Past = irregularpast
        }
        else if(infinitive.endsWith("y") && !"aeiou".includes(infinitive[infinitive.length - 2])){
            Past = infinitive.slice(0, -1) + "ied"
        }
        else{
            Past = Stem + "ed"
        }
        irregularparticiple = {
            be: "been",
            become: "become",
            begin: "begun",
            bend: "bent",
            bereave: "bereaved/bereft",
            bet: "bet",
            bite: "bitten",
            blow: "blown",
            break: "broken",
            bring: "brought",
            build: "built",
            buy: "bought",
            catch: "caught",
            choose: "chosen",
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
            hide: "hidden",
            hit: "hit",
            hold: "held",
            keep: "kept",
            kneel: "knelt/kneeled",
            know: "known",
            learn: "learned/learnt",
            leave: "left",
            lend: "lent",
            let: "let",
            lie: "lain",
            lose: "lost",
            make: "made",
            meet: "met",
            put: "put",
            read: "read",
            ride: "ridden",
            ring: "rung",
            rise: "risen",
            run: "run",
            say: "said",
            see: "seen",
            sell: "sold",
            send: "sent",
            set: "set",
            sew: "sewn",
            shake: "shaken",
            shear: "shorn",
            shine: "shone",
            shit: "shit/shat",
            shoe: "shod/shoed",
            shoot: "shot",
            show: "shown",
            shut: "shut",
            sing: "sung",
            sink: "sunk",
            sit: "sat",
            sleep: "slept",
            slide: "slid",
            slink: "slunk/slinked",
            speak: "spoken",
            spend: "spent",
            spin: "spun",
            spit: "spat",
            split: "split",
            spread: "spread",
            spring: "sprung",
            stand: "stood",
            steal: "stolen",
            stick: "stuck",
            sting: "stung",
            stink: "stunk",
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
            tread: "trodden",
            understand: "understood",
            wake: "woken",
            wear: "worn",
            weave: "woven",
            weep: "wept",
            win: "won",
            wind: "wound",
            withdraw: "withdrawn",
            write: "written",
        }[infinitive]
        if(irregularparticiple != undefined){
            Participle = irregularparticiple
        }
        else if(infinitive.endsWith("y") && !"aeiou".includes(infinitive[infinitive.length - 2])){
            Participle = infinitive.slice(0, -1) + "ied"
        }
        else{
            Participle = Stem + "ed"
        }
        if(infinitive.endsWith("ie")){
            Gerund = infinitive.slice(0, -2) + "ying"
        }
        else Gerund = Stem + "ing"
        dutchverb.innerHTML = 
        `<h5>Infinitive: to ${infinitive}</h5>
        <h5>Gerund: ${Gerund}</h5>
        <h5>Present: ${Present}</h5>
        <h5>Past: ${Past}</h5>
        <h5>Participle: ${Participle}</h5>`
    }
}
changelangtoconjugate()