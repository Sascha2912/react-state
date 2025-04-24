import React from 'react';
import { ImageChanger } from './ImageChanger';

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

export class App extends React.Component {
    constructor(props){
        super(props);
    };

    render() {
        return (
            <div>
                <ImageChanger images={images} interval={3000}/>
            </div>
        );
    }
}