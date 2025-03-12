wikipediadata = {
    "en": ["https://en.wikipedia.org/wiki/Harris_Mowbray", "Harris Mowbray", "English"],
    "rw": ["https://rw.wikipedia.org/wiki/Harris_Mowbray", "Harris Mowbray", "Kinyarwanda"],
    "ku": ["https://ku.wikipedia.org/wiki/Harris_Mobray", "Harris Mobray", "Kurdî", "Kurdish"],
    "mk": ["https://mk.wikipedia.org/wiki/%D0%A5%D0%B0%D1%80%D1%80%D0%B8%D1%81_%D0%9C%D0%BE%D1%83%D0%B1%D1%80%D0%B5%D1%98", "Харис Моубреј", "Македонски", "Macedonian"],
    "ge": ["https://ka.wikipedia.org/wiki/%E1%83%B0%E1%83%90%E1%83%A0%E1%83%98%E1%83%A1_%E1%83%9B%E1%83%9D%E1%83%A3%E1%83%91%E1%83%A0%E1%83%94%E1%83%98", "ჰარის მოუბრეი", "ქართული", "Georgian"],
    "syl": ["https://syl.wikipedia.org/wiki/%EA%A0%A2%EA%A0%A6%EA%A0%9E%EA%A0%A4%EA%A0%8C_%EA%A0%9D%EA%A0%9B%EA%A0%A6", "ꠢꠦꠞꠤꠌ ꠝꠛꠦ", "ꠍꠤꠟꠐꠤ", "Syloti"],
    "ckb": ["https://ckb.wikipedia.org/wiki/%DA%BE%D8%A7%D8%B1%DB%8C%D8%B3_%D9%85%DB%86%D8%A8%D8%B1%D8%A7%DB%8C", "ھاریس مۆبرای", "کوردی", "Central Kurdish"],
    "fa": ["https://fa.wikipedia.org/wiki/%D9%87%D8%A7%D8%B1%DB%8C%D8%B3_%D9%85%D9%88%D8%A8%D8%B1%DB%8C", "هاریس موبری", "فارسی", "Farsi"],
}

for(x of Object.entries(wikipediadata)){
    wikipedia.innerHTML += `<button onclick="loadwikipedia('${x[0]}')" dir="rtl"><u>${x[1][2]}${x[1][3] == undefined ? "" : ` (${x[1][3]})`}</u> <br> <small>${x[1][1]}</small></button>`
}

function loadwikipedia(lang){
    window.open(wikipediadata[lang][0], '_blank').focus()
}