export const fantomenkrypto = (instring, key)  => {
    var state = key; 
    var stringlen = instring.length;
    var outstr = [];
    for (var i = 0; i < stringlen; i++) {
        outstr[i] = instring.charAt(i)
    }
    for (var i = 0; i < stringlen; i++) {
        var p1 = state * (i + 67)  + (state % 13043);
        var p2 = state * (i + 317) + (state % 48457);
        state = (p1 + p2) % 4639619;
        p1 %= stringlen;
        p2 %= stringlen;
        var tmp = outstr[p1];
        outstr[p1] = outstr[p2];
        outstr[p2] = tmp;
    };
    return outstr.join('').split('%').join('\u007f').split('#1').join('%').split('#0').join('#').split('\u007f') // \u007f == DEL
}

export const findStrings = (strings) => {
    for(let i=0;i<strings.length;i++){
        let str = strings[i];
        if(str.slice(-1) == '|'){
            return {topologyLongKey:strings[i], topologyShortKey:strings[i+1]}
        }
    }
}