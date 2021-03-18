function myFunction() {
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: true,
    },
    002: {
        // Add a record here
      artist: "U2",
      title: "POP",
      release_year: 1997,
      formats: {
        1: "8T",
        2: "LP",
        3: "CD",
      },
    },
  };
  return myMusic;
}
myFunction()[2];
module.exports = myFunction;
