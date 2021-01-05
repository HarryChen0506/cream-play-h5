# cream-play-h5


[demo](https://harrychen0506.github.io/cream-play-h5/)

### init 

``` bash
$ npm install -g yarn # 全局安装yarn, 如果全局已安装跳过该步骤
$ yarn install
```

### add package

``` bash

$ yarn add [package] # 安装某个依赖, 并且默认保存到package, 等价于 npm install [package] --save
$ yarn add [package] --dev # 在devDependencies 里安装一个或多个包, 等价于 npm install [package] --save-dev
```

### develop

``` bash
$ npm run dev
$ npm run dev:mock  # backend api is remote mock data
```

### build

* static files will be built under direct of '/build'

``` bash
$ npm run build
```

### CI 持续构建

``` bash
$ npm install -g yarn # 全局安装yarn, 如果全局已安装跳过该步骤
$ yarn install
$ yarn run build
```

