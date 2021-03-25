#!/usr/bin/env node
"use_strict";
const { createReadStream } = require("fs");
const { Decoder } = require("lame");
const Speaker = require("speaker");

createReadStream("./quintou.mp3")
  .pipe(new Decoder())
  .on("format", () =>
    console.log("QUINTOU PORRRAAAAAAA!!!!!!!!!!!!!!!!: github/MarcosSarges")
  )
  .pipe(new Speaker());
