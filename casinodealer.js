thepoint = 1

paigowsmall = []

anteplay = [
    [25, 5],
    [500, 100, 25],
    [25, 25, 5, 5],
    [100, 100],
    [5, 5],
    [500, 100],
    [25, 25, 5],
    [25, 25, 25],
    [100, 25],
    [100, 5, 5],
    [1000, 500],
]

anteplaylite = [
    [10],
    [5],
    [1],
]

possibilities = []

bidcount = 0

bids = {}


playerhand = dealerhand = playerhand2 = middlehand = ""
game = "blackjack"

bruhdeck = "🂦🃂🃊🃈🃎🃙🂲"
frenchdeck = "🂡🂱🃁🃑🂮🂾🃎🃞🂭🂽🃍🃝🂫🂻🃋🃛🂪🂺🃊🃚🂩🂹🃉🃙🂨🂸🃈🃘🂧🂷🃇🃗🂦🂶🃆🃖🂥🂵🃅🃕🂤🂴🃄🃔🂣🂳🃃🃓🂢🂲🃂🃒"
cardname = {}
for(x = 0; x < Array.from(frenchdeck).length; x++) cardname[Array.from(frenchdeck)[x]] = "AKQJT98765432"[Math.floor(x / 4)] + "SHDC"[x % 4]
singlejokerfrenchdeck = "🃟🂡🂱🃁🃑🂮🂾🃎🃞🂭🂽🃍🃝🂫🂻🃋🃛🂪🂺🃊🃚🂩🂹🃉🃙🂨🂸🃈🃘🂧🂷🃇🃗🂦🂶🃆🃖🂥🂵🃅🃕🂤🂴🃄🃔🂣🂳🃃🃓🂢🂲🃂🃒"
doublejokerfrenchdeck = "🃟🃟🂡🂱🃁🃑🂮🂾🃎🃞🂭🂽🃍🃝🂫🂻🃋🃛🂪🂺🃊🃚🂩🂹🃉🃙🂨🂸🃈🃘🂧🂷🃇🃗🂦🂶🃆🃖🂥🂵🃅🃕🂤🂴🃄🃔🂣🂳🃃🃓🂢🂲🃂🃒"
dice = "⚀⚁⚂⚃⚄⚅"
shuffleddeck = Array.from(frenchdeck)
threecardstraightorder = "AKQJT98765432 A32"
cardorder = "023456789TJQKA"
jokercardorder = "23456789TJQKAW"

suits = ["clubs", "diamonds", "hearts", "spades"]

cardname["🃟"] = cardname["🃏︎"] = "WW"
if(Array.from(document.body.children[0].children).map(x => x.id).includes("chips")) chips.style.display = "none"
step = amount = owedfunds = 0

function raiseAmount(am){
    amount += am
    theamount.textContent = amount
    if(amount == Math.floor(owedfunds * 2) / 2){
        decide.innerHTML = `Correct!`
        setTimeout(decidenewgame, 1200)
    }
    else if(amount > owedfunds){
        decide.innerHTML = `You overpaid! The player only earned $` + owedfunds
        setTimeout(decidenewgame, 2000)
    }
}


function claimDecide(myoutcome){
    realoutcomes = comparehands(typeofbet.textContent)
    why = ""
    if(typeof realoutcomes == "object"){
        realoutcome = realoutcomes[0]
        why = realoutcomes[1]
    }
    else{
        realoutcome = realoutcomes
    }


    bettype = "opponent"
    if((typeofbet.textContent.endsWith(" card bonus") || ["mississippi", "doubledraw"].includes(game)) && game != "crisscross"){
        if(realoutcome == -1){
            why = "The player forms a " + Ppoints[0] + " hand which does not qualify for anything, losing."
        }
        else if(realoutcome == 0){
            why = "The player forms a " + Ppoints[0] + " hand which qualifies for a push."
        }
        else if(realoutcome > 0) {
            why = "The player forms a " + Ppoints[0] + " hand which qualifies as a win!"
        }
    }

    
    if(myoutcome == "win"){
        if(realoutcome > 0 && !"2345".includes(thebettype[0]) && (!["ante", "play"].includes(thebettype) || (realoutcome > 0 && realoutcome != 1))){
            bidsdiv.innerHTML = `<div class="chiplist">${lecurrentbid.map(ap => `<button class="smallchip chip_${ap}">$${("" + ap).replace("000", "k")}</button>`).join("")}</div>`
            decide.innerHTML = `Pay the player for their winning <span id='typeofbet'>${typeofbet.textContent}</span> bet: $<span id="theamount">_</span>`
            chips.style.display = ""
            owedfunds = realoutcome * lecurrentbid.reduce((x, y) => { return x + y }, 0)
        }
        else if(realoutcome == 0){
            decide.innerHTML = `Wrong, it's a push. `
            decide.innerHTML += why
            decide.innerHTML += ` <br><button class="b" onclick="decidenewgame()">Continue</button>`
        }
        else if(realoutcome < 0){
            decide.innerHTML = `Wrong, the player loses. `
            decide.innerHTML += why
            decide.innerHTML += ` <br><button class="b" onclick="decidenewgame()">Continue</button>`
        }
        else{
            decide.innerHTML = "Correct!"
            setTimeout(decidenewgame, 1000)
        }
    }
    else if(myoutcome == "push"){
        if(realoutcome == 0){
            decide.innerHTML = "Correct!"
            setTimeout(decidenewgame, 1000)
        }
        else{
            decide.innerHTML = `Wrong, the player ${realoutcome > 0 ? "wins": "loses"}. `
            decide.innerHTML += why
            decide.innerHTML += ` <br><button class="b" onclick="decidenewgame()">Continue</button>`
        }
    }
    else if(myoutcome == "loss"){
        if(realoutcome < 0){
            decide.innerHTML = "Correct!"
            setTimeout(decidenewgame, 1000)
        }
        else if(realoutcome == 0){
            decide.innerHTML = "Wrong, it's a push. "
            decide.innerHTML += why
            decide.innerHTML += ` <br><button class="b" onclick="decidenewgame()">Continue</button>`
        }
        else if(realoutcome > 0){
            decide.innerHTML = "Wrong, the player wins. "
            decide.innerHTML += why
            decide.innerHTML += ` <br><button class="b" onclick="decidenewgame()">Continue</button>`
        }
    }
}


function decidenewgame(){

    bidsdiv.innerHTML = ``

    bidcount++
    if(bidcount == BIDLIST.length){
        bidcount = 0
        preGame()
    }
    else{
        amount = owedfunds = 0
        thebettype = BIDLIST[bidcount]

        if(thebettype == "bonus" && game == "letitride") lecurrentbid = [1]
        else if(thebettype.endsWith(" bonus") || thebettype.endsWith(" up") || thebettype == "tie") lecurrentbid = anteplaylite[Math.floor(anteplaylite.length * Math.random())]
        else if(!    ((thebettype.includes("#2") || (game == "dakota" && thebettype != "big 8"))       )) lecurrentbid = anteplay[Math.floor(anteplay.length * Math.random())]
        
        Array.from(hint.children).map(x => x.style.display = "none")
        hintblock = ["second ante", "3rd street", "4th street", "5th street", "2nd ante", "3rd ante", "first draw", "second draw"].includes(thebettype) ? "ante" : thebettype.replace(/ /g, "")
        if(game == "texasbonus" && thebettype != "bonus") hintblock = "flopturnriver"
        document.getElementById((game == "crapless" ? "craps" : game) + "_" + hintblock).style.display = "block"

        chips.style.display = "none"
        decide.innerHTML = ``
        decide.innerHTML += `The player's <span id='typeofbet'>${thebettype}</span> bet is a <br>`
        decide.innerHTML += `<button class="b" onclick="claimDecide('win')">WIN</button>`
        if(!["sicbo", "knockout"].includes(game)) decide.innerHTML += `<button class="b" onclick="claimDecide('push')">PUSH</button>`
        decide.innerHTML += `<button class="b" onclick="claimDecide('loss')">LOSS</button><br><p style="padding: 0px; margin: 3px; font-size:18px">Click the answer to continue</p>`
    }
}

function menuize(gg){
    menu.style.display = "none"
    everything.style.display = "block"
    thegame.value = gg
    preGame()
}

function preGame(){
    possibilities = []
    bidcount = 0
    bidsdiv.innerHTML = ""


    //
    
    amount = owedfunds = 0
    chips.style.display = "none"
    if(game == "doubledraw"){
        shuffleddeck = Array.from(doublejokerfrenchdeck)
    }
    else if(game == "djwild"){
        shuffleddeck = Array.from(singlejokerfrenchdeck)
    }
    else{
        shuffleddeck = Array.from(frenchdeck)
    }


    shuffleddeck = shuffleArray(shuffleddeck)

    playercards.innerHTML = dealercards.innerHTML = playercards2.innerHTML = middlecards.innerHTML = knockoutcards.innerHTML = ""
    Array.from(hint.children).map(x => x.style.display = "none")
    game = thegame.value
    playerhand = dealerhand = playerhand2 = middlehand = ""
    if(game.includes("blackjack")){
        playerhand += shuffleddeck.pop()
        playerhand += shuffleddeck.pop()

        if(game.includes("freebet") && [9,10,11].includes(analyzeThisHand(playerhand, "blackjack"))){
            playerhand += shuffleddeck.pop()
            playerhand += "🟡"
        }                
        else{
            while(("" + analyzeThisHand(playerhand, "blackjack")).split("/")[0] < 17){
                playerhand += shuffleddeck.pop()
            }
        }
    
        //

        playerhand2 += shuffleddeck.pop()
        playerhand2 += shuffleddeck.pop()

        while(("" + analyzeThisHand(playerhand2, "blackjack")).split("/")[0] < 17){
            playerhand2 += shuffleddeck.pop()
        }

        blackjack_task.style.display = "block"
        dealerhand += shuffleddeck.pop()
        dealerhand += shuffleddeck.pop()
        dealercards.innerHTML = `<ruby><a>${cardcolor(dealerhand)}</a><rt>Dealer's hand</rt></ruby>`
        playercards.innerHTML = `<ruby><a>${cardcolor(playerhand)}</a><rt>Player's hand</rt></ruby>`
        peoplenumber = 1
        if(game == "blackjack-switch") peoplenumber = 2
        else if(game.startsWith("blackjack")){
            peoplenumber = (analyzeThisHand(Array.from(playerhand)[0], "blackjack") == analyzeThisHand(Array.from(playerhand2)[0], "blackjack") && analyzeThisHand(Array.from(playerhand)[0], "blackjack") != 10) ? 2 : 1
        }
        playercards2.innerHTML = `<ruby><a>${cardcolor(playerhand2)}</a><rt>Player's 2nd hand</rt></ruby>`
        playercards2.style.display = peoplenumber >= 2 ? "block" : "none"


        decide.innerHTML = `<button id="hitbutton" class="b" onclick="pregametask('hit')">Hit</button><button id="standbutton" class="b" onclick="pregametask('stand')">Stand</button>`
    }
    else if(game.includes("baccarat")){
        baccarat_task.style.display = "block"
        dealerhand += shuffleddeck.pop()
        dealerhand += shuffleddeck.pop()
        playerhand += shuffleddeck.pop()
        playerhand += shuffleddeck.pop()
        playercards.innerHTML = `<ruby><a>${cardcolor(playerhand)}</a><rt>Player</rt></ruby> <ruby><a>${cardcolor(dealerhand)}</a><rt>Banker</rt></ruby>`
        decide.innerHTML = `<button id="payoutbutton" class="b" onclick="pregametask('payout')">Pay Out</button><button id="playerbutton" class="b" onclick="pregametask('player')">Draw Player</button><button id="bankerbutton" class="b" onclick="pregametask('banker')">Draw Banker</button>`
    }
    else if(game == "paigowpoker"){
        paigowpoker_task.style.display = "block"
        dealerhand += shuffleddeck.pop()
        dealerhand += shuffleddeck.pop()
        dealerhand += shuffleddeck.pop()
        dealerhand += shuffleddeck.pop()
        dealerhand += shuffleddeck.pop()
        dealerhand += shuffleddeck.pop()
        dealerhand += shuffleddeck.pop()
        paigowsmall = paiGowPokerHouseWay(dealerhand, lehouseway.value)
        console.log(paigowsmall)
        thosecards = Array.from(dealerhand).map(x => cardname[x])
        dealercards.innerHTML = `<ruby><a>${cardcolor(dealerhand)}</a><rt>Dealer's hand</rt></ruby>`
        decide.innerHTML = `Make your small hand according to the <a style="color:white" href="https://wizardofodds.com/games/pai-gow-poker/#the-house-way" target="_blank">House Rules</a><br>`
        decide.innerHTML += Array.from(thosecards).map(x => `<button id="${x}" class="b" onclick="pregametask('${x}')">${x == "WW" ? "🃏" : x[0] + {"C": "♣️", "D": "♦️", "H": "♥️", "S": "♠️"}[x[1]]}</button>`).join("")
    }
    else if(game == "fivepaigow"){
        fivepaigow_task.style.display = "block"
        dealerhand += shuffleddeck.pop()
        dealerhand += shuffleddeck.pop()
        dealerhand += shuffleddeck.pop()
        dealerhand += shuffleddeck.pop()
        dealerhand += shuffleddeck.pop()

        possibilities = []

        for(x = 0; x < 5; x++){
            for(y = x + 1; y < 5; y++){
                first = Array.from(dealerhand)[x]
                second = Array.from(dealerhand)[y]
                rest = dealerhand.replace(first, "").replace(second, "")
                possibilities.push([first + second, rest, pokercomparehands(analyzeThisHand(first + second, "threecardpoker"), analyzeThisHand(rest, "threecardpoker"), "three")])
            }
        }
        possibilities = possibilities.filter(x=> x[2] == "loss")
        possibilities = possibilities.sort((a, b) =>  {
            y = [pokercomparehands(analyzeThisHand(a[0], "threecardpoker"), analyzeThisHand(b[0], "threecardpoker"), "three")]
            return {win: -1, loss: 1, tie: 0}[y]
        })
        console.log(possibilities)
        firstpossibility = possibilities[0]
        possibilities = possibilities.filter(x => pokercomparehands(analyzeThisHand(x[0], "threecardpoker"), analyzeThisHand(firstpossibility[0], "threecardpoker"), "three") == "tie")
        console.log(possibilities)
        possibilities = possibilities.map(x => [cardname[Array.from(x[0])[0]], cardname[Array.from(x[0])[1]]])
        console.log(possibilities)
        thosecards = Array.from(dealerhand).map(x => cardname[x])
        dealercards.innerHTML = `<ruby><a>${cardcolor(dealerhand)}</a><rt>Dealer's hand</rt></ruby>`
        decide.innerHTML = Array.from(thosecards).map(x => `<button id="${x}" class="b" onclick="pregametask('${x}')">${x == "WW" ? "🃏" : x[0] + {"C": "♣️", "D": "♦️", "H": "♥️", "S": "♠️"}[x[1]]}</button>`).join("")
    }
    else{
        newGame()
    }
}

