const fs = require("fs");
const lame = require("lame");
const Speaker = require("speaker");

fs.createReadStream("./quintou.mp3")
  .pipe(new lame.Decoder())
  .on("format", () =>
    console.log("QUINTOU PORRRAAAAAAA!!!!!!!!!!!!!!!!: github/MarcosSarges")
  )
  .pipe(new Speaker());
