import React from 'react';

const images = [
    {
        src: 'https://media.istockphoto.com/id/1522225409/de/foto/wolke-hei%C3%9Fluftballon-fliegt-%C3%BCber-das-hallenbad.jpg?s=612x612&w=is&k=20&c=SwefoxQJfEtcDkfpS5kFczFUqPjycCuoo89irNxkzhw=',
        alt: 'Heißluftballon mit Wlke als als Ballon fliegt über ein Hallenbad.'
    },
    {
        src: 'https://media.istockphoto.com/id/1522225411/de/foto/farbenfroher-torbogen-mit-gl%C3%A4nzenden-kugelf%C3%B6rmigen-objekten.jpg?s=612x612&w=is&k=20&c=N2ZIUTpi2f9uxR37Pq_5kP9I-J6Pfki2HVFH6fLT1rc=',
        alt: 'Farbenfroher Torbogen mit glänzenden kugelförmigen Objekten'
    },
    {
        src: 'https://media.istockphoto.com/id/2163811167/de/foto/bunte-geometrische-papierkunst-mit-einem-dynamischen-muster-aus-ausgeschnittenen-formen-auf.jpg?s=612x612&w=is&k=20&c=fFiqHmUUj8kcNor_ZgnPbZ3E5rgiqBSyHY5pYoxAXhc=',
        alt: 'Bunte geometrische Papierkunst mit einem dynamischen Muster aus ausgeschnittenen Formen auf dunklem Hintergrund'
    },
    
];

// let count = 0;

const getNextIndex = (images, currentIndex) => {
    if(currentIndex === images.length -1) {
        return 0;
    }
    return currentIndex +1;
};

export class ImageChanger extends React.Component {
    constructor(props){
        super(props);
        // this.state = { 
        //     image: images[images.length -1],
        //  };

        this.state = { imageIndex: 0 };
    };

    // mit componentDidMount Aufrufen um sicherzugehen, dass die Bilder erst nach dem eigentlichen Render geändert werden.
    componentDidMount(){
        this.intervalId = setInterval(() => {
            console.log('test');
            
            // if(count === images.length){
            //     count = 0;
            // }
            // this.setState({image: images[count]});
            // count++;

            this.changeImage();
            
        }, 1000);
    };

    // Dieser Code wird kurz bevor die Komponente aus dem DOM entfernt wird ausgeführt.
    componentWillUnmount(){
        // Beendet den Interval, da sonst der Interval im Hintergurnd unendlich weiterlaufen würde.
        clearInterval(this.intervalId);
    };

    changeImage(){
        this.setState((state, props) => {
            return{
            imageIndex: getNextIndex(images, state.imageIndex )
            };
        });
    };

    render() {
        const currentImage = images[this.state.imageIndex];
        return (
            // <img src={this.state.image.src} alt={this.state.image.alt}></img>
            <img src={currentImage.src} alt={currentImage.alt}></img>
        );
    };
}