function pregametask(task){
    if(game.includes("blackjack")){
        shouldstand = ("" + analyzeThisHand(dealerhand, "blackjack")).split("/")[0] >= 17
        if(task == "stand"){
            if(shouldstand) newGame()
            else{
                standbutton.style.backgroundColor = "red"
                setTimeout(() => { standbutton.style.backgroundColor = "white" }, 500);
            }
        }
        else if(task == "hit"){
            if(!shouldstand){
                dealerhand += shuffleddeck.pop()
                dealercards.innerHTML = `<ruby><a>${cardcolor(dealerhand)}</a><rt>Dealer's hand</rt></ruby>`
            }
            else{
                hitbutton.style.backgroundColor = "red"
                setTimeout(() => { hitbutton.style.backgroundColor = "white" }, 500)
            }
        }
    }
    else if(game.includes("baccarat")){
        aph = analyzeThisHand(playerhand, "baccarat")
        adh = analyzeThisHand(dealerhand, "baccarat")
        if((aph > 7 || adh > 7) && playerhand.length == 4) baccanswer = "payout"
        else if(aph <= 5 && playerhand.length == 4) baccanswer = "player"
        else if(playerhand.length == 6 && dealerhand.length == 4){
                ptc = analyzeThisHand(Array.from(playerhand)[2], "baccarat")
                if(adh < 3) baccanswer = "banker"
                else if(adh == 3 && ptc != 8) baccanswer = "banker"
                else if(adh == 4 && [2,3,4,5,6,7].includes(ptc)) baccanswer = "banker"
                else if(adh == 5 && [4,5,6,7].includes(ptc)) baccanswer = "banker"
                else if(adh == 6 && [6,7].includes(ptc)) baccanswer = "banker"
                else baccanswer = "payout"
        }
        else if(playerhand.length == 4 && dealerhand.length == 4){
            if(adh <= 5){
                baccanswer = "banker"
            }
        }
        else{
            baccanswer = "payout"
        }
        if(task == "payout"){
            if(baccanswer == "payout") newGame()
            else{
                payoutbutton.style.backgroundColor = "red"
                setTimeout(() => { payoutbutton.style.backgroundColor = "white" }, 500)
            }
        }
        else if(task == "player"){
            if(baccanswer == "player"){
                playerhand += shuffleddeck.pop()
                playercards.innerHTML = `<ruby><a>${cardcolor(playerhand)}</a><rt>Player</rt></ruby> <ruby><a>${cardcolor(dealerhand)}</a><rt>Banker</rt></ruby>`
            }
            else{
                playerbutton.style.backgroundColor = "red"
                setTimeout(() => { playerbutton.style.backgroundColor = "white" }, 500)
            }
        }
        else if(task == "banker"){
            if(baccanswer == "banker"){
                dealerhand += shuffleddeck.pop()
                playercards.innerHTML = `<ruby><a>${cardcolor(playerhand)}</a><rt>Player</rt></ruby> <ruby><a>${cardcolor(dealerhand)}</a><rt>Banker</rt></ruby>`
            }
            else{
                bankerbutton.style.backgroundColor = "red"
                setTimeout(() => { bankerbutton.style.backgroundColor = "white" }, 500)
            }
        }
    }
    else if(game == "paigowpoker"){
        if(paigowsmall.length == 2){
            if(paigowsmall[0].length == 2 && task == paigowsmall[0]){
                paigowsmall = [paigowsmall[1]]
                document.getElementById(task).style.display = "none"
            }
            else if(paigowsmall[0].length == 1 && task[0] == paigowsmall[0][0]){
                paigowsmall = [paigowsmall[1]]
                document.getElementById(task).style.display = "none"
            }
            else if(paigowsmall[1].length == 2 && task == paigowsmall[1]){
                paigowsmall = [paigowsmall[0]]
                document.getElementById(task).style.display = "none"
            }
            else if(paigowsmall[1].length == 1 && task[0] == paigowsmall[1][0]){
                paigowsmall = [paigowsmall[0]]
                document.getElementById(task).style.display = "none"
            }
            else{
                document.getElementById(task).style.backgroundColor = "red"
                setTimeout(() => { document.getElementById(task).style.backgroundColor = "white" }, 500);
                //failure
            }
        }
        else{
            if(paigowsmall[0].length == 2 && task == paigowsmall[0]){
                document.getElementById(task).style.display = "none"
                decide.innerHTML = "Well done!"
                setTimeout(preGame, 1200)
            }
            else if(paigowsmall[0].length == 1 && task[0] == paigowsmall[0][0]){
                document.getElementById(task).style.display = "none"
                decide.innerHTML = "Well done!"
                setTimeout(preGame, 1200)
            }
            else{
                document.getElementById(task).style.backgroundColor = "red"
                setTimeout(() => { if(document.getElementById(task)) document.getElementById(task).style.backgroundColor = "white" }, 500);
                //failure
            }
        }
        //paigowsmall
    }
    else if(game == "fivepaigow"){
        if(possibilities[0].length == 2 && possibilities.map(x => x.join("")).join("").includes(task)){
            document.getElementById(task).style.display = "none"
            possibilities = possibilities.filter(x => x.includes(task)).map(x => x.join("").replace(task, "").split(","))
        }
        else if(possibilities[0].length == 1 && possibilities.map(x => x.join("")).join("").includes(task)){
            if(possibilities.map(x=>x.join("")).join("").includes(task)){
                document.getElementById(task).style.display = "none"
                decide.innerHTML = "Well done!"
                setTimeout(preGame, 1200)
            }
        }
        else{
            document.getElementById(task).style.backgroundColor = "red"
            setTimeout(() => { document.getElementById(task).style.backgroundColor = "white" }, 500);
            //failure
        }
    }
}

function newGame(){

    if(game == "threecardpoker"){
        playerhand += shuffleddeck.pop()
        playerhand += shuffleddeck.pop()
        playerhand += shuffleddeck.pop()

        dealerhand += shuffleddeck.pop()
        dealerhand += shuffleddeck.pop()
        dealerhand += shuffleddeck.pop()
    }
    else if(game == "knockout"){
        do {
            knockoutcards.innerHTML += `${cardcolor(shuffleddeck.pop())}`
            if(knockoutcards.textContent.length % 26 == 0) knockoutcards.innerHTML += "<br style='line-height: 50%'>"
        } while (knockoutcards.textContent.length < 104 && cardname[knockoutcards.textContent.slice(-2)][0] != "A23456789TQK"[((knockoutcards.textContent.length / 2) - 1) % 13])
        knockoutcards.innerHTML += `<br style="line-height: 150%;">`
    }
    else if(game == "mississippi"){
        playerhand += shuffleddeck.pop()
        playerhand += shuffleddeck.pop()

        dealerhand += shuffleddeck.pop()
        dealerhand += shuffleddeck.pop()
        dealerhand += shuffleddeck.pop()
    }
    else if(game == "letitride"){
        playerhand += shuffleddeck.pop()
        playerhand += shuffleddeck.pop()
        playerhand += shuffleddeck.pop()

        dealerhand += shuffleddeck.pop()
        dealerhand += shuffleddeck.pop()
    }
    else if(game == "doubledraw"){
        playerhand += shuffleddeck.pop()
        playerhand += shuffleddeck.pop()
        playerhand += shuffleddeck.pop()
        playerhand += shuffleddeck.pop()
        playerhand += shuffleddeck.pop()
    }
    else if(game == "fourcardpoker"){
        playerhand += shuffleddeck.pop()
        playerhand += shuffleddeck.pop()
        playerhand += shuffleddeck.pop()
        playerhand += shuffleddeck.pop()
        playerhand += shuffleddeck.pop()

        dealerhand += shuffleddeck.pop()
        dealerhand += shuffleddeck.pop()
        dealerhand += shuffleddeck.pop()
        dealerhand += shuffleddeck.pop()
        dealerhand += shuffleddeck.pop()
        dealerhand += shuffleddeck.pop()
    }
    else if(game == "crazy4poker" || game == "caribbean"){
        playerhand += shuffleddeck.pop()
        playerhand += shuffleddeck.pop()
        playerhand += shuffleddeck.pop()
        playerhand += shuffleddeck.pop()
        playerhand += shuffleddeck.pop()

        dealerhand += shuffleddeck.pop()
        dealerhand += shuffleddeck.pop()
        dealerhand += shuffleddeck.pop()
        dealerhand += shuffleddeck.pop()
        dealerhand += shuffleddeck.pop()
    }
    else if(game == "texas" || game == "headsup" || game == "djwild" || game == "texasbonus" || game == "jackpot"){
        playerhand += shuffleddeck.pop()
        playerhand += shuffleddeck.pop()

        middlehand += shuffleddeck.pop()
        middlehand += shuffleddeck.pop()
        middlehand += shuffleddeck.pop()
        middlehand += shuffleddeck.pop()
        middlehand += shuffleddeck.pop()

        dealerhand += shuffleddeck.pop()
        dealerhand += shuffleddeck.pop()
    }
    else if(game == "crisscrosspoker"){
        playerhand += shuffleddeck.pop()
        playerhand += shuffleddeck.pop()

        middlehand += shuffleddeck.pop()
        middlehand += shuffleddeck.pop()
        middlehand += shuffleddeck.pop()
        middlehand += shuffleddeck.pop()
        middlehand += shuffleddeck.pop()
    }
    else if(game == "dakota"){
        playerhand += shuffleddeck.pop()
        playerhand += shuffleddeck.pop()

        middlehand += shuffleddeck.pop()
        middlehand += shuffleddeck.pop()
        middlehand += shuffleddeck.pop()
        
        dealerhand += shuffleddeck.pop()
        dealerhand += shuffleddeck.pop()
        dealerhand += shuffleddeck.pop()
    }
    else if(game == "war"){
        playerhand += shuffleddeck.pop()
        dealerhand += shuffleddeck.pop()
        if(cardname[playerhand][0] == cardname[dealerhand][0]){
            dealerhand += "🂠🂠🂠"
            playerhand += shuffleddeck.pop()
            dealerhand += shuffleddeck.pop()
        }
    }
    else if(game.includes("baccarat")){
        //lets do nothing for now lol
    }
    else if(game.startsWith("blackjack")){

        /*if(game.includes("freebet")){
            playerhand2 += "🟡"
            if(Math.random() > .9) playerhand2 += "🟡"
        }*/
    }
    else if(game == "craps" || game == "crapless"){
        diceresult = dice[Math.floor(Math.random() * 6)] + dice[Math.floor(Math.random() * 6)]
    }
    else if(game == "sicbo"){
        diceresult = dice[Math.floor(Math.random() * 6)] + dice[Math.floor(Math.random() * 6)] + dice[Math.floor(Math.random() * 6)]
    }

    bidstomake = {
        threecardpoker: ["ante", "play", "bonus", "pairplus", "six card bonus"],
        mississippi: ["ante", "3rd street", "4th street", "5th street", "three card bonus"],
        letitride: ["ante", "2nd ante", "3rd ante", "three card bonus", "bonus"],
        texas: ["ante", "play", "blind", "trips"],
        texasbonus: ["ante", "flop/turn/river", "bonus"],
        jackpot: ["ante", "play", "extra bonus", "player bonus"],
        crisscrosspoker: ["across ante", "down ante", "across play", "down play", "middle play", "five card bonus"],
        dakota: ["play 1", "play 2", "bonus", "big 8"],
        headsup: ["ante", "play", "odds", "trips"],
        djwild: ["ante", "play", "blind", "trips"],
        blackjack: ["ante", "lucky 11s", "suited lucky 11s"],
        doubledraw: ["ante", "first draw", "second draw", "bonus"],
        fourcardpoker: ["ante", "play", "bonus", "aces up"],
        crazy4poker: ["ante", "play", "super bonus", "queens up"],
        caribbean: ["ante", "raise"],
        "blackjack-switch": ["ante"],
        "blackjack-freebet": ["ante"],
        "blackjack-zappit": ["ante"],
        "blackjack-double": ["ante"],
        "blackjack-down": ["ante"],
       // "blackjack-zombie": ["ante"],
        war: ["ante", "tie"],
        craps: ["pass", "field", "any seven", "any craps"],
        crapless: ["pass", "field", "any seven", "any craps"],
        baccarat: ["Player", "Banker", "tie"],
        ezbaccarat: ["Player", "Banker", "tie"],
        nepalbaccarat: ["Player", "Banker", "tie"],
        bbqbaccarat: ["Player", "Banker", "tie", "any bbq", "big dealer bbq", "small dealer bbq", "big player bbq", "small player bbq"],
        sicbo: ["big", "small"],
        paigowpoker: ["ante"],
        knockout: []
    }


    BIDLIST = []
    for(bdm of bidstomake[game]){
        if(bdm == "bonus" && (game.endsWith("cardpoker") || (game == "dakota"))){
            if(comparehands("bonus") > 0) BIDLIST.push(bdm)
        }
        else BIDLIST.push(bdm)
    }


    if(peoplenumber >= 2){
        BIDLIST.shift()
        for(ants = peoplenumber; ants > 0; ants--){
            BIDLIST.unshift(["first", "second"][ants - 1] + " ante")
        }
    }


    if(game == "craps" || game == "crapless"){
        BIDLIST.push(["eleven", "twelve", "two", "three", "horn"][Math.floor(Math.random() * 5)])
    }
    else if(game == "knockout"){
        BIDLIST.push(["round 1", "round 2", "round 3"][Math.floor(Math.random() * 3)])
        BIDLIST.push(["round 4", "all the way"][Math.floor(Math.random() * 2)])
        BIDLIST.push(["black", "red"][Math.floor(Math.random() * 2)])
    }
    
    thebettype = BIDLIST[0]

    document.getElementById((game == "crapless" ? "craps" : game) + "_" + thebettype.replace("first ante", "ante").replace(/ /g, "")).style.display = "block"
    decide.innerHTML = ``
    decide.innerHTML += `The player's <span id='typeofbet'>${thebettype}</span> bet is a <br>`
    decide.innerHTML += `<button class="b" onclick="claimDecide('win')">WIN</button>`
    if(!["sicbo"].includes(game)) decide.innerHTML += `<button class="b" onclick="claimDecide('push')">PUSH</button>`
    decide.innerHTML += `<button class="b" onclick="claimDecide('loss')">LOSS</button><p style="padding: 0px; margin: 2px; font-size:18px">Click the answer to continue</p>`
    if(!["craps", "sicbo", "crapless", "knockout"].includes(game) && !game.includes("baccarat") && !game.includes("blackjack")){
        playercards.innerHTML = `<ruby><a>${cardcolor(playerhand)}</a><rt>Player's <span id="firsthand"></span> hand</rt></ruby>`
        firsthand.textContent = peoplenumber >= 2 ? "1st" : ""
    }
    //if(peoplenumber >= 2) playercards2.innerHTML = `<ruby><a>${cardcolor(playerhand2)}</a><rt>Player's 2nd hand</rt></ruby>`
    
    if(game == "crisscrosspoker") middlecards.innerHTML = "<ruby><a>" + cardcolor("🂠") + cardcolor(Array.from(middlehand)[0])  + cardcolor("🂠") + "<br>" + cardcolor(Array.from(middlehand).slice(1, 4).join("")) + "<br>" + cardcolor("🂠") + cardcolor(Array.from(middlehand)[4]) + cardcolor("🂠") + "</a><rt>Community Cards</rt></ruby>"
    else if(["sicbo"].includes(game)) middlecards.innerHTML = diceresult
    else if(game == "dakota") middlecards.innerHTML = "<ruby><a>" + cardcolor(middlehand) + "</a><rt>1st Community Cards</rt></ruby>"
    else if(["craps"].includes(game)){
        thepoint = [0,0,4,5,6,8,9,10][Math.floor(Math.random() * 8)]
        thepointtext = thepoint > 0 ? ("The point is <b>" + thepoint + "</b>") : "No point has been established"
        middlecards.innerHTML = "<ruby>" + diceresult + "<rt>" + thepointtext + "</rt></ruby>"
    }
    else if(["crapless"].includes(game)){
        thepoint = [0,0,0,2,3,4,5,6,8,9,10,11,12][Math.floor(Math.random() * 13)]
        thepointtext = thepoint > 0 ? ("The point is <b>" + thepoint + "</b>") : "No point has been established"
        middlecards.innerHTML = "<ruby>" + diceresult + "<rt>" + thepointtext + "</rt></ruby>"
    }
    else middlecards.innerHTML = middlehand == "" ? "" : "<ruby><a>" + cardcolor(middlehand) + "</a><rt>Community Cards</rt></ruby>"
    
    if(!["doubledraw", "crisscrosspoker", "craps", "sicbo", "crapless", "knockout", "dakota"].includes(game) && !game.includes("baccarat") && !game.includes("blackjack")) dealercards.innerHTML = `<ruby><a>${cardcolor(dealerhand)}</a><rt>Dealer's hand</rt></ruby>`
    if(game == "dakota") dealercards.innerHTML = "<ruby><a>" + cardcolor(dealerhand) + "</a><rt>2nd Community Cards</rt></ruby>"


    lecurrentbid = anteplay[Math.floor(anteplay.length * Math.random())]

    repeatnum = 1
    if(game == "war" && dealerhand.includes("🂠")){
        repeatnum = 2                
    }
    else if(game == "texas") repeatnum = [1,2,4][Math.floor(Math.random() * 3)]
    else if(game == "caribbean") repeatnum = 2
    else if(game == "headsup" || game == "jackpot") repeatnum = [1,2,3][Math.floor(Math.random() * 3)]
    lenewbid = []
    for(x of lecurrentbid){
        for(xx = 0; xx < repeatnum; xx++){
            lenewbid.push(x)
        }
    }
    lecurrentbid = lenewbid

    //bidsdiv.innerHTML = `<div class="chiplist">${lecurrentbid.map(ap => `<button class="smallchip chip_${ap}">$${("" + ap).replace("000", "k")}</button>`).join("")}</div>`
}


