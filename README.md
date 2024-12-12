

#### 下載 & 安裝!

該 Javascript 庫 / 模塊可以用於前端也可以用於後端 Nodejs 中。

1. 直接下載browser.js，然後使用 `<script>`標簽引入，可以得到全局函數 `browser`.
2. 使用 npm 進行包管理，具體為：

    > **npm install browser-tool**

然後使用 `require` 引入模塊

```js
var browser = require("browser-tool");

// 解析User-Agent
let info = browser.parse('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0');

// 獲取瀏覽器詳細信息 - 指定字段：'browser','system','device','gpu','network','battery','screen','language','timezone'
let networkInfo = await browser.getInfo(['network']);

// 獲取瀏覽器詳細信息 - 全部字段
let info = await browser.getInfo();
```
#### 返回
```js
{
    "browser": "Chrome",                // 瀏覽器名稱
    "browserVersion": "118.0.0.0",      // 瀏覽器版本
    "engine": "Blink",                  // 瀏覽器渲染引擎
    "system": "Windows",                // 操作係統名稱
    "systemVersion": '10',              // 操作係統版本
    "platform": "Win32",                // 係統平臺
    "screenFPS":60,                     // 螢幕刷新率
    "screenWidth":1920,                 // 螢幕寬度
    "screenHeight":800,                 // 螢幕高度
    "clientWidth":1920,                 // 瀏覽器可視區域寬度
    "clientHeight":640,                 // 瀏覽器可視區域高度
    "device": "PC",                     // 設備類型
    "devicePixelRatio":1,               // 設備分辨率比
    "deviceMemory":8,                   // 設備大緻記憶體大小
    "architecture": "x86",              // 芯片架構
    "bitness": 64,                      // CPU架構位數
    "gpu": "Google",                    // GPU廠商
    "gpuModel": "Vulkan 1.3.0",         // GPU型號
    "ip":'8.8.8.8',                     // IP位址
    "language": "zh_TW",                // 所用語言
    "network": "wifi",                  // 網路類型
    "timezone":'Asia/Shanghai',         // 所處時區
    "isWebview": false,                 // 是否Webview(僅Android有效)
    "isBot": false,                     // 是否搜索引擎蜘蛛程式
    "isTouch": false,                   // 是否為觸屏
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML,like Gecko) Chrome/119.0.0.0 Safari/537.36"
}
```

#### 瀏覽器支援情況
```js
// 判斷瀏覽器是否支援某種字體
let hasYaHei = browser.isSupport('font-family','Microsoft YaHei');

// 判斷瀏覽器是否支援WebGL
let isWebGL = browser.isSupport('webgl');
```

#### 獲取瀏覽器指紋
```js
// 瀏覽器各項綜合特徵指紋
let data = await browser.getFingerprint();
console.log('[瀏覽器指紋]',data.value);
```

