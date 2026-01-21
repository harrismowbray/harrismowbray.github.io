

function getThreeCombos(reel) {
    return reel.map((_, i) => [
      reel[i % reel.length],
      reel[(i + 1) % reel.length],
      reel[(i + 2) % reel.length],
    ]);
}

  reels = 
[
    ["1", "1", "2", "3", "Q", "4", "4", "4", "3", "K", "A", "T", "2", "1", "Q", "K", "J", "J", "1", "2"],
    ["1", "1", "2", "3", "3", "4", "4", "J", "Q", "K", "A", "T", "T", "J", "Q", "K", "A", "1", "3", "3"],
    ["1", "1", "2", "4", "4", "4", "T", "J", "Q", "K", "A", "T", "J", "Q", "K", "3", "3", "1", "4", "4"],
    ["1", "1", "2", "4", "4", "4", "T", "1", "1", "Q", "K", "2", "T", "J", "3", "3", "A", "1", "1", "1"],
    ["1", "1", "2", "4", "4", "4", "3", "T", "J", "Q", "K", "A", "T", "J", "Q", "4", "A", "1", "J", "J"],
]

reels = reels.map(x => getThreeCombos(x))
slotcombos = []

for(a = 0; a < reels[0].length; a++){
    for(b = 0; b < reels[1].length; b++){
        for(c = 0; c < reels[2].length; c++){
            for(d = 0; d < reels[3].length; d++){
                for(e = 0; e < reels[4].length; e++){
                    slotcombos.push([reels[0][a], reels[1][b], reels[2][c], reels[3][d], reels[4][e]])
                }
            }
        }
    }
}

//console.log(slotcombos)
symbols = ["1", "2", "3", "4", "T", "Q", "J", "K", "A"]
win = 0

fiverewards = {
    "1": 3,
    "2": 2,
    "3": 2,
    "4": 2,
    "A": 1,
    "K": 1,
    "Q": 1,
    "J": 1,
    "T": 1,
}
fourrewards = {
    "1": 1,
    "2": .5,
    "3": .5,
    "4": .5,
    "A": .2,
    "K": .2,
    "Q": .2,
    "J": .2,
    "T": .2,
}
threerewards = {
    "1": .3,
    "2": .2,
    "3": .2,
    "4": .2,
    "A": .1,
    "K": .1,
    "Q": .1,
    "J": .1,
    "T": .1,
}

for(n of slotcombos){
    for(s of symbols){
        g = n.map(f => f.join("").split(s).length - 1)
        if((g[0] > 0) && (g[1] > 0) && (g[2] > 0)){
            if((g[3] > 0)){
                if((g[4] > 0)){
                    win += (fiverewards[s] * g[0] * g[1] * g[2] * g[3] * g[4])
                }
                else{
                    win += (fourrewards[s] * g[0] * g[1] * g[2] * g[3])
                }
            }
            else{
                win += (threerewards[s] * g[0] * g[1] * g[2])
            }
        }
        else{
            //nothing
        }
    }
}


totalcombos = reels[0].length * reels[1].length * reels[2].length * reels[3].length * reels[4].length
console.log("RTP: " + (100 * win / totalcombos) + "%")