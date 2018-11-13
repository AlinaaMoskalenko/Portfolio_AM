import * as React from 'react';
import './INFOboxHeader.scss';

const IMG_URL = './assets/images/';

export class INFOboxHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            images: [
                {
                    url: '../../../../assets/images/comp_plate_promo1.png',
                },
                {
                    url: '../../../../assets/images/comp_plate_promo2.png',
                },
                {
                    url: '../../../../assets/images/comp_plate_promo3.png',
                },
                {
                    url: '../../../../assets/images/comp_plate_promo4.png',
                },
            ],
        }
    }
    render() {
        const contentIMG = this.props.infobox_contents.map((content, i) => {
            // const img = IMG_URL + content.img;

            let classNames = 'header__image ';

            if (this.props.isModeOpened) {
                classNames += 'header__image_hidden';
            } else if (i !== this.props.id) {
                classNames += 'header__image_hidden';
            }
            console.log(this.state.images[i].url);
            return <img key={i}
                className={classNames}
                src={this.state.images[i].url}
                // src={img}
                alt="Donats" />
        });

        return <div className="infobox__header">
            {contentIMG}
        </div>
    }
}