<table>
    <caption><h3>browser - 瀏覽器</h3></caption>
    <thead>
        <tr><th>名稱</th><th>值</th><th>描述</th></tr>
    </thead>
    <tbody>
        <tr><td rowspan="21">國外瀏覽器</td><td>Chrome</td><td>穀歌瀏覽器</td></tr>
        <tr><td>Chromium</td><td>穀歌瀏覽器開源版</td></tr>
        <tr><td>IE</td><td>微軟IE瀏覽器</td></tr>
        <tr><td>Edge</td><td>微軟新一代瀏覽器</td></tr>
        <tr><td>Firefox</td><td>火狐瀏覽器</td></tr>
        <tr><td>Safari</td><td>蘋果系統預設瀏覽器</td></tr>
        <tr><td>Opera</td><td>Opera瀏覽器</td></tr>
        <tr><td>Opera GX</td><td>Opera GX瀏覽器</td></tr>
        <tr><td>Vivaldi</td><td>Opera聯合創始人PO</td></tr>
        <tr><td>Yandex</td><td>俄羅斯最大搜索引擎Yandex出品</td></tr>
        <tr><td>Brave</td><td>自帶網路廣告攔截的瀏覽器</td></tr>
        <tr><td>Arora</td><td>基於webkit和Qt的輕量級瀏覽器</td></tr>
        <tr><td>Lunascape</td><td>來自日本的三引擎瀏覽器</td></tr>
        <tr><td>QupZilla</td><td>輕量級跨平臺瀏覽器</td></tr>
        <tr><td>Coc Coc</td><td>越南搜索引擎瀏覽器</td></tr>
        <tr><td>Kindle</td><td>亞馬遜電子書</td></tr>
        <tr><td>Iceweasel</td><td>Firefox瀏覽器的Debian再PO版</td></tr>
        <tr><td>Konqueror</td><td>開源Web瀏覽器和文件管理器</td></tr>
        <tr><td>SeaMonkey</td><td>豐年蝦瀏覽器，Mozilla基金會建構</td></tr>
        <tr><td>Epiphany</td><td>GNOME 桌麵下的主力瀏覽器</td></tr>
        <tr><td>Headless</td><td>穀歌無頭瀏覽器</td></tr>
        <tr><td rowspan="16">國內瀏覽器</td><td>360</td><td>360瀏覽器(手機版)</td></tr>
        <tr><td>360SE</td><td>360安全瀏覽器</td></tr>
        <tr><td>360EE</td><td>360極速瀏覽器</td></tr>
        <tr><td>360AI</td><td>360AI瀏覽器</td></tr>
        <tr><td>360ENT</td><td>360企業安全瀏覽器</td></tr>
        <tr><td>UC</td><td>UC瀏覽器</td></tr>
        <tr><td>QQBrowser</td><td>QQ瀏覽器</td></tr>
        <tr><td>Baidu</td><td>百度瀏覽器</td></tr>
        <tr><td>Maxthon</td><td>傲遊瀏覽器</td></tr>
        <tr><td>Sogou</td><td>搜狗瀏覽器</td></tr>
        <tr><td>Liebao</td><td>獵豹瀏覽器</td></tr>
        <tr><td>2345Explorer</td><td>2345瀏覽器</td></tr>
        <tr><td>115Browser</td><td>115瀏覽器</td></tr>
        <tr><td>TheWorld</td><td>世界之窗瀏覽器</td></tr>
        <tr><td>Qiyu</td><td>旗魚瀏覽器</td></tr>
        <tr><td>Quark</td><td>誇克瀏覽器</td></tr>
        <tr><td rowspan="9">手機廠商</td><td>Huawei</td><td>華為瀏覽器</td></tr>
        <tr><td>HONOR</td><td>榮耀瀏覽器</td></tr>
        <tr><td>OPPO</td><td>OPPO瀏覽器</td></tr>
        <tr><td>Vivo</td><td>Vivo瀏覽器</td></tr>
        <tr><td>Xiaomi</td><td>小米瀏覽器</td></tr>
        <tr><td>Meizu</td><td>魅族瀏覽器</td></tr>
        <tr><td>OnePlus</td><td>一加瀏覽器</td></tr>
        <tr><td>Samsung</td><td>三星瀏覽器</td></tr>
        <tr><td>Lenovo</td><td>聯想瀏覽器</td></tr>
        <tr><td rowspan="13">客戶端</td><td>QQ</td><td>QQ客戶端</td></tr>
        <tr><td>Wechat</td><td>微信手機客戶端</td></tr>
        <tr><td>WechatWork</td><td>企業微信客戶端</td></tr>
        <tr><td>Taobao</td><td>淘寶手機客戶端</td></tr>
        <tr><td>Alipay</td><td>支付寶手機客戶端</td></tr>
        <tr><td>Weibo</td><td>微博手機客戶端</td></tr>
        <tr><td>Douban</td><td>豆瓣手機客戶端</td></tr>
        <tr><td>Suning</td><td>蘇甯易購手機客戶端</td></tr>
        <tr><td>iQIYI</td><td>愛奇藝手機客戶端</td></tr>
        <tr><td>DingTalk</td><td>釘釘手機客戶端</td></tr>
        <tr><td>Douyin</td><td>抖音客戶端</td></tr>
        <tr><td>Toutiao</td><td>頭條客戶端</td></tr>
        <tr><td>Facebook</td><td>Facebook客戶端</td></tr>
        <tr><td rowspan="9">爬蟲</td><td>Googlebot</td><td>Google爬蟲</td></tr>
        <tr><td>Baiduspider</td><td>百度爬蟲</td></tr>
        <tr><td>Sogouspider</td><td>搜狗爬蟲</td></tr>
        <tr><td>Bingbot</td><td>必應爬蟲</td></tr>
        <tr><td>360Spider</td><td>360爬蟲</td></tr>
        <tr><td>Bytespider</td><td>今日頭條爬蟲</td></tr>
        <tr><td>YisouSpider</td><td>神馬搜索爬蟲</td></tr>
        <tr><td>YodaoBot</td><td>有道搜索爬蟲</td></tr>
        <tr><td>YandexBot</td><td>Yandex搜索引擎爬蟲</td></tr>
    </tbody>
