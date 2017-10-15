var table;

function left(a, x, y) {
    return table[x][table[a][y]]
}

function right(a, x, y) {
    return table[table[x][a]][y]
}

function cayleyTable(a, op) {
    var help = [];
    var k = 0;
    for (var i = 0, len = Object.values(table).length; i < len; i++) {
        if(i == Object.values(table.a).length) k++;
        const x = table[String.fromCharCode(97 + k)][String.fromCharCode(97 + i)];
        for (var j = 0, len2 = Object.keys(table).length; j < len2; j++) {
            const y = table[String.fromCharCode(97 + i)][String.fromCharCode(97 + j)];
            if (op === "right"){
                help.push(right(a, x, y));
            }else{
                help.push(left(a, x, y));
            }
        }
    }
    return help;
}

function is_associative(tab) {
    table = tab
    for (var i = 0, len = Object.values(table).length; i < len; i++){
        const lef = cayleyTable("a", "left");
        const rig = cayleyTable("a", "right");
        if (lef.every(function(u, i) {
            return u === rig[i];
        })){
            //console.log(true)
        } else {
            return false;
        }
    }
    return true;
}

module.exports.is_associative = is_associative;