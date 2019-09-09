# vue3

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### MVVM
```
1.model是数据层，view是视图层，viewModel为视图提供引擎，用来处理业务逻辑
2.在MVVM模式中，viewModel通过数据双向绑定将model层和view层联系起来；view层触发事件viewModel会处理事件，改变model层；model层的改变也会反映到viewModel层，通知view层更新视图；MVVM让view层和model层单独工作。
3.MVVM完全分离了view层，使得viewModel分离了很多逻辑，便于单元测试；MVVM模型也便于移植代码；但随着代码量的增加，viewModel承担了很多业务逻辑，会使得model层变的复杂，从而消耗相当大的内存。
```
