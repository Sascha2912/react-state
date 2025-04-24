import React from 'react';
import { ImageChanger } from './ImageChanger';

export class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { showImageChanger:true };
    };

    // DIeser Code wird NACH der render-Funktion ausgeführt
    componentDidMount(){
        setTimeout(() => {
            this.setState((state, props) => {
                return { showImageChanger: false };
            });
        }, 3000);
    };

    render() {
        if(this.state.showImageChanger){
            return (
                <div>
                    <ImageChanger />
                </div>
            );
        }else {
            return (
                <div>
                    <h1>ImageChanger is gone!</h1>
                </div>
            );
        }
        
    }
}