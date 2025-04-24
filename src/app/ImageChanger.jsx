import React from 'react';

const getNextIndex = (images, currentIndex) => {
    if(currentIndex === images.length -1) {
        return 0;
    }
    return currentIndex +1;
};

export class ImageChanger extends React.Component {
    constructor(props){
        super(props);

        this.state = { imageIndex: 0 };
    };

    // Mit componentDidMount Aufrufen um sicherzugehen, dass die Bilder erst nach dem eigentlichen Render geändert werden.
    componentDidMount(){
        this.intervalId = setInterval(() => {
            this.changeImage();   
        }, this.props.interval);
    };

    changeImage(){
        this.setState((state, props) => {
            return{
            imageIndex: getNextIndex(props.images, state.imageIndex )
            };
        });
    };

    render() {
        const currentImage = this.props.images[this.state.imageIndex];
        return (
            <img src={currentImage.src} alt={currentImage.alt}></img>
        );
    };
}