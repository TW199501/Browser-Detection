// 程式名稱: BlackBerry.js
// 日期: 2024-12-11
// 作者: John Doe
// 說明: 這是用於處理某些功能的程式

import resolve from '@rollup/plugin-node-resolve';          // 使用node_modules包
import terser from '@rollup/plugin-terser';                 // 程式碼壓縮
import babel from '@rollup/plugin-babel';                   // ECMAScript兼容
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync('./package.json'));     // 獲取package信息

// 版權信息
const repository = pkg.repository.url.replace(/(.+)(:\/\/.+)\.git$/,'https$2');
const now = new Date();
const date = (new Date(now.getTime()-now.getTimezoneOffset()*60000)).toISOString().substring(0,10);
const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * ${pkg.description}
 * ${pkg.homepage}
 *
 * Copyright (c) 2017-present, ${pkg.author}
 *
 * Released under the ${pkg.license} License
 * ${repository}
 *
 * Created on: ${date}
 */`;

const commonPlugins = [
    resolve(),
    terser(),
    babel({
        babelHelpers: 'runtime',
        exclude:'node_modules/**'
    })
];

 export default [{
    input: './src/browser.js',
    output:[{
        file: pkg.main,
        format: 'umd',
        name: 'browser',
        banner
    },{
        file: pkg.module,
        format: 'es',
        banner
    }],
    plugins: commonPlugins,
    watch: {
        exclude: 'node_modules/**'
    }
}];
