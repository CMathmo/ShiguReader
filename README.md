# ShiguReader

通过Chrome或者iPad轻松阅读本地漫画。

##### Screenshot

![screenshot-01](screenshot/01.png)
![screenshot-02](screenshot/02.png)
![screenshot-03](screenshot/03.png)

##### Demo Video
[iPad使用](https://www.bilibili.com/video/BV1Mt4y1m7qU)  
[PC使用](https://www.bilibili.com/video/BV1t64y1u729/)
[iPhone使用](https://www.bilibili.com/video/BV1xt4y1U73L/)  

##### Features

* 看电脑文件夹里面每个zip包的封面,方便阅览。
* 把子文件夹的文件都展示在一个页面。
* 提供各种排序和筛选。比如，C97的文件排在C96的文件之前。
* 看特定作者或者同人类型的全部文件。分析这些文件分别在哪些文件夹。
* 提供移动删除文件功能。方便看完删或者移动。
* 全局统计文件大小，各时期的文件数量。
* 支持手机和平板。不需要USB接线，手机不需要安装任何东西，任意浏览器直接可以阅读。
* 播放zip文件里的音乐文件。
* 配色和旧版熊猫网的一模一样，亲切熟悉。
* 服务器端支持windows和*nix。*nix需要用户自己安装7zip，并加到cmd路径下。
* 客户端支持除IE和Edge的主流浏览器。比如电脑的Chrome和iPad的safari。


##### Quick Start

###### 中文

```bash
# 不要跳过下面任何一个步骤

# 没有nodejs,麻烦先安装nodejs https://nodejs.org/

# 把代码clone或者github右上角下载到本地
git clone https://github.com/hjyssg/ShiguReader

# 手动修改设置
# 用任意文本编辑器手动修改src/user-config.js用户文件设置  

## 重要:windows用户必须的额外步骤：
## 因为windows的默认cmd很不好用
## 请前往 https://git-scm.com/ 安装git顺便安装上git bash
## 然后以下命令行都请使用Git Bash 

# 命令行进入文件夹。比如
# cd F:\ShiguReader

# 安装依赖
# 最近gitub可能被墙， 所以用taobao的源。
# install会比较慢，要耐心
npm install --registry=http://registry.npm.taobao.org

# install中途要是node-sass报错
# 看一下issue页面。有解决办法

# 启动服务器
# 会有点慢，差不多一两分钟。耐心
npm run dev

# 打开 http://localhost:3000/

# 如果要在iphone ipad等移动设备看漫画
# 用cmd的ipconfig得到pc的ip地址
# 然后在移动设备的浏览器上 http://pc的ip地址:3000/

# 打开网页以后，就可以用了。
# 如果你对页面加载速度不满意，前往Admin页面Pregenerate Thumbnail。可以大幅度提高页面加载速度。
```

###### English

```bash
# If you do not have nodejs installed, please go to https://nodejs.org/

# Clone the repository or download
git clone https://github.com/hjyssg/ShiguReader

## change user config
## modify src/user-config.js accoding to your own comic files location

## 2020/03/07
## windows default cmd is not working
## Please use Git Bash 

# Go inside the directory
cd ShiguReader

# Install dependencies
npm install

# Start development server
npm run dev

# open http://localhost:3000/

# If you want to open it on your iPhone, iPad or other mobile device 
# in cmd, ipconfig
# find your pc LAN ip address
# In your mobile device browser, open  http://pc_ip_address:3000/
```

##### 注意事项
当src/user-config.js的module.exports.readable_cache_folder_name = true的时候
你可能需要如下设置。但有s1坛友反映会导致其他非unicode软件乱码。

windows语言设置:
![unicode setting](screenshot/unicode-setting.png)

##### 和tamper monkey一起使用
    把EhentaiHighighliger.js添加到tamper monkey。
    在你上绅士网的时候，该脚本会通过与后端服务器通信。帮助你知道文件下载过与否。

##### 热键
漫画页面  
enter: 全屏  
AD和左右方向键: 翻页  
+- 缩放  

##### 联系方式
qq 398355565
