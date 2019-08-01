// document.getElementById('app').innerHTML = "Webpack works"
 /*使用es6的箭头函数*/
//  var func = str => {
//     document.getElementById('app').innerHTML = str;
// };
// func('我现在在使用Babel!');
// import  React from 'react';
// import ReactDom from 'react-dom';
import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import getRouter from './router/router';
import Hello from './component/hello/hello';

renderWithHotReload(getRouter());
// 模块更新的时候，通知js
if (module.hot) {
    module.hot.accept('./router/router', () => {
        const getRouter = require('./router/router').default;
        renderWithHotReload(getRouter());
    });
}
// ReactDom.render(<Hello/>, document.getElementById("app"));
// ReactDom.render( getRouter(), document.getElementById("app") );
function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            {RootElement}
        </AppContainer>,
        document.getElementById('app')
    )
}