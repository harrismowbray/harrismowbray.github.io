/*
function colorconvert(type){
    if(type == "rgb"){
        RGB = [rgbr.value, rgbg.value, rgbb.value]
        rgb = [rgbr.value, rgbg.value, rgbb.value].map(x => x / 255)
        css.value = RGB.map(x => (x <= 15 ? "0" : "") + (+x).toString(16)).join("").toUpperCase()
        K = 1 - (Math.max(...rgb))
        C = K == 1 ? 0 : (1 - rgb[0] - K) / (1 - K)
        M = K == 1 ? 0 : (1 - rgb[1] - K) / (1 - K)
        Y = K == 1 ? 0 : (1 - rgb[2] - K) / (1 - K)
        cmykk.value = Math.round(K * 1000) / 1000
        cmykc.value = Math.round(C * 1000) / 1000
        cmykm.value = Math.round(M * 1000) / 1000
        cmyky.value = Math.round(Y * 1000) / 1000

        Cmax = Math.max(...rgb)
        Cmin = Math.min(...rgb)
        Delta = Cmax - Cmin

        /*
        L = (Cmax + Cmin) / 2
        if(Delta == 0){
            H = 0
            S = 0
        }
        else{
            if(Cmax == rgb[0]){
                H = 60 * (((rgb[1] - rgb[2]) / Delta) % 6)
            }
            else if(Cmax == rgb[1]){
                H = 60 * (((rgb[2] - rgb[0]) / Delta) + 2)
            }
            else{
                H = 60 * (((rgb[0] - rgb[1]) / Delta) + 4)
            }
            S = Delta / (1 - Math.abs(2 * L - 1))
        }
        hslh.value = Math.round(H)
        hsls.value = Math.round(S * 100)
        hsll.value = Math.round(L * 100)

        //
        if(Delta == 0){
            H = 0
        }
        else if(Cmax == rgb[0]){
            H = 60 * (((rgb[1] - rgb[2]) / Delta) % 6)
        }
        else if(Cmax == rgb[1]){
            H = 60 * (((rgb[2] - rgb[0]) / Delta) + 2)
        }
        else{
            H = 60 * (((rgb[0] - rgb[1]) / Delta) + 4)
        }

        if(Cmax == 0){
            S = 0
        }
        else{
            S = Delta / Cmax
        }
        V = Cmax
        hsvh.value = Math.round(H)
        hsvs.value = Math.round(S * 100)
        hsvv.value = Math.round(V * 100)
        //
        
        hwbh.value = hsvh.value
        hwbw.value = Math.round(((1 - hsvs.value / 100) * hsvv.value / 100) * 100)
        hwbb.value = Math.round((1 - hsvv.value / 100) * 100)
    }
    else{
        if(type == "css"){
            css.value = css.value.toUpperCase()
            rgbr.value = parseInt(css.value.slice(0,2), 16)
            rgbg.value = parseInt(css.value.slice(2,4), 16)
            rgbb.value = parseInt(css.value.slice(4,6), 16)
            colorconvert("rgb")
        }
        else if(type == "cmyk"){
            rgbr.value = Math.round(255 * (1 - cmykc.value) * (1 - cmykk.value))
            rgbg.value = Math.round(255 * (1 - cmykm.value) * (1 - cmykk.value))
            rgbb.value = Math.round(255 * (1 - cmyky.value) * (1 - cmykk.value))
            colorconvert("rgb")
        }
        else if(type.startsWith("h")){
            if(type == "hsl"){
                C = (1 - Math.abs(2 * hsll.value / 100 - 1)) * hsls.value / 100
                X = C * (1 - Math.abs((hslh.value / 60) % 2 - 1))
                M = hsll.value / 100 - C / 2
            }
            else{
                if(type == "hwb"){
                    hsvh.value = hwbh.value
                    hsvs.value = 100 - (hwbw.value / (100 - hwbb.value))
                    hsvv.value = 100 - hwbb.value
                }
                C = hsvv.value / 100 * hsvs.value / 100
                X = C * (1 - Math.abs((hsvh.value / 60) % 2 - 1))
                M = hsvv.value / 100 - C
            }
            if(document.getElementById(type + "h").value < 60){
                [RR, GG, BB] = [C, X, 0]
            }
            else if(document.getElementById(type + "h").value < 120){
                [RR, GG, BB] = [X, C, 0]
            }
            else if(document.getElementById(type + "h").value < 180){
                [RR, GG, BB] = [0, C, X]
            }
            else if(document.getElementById(type + "h").value < 240){
                [RR, GG, BB] = [0, X, C]
            }
            else if(document.getElementById(type + "h").value < 300){
                [RR, GG, BB] = [X, 0, C]
            }
            else{
                [RR, GG, BB] = [C, 0, X]
            }
            rgbr.value = Math.round((+RR + +M) * 255)
            rgbg.value = Math.round((+GG + +M) * 255)
            rgbb.value = Math.round((+BB + +M) * 255)
            colorconvert("rgb")
        }
    }
    sample.style.backgroundColor = css.value
}
*/

