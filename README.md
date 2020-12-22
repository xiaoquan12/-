## 旅游项目

#### 用到的 vscode 插件

```
prettier vetur
```
#### 安装项目

```
npm install
```

#### 运行项目

```
npm run dev
```

#### 打包项目

```
npm run build
```

#### 目录结构

```
|-- 
    |-- src
        |-- App.vue
        |-- main.js
        |-- manifest.json  小程序发布配置
        |-- pages.json  小程序页面配置
        |-- uni.scss
        |-- api
        |   |-- index.js
        |   |-- modules
        |       |-- common.js    //请求接口
        |-- components
        |   |-- bottomBuy.vue     //商品详情底部购买组件
        |   |-- rowShop.vue     //类似购物车横向商品组件
        |   |-- verticalShop.vue    //类似首页纵向商品组件
        |   |-- Calendar.vue     //封装日历组件
        |   |-- WxBindPhoneButton.vue  //封装获取微信手机号组件
        |   |-- WxLoginButton.vue     //封装微信登录组件
        |   |-- WxShareButton.vue     //封装微信分享组件
        |   |-- mpvue-calendar        //日历组件
        |   |   |-- browser-style.css
        |   |   |-- calendarinit.js
        |   |   |-- icon.css
        |   |   |-- mpvue-calendar.vue
        |   |   |-- style.css
        |   |-- uni-popup            //弹框组件
        |       |-- uni-popup.vue
        |-- config                   //配置文件
        |   |-- auth_paths.js        //需要登录的页面配置
        |   |-- index.js
        |   |-- _development.js      //开发模式配置文件
        |   |-- _production.js       //生产模式配置文件
        |-- mixins
        |   |-- iphoneX.js           //处理IphoneX底部样式
        |-- pages
        |   |-- home
        |   |   |-- index.vue  相关页面
        |   |-- subPages
        |       |-- index.vue
        |-- router                  //路由
        |   |-- index.js           
        |   |-- router.js           //路由公用方法
        |-- static
        |   |-- css
        |   |-- images
        |       |-- bar
        |           |-- index-active.png
        |           |-- index.png
        |-- store                    //状态管理
        |   |-- getters.js
        |   |-- index.js
        |   |-- modules
        |       |-- app.js
        |       |-- auth.js
        |-- utils                  //工具
            |-- common.js          //公用方法
            |-- qqmap-wx-jssdk.js   //腾讯地图组件
            |-- qqmap.js            //封装调用地图组件
            |-- qs.js              //url参数处理
            |-- request.js        //接口请求
            |-- storage.js        //本地存储公用类
            |-- ui.js             //ui公用方法
            |-- upload.js         //上传方法
```
