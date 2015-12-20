/*jshint multistr:true */

var text = "hey Rich waht is this tesxt all \
    about and does Rich tha tsapce sow up to \
asdf asdf Rich";
var myName = "Rich";
var hits = [];

for (i = 0; i < text.length; i ++) {
    if ( text[i] === "R" ) {
        for (var j = i; j < (i + myName.length); j++) {
            hits.push(text[j]);
        }
    }
}

if (hits.length === 0) {
    console.log("No hits");
} else {
    console.log(hits);
}