</table>

<table>
    <caption><h3>engine - 內核</h3></caption>
    <thead>
        <tr><th>值</th><th>描述</th></tr>
    </thead>
    <tbody>
        <tr><td>EdgeHTML</td><td>Edge瀏覽器內置引擎</td></tr>
        <tr><td>Trident</td><td>IE瀏覽器內置引擎</td></tr>
        <tr><td>Presto</td><td>Opera瀏覽器內置引擎</td></tr>
        <tr><td>WebKit</td><td>開源瀏覽器引擎</td></tr>
        <tr><td>Blink</td><td>Google基於WebKit開發引擎</td></tr>
        <tr><td>Gecko</td><td>Mozilla內置引擎</td></tr>
        <tr><td>Servo</td><td>Mozilla使用Rust開發的實驗性瀏覽器引擎</td></tr>
        <tr><td>KHTML</td><td>KDE網頁排版引擎</td></tr>
    </tbody>
</table>

<table>
    <caption><h3>system - 操作系統/h3></caption>
    <thead>
        <tr><th>值</th><th>描述</th></tr>
    </thead>
    <tbody>
        <tr><td>Windows</td><td>微軟操作系統</td></tr>
        <tr><td>Linux</td><td>Linux操作系統</td></tr>
        <tr><td>Ubuntu</td><td>Linux發行版之一</td></tr>
        <tr><td>FreeBSD</td><td>Linux發行版之一</td></tr>
        <tr><td>Debian</td><td>Linux發行版之一</td></tr>
        <tr><td>macOS</td><td>MacOS系統</td></tr>
        <tr><td>Android</td><td>Android系統</td></tr>
        <tr><td>iOS</td><td>IOS系統</td></tr>
        <tr><td>Windows Phone</td><td>微軟手機系統</td></tr>
        <tr><td>BlackBerry</td><td>黑莓機</td></tr>
        <tr><td>MeeGo</td><td>諾基亞與英特爾開源操作系統</td></tr>
        <tr><td>Symbian</td><td>諾基亞操作系統</td></tr>
        <tr><td>Chrome OS</td><td>Chrome OS</td></tr>
        <tr><td>WebOS</td><td>Palm公司操作系統</td></tr>
        <tr><td>HarmonyOS</td><td>華為操作系統</td></tr>
    </tbody>
</table>

<table>
    <caption><h3>device - 設備類型</h3></caption>
    <thead>
        <tr><th>值</th><th>描述</th></tr>
    </thead>
    <tbody>
        <tr><td>Desktop</td><td>電腦</td></tr>
        <tr><td>Tablet</td><td>平闆或PDA</td></tr>
        <tr><td>Mobile</td><td>手機</td></tr>
    </tbody>
</table>

<table>
    <caption><h3>platform - 硬體平臺</h3></caption>
    <thead>
        <tr><th>值</th><th>描述</th></tr>
    </thead>
    <tbody>
        <tr><td>Win32</td><td>Windows 32位</td></tr>
        <tr><td>Win64</td><td>Windows 64位</td></tr>
        <tr><td>WinCE</td><td>Windows CE</td></tr>
        <tr><td>iPhone</td><td>蘋果手機</td></tr>
        <tr><td>iPod</td><td>蘋果音樂播放軟體</td></tr>
        <tr><td>iPad</td><td>蘋果平闆</td></tr>
        <tr><td>Android</td><td>安卓係統</td></tr>
        <tr><td colspan="2">...</td></tr>
    </tbody>
</table>
