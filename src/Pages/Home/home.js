import React,{Component} from 'react';
export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            num: 0
        }
    }
    add(){
        this.setState({num: this.state.num+3});
    }
    render() {
        return (
            <div>
                <h3>这是一个主页面</h3>
                <p>计数：{this.state.num} </p>
                <button onClick={this.add.bind(this)} style={{ "color": "red", 'background':'pink' }}>加3</button>
            </div>
        )
    }
}