redcard = "🂲🂳🂴🂵🂶🂷🂸🂹🂺🂻🂽🂾🂱🃂🃃🃄🃅🃆🃇🃈🃉🃊🃋🃍🃎🃁"

function cardcolor(text){
    return Array.from(text).map(x => `<div class="acard" style="color:${redcard.includes(x) ? "#f57738" : "black"}" >${x}</div>`).join("")
}


function paiGowPokerHouseWay(cards, way){

    //ways are "santafe" and "minnesota"

    //from what i can tell the only differences are that minnesota has exceptions for when you have two "three of a kind" and when you have a four of a kind plus a pair/three

    straights = [
        "65432", 
        "76543", 
        "87654", 
        "98765", 
        "T9876", 
        "JT987", 
        "QJT98", 
        "KQJT9", 
        "5432A",
        "AKQJT",
    ]
    brokenstraights = [
        "6543", "6542", "6532", "6432", 
        "7654", "7653", "7643", "7543",
        "8765", "8764", "8754", "8654",
        "9876", "9875", "9865", "9765",
        "T987", "T986", "T976", "T876", 
        "JT98", "JT97", "JT87", "J987", 
        "QJT9", "QJT8", "QJ98", "QT98", 
        "KQJT", "KQJ9", "KQT9", "KJT9", 
        "5432", "543A", "542A", "532A", "432A",
        "AKQJ", "AKQT", "AKJT", "AQJT",
    ]
    handinfo = {
        ones: "",
        pairs: "",
        threes: "",
        fours: "",
        fives: "",
        hearts: "",
        diamonds: "",
        clubs: "",
        spades: "",
        wilds: "",
    }
    mycards = Array.from(cards).map(x => cardname[x]).sort((a, b) => jokercardorder.indexOf(b[0]) - jokercardorder.indexOf(a[0]))
    for(cin of mycards){
        if(cin[0] == "W"){
            //handinfo.ones += "W"
            handinfo.ones += "A"
            handinfo.wilds += "W"
        }
        else{
            if(!handinfo.ones.includes(cin[0])){
                handinfo.ones += cin[0]
            }
            else if(!handinfo.pairs.includes(cin[0])){
                handinfo.pairs += cin[0]
            }
            else if(!handinfo.threes.includes(cin[0])){
                handinfo.threes += cin[0]
            }
            else if(!handinfo.fours.includes(cin[0])){
                handinfo.fours += cin[0]
            }
            else if(!handinfo.fives.includes(cin[0])){
                handinfo.fives += cin[0]
            }

            if("H".includes(cin[1])) handinfo.hearts += cin[0]
            else if("S".includes(cin[1])) handinfo.spades += cin[0]
            else if("C".includes(cin[1])) handinfo.clubs += cin[0]
            else if("D".includes(cin[1])) handinfo.diamonds += cin[0]
        }
    }
    if(handinfo.fives == "A") return ["A", "A"] //SECTION: FIVE ACES
    else if(handinfo.fours.length == 1 && handinfo.pairs.length > 1 && way == "minnesota"){ //SECTION: FOUR OF A KIND + PAIR/THREE
        return [handinfo.pairs.replace(handinfo.fours, ""), handinfo.pairs.replace(handinfo.fours, "")]
    }
    else if(handinfo.fours.length == 1){ //SECTION: FOUR OF A KIND
        if("JQKA".includes(handinfo.fours)) return [handinfo.fours, handinfo.fours]
        else if("23456".includes(handinfo.fours)) return (handinfo.singles.includes("A") && (handinfo.singles.includes("K") || (handinfo.singles.includes("Q") || handinfo.singles.includes("J")))) ? [handinfo.fours, handinfo.fours] : [handinfo.singles.replace(handinfo.fours, "")[0], handinfo.singles.replace(handinfo.fours, "")[1]]
        else{
            return (handinfo.ones.includes("A") || handinfo.ones.includes("K")) ? [handinfo.fours, handinfo.fours] : [handinfo.singles.replace(handinfo.fours, "")[0], handinfo.singles.replace(handinfo.fours, "")[1]]
        }
    }
    else if(handinfo.threes.length == 1 && handinfo.pairs.length > 1) return [handinfo.pairs.replace(handinfo.threes, ""), handinfo.pairs.replace(handinfo.threes, "")] //SECTION: FULL HOUSE
    else if(handinfo.pairs.length > 2) return [handinfo.pairs[0], handinfo.pairs[0]] //SECTION: THREE PAIR
    else if(handinfo.pairs.length == 2){ //SECTION: TWO PAIR
        categor = {"2": "L", "3": "L", "4": "L", 5: "L", 6: "M", 7: "M", 8: "M", 9: "M", T: "H", J: "H", "Q": "H", "K": "H", "A": "A"}
        categor = categor[handinfo.pairs[0]] + categor[handinfo.pairs[1]]
        leftovers = handinfo.ones.replace(handinfo.pairs[0], "").replace(handinfo.pairs[1], "")
        if(categor.startsWith("A")) return [handinfo.pairs[1], handinfo.pairs[1]]
        else if(["HH", "HM"].includes(categor)) return [handinfo.pairs[1], handinfo.pairs[1]]
        else if(["LL", "LM"].includes(categor) && !"AK".includes(leftovers[0])) return [handinfo.pairs[1], handinfo.pairs[1]]
        else if(["LH", "MM"].includes(categor) && ("A" != leftovers[0] && !"KQJ".includes(leftovers[1]))) return [handinfo.pairs[1], handinfo.pairs[1]]
        else return [(handinfo.wilds == "W" && !handinfo.pairs.includes("A") && leftovers.startsWith("A")) ? "W" : leftovers[0], leftovers[1]]
    }
    else if(handinfo.wilds == "W" && handinfo.spades.length == 4){ //SECTION: FLUSHES AND STRAIGHTS
        return mycards.filter(x => !"WS".includes(x[1]))
    }
    else if(handinfo.wilds == "W" && handinfo.hearts.length == 4){
        return mycards.filter(x => !"WH".includes(x[1]))
    }
    else if(handinfo.wilds == "W" && handinfo.clubs.length == 4){
        return mycards.filter(x => !"WC".includes(x[1]))
    }
    else if(handinfo.wilds == "W" && handinfo.diamonds.length == 4){
        return mycards.filter(x => !"WD".includes(x[1]))
    }
    else if(handinfo.spades.length >= 5){
        return mycards.filter(x => (!handinfo.spades.slice(handinfo.spades.length - 5, handinfo.spades.length).includes(x[0])))
    }
    else if(handinfo.hearts.length >= 5){
        return mycards.filter(x => (!handinfo.hearts.slice(handinfo.hearts.length - 5, handinfo.hearts.length).includes(x[0])))
    }
    else if(handinfo.clubs.length >= 5){
        return mycards.filter(x => (!handinfo.clubs.slice(handinfo.clubs.length - 5, handinfo.clubs.length).includes(x[0])))
    }
    else if(handinfo.diamonds.length >= 5){
        return mycards.filter(x => (!handinfo.diamonds.slice(handinfo.diamonds.length - 5, handinfo.diamonds.length).includes(x[0])))
    }
    else if(brokenstraights.filter(x => handinfo.ones.includes(x)).length > 0 && handinfo.wilds == "W"){
        thebrokenstraight = brokenstraights.filter(x => handinfo.ones.includes(x))[0]
        myones = mycards.map(x => x[0]).join("")
        for(the of thebrokenstraight) myones = myones.replace(the, "")
        return myones.replace("W", "").split("")
    }
    else if(straights.filter(x => handinfo.ones.includes(x)).length > 0){
        thestraight = straights.filter(x => handinfo.ones.includes(x))
        myones = mycards.map(x => x[0]).join("")
        for(the of thestraight) myones = myones.replace(the, "")
        return myones.split("")
    }
    else if(handinfo.threes.length == 2 && way == "minnesota") return [handinfo.threes[0], handinfo.threes[0]] //SECTION: TWO THREES
    else if(handinfo.threes.length >= 1){ //SECTION: THREE OF A KIND
        if(handinfo.threes == "A") LL = ["A", handinfo.ones.replace("A", "")[0]]
        else return [handinfo.ones.replace(handinfo.threes, "")[0], handinfo.ones.replace(handinfo.threes, "")[1]]
    }
    else if(handinfo.pairs.length == 1){ //SECTION: PAIR
        return [handinfo.ones.replace(handinfo.pairs[0], "")[0], handinfo.ones.replace(handinfo.pairs[0], "")[1]]
    }
    else return [handinfo.ones[1], handinfo.ones[2]] //SECTION: NOTHING
}


