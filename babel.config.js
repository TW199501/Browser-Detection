// ----------------------------------------------
// 程式名稱: BlackBerry.js
// 日期: 2024-12-11
// 作者: John Doe
// 說明: 
// ----------------------------------------------

module.exports = {
    presets: [
        ['@babel/preset-env',{
            "targets" : {
                "chrome" : "88"
            }
        }]
    ],
    plugins: [
        '@babel/plugin-transform-runtime'
    ]
}