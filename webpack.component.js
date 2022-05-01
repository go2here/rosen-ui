const path = require('path')
const glob = require('glob')
const { VueLoaderPlugin } = require('vue-loader')
const list = {}

async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`)
  console.log(files)
  for (const file of files) {
    const component = file.split(/[/.]/)[2]
    console.log('component:', component)
    list[component] = `./${file}`
  }
  console.log(list)
}

makeList('components/lib', list)

module.exports = {
  mode: 'development',
  entry: list,
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
        },
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    filename: '[name].umd.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'mui',
    libraryTarget: 'umd',
  },
}