function analyzeThisHand(it, classification){
    if(classification == "threecardpoker" || classification == "triplemystery"){
        // 5 straight flush, 4 three of a kind, 3 straight, 2 flush, 1 pair, 0 nothing
        if(typeof it == "object") trescards = it
        else trescards = Array.from(it).map(x => cardname[x]).sort((a, b) => cardorder.indexOf(b[0]) - cardorder.indexOf(a[0]))
        if(trescards.length == 2) trescards.push("00")
        base = ""
        if((trescards[0][1] == trescards[1][1] && trescards[1][1] == trescards[2][1]) && "AKQ" == (trescards[0][0] + trescards[1][0] + trescards[2][0])){
            if(trescards[0][1] == "S") level = "spade royal flush"
            else level = "royal flush" //royalflush
            base = ""
        }
        else if((trescards[0][1] == trescards[1][1] && trescards[1][1] == trescards[2][1]) && threecardstraightorder.includes(trescards[0][0] + trescards[1][0] + trescards[2][0])){
            level = "straight flush" //straightflush
            base = trescards[1][0]
        }
        else if(trescards[0][0] == trescards[1][0] && trescards[1][0] == trescards[2][0]){
            level = "three of a kind" //3kind
            base = trescards[1][0]
        }
        else if(threecardstraightorder.includes(trescards[0][0] + trescards[1][0] + trescards[2][0])){
            level = "straight" //straight
            base = trescards[1][0]
        }
        else if(trescards[0][1] == trescards[1][1] && trescards[1][1] == trescards[2][1]){
            level = "flush" //flush
            base = ""
        }
        else if(trescards[0][0] == trescards[1][0] || trescards[1][0] == trescards[2][0]){
            level = "pair" //pair
            base = trescards[1][0]
        }
        else if(trescards[2][0] == trescards[0][0]){
            level = "pair" //pair
            base = trescards[0][0]
        }
        else{
            level = "nothing" //highcard
            base = ""
        }
        return [level, base, trescards[0][0] + trescards[1][0] + trescards[2][0]]
    }
    else if(classification == "fourcardpoker" || classification == "crazy4poker"){
        if(typeof it == "object") cuatro = it
        else cuatro = Array.from(it).map(x => cardname[x]).sort((a, b) => cardorder.indexOf(b[0]) - cardorder.indexOf(a[0]))
        straights = [
            "432A",
            "5432", 
            "6543", 
            "7654", 
            "8765", 
            "9876", 
            "T987", 
            "JT98", 
            "QJT9", 
            "KQJT",
            "AKQJ"
        ]
        handinfo = {
            ones: "",
            pairs: "",
            threes: "",
            fours: "",
            hearts: "",
            diamonds: "",
            clubs: "",
            spades: "",
        }

        for(cin of cuatro){
            if(!handinfo.ones.includes(cin[0])){
                handinfo.ones += cin[0]
            }
            else if(!handinfo.pairs.includes(cin[0])){
                handinfo.pairs += cin[0]
            }
            else if(!handinfo.threes.includes(cin[0])){
                handinfo.threes += cin[0]
            }
            else if(!handinfo.fours.includes(cin[0])){
                handinfo.fours += cin[0]
            }

            if(cin[1] == "H") handinfo.hearts += cin[0]
            else if(cin[1] == "S") handinfo.spades += cin[0]
            else if(cin[1] == "C") handinfo.clubs += cin[0]
            else if(cin[1] == "D") handinfo.diamonds += cin[0]
        }

        
        clength = handinfo.clubs.length
        hlength = handinfo.hearts.length
        dlength = handinfo.diamonds.length
        slength = handinfo.spades.length
        
        for(ff of ["clubs", "hearts", "diamonds", "spades", "ones"]) if(handinfo[ff].includes("A")) handinfo[ff] += "A"

        level = "nothing"
        base = ""
        kicker = handinfo.ones.slice(0, 5)
        if(handinfo.pairs.length == 1){
            if("A" == handinfo.pairs[0]){
                level = "ace-pair"
            }
            else if("K" == handinfo.pairs[0]){
                level = "king-pair"
            }
            else if("Q" == handinfo.pairs[0]){
                level = "queen-pair"
            }
            else{
                level = "below-queen-pair"
            }
            base = handinfo.pairs[0]
            kicker = handinfo.ones.replace(base, "").slice(0, 3)
        }
                        //
        if(handinfo.pairs.length >= 2){
            level = "two pair"
            base = handinfo.pairs.slice(0, 2)
            kicker = handinfo.ones.replace(base[0], "").replace(base[1], "")[0]
        }

        for(stra of straights){
            fivecount = 0
            for(fiveletters of stra.split("")){
                if(handinfo.ones.includes(fiveletters)) fivecount++
            }
            if(fivecount >= 4){
                level = "straight"
                base = stra
                kicker = ""
            }
        }


        if(clength >= 4 || dlength >= 4 || hlength >= 4 || slength >= 4){
            level = "flush"
            base = [handinfo.clubs.slice(0, 4), handinfo.diamonds.slice(0, 4), handinfo.hearts.slice(0, 4), handinfo.spades.slice(0, 4)].filter(x => x.length == 4)[0] //works if we have seven cards or less lol
            kicker = ""
        }

        if(handinfo.threes.length > 0){
            level = "three of a kind"
            base = handinfo.threes[0]
            kicker = handinfo.ones.replace(base, "").slice(0, 2)
        }
        for(stra of straights){
            for(st of ["clubs", "diamonds", "hearts", "spades"]){
                fivecount = 0
                for(fiveletters of stra.split("")){
                    if(handinfo[st].includes(fiveletters)) fivecount++
                }
                if(fivecount >= 4){
                    level = "straight flush"
                    base = stra
                    kicker = ""
                }
            }
        }
        if(handinfo.fours.length > 0){
            level = "four of a kind"
            base = handinfo.fours[0]
            if(base == "A") level = "four aces"
            kicker = handinfo.ones.replace(base, "")[0]
        }

        return [level, base, kicker]
            
    }
    else if(["mississippi", "texas", "doubledraw", "letitride", "headsup", "djwild", "crisscrosspoker", "jackpot", "caribbean", "texasbonus", "dakota"].includes(classification)){
        if(typeof it == "object") cincocards = it
        else cincocards = Array.from(it).map(x => cardname[x]).sort((a, b) => jokercardorder.indexOf(b[0]) - jokercardorder.indexOf(a[0]))

        straights = [
            "5432A",
            "65432", 
            "76543", 
            "87654", 
            "98765", 
            "T9876", 
            "JT987", 
            "QJT98", 
            "KQJT9", 
            "AKQJT",
        ]
        //
        handinfo = {
            ones: "",
            pairs: "",
            threes: "",
            threeswild: "",
            fours: "",
            fourswild: "",
            fives: "",
            hearts: "",
            diamonds: "",
            clubs: "",
            spades: "",
            wilds: "",
            nonspadeswild: "",
            nonclubswild: "",
            nondiamondswild: "",
            nonheartswild: "",
            nontwoswild: "",
        }

        //
        for(cin of cincocards){


            if(cin[0] == "W" && classification != "djwild"){
                if(!handinfo.ones.includes("A")){
                    handinfo.ones += "A"
                }
                else if(!handinfo.pairs.includes("A")){
                    handinfo.pairs += "A"
                }
                else if(!handinfo.threes.includes("A")){
                    handinfo.threes += "A"
                }
                else if(!handinfo.fours.includes("A")){
                    handinfo.fours += "A"
                }
                else if(!handinfo.fives.includes("A")){
                    handinfo.fives += "A"
                }
                handinfo.wilds += "W"
                handinfo.nonspadeswild += "?"
                handinfo.nonheartswild += "?"
                handinfo.nondiamondswild += "?"
                handinfo.nonclubswild += "?"
            }
            else if(classification == "djwild"){
                if(cin[0] == "W"){
                    handinfo.nontwoswild += "W"
                    handinfo.nonspadeswild += "?"
                    handinfo.nonheartswild += "?"
                    handinfo.nondiamondswild += "?"
                    handinfo.nonclubswild += "?"
                    handinfo.wilds += "W"
                }
                if(cin[0] == "2"){
                    if(cin[1] != "S") handinfo.nonspadeswild += "?"
                    if(cin[1] != "H") handinfo.nonheartswild += "?"
                    if(cin[1] != "D") handinfo.nondiamondswild += "?"
                    if(cin[1] != "C") handinfo.nonclubswild += "?"
                    handinfo.wilds += "2"
                }
            }
            
            if(cin[0] != "W"){
                if(!handinfo.ones.includes(cin[0])){
                    handinfo.ones += cin[0]
                }
                else if(!handinfo.pairs.includes(cin[0])){
                    handinfo.pairs += cin[0]
                }
                else if(!handinfo.threes.includes(cin[0])){
                    handinfo.threes += cin[0]
                }
                else if(!handinfo.fours.includes(cin[0])){
                    handinfo.fours += cin[0]
                }
                else if(!handinfo.fives.includes(cin[0])){
                    handinfo.fives += cin[0]
                }
            }

            if(cin[1] == "H") handinfo.hearts += cin[0]
            else if(cin[1] == "S") handinfo.spades += cin[0]
            else if(cin[1] == "C") handinfo.clubs += cin[0]
            else if(cin[1] == "D") handinfo.diamonds += cin[0]
        }
        clength = handinfo.clubs.length
        hlength = handinfo.hearts.length
        dlength = handinfo.diamonds.length
        slength = handinfo.spades.length
        for(ff of ["clubs", "hearts", "diamonds", "spades", "ones"]) if(handinfo[ff].includes("A")) handinfo[ff] += "A"

        //

        //

        
        level = "nothing"
        base = ""
        kicker = handinfo.ones.slice(0, 5)
        if(classification == "djwild" && handinfo.wilds.length > 0 && handinfo.pairs == "") handinfo.pairs = handinfo.ones[0]
        if(handinfo.pairs.length == 1){
            if("AKQJ".includes(handinfo.pairs[0])){
                level = "high-pair"
            }
            else if("T" == handinfo.pairs[0]){
                level = "ten-pair"
            }
            else if("9" == handinfo.pairs[0]){
                level = "nine-pair"
            }
            else if("678".includes(handinfo.pairs[0])){
                level = "mid-pair"
            }
            else{
                level = "low-pair"
            }
            base = handinfo.pairs[0]
            kicker = handinfo.ones.replace(base, "").slice(0, 3)
        }
                        //
        if(handinfo.pairs.length >= 2){
            level = "two pair"
            base = handinfo.pairs.slice(0, 2)
            kicker = handinfo.ones.replace(base[0], "").replace(base[1], "")[0]
        }
        if(handinfo.pairs.length > 0 && handinfo.pairs[0] != "2" && handinfo.wilds.length > 0){
            level = "wild three of a kind"
            base = handinfo.pairs[0]
            kicker = handinfo.ones.replace(base, "").slice(0, 2)
        }
        if(handinfo.ones[0] != "2" && handinfo.wilds.length && handinfo.wilds.length > 1){
            level = "wild three of a kind"
            base = handinfo.ones[0]
            kicker = handinfo.ones.replace(base, "").slice(0, 2)
        }
        if(handinfo.threes.length > 0){
            level = "three of a kind"
            base = handinfo.threes[0]
            kicker = handinfo.ones.replace(base, "").slice(0, 2)
        }

        for(stra of straights){
            fivecount = 0
            for(fiveletters of stra.split("")){
                if(handinfo.ones.includes(fiveletters)) fivecount++
            }
            if(classification == "djwild" && stra.includes("2")){
                fivecount += handinfo.nontwoswild.length
            }
            else fivecount += handinfo.wilds.length
            if(fivecount >= 5){
                level = "wild straight"
                if(classification != "djwild") level = "straight"
                base = stra
                kicker = ""
            }
        }
        for(stra of straights){
            fivecount = 0
            for(fiveletters of stra.split("")){
                if(handinfo.ones.includes(fiveletters)) fivecount++
            }
            if(fivecount >= 5){
                level = "straight"
                base = stra
                kicker = ""
            }
        }
        if((clength + handinfo.nonclubswild.length) >= 5 || (dlength  + handinfo.nondiamondswild.length) >= 5 || (hlength  + handinfo.nonheartswild.length) >= 5 || (slength  + handinfo.nonspadeswild.length) >= 5){
            level = "wild flush"
            base = [handinfo.nonclubswild + handinfo.clubs, handinfo.nondiamondswild + handinfo.diamonds, handinfo.nonheartswild + handinfo.hearts, handinfo.nonspadeswild + handinfo.spades].filter(x => x.length >= 5)[0] //works if we have nine cards or less lol (might be issue w high number of wilds idk)
            while(base.includes("?")){
                if(base.includes("A") && base.includes("K") && base.includes("Q") && base.includes("J")) base = base.replace("\?", "T")
                else if(base.includes("A") && base.includes("K") && base.includes("Q")) base = base.replace("\?", "J")
                else if(base.includes("A") && base.includes("K")) base = base.replace("\?", "Q")
                else if(base.includes("A")) base = base.replace("\?", "K")
                else base = base.replace(/\?/, "A")
            }
            if(base.endsWith("A")) base = base.slice(0, -1).split("").sort(function(a, b){return cardorder.indexOf(b) - cardorder.indexOf(a)}).join("")
            else base = base.split("").sort(function(a, b){return cardorder.indexOf(b) - cardorder.indexOf(a)}).join("")
            kicker = ""
        }
        if(clength >= 5 || dlength >= 5 || hlength >= 5 || slength >= 5){
            level = "flush"
            base = [handinfo.clubs.slice(0, 5), handinfo.diamonds.slice(0, 5), handinfo.hearts.slice(0, 5), handinfo.spades.slice(0, 5)].filter(x => x.length == 5)[0] //works if we have nine cards or less lol
            kicker = ""
        }
        if(handinfo.wilds.length > 0 && handinfo.pairs.length > 1){
            level = "wild full house"
            base = handinfo.pairs[0]
            base += handinfo.pairs.replace(base, "")[0]
            kicker = ""
        }
        if(handinfo.threes.length > 0 && handinfo.pairs.length > 1){
            level = "full house"
            base = handinfo.threes[0]
            base += handinfo.pairs.replace(base, "")[0]
            kicker = ""
        }
        if(handinfo.wilds.length > 0 && handinfo.threes.length > 0 && handinfo.threes[0] != "2"){
            level = "wild four of a kind"
            base = handinfo.threes[0]
            base += handinfo.ones.replace(base, "")[0]
            kicker = ""
        }
        if(handinfo.wilds.length > 1 && handinfo.pairs.length > 0 && handinfo.pairs[0] != "2"){
            level = "wild four of a kind"
            base = handinfo.pairs[0]
            base += handinfo.ones.replace(base, "")[0]
            kicker = ""
        }
        if(handinfo.fours.length > 0){
            level = "four of a kind"
            base = handinfo.fours[0]
            kicker = handinfo.ones.replace(base, "")[0]
        }
        for(stra of straights){
            for(st of ["clubs", "diamonds", "hearts", "spades"]){
                fivecount = 0
                for(fiveletters of stra.split("")){
                    if(handinfo[st].includes(fiveletters)) fivecount++
                }
                fivecount += handinfo.wilds.length
                if(fivecount >= 5){
                    level = "wild straight flush"
                    if(classification != "djwild") level = "straight flush"
                    base = stra
                    kicker = ""
                }
            }
        }
        for(stra of straights){
            for(st of ["clubs", "diamonds", "hearts", "spades"]){
                fivecount = 0
                for(fiveletters of stra.split("")){
                    if(handinfo[st].includes(fiveletters)) fivecount++
                }
                if(fivecount >= 5){
                    level = "straight flush"
                    base = stra
                    kicker = ""
                }
            }
        }
        if(classification == "djwild" && handinfo.wilds.length == 1 && handinfo.fours.length > 0 && handinfo.fours[0] != "2"){
            level = "five of a kind"
            base = handinfo.fours[0]
            kicker = ""
        }
        if(classification == "djwild" && handinfo.wilds.length == 2 && handinfo.threes.length > 0 && handinfo.threes[0] != "2"){
            level = "five of a kind"
            base = handinfo.threes[0]
            kicker = ""
        }
        if(classification == "djwild" && handinfo.wilds.length == 3 && handinfo.pairs.length > 0 && handinfo.pairs[0] != "2"){
            level = "five of a kind"
            base = handinfo.pairs[0]
            kicker = ""
        }
        if(classification == "djwild" && handinfo.wilds.length == 4 && handinfo.ones.length > 0 && handinfo.ones[0] != "2"){
            level = "five of a kind"
            base = handinfo.ones[0]
            kicker = ""
        }
        for(st of ["clubs", "diamonds", "hearts", "spades"]){
            if(
                (handinfo.wilds.length == 1 && ((handinfo[st].startsWith("AKQJ") || handinfo[st].startsWith("AQJT") || handinfo[st].startsWith("AKJT") || handinfo[st].startsWith("AKQT") || handinfo[st].startsWith("AKQJ")))) ||
                (handinfo.wilds.length == 2 && ((handinfo[st].startsWith("AKQ") || handinfo[st].startsWith("AKJ") || handinfo[st].startsWith("AKT") || handinfo[st].startsWith("AQJ") || handinfo[st].startsWith("AQT") || handinfo[st].startsWith("KQJ") || handinfo[st].startsWith("KQT") || handinfo[st].startsWith("KJT") || handinfo[st].startsWith("QJT") ))) ||
                (handinfo.wilds.length == 3 && ((handinfo[st].startsWith("AK")) || (handinfo[st].startsWith("AQ")) || (handinfo[st].startsWith("AJ")) || (handinfo[st].startsWith("AT")) || (handinfo[st].startsWith("KQ")) || (handinfo[st].startsWith("KJ")) || (handinfo[st].startsWith("KT")) || (handinfo[st].startsWith("QJ")) || (handinfo[st].startsWith("QT")) || (handinfo[st].startsWith("JT")))) ||
                (handinfo.wilds.length == 4 && "AKQJT".includes(handinfo[st][0]))
            ){
                level = "wild royal flush"
                base = "AKQJT"
                kicker = ""
            }
        }
        if(handinfo.fives.includes("A")){
            level = "five of a kind"
            base = "AAAAA"
            kicker = ""
        }
        if(handinfo.hearts.startsWith("AKQJT") || handinfo.clubs.startsWith("AKQJT") || handinfo.diamonds.startsWith("AKQJT") || handinfo.spades.startsWith("AKQJT")){
            level = "royal flush"
            base = "AKQJT"
            kicker = ""
        }
        if(handinfo.wilds.length == 5){
            level = "five wilds"
            base = "WWWWW"
            kicker = ""
        }
        base = base.replace(/W/g, "A")
        kicker = kicker.replace(/W/g, "A")
        return [level, base, kicker, cincocards]
    }
    else if(classification == "war"){
        return cardorder.indexOf(cardname[Array.from(it).slice(-1)[0]][0])
    }
    else if(classification.startsWith("blackjack")){
        it = it.replace(/🟡/g, "")
        normalvalue = Array.from(it).map(x => isNaN(cardname[x][0]) ? {T: 10, J: 10, Q: 10, K: 10, A: 1}[cardname[x][0]] : cardname[x][0])
        normalvalueadded = normalvalue.reduce((x, y) => +x + +y, 0)
        return ((normalvalue.includes(1) && normalvalueadded <= 11) ? ((+normalvalueadded + 10) + "/") : "") + normalvalueadded
    }
    else if(classification.includes("baccarat")){
        it = it.replace(/🟡/g, "")
        normalvalue = Array.from(it).map(x => isNaN(cardname[x][0]) ? {T: 10, J: 10, Q: 10, K: 10, A: 1}[cardname[x][0]] : cardname[x][0])
        return normalvalue.reduce((x, y) => +x + +y, 0) % 10
    }
}


