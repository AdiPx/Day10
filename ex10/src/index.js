function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "U2",
            title: "POP",
            release_year: 1997,
            formats: {
            1: "CD",
            2: "8T",
            3: "LP"
            },
            platinum: true
        }   
     };
     return myMusic;
}
myFunction()[2];
module.exports = myFunction;