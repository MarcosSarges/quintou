#!/usr/bin/env node
"use_strict";
const { createReadStream } = require("fs");
const { Decoder } = require("lame");
const Speaker = require("speaker");

// if (process.versions.node.split(".")[0] === 10) {
createReadStream("./quintou.mp3")
  .pipe(new Decoder())
  .on("format", () =>
    console.log("QUINTOU PORRRAAAAAAA!!!!!!!!!!!!!!!!: github/MarcosSarges")
  )
  .pipe(new Speaker());
// } else {
//   console.log(`O script só roda na V10 ${JSON.stringify(process.versions)}`);
// }
