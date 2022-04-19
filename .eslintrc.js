module.exports = {
  root: true, // ESLint 一旦发现配置文件有"root":true，它就会停止在父级目录中寻找

  // 定义了一组预定义的全局变量，可用的环境包
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  // 使用blobals 指出要使用的全局变量，将变量设置为true 将允许变量被重写 或 false 将不允许被重写
  globals: {
    __DEV__: false,
    __PRO__: false,
    __PACK_DATA__: false,
  },
  // 基础配置规则，按顺序覆盖
  extends: [
    'eslint:recommended',
    'plugin:eslint-plugin-prettier/recommended',
    // 'plugin:prettier/recommended', // 添加到数组的最后一个元素
  ],
  plugins: ['prettier'],

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module',
    // 想使用的额外语音特性
    ecmaFeatures: {
      globalReturn: false, // 允许在全局作用域下使用 return 语句
      impliedStrict: true, // 启用全局 strict mode
      jsx: true, // 启用 jsx
    },
  },

  // add your custom rules here
  //it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
    'no-var': 2, // 禁止使用var
    'prefer-const': 1, // 检测能使用const就使用const
    'no-prototype-builtins': 1, // 如果要使用原型链上的方法，使用Object.prototpe.hasOwnProperty,禁止使用实例化对象调用obj.hasOwnProperty
    'no-debugger': 1, // debugger报警警告
    'no-empty': ['error', { allowEmptyCatch: true }], // debugger报警警告
    'no-unused-vars': ['warn', { varsIgnorePattern: '^_+$' }], // 不检测变量 _ __ 等
    'prettier/prettier': [
      'error',
      {
        semi: false, // 是否句末加分号
        trailingComma: 'all', // 尾随逗号
        singleQuote: true, // 是否用单引号
        printWidth: 120, // 换行长度，默认80
        endOfLine: 'auto',
        bracketSpacing: true, // 括号间距
        jsxSingleQuote: true, // 在jsx中使用单引号而不是双引号
      },
    ],
  },
  overrides: [
    // js文件
    {
      files: ['*.js', '*.jsx'],
      extends: [],
    },
    // vue文件
    {
      files: ['*.vue'],
      extends: ['plugin:vue/essential'],
      rules: {
        'vue/max-attributes-per-line': 0,
        'vue/no-mutating-props': 0,
      },
    },
  ],
}
