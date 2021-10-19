import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',  // 入口文件
  output: {  // 输出 options
    file: 'dist/index.js',  // 输出文件名
    format: 'cjs'       // 输出格式
  },
  plugins: [ // 增加 plugins
    resolve(),
    babel({
      exclude: 'node_modules/**' // 不对node_modules进行编译
    })
  ]
}
