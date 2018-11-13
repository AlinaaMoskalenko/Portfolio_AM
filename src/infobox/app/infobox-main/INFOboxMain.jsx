import * as React from 'react';
import './INFOboxMain.scss';

export class INFOboxMain extends React.Component {
    constructor() {
        super();
        this.toggleDetails = this.toggleDetails.bind(this);
        this.state = {
            isFullOpened: false,
        }
    }

    toggleDetails(event) {
        event.preventDefault();
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.isFullOpened = !oldState.isFullOpened;
            this.props.toggleDetails(newState.isFullOpened);
            return newState;
        });
    }

    render() {
        const contentTEXT = this.props.infobox_contents.map((content, i) => {
            let classNames = 'post__description ';
            let classNamesNote = 'post__note_hidden';

            if (this.state.isFullOpened) {
                classNames += 'post__description_full ';
                classNamesNote = 'post__note';
            }

            if (i !== this.props.id) {
                classNames += 'post__description_hidden';
            }

            return <div key={i}
                className={classNames}>
                <h3 className="post__title">{content.title}</h3>
                <div className="post__text">
                    {content.description}
                    <div className={classNamesNote}>{content.note}</div>
                </div>
            </div>
        });

        let titleLinkDetails = 'Show details';

        if (this.state.isFullOpened) {
            titleLinkDetails = 'Hide details';
        }

        return <div className="infobox__main">
            {contentTEXT}
            <a href="" className="link-details"
                onClick={this.toggleDetails}>
                {titleLinkDetails}
            </a>
        </div>
    }
}