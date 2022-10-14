// Although small, making a class for fish makes it possible to give them the two properties relevant to them: name and value
class Fish {
  constructor(name, val) {
    this.name = name;
    this.val = val;
  }
}

// This entire function returns the relevant fish and their values for the current month, according to data we gathered in our analysis
function season() {
  let coolFish = []; // Temporary variable that holds relevant fish
  let fish = []; // Temporary variable that holds the "coordinates" of the relevant fish, as in [ID, value]

  // This if statement assigns data according to month
  if (month() == 1) {
    fish = [
      [3, 1],
      [23, 2],
      [27, 1],
      [30, 2],
      [32, 2],
    ];
  } else if (month() == 2) {
    fish = [
      [3, 2],
      [6, 1],
      [9, 1],
      [23, 1],
      [30, 2],
      [32, 2],
    ];
  } else if (month() == 3) {
    fish = [
      [3, 2],
      [6, 2],
      [8, 1],
      [9, 2],
      [11, 1],
      [12, 1],
      [15, 1],
      [17, 1],
      [18, 1],
      [19, 1],
      [23, 2],
      [28, 1],
      [30, 2],
      [32, 2],
    ];
  } else if (month() == 4) {
    fish = [
      [1, 1],
      [3, 1],
      [4, 1],
      [6, 2],
      [8, 2],
      [9, 2],
      [10, 1],
      [11, 2],
      [12, 2],
      [15, 2],
      [17, 2],
      [18, 2],
      [19, 2],
      [20, 1],
      [23, 2],
      [26, 1],
      [28, 2],
      [29, 1],
      [30, 2],
      [32, 2],
    ];
  } else if (month() == 5) {
    fish = [
      [1, 2],
      [2, 1],
      [4, 2],
      [5, 2],
      [6, 2],
      [8, 2],
      [9, 2],
      [10, 2],
      [11, 1],
      [12, 2],
      [13, 1],
      [14, 1],
      [15, 2],
      [17, 2],
      [18, 2],
      [19, 1],
      [20, 2],
      [22, 1],
      [23, 2],
      [24, 2],
      [25, 1],
      [26, 2],
      [28, 2],
      [29, 2],
      [30, 2],
      [31, 1],
      [32, 2],
    ];
  } else if (month() == 6) {
    fish = [
      [1, 2],
      [2, 2],
      [4, 2],
      [5, 1],
      [6, 2],
      [7, 1],
      [8, 2],
      [9, 2],
      [10, 2],
      [12, 1],
      [13, 2],
      [14, 1],
      [15, 2],
      [16, 1],
      [17, 2],
      [18, 2],
      [20, 2],
      [21, 1],
      [22, 2],
      [24, 2],
      [25, 2],
      [26, 2],
      [28, 2],
      [29, 2],
      [30, 2],
      [31, 2],
      [32, 2],
    ];
  } else if (month() == 7) {
    fish = [
      [1, 2],
      [2, 2],
      [3, 1],
      [4, 1],
      [5, 1],
      [6, 2],
      [7, 1],
      [8, 2],
      [9, 2],
      [10, 2],
      [12, 1],
      [13, 2],
      [14, 2],
      [15, 2],
      [16, 2],
      [17, 2],
      [18, 2],
      [20, 2],
      [21, 2],
      [22, 2],
      [24, 2],
      [25, 2],
      [26, 2],
      [28, 2],
      [29, 2],
      [31, 2],
      [32, 2],
    ];
  } else if (month() == 8) {
    fish = [
      [1, 2],
      [2, 2],
      [3, 2],
      [5, 2],
      [6, 2],
      [7, 2],
      [8, 1],
      [9, 2],
      [10, 2],
      [11, 2],
      [12, 2],
      [13, 2],
      [14, 2],
      [15, 1],
      [16, 2],
      [17, 1],
      [18, 2],
      [20, 1],
      [21, 2],
      [22, 2],
      [24, 2],
      [25, 2],
      [26, 1],
      [27, 1],
      [28, 2],
      [29, 2],
      [31, 2],
      [32, 2],
    ];
  } else if (month() == 9) {
    fish = [
      [1, 2],
      [2, 2],
      [3, 2],
      [4, 2],
      [5, 2],
      [6, 2],
      [7, 2],
      [9, 2],
      [10, 1],
      [11, 2],
      [12, 2],
      [13, 2],
      [14, 2],
      [16, 2],
      [18, 2],
      [19, 1],
      [20, 2],
      [21, 1],
      [22, 2],
      [23, 2],
      [24, 2],
      [25, 2],
      [27, 2],
      [28, 2],
      [29, 2],
      [31, 2],
      [32, 2],
    ];
  } else if (month() == 10) {
    fish = [
      [1, 1],
      [2, 1],
      [3, 2],
      [4, 2],
      [5, 2],
      [6, 2],
      [7, 2],
      [9, 1],
      [11, 2],
      [12, 1],
      [13, 1],
      [14, 2],
      [16, 2],
      [18, 2],
      [19, 2],
      [20, 2],
      [21, 1],
      [22, 1],
      [23, 2],
      [24, 2],
      [25, 2],
      [27, 2],
      [28, 1],
      [30, 2],
      [31, 2],
      [32, 2],
    ];
  } else if (month() == 11) {
    fish = [
      [3, 2],
      [4, 1],
      [5, 1],
      [6, 1],
      [7, 1],
      [14, 1],
      [16, 1],
      [19, 2],
      [20, 1],
      [21, 2],
      [23, 2],
      [24, 1],
      [25, 1],
      [27, 2],
      [30, 2],
      [31, 1],
      [32, 2],
    ];
  } else if (month() == 12) {
    fish = [
      [3, 1],
      [14, 1],
      [19, 1],
      [21, 2],
      [23, 2],
      [27, 2],
      [30, 2],
      [32, 2],
    ];
  } else {
    console.log("Something is very, VERY wrong"); // If month() for some reason stops working, this will be logged
  }

  // Changes the ID's to names, and puts the names and values into a list of Fish objects
  for (i = 0; i < fish.length; i++) {
    coolFish.push(
      new Fish(
        [
          "Aborre", // 1
          "Brasen", // 2
          "Bækørred", // 3
          "Gedde", // 4
          "Havkat", // 5
          "Havørred", // 6
          "Helt", // 7
          "Hornfisk", // 8
          "Ising", // 9
          "Karpe", // 10
          "Laks", // 11
          "Lange", // 12
          "Lyssej", // 13
          "Makrel", // 14
          "Multe", // 15
          "Pighaj", // 16
          "Pighvar", // 17
          "Regnbueørred", // 18
          "Rudskalle", // 19
          "Rødspætte", // 20
          "Sandart", // 21
          "Sej", // 22
          "Sild", // 23
          "Skalle", // 24
          "Skrubbe", // 25
          "Slethvarre", // 26
          "Stalling", // 27
          "Steelhead", // 28
          "Suder", // 29
          "Torsk", // 20
          "Ål", // 31
          "Ålekvabbe", // 32
        ][fish[i][0] - 1],
        fish[i][1]
      )
    );
  }

  // Returns the temporary variable with relevant fish
  return coolFish;
}