function comparehands(SB){ //sb means specific bet
    if(peoplenumber >= 2) PPpoints = analyzeThisHand(playerhand2, game)
    if(game == "mississippi" || game == "letitride"){
        Ppoints = analyzeThisHand(playerhand + dealerhand, game)
    }
    else if(game == "texas" || game == "headsup" || game == "djwild" || game == "jackpot" || game == "texasbonus"){
        Ppoints = analyzeThisHand(playerhand + middlehand, game)
        Dpoints = analyzeThisHand(dealerhand + middlehand, game)
        if(game == "texasbonus") bonuspoints = [Array.from(playerhand).map(x => cardname[x]).sort((a, b) => cardorder.indexOf(b[0]) - cardorder.indexOf(a[0])), Array.from(dealerhand).map(x => cardname[x]).sort((a, b) => cardorder.indexOf(b[0]) - cardorder.indexOf(a[0]))]
    }
    else if(game == "crisscrosspoker"){
        ACROSSpoints = analyzeThisHand(playerhand + Array.from(middlehand).slice(1, 4).join(""), game)
        DOWNpoints = analyzeThisHand(playerhand + Array.from(middlehand)[0] + Array.from(middlehand)[4], game)
        middlepoints = analyzeThisHand(middlehand, game)
    }
    else if(game == "dakota"){
        Bpoints = analyzeThisHand(playerhand + dealerhand, game)
        Apoints = analyzeThisHand(playerhand + middlehand, game)
        Cpoints = analyzeThisHand(playerhand + dealerhand + middlehand, game)
        Epoints =  analyzeThisHand(playerhand, game)
    }
    else{
        Ppoints = analyzeThisHand(playerhand, game)
        if(game != "doubledraw") Dpoints = analyzeThisHand(dealerhand, game)
    }


    if(game == "threecardpoker"){
        fightresult = pokercomparehands(Ppoints, Dpoints, "three")
        if(SB == "bonus") return {"nothing": 0, pair: 0, flush: 0, straight: threecardpoker_bonus_straight.value, "three of a kind": threecardpoker_bonus_trips.value, "straight flush": threecardpoker_bonus_straightflush.value, "royal flush": threecardpoker_bonus_miniroyal.value, "spade royal flush": threecardpoker_bonus_miniroyal.value}[analyzeThisHand(playerhand, "threecardpoker" /* ;) */)[0]]
        else if(SB == "pairplus") return {"nothing": -1, pair: 1, flush: threecardpoker_pairplus_flush, straight: threecardpoker_pairplus_straight, "three of a kind": threecardpoker_pairplus_trips, "straight flush": threecardpoker_pairplus_straightflush, "royal flush": threecardpoker_pairplus_miniroyal, "spade royal flush": threecardpoker_pairplus_miniroyal}[analyzeThisHand(playerhand, "threecardpoker" /* ;) */)[0]]
        else if(SB == "six card bonus") return {"nothing": -1, "low-pair": -1, "mid-pair": -1, "nine-pair": -1, "ten-pair": -1, "high-pair": -1, "two pair": -1, "three of a kind": 5, "straight": 10, "flush": 15, "full house": 25, "four of a kind": 50, "straight flush": 200, "royal flush": 1000}[analyzeThisHand(playerhand + dealerhand, "texas" /* ;) */)[0]]
        else if(SB == "ante"){
            if(fightresult == "win") return [1, `The player's ${Ppoints[0]} hand beats the dealer's ${Dpoints[0]} hand`]
            else if(fightresult == "tie") return [0, `The player's ${Ppoints[0]} hand ties the dealer's ${Dpoints[0]} hand, leading to a push`]
            else if(fightresult == "loss") return [-1, `The player's ${Ppoints[0]} hand loses to the dealer's ${Dpoints[0]} hand`]
            else if(fightresult == "disqualified") return [1, `The dealer's ${Dpoints[0]} hand doesn't qualify, leading to the ante bet's win`]
        }
        else if(SB == "play"){
            if(fightresult == "win") return [1, `The player's ${Ppoints[0]} hand beats the dealer's ${Dpoints[0]} hand`]
            else if(fightresult == "tie") return [0, `The player's ${Ppoints[0]} hand ties the dealer's ${Dpoints[0]} hand, leading to a push`]
            else if(fightresult == "loss") return [-1, `The player's ${Ppoints[0]} hand loses to the dealer's ${Dpoints[0]} hand`]
            else if(fightresult == "disqualified") return [0, `The dealer's ${Dpoints[0]} hand doesn't qualify, leading to the play bet's push`]
        }
    }
    else if(game == "knockout"){
        knocked = (knockoutcards.textContent.length == 104 && !"🂮🂾🃎🃞".includes(knockoutcards.textContent.slice(-2)))
        if(SB == "all the way") return knocked ? knocked_alltheway.value : -1
        else if(knocked) return -1
        else if(SB == "red") return redcard.includes(knockoutcards.textContent.slice(-2)) ? 1 : -1
        else if(SB == "black") return redcard.includes(knockoutcards.textContent.slice(-2)) ? -1 : 1
        else if(SB == "round 1") return knockoutcards.textContent.length <= 26 ? 0.5 : -1
        else if(SB == "round 2") return (knockoutcards.textContent.length > 26 && knockoutcards.textContent.length <= 52) ? 3 : -1
        else if(SB == "round 3") return (knockoutcards.textContent.length > 52 && knockoutcards.textContent.length <= 78) ? 10 : -1
        else if(SB == "round 4") return (knockoutcards.textContent.length > 78) ? 30 : -1
    }
    else if(game == "mississippi"){
        if(SB == "three card bonus") return {"nothing": -1, pair: 1, flush: mississippi_threecardbonus_flush.value, straight: mississippi_threecardbonus_straight.value, "three of a kind": 30, "straight flush": mississippi_threecardbonus_straightflush.value, "royal flush": mississippi_threecardbonus_miniroyal.value}[analyzeThisHand(playerhand, "threecardpoker" /* ;) */)[0]]
        else return {"nothing": -1, "low-pair": 0, "mid-pair": 0, "nine-pair": 0, "ten-pair": 0, "high-pair": 1, "two pair": 2, "three of a kind": 3, "straight": mississippi_ante_straight.value, "flush": 6, "full house": 10, "four of a kind": 40, "straight flush": 100, "royal flush": 500}[Ppoints[0]]
    }
    else if(game == "crisscrosspoker"){
        aM = {"nothing": -1, "low-pair": -1, "mid-pair": 0, "nine-pair": 0, "ten-pair": 0, "high-pair": 1, "two pair": 2, "three of a kind": 3, "straight": 5, "flush": 8, "full house": 12, "four of a kind": 40, "straight flush": 100, "royal flush": 500}[ACROSSpoints[0]]
        dM = {"nothing": -1, "low-pair": -1, "mid-pair": 0, "nine-pair": 0, "ten-pair": 0, "high-pair": 1, "two pair": 2, "three of a kind": 3, "straight": 5, "flush": 8, "full house": 12, "four of a kind": 40, "straight flush": 100, "royal flush": 500}[DOWNpoints[0]]
        if(SB == "five card bonus") return {"nothing": -1, "low-pair": -1, "mid-pair": 1,  "nine-pair": 1, "ten-pair": 1, "high-pair": 1, "two pair": 3, "three of a kind": 4, "straight": 6, "flush": 10, "full house": 15, "four of a kind": 40, "straight flush": 100, "royal flush": 250}[middlepoints[0]]
        else return {"across ante": Math.sign(aM), "down ante": Math.sign(dM), "across play": aM, "down play": dM, "middle play": aM > dM ? aM : dM}[SB]
    }
    else if(game == "craps" || game == "crapless"){
        dicevalue = dice.indexOf(diceresult[0]) + dice.indexOf(diceresult[1]) + 2
        if(SB == "any seven") return dicevalue == 7 ? craps_anyseven_payout.value : -1
        else if(SB == "pass"){
            if(thepoint == 0) return {2: -1, 3: -1, 4: 0, 5: 0, 6: 0, 7: 1, 8: 0, 9: 0, 10: 0, 11: (game == "craps" ? 1 : 0), 12: -1}[dicevalue]
            else if(dicevalue == thepoint) return 1
            else if(dicevalue == 7) return -1
            else return 0
        }
        else if(SB == "any craps") return [2, 3, 12].includes(dicevalue) ? craps_anycraps_payout.value : -1
        else if(SB == "field") return {2: craps_field_2.value, 3: 1, 4: 1, 5: -1, 6: -1, 7: -1, 8: -1, 9: 1, 10: 1, 11: 1, 12: craps_field_12.value}[dicevalue]
        else if(SB == "eleven") return dicevalue == 11 ? 15 : -1
        else if(SB == "three") return dicevalue == 3 ? 15 : -1
        else if(SB == "twelve") return dicevalue == 12 ? 30 : -1
        else if(SB == "two") return dicevalue == 2 ? 30 : -1
        else if(SB == "horn") return {2: 7.75, 3: 4, 4: -1, 5: -1, 6: -1, 7: -1, 8: -1, 9: -1, 10: -1, 11: 4, 12: 7.75}[dicevalue]
    }
    else if(game == "sicbo"){
        dicevalue = dice.indexOf(diceresult[0]) + dice.indexOf(diceresult[1] + dice.indexOf(diceresult[2])) + 3
        if((diceresult[0] == diceresult[1]) && (diceresult[1] == diceresult[2])){
            return {"big": -1, "small": -1, "anytriple": sicbo_anytriple_payout.value}[SB]
        }
        else if(SB == "anytriple") return [-1, "Not all the dice are the same."]
        else if(SB == "big") return dicevalue > 10 ? [1, "the dice add up to " + dicevalue + ", which is more than 10"] : [-1, "the dice add up to " + dicevalue + ", which is less than 11"]
        else if(SB == "small") return dicevalue < 11 ? [1, "the dice add up to " + dicevalue + ", which is less than 11"] : [-1, "the dice add up to " + dicevalue + ", which is more than 10"]
    }
    else if(game == "letitride"){
        bonus = {"nothing": -1, "low-pair": -1, "mid-pair": -1,  "nine-pair": -1, "ten-pair": letitride_bonus_tensorbetter.value, "high-pair": letitride_bonus_tensorbetter.value, "two pair": letitride_bonus_twopair.value, "three of a kind": letitride_bonus_trips.value, "straight": 25, "flush": 50, "full house": letitride_bonus_fullhouse.value, "four of a kind": letitride_bonus_quads.value, "straight flush": letitride_bonus_straightflush.value, "royal flush": letitride_bonus_royalflush.value}[Ppoints[0]]
        threecardbonus = {"nothing": -1, pair: 1, flush: letitride_threecardbonus_flush.value, straight: letitride_threecardbonus_straight.value, "three of a kind": 30, "straight flush": letitride_threecardbonus_straightflush.value, "royal flush": letitride_threecardbonus_miniroyal.value}[analyzeThisHand(playerhand, "threecardpoker" /* ;) */)[0]]
        multiplier = {"nothing": -1, "low-pair": -1, "mid-pair": -1, "nine-pair": -1, "ten-pair": 1, "high-pair": 1, "two pair": 2, "three of a kind": 3, "straight": letitride_ante_straight.value, "flush": letitride_ante_flush.value, "full house": letitride_ante_fullhouse.value, "four of a kind": letitride_ante_quads.value, "straight flush": letitride_ante_straightflush.value, "royal flush": letitride_ante_royalflush.value}[Ppoints[0]]
        return {ante: multiplier, "2nd ante": multiplier, "3rd ante": multiplier, "three card bonus": threecardbonus, "bonus": bonus}[SB]
    }
    else if(game == "texas"){
        if(SB == "trips") return {"nothing": -1, "low-pair": -1, "mid-pair": -1,  "nine-pair": -1, "ten-pair": -1, "high-pair": -1, "two pair": -1, "three of a kind": 3, "straight": texas_trips_straight.value, "flush": texas_trips_flush.value, "full house": texas_trips_fullhouse.value, "four of a kind": texas_trips_quads.value, "straight flush": 40, "royal flush": 50}[Ppoints[0]]
        else if(SB == "ante" && Dpoints[0] == "nothing") return [0, "The dealer didn't have a pair or better so the ante pushes"]
        else if(pokercomparehands(Ppoints, Dpoints, "five") == "tie"){
            return [0, "The player's hand ties exactly with the dealer, leading to this bet pushing."]
        }
        else if(pokercomparehands(Ppoints, Dpoints, "five") == "win"){ //player wins
            if(SB == "blind"){
                if(["nothing", "low-pair", "mid-pair", "nine-pair", "ten-pair", "high-pair", "two pair", "three of a kind"].includes(Ppoints[0])) return [0, "Despite winning, the blind bet pushes with less than a straight."]
                else return [{"straight": 1, "flush": 1.5, "full house": 3, "four of a kind": 10, "straight flush": 50, "royal flush": 500}[Ppoints[0]], "The player has a " + Ppoints[0] + ", letting them win this blind bet."]
            }
            else return [1, "The player's " + Ppoints[0] + " beat the dealer's " + Dpoints[0]]
        }
        else{ //player loses
            return [-1, "The player's " + Ppoints[0] + " lost to the dealer's " + Dpoints[0]]
        }
        return {ante: ante, play: play, blind: multiplier, trips: trips}[SB]
    }
    else if(game == "texasbonus"){
        if(SB == "bonus"){
            if(bonuspoints[0][1][0] == bonuspoints[0][0][0]){
                if("A".includes(bonuspoints[0][0][0])){
                    if("A".includes(bonuspoints[1][0][0]) && "A".includes(bonuspoints[1][1][0])) return [texasbonus_bonus_AAAA, "The player wins with a matching pair"]
                    else return [30, "The player wins with a matching pair"]
                }
                else if("KQJ".includes(bonuspoints[0][0][0])) return [10, "The player wins with a matching pair"]
                else if("23456789T".includes(bonuspoints[0][0][0])) return [3, "The player wins with a matching pair"]
            }
            else if(bonuspoints[0][0][0] == "A" && bonuspoints[0][1][0] == "K"){
                if(bonuspoints[0][0][1] == bonuspoints[0][1][1]){
                    return [25, "The player wins with a suited A/K"]
                }
                else return [15, "The player wins with an A/K"]
            } 
            else if(bonuspoints[0][0][0] == "A" && "QJ".includes(bonuspoints[0][1][0])){
                if(bonuspoints[0][0][1] == bonuspoints[0][1][1]){
                    return [20, "The player wins with a suited A/" + bonuspoints[0][1][0]]
                }
                return [5, "The player wins with an A/" + bonuspoints[0][1][0]]
            } 
            else return [-1, "The player does not have a matching pair nor an ace with another face card, therefore losing."]
        }
        else if(Dpoints[0] == "nothing" && SB == "ante") return [0, "The dealer didn't have a pair or better so the ante pushes"]
        else if(pokercomparehands(Ppoints, Dpoints, "five") == "win"){
            if(SB == "ante"){
                if(["nothing", "low-pair", "mid-pair", "nine-pair", "ten-pair", "high-pair", "two pair", "three of a kind"].includes(Ppoints[0])) return [0, "Despite winning, the blind bet pushes with less than a straight."]
                else return [{"straight": 1, "flush": 1.5, "full house": 3, "four of a kind": 10, "straight flush": 50, "royal flush": 500}[Ppoints[0]], "The player has a " + Ppoints[0] + ", letting them win this blind bet."]
            }
            else return [1, "The player's " + Ppoints[0] + " beat the dealer's " + Dpoints[0]]
        }
        else if(pokercomparehands(Ppoints, Dpoints, "five") == "tie"){
            return [0, "The player's hand ties exactly with the dealer, leading to this bet pushing."]
        }
        else{ //player loses
            return [-1, "The player's " + Ppoints[0] + " lost to the dealer's " + Dpoints[0]]
        }
    }
    else if(game == "caribbean"){
        if(pokercomparehands(Ppoints, Dpoints, "five") == "win"){ //player wins
            play = ante = 1
            raise = {"nothing": 1, "low-pair": 1, "mid-pair": 1, "nine-pair": 1, "ten-pair": 1, "high-pair": 1, "two pair": 2, "three of a kind": 3, "straight": caribbean_raise_straight.value, "flush": caribbean_raise_flush.value, "full house": caribbean_raise_fullhouse.value, "four of a kind": caribbean_raise_quads.value, "straight flush": caribbean_raise_straightflush.value, "royal flush": caribbean_raise_royalflush.value}[Ppoints[0]]
        }
        else if(pokercomparehands(Ppoints, Dpoints, "five") == "tie"){
            raise = ante = 0
        }
        else if(pokercomparehands(Ppoints, Dpoints, "five") == "disqualified"){
            ante = 1
            raise = 0
        }
        else{ //player loses
            raise = ante  = -1
        }
        return {ante: ante, raise: raise}[SB]
    }
    else if(game == "headsup"){
        if(pokercomparehands(Ppoints, Dpoints, "five") == "win"){ //player wins
            play = ante = 1
            multiplier = {"nothing": 0, "low-pair": 0, "mid-pair": 0, "nine-pair": 0, "ten-pair": 0, "high-pair": 0, "two pair": 0, "three of a kind": 0, "straight": 1, "flush": 1.5, "full house": 3, "four of a kind": 10, "straight flush": 50, "royal flush": 500}[Ppoints[0]]
        }
        else if(pokercomparehands(Ppoints, Dpoints, "five") == "tie"){
            play = ante = multiplier = 0
        }
        else{ //player loses
            play = ante = -1
            multiplier = {"nothing": -1, "low-pair": -1, "mid-pair": -1, "nine-pair": -1, "ten-pair": -1, "high-pair": -1, "two pair": -1, "three of a kind": -1, "straight": headsup_odds_straight.value, "flush": headsup_odds_flush.value, "full house": headsup_odds_fullhouse.value, "four of a kind": headsup_odds_quads.value, "straight flush": 500}[Ppoints[0]]
        }
        if(Dpoints[0] == "nothing") ante = 0
        trips = {"nothing": -1, "low-pair": -1, "mid-pair": -1, "nine-pair": -1, "ten-pair": -1, "high-pair": -1, "two pair": -1, "three of a kind": 3, "straight": headsup_trips_straight.value, "flush": headsup_trips_flush.value, "full house": headsup_trips_fullhouse.value, "four of a kind": headsup_trips_quads.value, "straight flush": 40, "royal flush": 50}[Ppoints[0]]
        return {ante: ante, play: play, odds: multiplier, trips: trips}[SB]
    }
    else if(game == "jackpot"){
        if(pokercomparehands(Ppoints, Dpoints, "five") == "win"){ //player wins
            play = ante = 1
            multiplier = {"nothing": 0, "low-pair": 0, "mid-pair": 0, "nine-pair": 0, "ten-pair": 0, "high-pair": 0, "two pair": 0, "three of a kind": 0, "straight": 1, "flush": 2, "full house": 4, "four of a kind": 10, "straight flush": 50, "royal flush": 500}[Ppoints[0]]
        }
        else if(pokercomparehands(Ppoints, Dpoints, "five") == "tie"){
            play = ante = multiplier = 0
        }
        else{ //player loses
            play = ante = multiplier = -1
        }
        if(Dpoints[0] == "nothing") ante = 0
        playerbonus = {"nothing": -1, "low-pair": -1, "mid-pair": -1, "nine-pair": -1, "ten-pair": -1, "high-pair": -1, "two pair": -1, "three of a kind": 3, "straight": 4, "flush": 7, "full house": 8, "four of a kind": 30, "straight flush": 40, "royal flush": 100}[Ppoints[0]]
        return {ante: ante, play: play, "extra bonus": multiplier, "player bonus": playerbonus}[SB]
    }
    else if(game == "djwild"){
        if(pokercomparehands(Ppoints, Dpoints, "fivedj") == "win"){ //player wins
            play = ante = 1
            multiplier = {"nothing": 0, "low-pair": 0, "mid-pair": 0, "nine-pair": 0, "ten-pair": 0, "high-pair": 0, "two pair": 0, "wild three of a kind": 0, "three of a kind": 0, "wild straight": 1, "straight": 1, "wild flush": 2, "flush": 2, "wild full house": 3, "full house": 3, "wild four of a kind": 4, "four of a kind": 4, "wild straight flush": 9, "straight flush": 9, "five of a kind": 10, "wild royal flush": 50, "royal flush": 50, "five wilds": 1000}[Ppoints[0]]
        }
        else if(pokercomparehands(Ppoints, Dpoints, "fivedj") == "tie"){
            play = ante = multiplier = 0
        }
        else{ //player loses
            play = ante = multiplier = -1
        }
        trips = {"nothing": -1, "low-pair": -1, "mid-pair": -1, "nine-pair": -1, "ten-pair": -1, "high-pair": -1, "two pair": -1, "wild three of a kind": 1, "three of a kind": djwild_trips_trips.value, "wild straight": 3, "straight": 20, "wild flush": 4, "flush": djwild_trips_flush.value, "wild full house": 5, "full house": djwild_trips_fullhouse.value, "wild four of a kind": 6, "four of a kind": djwild_trips_quads.value, "wild straight flush": djwild_trips_wildstraightflush.value, "straight flush": 200, "wild royal flush": djwild_trips_wildroyalflush.value, "five of a kind": djwild_trips_wildquints.value, "royal flush": 1000, "five wilds": 2000}[Ppoints[0]]
        return {ante: ante, play: play, blind: multiplier, trips: trips}[SB]
    }
    else if(game == "fourcardpoker"){
        if(pokercomparehands(Ppoints, Dpoints, "four") != "loss"){ //player wins ties
            play = ante = 1
        }
        else{ //player loses
            play = ante = -1
        }
        bonus = {"nothing": 0, "below-queen-pair": 0, "queen-pair": 0, "king-pair": 0, "ace-pair": 0, "two pair": 0, "straight": 0, "flush": 0, "three of a kind": 2, "straight flush": 20, "four of a kind": 25, "four aces": 25}[Ppoints[0]]
        acesup = {"nothing": -1, "below-queen-pair": -1, "queen-pair": -1, "king-pair": -1, "ace-pair": fourcardpoker_acesup_pairofaces.value, "two pair": fourcardpoker_acesup_twopair.value, "straight": fourcardpoker_acesup_straight.value, "flush": fourcardpoker_acesup_flush.value, "three of a kind": fourcardpoker_acesup_trips.value, "straight flush": fourcardpoker_acesup_straightflush.value, "four of a kind": fourcardpoker_acesup_quads.value, "four aces": fourcardpoker_acesup_quads.value}[Ppoints[0]]
        return {ante: ante, play: play, bonus: bonus, "aces up": acesup}[SB]
    }
    else if(game == "dakota"){
        if(SB == "play 1") return {"nothing": -1, "low-pair": -1, "mid-pair": -1, "nine-pair": 2, "ten-pair": 2, "high-pair": 2, "two pair": 2, "three of a kind": 3, "straight": 4, "flush": 6, "full house": 8, "four of a kind": 30, "straight flush": 50, "royal flush": 100}[Apoints[0]]
        else if(SB == "play 2") return {"nothing": -1, "low-pair": -1, "mid-pair": -1, "nine-pair": 2, "ten-pair": 2, "high-pair": 2, "two pair": 2, "three of a kind": 3, "straight": 4, "flush": 6, "full house": 8, "four of a kind": 30, "straight flush": 50, "royal flush": 100}[Bpoints[0]]
        else if(SB == "big 8") return {"nothing": -1, "low-pair": -1, "mid-pair": -1, "nine-pair": -1, "ten-pair": -1, "high-pair": -1, "two pair": -1, "three of a kind": -1, "straight": dakota_big8straight.value, "flush": dakota_big8flush.value, "full house": dakota_big8fullhouse.value, "four of a kind": dakota_big8quads.value, "straight flush": dakota_big8straightflush.value, "royal flush": dakota_big8royalflush.value}[Cpoints[0]]
        else if(SB == "bonus"){
            if(["nine-pair", "ten-pair", "high-pair"].includes(Epoints[0])){
                return 8
            }
            else return 0
        }
    }
    else if(game == "crazy4poker"){
        if(pokercomparehands(Ppoints, Dpoints, "four") == "win"){ //player wins ties
            play = ante = 1
            superbonus = 0
        }
        else if(pokercomparehands(Ppoints, Dpoints, "four") == "tie"){ //player wins ties
            superbonus = play = ante = 0
        }
        else if(pokercomparehands(Ppoints, Dpoints, "four") == "disqualified"){ //player wins ties
            ante = superbonus = 0
            play = 1
        }
        else{ //player loses
            superbonus = play = ante = -1
        }
        superbonus = (v => v > 0 ? v : superbonus)({"nothing": 0, "below-queen-pair": 0, "queen-pair": 0, "king-pair": 0, "ace-pair": 0, "two pair": 0, "straight": 1, "flush": 1.5, "three of a kind": 2, "straight flush": 15, "four of a kind": 30, "four aces": 200}[Ppoints[0]])
        queensup = {"nothing": -1, "below-queen-pair": -1, "queen-pair": 1, "king-pair": 1, "ace-pair": 1, "two pair": 2, "straight": 3, "flush": 4, "three of a kind": crazy4poker_queensup_trips.value, "straight flush": 40, "four of a kind": crazy4poker_queensup_quads.value, "four aces": crazy4poker_queensup_quads.value}[Ppoints[0]]
        return {ante: ante, play: play, "super bonus": superbonus, "queens up": queensup}[SB]
    }
    else if(game == "doubledraw"){
        multiplier = {"nothing": -1, "low-pair": -1, "mid-pair": -1, "nine-pair": -1, "ten-pair": -1, "high-pair": -1, "two pair": 0, "three of a kind": doubledraw_bonus_trips.value, "straight": 2, "flush": 3, "full house": 5, "four of a kind": 20, "straight flush": 50, "royal flush": 100, "five of a kind": 500}[Ppoints[0]]
        if(multiplier >= 0) return {ante: 1, bonus: multiplier, "first draw": 1, "second draw": 1}[SB]
        else return {ante: -1, bonus: -1, "first draw": -1, "second draw": -1}[SB]
    }
    else if(game == "war"){
        tie = -1
        ante = 0
        if(dealerhand.includes("🂠")){
            tie = 10
            if(Ppoints > Dpoints) ante = 0.5
            else if(Ppoints < Dpoints) ante = -1
            else ante = war_ante_doubletie.value == "double" ? 1 : 0.5
        }
        else{
            if(Ppoints > Dpoints) ante = 1
            else if(Ppoints < Dpoints) ante = -1
        }
        return {ante: ante, tie: tie}[SB]
    }
    else if(game == "baccarat"){
        if(Ppoints == Dpoints) return SB == "tie" ? 8 : 0
        else if(SB == "Banker") return Dpoints > Ppoints ? 0.95 : -1
        else if(SB == "Player") return Ppoints > Dpoints ? 1 : -1
        else return -1 //no tie
    }
    else if(game == "ezbaccarat"){
        if(Ppoints == Dpoints) return SB == "tie" ? 8 : 0
        else if(SB == "Banker"){
            if(Dpoints > Ppoints){
                return (Dpoints == 7 && dealerhand.length == 6) ? 0 : 1
            }
            else return -1
        }
        else if(SB == "Player") return Ppoints > Dpoints ? 1 : -1
        else return -1 //no tie
    }
    else if(game == "nepalbaccarat"){
        if(Ppoints == Dpoints) return SB == "tie" ? 8 : 0
        else if(SB == "Banker"){
            if(Dpoints > Ppoints){
                return (Dpoints == 6) ? 0.5 : 1
            }
            else return -1
        }
        else if(SB == "Player") return Ppoints > Dpoints ? 1 : -1
        else return -1 //no tie
    }
    else if(game == "bbqbaccarat"){
        console.log(dealerhand.length)
        if(SB == "any bbq"){
            return ((Ppoints == 7 && Dpoints == 6) || (Ppoints == 6 && Dpoints == 7)) ? 20 : -1
        }
        else if(SB == "player small bbq"){
            return ((Ppoints == 7 && Dpoints == 6 && playerhand.length == 4)) ? 60 : -1
        }
        else if(SB == "dealer small bbq"){
            return ((Ppoints == 6 && Dpoints == 7 && playerhand.length == 4)) ? 60 : -1
        }
        else if(SB == "player big bbq"){
            return ((Ppoints == 7 && Dpoints == 6 && playerhand.length == 6)) ? 125 : -1
        }
        else if(SB == "dealer big bbq"){
            return ((Ppoints == 6 && Dpoints == 7 && playerhand.length == 6)) ? 150 : -1
        }
        else if(Ppoints == Dpoints) return SB == "tie" ? 8 : 0
        else if(SB == "Banker"){
            if(Dpoints > Ppoints){
                return (Dpoints == 7 && Ppoints == 6) ? 0 : 1
            }
            else return -1
        }
        else if(SB == "Player") return Ppoints > Dpoints ? 1 : -1
        else return -1 //no tie
    }
    else if(game == "blackjack"){
        if(SB == "lucky 11s"){
            if(peoplenumber != 1) return -1
            else if("🂧🂷🃇🃗".includes(Array.from(dealerhand)[0])){
                if(analyzeThisHand(Array.from(playerhand).slice(0,2).join(""), "blackjack") == "21/11") return lucky11s721.value
                else if(analyzeThisHand(Array.from(playerhand).slice(0,2).join(""), "blackjack") == 11) return lucky11s711.value
                else return -1
            }
            else{
                if(analyzeThisHand(Array.from(playerhand).slice(0,2).join(""), "blackjack") == "21/11") return 5
                else if(analyzeThisHand(Array.from(playerhand).slice(0,2).join(""), "blackjack") == 11) return 10
                else return -1
            }
        }
        else if(SB == "suited lucky 11s"){
            if(peoplenumber != 1) return -1
            else if((frenchdeck.indexOf(Array.from(dealerhand)[0]) % 8) != (frenchdeck.indexOf(Array.from(dealerhand)[1]) % 8)) return -1
            else if("🂧🂷🃇🃗".includes(Array.from(dealerhand)[0])){
                if(analyzeThisHand(Array.from(playerhand).slice(0,2).join(""), "blackjack") == "21/11") return suitedlucky11s721.value
                else if(analyzeThisHand(Array.from(playerhand).slice(0,2).join(""), "blackjack") == 11) return suitedlucky11s711.value
                else return -1
            }
            else{
                if(analyzeThisHand(Array.from(playerhand).slice(0,2).join(""), "blackjack") == "21/11") return 30
                else if(analyzeThisHand(Array.from(playerhand).slice(0,2).join(""), "blackjack") == 11) return 40
                else return -1
            }
        }
        else{
            ante = -1
            if(("" + Ppoints).split("/")[0] >= 22) ante = -1
            else if(Ppoints == "21/11" && (Dpoints != "21/11" || dealerhand.length > 4)) ante = blackjackbonus.value
            else if(("" + Ppoints).split("/")[0] > ("" + Dpoints).split("/")[0]) ante = 1
            else if(("" + Dpoints).split("/")[0] > 21 && ("" + Ppoints).split("/")[0] < 22) ante = 1
            else if(("" + Ppoints).split("/")[0] == ("" + Dpoints).split("/")[0]) ante = 0
    
    
            if(peoplenumber >= 2){
                ante2 = -1
                if(("" + PPpoints).split("/")[0] >= 22) ante2 = -1
                else if(PPpoints == "21/11" && (Dpoints != "21/11" || dealerhand.length > 4)) ante2 = blackjackbonus.value
                else if(("" + PPpoints).split("/")[0] > ("" + Dpoints).split("/")[0]) ante2 = 1
                else if(("" + Dpoints).split("/")[0] > 21 && ("" + PPpoints).split("/")[0] < 22) ante2 = 1
                else if(("" + PPpoints).split("/")[0] == ("" + Dpoints).split("/")[0]) ante2 = 0
                return {"first ante": ante, "second ante": ante2}[SB]
            }
            return ante
        }
    }
    else if(game == "blackjack-zappit"){
        ante = -1
        if(("" + Ppoints).split("/")[0] >= 22) ante = -1
        else if(Ppoints == "21/11" && (Dpoints != "21/11" || dealerhand.length > 4)) ante = zappitblackjackbonus.value
        else if(("" + Dpoints).startsWith("22")) ante = 0
        else if(("" + Ppoints).split("/")[0] > ("" + Dpoints).split("/")[0]) ante = 1
        else if(("" + Dpoints).split("/")[0] > 21 && ("" + Ppoints).split("/")[0] < 22) ante = 1
        else if(("" + Ppoints).split("/")[0] == ("" + Dpoints).split("/")[0]) ante = 0


        if(peoplenumber >= 2){
            ante2 = -1
            if(("" + PPpoints).split("/")[0] >= 22) ante2 = -1
            else if(("" + Dpoints).startsWith("22")) ante = 0
            else if(PPpoints == "21/11" && (Dpoints != "21/11" || dealerhand.length > 4)) ante2 = zappitblackjackbonus.value
            else if(("" + PPpoints).split("/")[0] > ("" + Dpoints).split("/")[0]) ante2 = 1
            else if(("" + Dpoints).split("/")[0] > 21 && ("" + PPpoints).split("/")[0] < 22) ante2 = 1
            else if(("" + PPpoints).split("/")[0] == ("" + Dpoints).split("/")[0]) ante2 = 0
            return {"first ante": ante, "second ante": ante2}[SB]
        }
        return ante
    }
    else if(game == "blackjack-double"){
        ante = -1
        if(("" + Ppoints).split("/")[0] >= 22) ante = -1
        else if(Ppoints == "21/11" && (Dpoints != "21/11" || dealerhand.length > 4)) ante = doubleblackjackbonus.value
        else if(("" + Dpoints).startsWith("22")) ante = 0.5
        else if(("" + Ppoints).split("/")[0] > ("" + Dpoints).split("/")[0]) ante = 1
        else if(("" + Dpoints).split("/")[0] > 21 && ("" + Ppoints).split("/")[0] < 22) ante = 1
        else if(("" + Ppoints).split("/")[0] == ("" + Dpoints).split("/")[0]) ante = 0


        if(peoplenumber >= 2){
            ante2 = -1
            if(("" + PPpoints).split("/")[0] >= 22) ante2 = -1
            else if(("" + Dpoints).startsWith("22")) ante = 0.5
            else if(PPpoints == "21/11" && (Dpoints != "21/11" || dealerhand.length > 4)) ante2 = doubleblackjackbonus.value
            else if(("" + PPpoints).split("/")[0] > ("" + Dpoints).split("/")[0]) ante2 = 1
            else if(("" + Dpoints).split("/")[0] > 21 && ("" + PPpoints).split("/")[0] < 22) ante2 = 1
            else if(("" + PPpoints).split("/")[0] == ("" + Dpoints).split("/")[0]) ante2 = 0
            return {"first ante": ante, "second ante": ante2}[SB]
        }
        return ante
    }
    else if(game == "blackjack-down"){
        ante = -1
        if(("" + Ppoints).split("/")[0] >= 22) ante = -1
        else if(Ppoints == "21/11" && (Dpoints != "21/11" || dealerhand.length > 4)) ante = downblackjackbonus.value
        else if(("" + Dpoints).startsWith("22")) ante = ("🂮🂾🃎🃞🂭🂽🃍🃝🂫🂻🃋🃛🂪🂺🃊🃚".includes(playerhand2.slice(0, 2)) && "🂮🂾🃎🃞🂭🂽🃍🃝🂫🂻🃋🃛🂪🂺🃊🃚".includes(playerhand2.slice(2, 4))) ? 1 : 0
        else if(("" + Ppoints).split("/")[0] > ("" + Dpoints).split("/")[0]) ante = 1
        else if(("" + Dpoints).split("/")[0] > 21 && ("" + Ppoints).split("/")[0] < 22) ante = 1
        else if(("" + Ppoints).split("/")[0] == ("" + Dpoints).split("/")[0]) ante = 0


        if(peoplenumber >= 2){
            ante2 = -1
            if(("" + PPpoints).split("/")[0] >= 22) ante2 = -1
            else if(("" + Dpoints).startsWith("22")) ante = ("🂮🂾🃎🃞🂭🂽🃍🃝🂫🂻🃋🃛🂪🂺🃊🃚".includes(playerhand2.slice(0, 2)) && "🂮🂾🃎🃞🂭🂽🃍🃝🂫🂻🃋🃛🂪🂺🃊🃚".includes(playerhand2.slice(2, 4))) ? 1 : 0
            else if(PPpoints == "21/11" && (Dpoints != "21/11" || dealerhand.length > 4)) ante2 = downblackjackbonus.value
            else if(("" + PPpoints).split("/")[0] > ("" + Dpoints).split("/")[0]) ante2 = 1
            else if(("" + Dpoints).split("/")[0] > 21 && ("" + PPpoints).split("/")[0] < 22) ante2 = 1
            else if(("" + PPpoints).split("/")[0] == ("" + Dpoints).split("/")[0]) ante2 = 0
            return {"first ante": ante, "second ante": ante2}[SB]
        }
        return ante
    }
   /* else if(game == "blackjack-zombie"){
        ante = -1
        if(("" + Ppoints).split("/")[0] >= 22){
            if(("" + Dpoints).split("/")[0] > 22) ante = 0
            else ante = -1
        }
        else if(Ppoints == "21/11" && (Dpoints != "21/11" || dealerhand.length > 4)) ante = zombieblackjackbonus.value
        else if(("" + Dpoints).startsWith("22")) ante = 0
        else if(("" + Ppoints).split("/")[0] > ("" + Dpoints).split("/")[0]) ante = 1
        else if(("" + Dpoints).split("/")[0] > 21 && ("" + Ppoints).split("/")[0] < 22) ante = 1
        else if(("" + Ppoints).split("/")[0] == ("" + Dpoints).split("/")[0]) ante = 0


        if(peoplenumber >= 2){
            ante2 = -1
            if(("" + PPpoints).split("/")[0] >= 22){
                if(("" + Dpoints).split("/")[0] > 22) ante2 = 0
                else ante2 = -1
            }
            else if(("" + Dpoints).startsWith("22")) ante = 0
            else if(PPpoints == "21/11" && (Dpoints != "21/11" || dealerhand.length > 4)) ante2 = zombieblackjackbonus.value
            else if(("" + PPpoints).split("/")[0] > ("" + Dpoints).split("/")[0]) ante2 = 1
            else if(("" + Dpoints).split("/")[0] > 21 && ("" + PPpoints).split("/")[0] < 22) ante2 = 1
            else if(("" + PPpoints).split("/")[0] == ("" + Dpoints).split("/")[0]) ante2 = 0
            return {"first ante": ante, "second ante": ante2}
        }
        return {ante: ante}
    }*/
    else if(game == "blackjack-switch"){
        ante = -1
        if(("" + Ppoints).split("/")[0] >= 22) ante = -1
        else if(Ppoints == "21/11" && Dpoints != "21/11") ante = 1
        else if(("" + Dpoints).startsWith("22")) ante = 0
        else if(("" + Ppoints).split("/")[0] > ("" + Dpoints).split("/")[0]) ante = 1
        else if(("" + Dpoints).split("/")[0] > 21 && ("" + Ppoints).split("/")[0] < 22) ante = 1
        else if(("" + Ppoints).split("/")[0] == ("" + Dpoints).split("/")[0]) ante = 0
        

        ante2 = -1
        if(PPpoints >= 22) ante2 = -1
        else if(PPpoints == "21/11" && (Dpoints != "21/11" || dealerhand.length > 4)) ante2 = switchblackjackbonus.value
        else if(("" + Dpoints).startsWith("22")) ante2 = 0
        else if(("" + PPpoints).split("/")[0] > ("" + Dpoints).split("/")[0]) ante2 = 1
        else if(("" + Dpoints).split("/")[0] > 21 && ("" + PPpoints).split("/")[0] < 22) ante2 = 1
        else if(("" + PPpoints).split("/")[0] == ("" + Dpoints).split("/")[0]) ante2 = 0
        
        return {"first ante": ante, "second ante": ante2}[SB]
    }
    else if(game == "blackjack-freebet"){
        ante = -1
        if(("" + Ppoints).split("/")[0] >= 22) ante = -1
        else if(Ppoints == "21/11" && (Dpoints != "21/11" || dealerhand.length > 4)) ante = freebetblackjackbonus.value
        else if(("" + Dpoints).startsWith("22")) ante = 0
        else if(("" + Ppoints).split("/")[0] > ("" + Dpoints).split("/")[0]) ante = 1
        else if(("" + Dpoints).split("/")[0] > 21 && ("" + Ppoints).split("/")[0] < 22) ante = 1
        else if(("" + Ppoints).split("/")[0] == ("" + Dpoints).split("/")[0]) ante = 0

        if(peoplenumber >= 2){
            doublegold = playerhand2.includes("🟡🟡") ? 2 : 1
            ante2 = -1
            if(("" + PPpoints).split("/")[0] >= 22) ante2 = -1
            else if(PPpoints == "21/11" && (Dpoints != "21/11" || dealerhand.length > 4)) ante2 = freebetblackjackbonus.value
            else if(("" + Dpoints).startsWith("22")) ante = 0
            else if(("" + PPpoints).split("/")[0] > ("" + Dpoints).split("/")[0]) ante2 = 2 * doublegold
            else if(("" + Dpoints).split("/")[0] > 21 && ("" + PPpoints).split("/")[0] < 22) ante2 = 2 * doublegold
            else if(("" + PPpoints).split("/")[0] == ("" + Dpoints).split("/")[0]) ante2 = 2 * doublegold
            return {"first ante": ante, "second ante": ante2}
        }
        return ante
    }
}




