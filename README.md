## 项目说明及功能介绍

本项目为爱彼迎仿站，包含以下页面的功能实现：

* 首页
* 全部页面
* 详情页面

### 首页

<img src="https://s1.vika.cn/space/2023/10/10/0447d723c60b4cb4b9f8d13678722ea7" alt="Pasted image 20231010084635" style="zoom:45%;" />

### 全部页面

<img src="https://s1.vika.cn/space/2023/10/10/65ede53429d740bbbf935724221cd952" alt="Pasted image 20231010101117" style="zoom:25%;" />

### 详细页面

<img src="https://s1.vika.cn/space/2023/10/10/f3cb11f26fc54da2b3779f85a53f0f23" alt="Pasted image 20231010100821" style="zoom:20%;" />

<img src="https://s1.vika.cn/space/2023/10/10/6e321016de1c4f10969ad40796760952" alt="Pasted image 20231010100906" style="zoom:20%;" />

## 项目命令

```bash
#安装依赖
npm install   

#运行项目
npm run start

#项目打包
npm run build
```

## 分支介绍

| **分支** | **环境** |
| -------- | -------- |
| master   | 主分支   |

## 技术栈

| 类别     | 功能             | 包名                   |
| -------- | ---------------- | ---------------------- |
| 项目环境 | 脚手架/路由      | react18+react-router   |
|          | 数据管理         | react-redux/rtk        |
|          | 网络请求         | axios                  |
|          | 修改webpack 配置 | craco                  |
| ui库     |                  | material               |
|          |                  | antd                   |
| css      | CSS-in-JS方案    | styled-components      |
|          | css预处理器      | less                   |
|          | 动画过渡效果     | react-transition-group |
| 工具库   | js工具库         | underscore             |
|          | 动态添加class    | classNames             |

## 目录结构划分

```c
├── App.js
├── assets  //静态资源
│   ├── css
│   ├── data
│   ├── img
│   ├── svg
│   └── theme //主题色配置
├── base-ui // 基础ui、通用功能组件
│   ├── indicator
│   ├── picture-browser
│   └── scroll-view
├── components //通用组件
│   ├── app-footer
│   ├── app-header
│   ├── room-item
│   └── section-tabs
├── hooks // 常用hooks
│   ├── index.js
│   ├── useScrollPosition.js
│   └── useScrollTop.js
├── index.js //项目入口
├── router //路由配置入口
│   └── index.js
├── services // 网路配置文件
│   ├── index.js
│   ├── modules // 请求模块化文件
│   └── request //axios二次封装
├── store //redux配置文件
│   ├── index.js
│   └── modeules
├── utils // 常用工具文件
│   ├── index.js
│   └── is-empty-obj.js
└── views //视图文件
    ├── detail
    ├── entire
    └── home
        ├── c-cpns // 首页内部子组件
        ├── index.jsx // 组件文件
        └── style.js //组件样式文件
```


## 项目规范

项目规范：项目中有一些开发规范和代码风格

1. 文件夹、文件名称统一小写、多个单词以连接符（-）连接；
2. JavaScript 变量名称采用小驼峰标识，常量全部使用大写字母，组件采用大驼峰；
3. CSS 采用普通 CSS 和 styled-component 结合来编写（全局采用普通 CSS、局部采用 styled-component）;
4. 整个项目统一使用函数式组件Hooks；
5. 所有的函数式组件，为了避免不必要的渲染，全部使用 memo 进行包裹；
6. 组件内部的状态，使用 useState、useReducer；业务数据全部放在 redux 中管理；
7. 函数组件内部基本按照如下顺序编写代码：

   1. 组件内部 state 管理；
   2. Redux 的 hooks 代码；
   3. 其他 hooks 相关代码（比如自定义 hooks）；
   4. 其他逻辑代码；（网络请求、事件监听、副作用）
   5. 返回 JSX 代码；

8. Redux 代码规范如下：
   - 每个模块有自己独立的 reducer 或者 slice，之后合并在一起；
   - Redux 中会存在共享的状态、从服务器获取到的数据状态；

9. 网络请求采用 axios
   - 对 axios 进行二次封装；
   - 所有的模块请求会放到一个请求文件中单独管理；