import * as React from 'react';
import './INFOboxHeader.scss';

const IMG_URL = '../../../../assets/images/';

export class INFOboxHeader extends React.Component {
    render() {
        const contentIMG = this.props.infobox_contents.map((content, i) => {
            const img = IMG_URL + content.img;

            let classNames = 'header__image ';

            if (this.props.isModeOpened) {
                classNames += 'header__image_hidden';
            } else if (i !== this.props.id) {
                classNames += 'header__image_hidden';
            }

            return <img key={i}
                className={classNames}
                src={img}
                alt="Donats" />
        });

        return <div className="infobox__header">
            {contentIMG}
        </div>
    }
}