import * as webpack from "webpack";

interface Options {
  template: string;
}

class HumansWebpackPlugin {
  options: Options;

  constructor(options: Options) {
    this.options = options
  }

  apply(compiler: webpack.Compiler) {

  }
}

module.exports = HumansWebpackPlugin;
