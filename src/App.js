import React, {Component} from 'react';
import './App.css';
import Label from './components/Label'
import Button from './components/Button'
import Div from './components/Div'
import Img from './components/Img'
import img from './assets/img.jpg'
import Link from './components/Link'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Label text="hello" className='labelStyle'/>
                <br/>
                <Button className="btnStyle">ok</Button>
                <Div className="divStyle" >

                </Div>
                <Img src={img} id="drag1"/>
                <Link text="my link" href="https://www.google.com/"/>
            </div>
        );
    }
}

export default App;

