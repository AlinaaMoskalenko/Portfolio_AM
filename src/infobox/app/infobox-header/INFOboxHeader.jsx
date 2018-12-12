import * as React from 'react';
import './INFOboxHeader.scss';

const IMG_URL = '../../../../assets/images/';

export class INFOboxHeader extends React.Component {
    render() {
        const contentIMG = this.props.infobox_contents.map((content, i) => {
            let classNames = 'header__image ';

            if (this.props.isModeOpened)
                classNames += 'header__image_hidden';
            else if (content.id !== this.props.id)
                classNames += 'header__image_hidden';

            let icon = content.id === 0
                ? require('../../../../assets/images/infobox/comp_plate_promo1.png')
                : content.id === 1
                    ? require('../../../../assets/images/infobox/comp_plate_promo2.png')
                    : content.id === 2
                        ? require('../../../../assets/images/infobox/comp_plate_promo3.png')
                        : require('../../../../assets/images/infobox/comp_plate_promo4.png');

            return <img key={i}
                className={classNames}
                src={icon} />
        });

        return <div className="infobox__header">
            {contentIMG}
        </div>
    }
}