A = {
    "RGB": {
        Red: "",
        Green: "",
        Blue: "",
    },
    "CMYK": {
        Cyan: 0,
        Magenta: 0,
        Yellow: 0,
        Key: 0,
    },
}

const hexadecimal = "0123456789ABCDEF"


function colorConvert(){
    //erase color warnings
    colorsample.style.display = "none"
    colorwarnings.innerHTML = ""
    coldata = entercolor.value.trim().toUpperCase()
    if(coldata == "") return 0
    //determine data type and determine if erroneous
    if(coldata.startsWith("RGB") || coldata.startsWith("#")){ //integrate hastags
        colors = coldata.startsWith("#") ? [coldata.slice(1, 3), coldata.slice(3, 5), coldata.slice(5, 7)] : coldata.slice(4, -1).split(",").map(x=>x.trim())
        if(coldata.startsWith("RGB") && (coldata[3] != "(" || coldata[coldata.length - 1] != ")")){
            colorwarnings.innerHTML = "Put the RGB values in between parentheses"
        }
        else if(colors.length != 3 && coldata.startsWith("RGB")){
            colorwarnings.innerHTML = "There should three RGB values separated by commas"
        }
        else if(coldata.startsWith("RGB") && !(colors.map(x => x >= 0 && x <= 255  && !x.includes(".") && x != "").reduce((x, y) => x && y))){
            colorwarnings.innerHTML = "All RGB values must be integers (no decimal points) between 0 and 255"
        }
        else if(coldata.length != 7 && coldata.startsWith("#")){
            colorwarnings.innerHTML = "This hexcode should be seven characters long (six not including the #)"
        }
        else if(coldata.startsWith("#") && isNaN(parseInt(coldata.slice(1), 20))){
            colorwarnings.innerHTML = "Only the characters 0-9 & A-F can be used in Hexcodes"
        }
        else{
            if(coldata.startsWith("RGB")){
                A.RGB.Red = colors[0]
                A.RGB.Green = colors[1]
                A.RGB.Blue = colors[2]
                hexcodeize(Object.values(A.RGB))
            }
            else{ //hexcode
                //FIXXX
                colors = [coldata.slice(1, 3), coldata.slice(3, 5), coldata.slice(5, 7)]
                newcolors = colors.map(x => hexadecimal.indexOf(x[0]) * 16 + hexadecimal.indexOf(x[1]))
                A.RGB.Red = newcolors[0]
                A.RGB.Green = newcolors[1]
                A.RGB.Blue = newcolors[2]
                colorwarnings.innerHTML += `RGB: <b>rgb(${A.RGB.Red}, ${A.RGB.Green}, ${A.RGB.Blue}</b>)<br>`
                for(x in colors){
                    colorwarnings.innerHTML += 
                    `<span class="colormath">${["Red", "Green", "Blue"][x]}: ${isNaN(colors[x][0]) ? `<u>${colors[x][0]}</u> (<b>${hexadecimal.indexOf(colors[x][0])}</b>)` : `<b><u>${colors[x][0]}</b></u>`} × 16 + ${isNaN(colors[x][1]) ? `<u>${colors[x][1]}</u> (<b>${hexadecimal.indexOf(colors[x][1])}</b>)` : `<b><u>${colors[x][1]}</b></u>`} = <b>${hexadecimal.indexOf(colors[x][0]) * 16 + hexadecimal.indexOf(colors[x][1])}</b><br>`
                }
                //
            }

            //
            A.CMYK.Key = Math.round((1 - (Math.max(A.RGB.Red, A.RGB.Green, A.RGB.Blue) / 255)) * 10 ** 5) / 10 ** 5
            A.CMYK.Cyan = Math.round( 
                ((1 - (A.RGB.Red / 255) - A.CMYK.Key) / (1 - A.CMYK.Key)) * 10 ** 3
            ) / 10 ** 3
            A.CMYK.Magenta = Math.round(((1 - (A.RGB.Green / 255) - A.CMYK.Key) / (1 - A.CMYK.Key)) * 10 ** 3) / 10 ** 3
            A.CMYK.Yellow = Math.round(((1 - (A.RGB.Blue / 255) - A.CMYK.Key) / (1 - A.CMYK.Key)) * 10 ** 3) / 10 ** 3
            colorwarnings.innerHTML += `CMYK: <b>cmyk(${A.CMYK.Cyan}, ${A.CMYK.Magenta}, ${A.CMYK.Yellow}, ${A.CMYK.Key}</b>)<br>`
            colorwarnings.innerHTML += `<span class="colormath">Key: 1 - (max(${A.RGB.Red}, ${A.RGB.Green}, ${A.RGB.Blue}) / 255) ≈ ${A.CMYK.Key}</span><br>`
            colorwarnings.innerHTML += `<span class="colormath">Cyan: (1 - (${A.RGB.Red} / 255) - ${A.CMYK.Key}) / (1 - ${A.CMYK.Key}) ≈ ${A.CMYK.Cyan}</span><br>`
            colorwarnings.innerHTML += `<span class="colormath">Magenta: (1 - (${A.RGB.Green} / 255) - ${A.CMYK.Key}) / (1 - ${A.CMYK.Key}) ≈ ${A.CMYK.Magenta}</span><br>`
            colorwarnings.innerHTML += `<span class="colormath">Yellow: (1 - (${A.RGB.Blue} / 255) - ${A.CMYK.Key}) / (1 - ${A.CMYK.Key}) ≈ ${A.CMYK.Yellow}</span><br>`
            /*
            */
        }        
    }
    /*
    else if(coldata.startsWith("#")){
        if(coldata.length != 7){
            colorwarnings.innerHTML = "This hexcode should be seven characters long (six not including the #)"
        }
        else if(isNaN(parseInt(coldata.slice(1), 20))){
            colorwarnings.innerHTML = "Only the characters 0-9 & A-F can be used in Hexcodes"
        }
        else{
            colors = [coldata.slice(1, 3), coldata.slice(3, 5), coldata.slice(5, 7)]
            colorwarnings.innerHTML += `RGB: <b>rgb(${colors.map(x => hexadecimal.indexOf(x[0]) * 16 + hexadecimal.indexOf(x[1])).join(", ")}</b>)<br>`
            for(x in colors){
                colorwarnings.innerHTML += 
                `<span class="colormath">${["Red", "Green", "Blue"][x]}: ${isNaN(colors[x][0]) ? `<u>${colors[x][0]}</u> (<b>${hexadecimal.indexOf(colors[x][0])}</b>)` : `<b><u>${colors[x][0]}</b></u>`} × 16 + ${isNaN(colors[x][1]) ? `<u>${colors[x][1]}</u> (<b>${hexadecimal.indexOf(colors[x][1])}</b>)` : `<b><u>${colors[x][1]}</b></u>`} = <b>${hexadecimal.indexOf(colors[x][0]) * 16 + hexadecimal.indexOf(colors[x][1])}</b><br>`
            }
            colorsample.style.display = "block"
            colorsample.style.backgroundColor = coldata
        }
    }
    */
    else if(coldata.startsWith("CMYK")){
        colors = coldata.slice(5, -1).split(",").map(x=>x.trim())
        if(coldata[4] != "(" || coldata[coldata.length - 1] != ")"){
            colorwarnings.innerHTML = "Put the CMYK values in between parentheses"
        }
        else if(colors.length != 4){
            colorwarnings.innerHTML = "There should four CMYK values separated by commas"
        }
        else if(!(colors.map(x => x >= 0 && x <= 1 && x != "").reduce((x, y) => x && y))){
            colorwarnings.innerHTML = "All values must be between 0 and 1"
        }
        else{
            A.CMYK.Cyan = colors[0]
            A.CMYK.Magenta = colors[1]
            A.CMYK.Yellow = colors[2]
            A.CMYK.Key = colors[3]
            A.RGB.Red = Math.round(255 * (1 - A.CMYK.Cyan) * (1 - A.CMYK.Key))
            A.RGB.Green = Math.round(255 * (1 - A.CMYK.Magenta) * (1 - A.CMYK.Key))
            A.RGB.Blue = Math.round(255 * (1 - A.CMYK.Yellow) * (1 - A.CMYK.Key))
            colorwarnings.innerHTML += `RGB: <b>rgb(${A.RGB.Red}, ${A.RGB.Green}, ${A.RGB.Blue}</b>)<br>`
            colorwarnings.innerHTML += `<span class="colormath">Red: 255 × (1 - ${colors[0]}) × (1 - ${colors[3]}) → 255 × ${1 - colors[0]} × ${1 - colors[3]} ≈ <b>${Math.round(255 * (1 - colors[0]) * (1 - colors[3]))}</b></span><br>`
            colorwarnings.innerHTML += `<span class="colormath">Green: 255 × (1 - ${colors[1]}) × (1 - ${colors[3]}) → 255 × ${1 - colors[1]} × ${1 - colors[3]} ≈ <b>${Math.round(255 * (1 - colors[1]) * (1 - colors[3]))}</b></span><br>`
            colorwarnings.innerHTML += `<span class="colormath">Blue: 255 × (1 - ${colors[2]}) × (1 - ${colors[3]}) → 255 × ${1 - colors[2]} × ${1 - colors[3]} ≈ <b>${Math.round(255 * (1 - colors[2]) * (1 - colors[3]))}</b></span><br>`
            hexcodeize(Object.values(A.RGB))
        }
    }
    else{
        colorwarnings.innerHTML = "Unrecognized data type! Try CMYK, Hexcode, or RGB"
    }

    //if erroneous or unrecognized data type, stop

    //then convert
}

function hexcodeize(clz){
    hexcode = "#" + clz.map(x => (x <= 15 ? "0" : "") + (+x).toString(16)).join("").toUpperCase()
    colorwarnings.innerHTML += "Hexcode: <b>" + hexcode + "</b><br>"
    for(x in clz){
        colorwarnings.innerHTML += 
        `<span class="colormath">${["Red", "Green", "Blue"][x]}: ${clz[x]} ÷ 16 = 
        ${Math.floor(clz[x] / 16) > 9 ? 
            `<u>${Math.floor(clz[x] / 16)}</u> (<b>${hexadecimal[Math.floor(clz[x] / 16)]}</b>)` 
            : `<b><u>${Math.floor(clz[x] / 16)}</u></b>`}
        & ${clz[x] % 16 > 9 ? `<u>${clz[x] % 16}</u>/16 (<b>${hexadecimal[clz[x] % 16]}</b>)` : `<b><u>${clz[x] % 16}</u></b>/16`}; <b>"${hexadecimal[Math.floor(clz[x] / 16)]}${hexadecimal[clz[x] % 16]}"</b></span><br>`
    }
    colorsample.style.display = "block"
    colorsample.style.backgroundColor = hexcode
}