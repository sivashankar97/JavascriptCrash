const chokidar = require("chokidar");
const debounce = require("lodash.debounce");
const prog = require("caporal");

prog
  .version("0.01")
  .argument("[filename]", "name of a file to execute")
  .action((args) => {
    console.log(args);
  });

  prog.parse(process.argv);

const start = debounce(() => {
  console.log("Starting User programe");
}, 100);

chokidar
  .watch(".")
  .on("add", start)
  .on("change", () => console.log("file changed"))
  .on("unlink", () => console.log("file unlinked"));