function shuffleArray(array) {
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        b = array[i]
        c = array[j]
        array[j] = b
        array[i] = c
    }
    return array
}


function pokercomparehands(pl, dl, numb){
    console.log(pl, dl, numb)
    pl[0] = pl[0].replace(/wild /, "")
    dl[0] = dl[0].replace(/wild /, "")
    handhierarchy = {
        three: ["spade royal flush", "royal flush", "straight flush", "four of a kind", "full house", "flush", "straight", "three of a kind", "pair", "nothing"],
        four: ["four aces", "four of a kind", "straight flush", "three of a kind", "flush", "straight", "two pair", "ace-pair", "king-pair", "queen-pair", "below-queen-pair", "nothing"],
        five: ["five of a kind", "royal flush", "straight flush", "four of a kind", "full house", "flush", "straight", "three of a kind", "two pair", "high-pair", "ten-pair", "nine-pair", "mid-pair", "low-pair", "nothing"],
        fivedj: ["five wilds", "royal flush", "five of a kind", "straight flush", "four of a kind", "full house", "flush", "straight", "three of a kind", "two pair", "high-pair", "ten-pair", "nine-pair", "mid-pair", "low-pair", "nothing"],
    }[numb]
    if(pl[0].includes("royal flush") && dl[0].includes("royal flush")) return "tie"
    else if(handhierarchy.indexOf(pl[0]) < handhierarchy.indexOf(dl[0])) return "win"
    else if(handhierarchy.indexOf(pl[0]) > handhierarchy.indexOf(dl[0])) return "loss"
    else if((pl[0] == dl[0]) && (pl[1] == dl[1]) && (pl[2] == dl[2])){
        return "tie"
    }
    else if(!pl[2].includes("0") && (numb == "three") && (dl[0] == "nothing") && (!"AKQ".includes(dl[2][0]))){
        return "disqualified"
    }
    else if(game == "crazy4poker" && numb == "four" && dl[0] == "nothing" && !"AK".includes(dl[2][0])){
        return "disqualified"
    }
    else if(game == "caribbean" && numb == "five" && dl[0] == "nothing" && !dl[2].startsWith("AK")){
        return "disqualified"
    }
    else{
        if(pl[0].includes("straight")){
            return cardorder.indexOf(pl[1][0]) > cardorder.indexOf(dl[1][0]) ? "win" : "loss"
        }
        else if(pl[0] == "four aces"){
            return "tie"
        }
        else if(pl[0] == "four of a kind"){
            if(cardorder.indexOf(pl[1][0]) == cardorder.indexOf(dl[1][0])){
                return cardorder.indexOf(pl[2]) > cardorder.indexOf(dl[2]) ? "win" : "loss"
            }
            else return cardorder.indexOf(pl[1][0]) > cardorder.indexOf(dl[1][0]) ? "win" : "loss"
        }
        else if(pl[0] == "full house"){
            if(cardorder.indexOf(pl[1][0]) == cardorder.indexOf(dl[1][0])){
                if(cardorder.indexOf(pl[1][1]) == cardorder.indexOf(dl[1][1])){
                    return cardorder.indexOf(pl[2]) > cardorder.indexOf(dl[2]) ? "win" : "loss"
                }
                else return cardorder.indexOf(pl[1][1]) > cardorder.indexOf(dl[1][1]) ? "win" : "loss"
            }
            else return cardorder.indexOf(pl[1][0]) > cardorder.indexOf(dl[1][0]) ? "win" : "loss"
        }
        else if(pl[0] == "flush"){
            if(cardorder.indexOf(pl[1][0]) == cardorder.indexOf(dl[1][0])){
                return cardorder.indexOf(pl[1][1]) > cardorder.indexOf(dl[1][1]) ? "win" : "loss"
            }
            else return cardorder.indexOf(pl[1][0]) > cardorder.indexOf(dl[1][0]) ? "win" : "loss"
        }

        else if(pl[0] == "three of a kind"){
            if(cardorder.indexOf(pl[1][0]) == cardorder.indexOf(dl[1][0])){
                if(cardorder.indexOf(pl[2][0]) == cardorder.indexOf(dl[2][0])){
                    return cardorder.indexOf(pl[2][1]) > cardorder.indexOf(dl[2][1]) ? "win" : "loss"
                }
                else return cardorder.indexOf(pl[2][0]) > cardorder.indexOf(dl[2][0]) ? "win" : "loss"
            }
            else return cardorder.indexOf(pl[1][0]) > cardorder.indexOf(dl[1][0]) ? "win" : "loss"
        }
        else if(pl[0] == "two pair"){
            if(cardorder.indexOf(pl[1][0]) == cardorder.indexOf(dl[1][0])){
                if(cardorder.indexOf(pl[1][1]) == cardorder.indexOf(dl[1][1])){
                    return cardorder.indexOf(pl[2]) > cardorder.indexOf(dl[2]) ? "win" : "loss"
                }
                else return cardorder.indexOf(pl[1][1]) > cardorder.indexOf(dl[1][1]) ? "win" : "loss"
            }
            else return cardorder.indexOf(pl[1][0]) > cardorder.indexOf(dl[1][0]) ? "win" : "loss"
        }
        else if(pl[0].includes("pair")){
            if(cardorder.indexOf(pl[1][0]) == cardorder.indexOf(dl[1][0])){
                if(cardorder.indexOf(pl[2][0]) == cardorder.indexOf(dl[2][0])){
                    if(cardorder.indexOf(pl[2][1]) == cardorder.indexOf(dl[2][1])){
                        return cardorder.indexOf(pl[2][2]) > cardorder.indexOf(dl[2][2]) ? "win" : "loss"
                    }
                    else return cardorder.indexOf(pl[2][1]) > cardorder.indexOf(dl[2][1]) ? "win" : "loss"
                }
                else return cardorder.indexOf(pl[2][0]) > cardorder.indexOf(dl[2][0]) ? "win" : "loss"
            }
            else return cardorder.indexOf(pl[1][0]) > cardorder.indexOf(dl[1][0]) ? "win" : "loss"
        }
        else if(pl[0] == "nothing"){
            if(cardorder.indexOf(pl[2][0]) == cardorder.indexOf(dl[2][0])){
                if(cardorder.indexOf(pl[2][1]) == cardorder.indexOf(dl[2][1])){
                    if(cardorder.indexOf(pl[2][2]) == cardorder.indexOf(dl[2][2])){
                        if(cardorder.indexOf(pl[2][3]) == cardorder.indexOf(dl[2][3])){
                            return cardorder.indexOf(pl[2][4]) > cardorder.indexOf(dl[2][4]) ? "win" : "loss"
                        }
                        else return cardorder.indexOf(pl[2][3]) > cardorder.indexOf(dl[2][3]) ? "win" : "loss"
                    }
                    else return cardorder.indexOf(pl[2][2]) > cardorder.indexOf(dl[2][2]) ? "win" : "loss"
                }
                else return cardorder.indexOf(pl[2][1]) > cardorder.indexOf(dl[2][1]) ? "win" : "loss"
            }
            else return cardorder.indexOf(pl[2][0]) > cardorder.indexOf(dl[2][0]) ? "win" : "loss"
        }
    }
}

if(Array.from(document.body.children[0].children).map(x => x.id).includes("chips")) preGame()