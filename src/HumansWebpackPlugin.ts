import * as webpack from "webpack";

export interface HumansWebpackPluginOptions {
  filename: string;
}

export default class HumansWebpackPlugin {
  public options: HumansWebpackPluginOptions;

  constructor(options: HumansWebpackPluginOptions) {
    this.options = (Object as any).assign({
      filename: "humans.txt",
    }, options);
  }

  public apply(compiler: webpack.Compiler) {
    const plugin = "HumansWebpackPlugin";
    compiler.hooks.emit.tapAsync(plugin, (compilation, callback) => {
      const text = `
[TODO: implement generator]
/* TEAM */
Your title: Your name.
Site: email, link to a contact form, etc.
Twitter: your Twitter username.
Location: City, Country.

/* THANKS */
Name: name or url

/* SITE */
Last update: YYYY/MM/DD
Standards: HTML5, CSS3,..
Components: Modernizr, jQuery, etc.
Software: Software used for the development
`;
      compilation.assets[this.options.filename] = {
        source: () => text,
        size: () => text.length
      };
      callback();
    });
  }
}
