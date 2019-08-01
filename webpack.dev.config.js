const path = require('path');

module.exports = {
    /*入口*/
    // entry: path.join(__dirname, 'src/index.js'),
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/index.js')
    ],
    
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    // 开启服务器
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,     //刷新的时候，定位到index页面
        host: '0.0.0.0'
    },

    // 代理服务
    // proxy: {
    //     // "/api": "http://localhost:3000"
    // },

    /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
    /*cacheDirectory是用来缓存编译结果，下次编译加速*/
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }]
    },

   
};