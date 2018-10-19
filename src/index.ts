import fs from "fs";
import path from "path";
import * as webpack from "webpack";

interface Options {
  filename: string;
}

class HumansWebpackPlugin {
  public options: Options;

  constructor(options: Options) {
    this.options = (Object as any).assign({
      filename: "humans.txt",
    }, options);
  }

  public apply(compiler: webpack.Compiler) {
    const plugin = "HumansWebpackPlugin";
    compiler.hooks.emit.tapAsync(plugin, (compilation, callback) => {
      const outputPath: string = (compiler.options.output && compiler.options.output.path)
        ? compiler.options.output.path
        : "dist";
      fs.writeFileSync(path.relative(outputPath, this.options.filename), "text");
      callback();
    });
  }
}

module.exports = HumansWebpackPlugin;
