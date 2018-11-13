import * as React from 'react';
import { Component } from 'react';
import { INFOboxHeader } from './infobox-header/INFOboxHeader.jsx';
import { INFOboxMain } from './infobox-main/INFOboxMain.jsx';
import { INFOboxFooter } from './infobox-footer/INFOboxFooter.jsx';
import { HTTPService } from '../../common/scripts/http-service';

export class App extends Component {
    constructor() {
        super();
        this.httpService = new HTTPService();
        this.setID = this.setID.bind(this);
        this.toggleDetails = this.toggleDetails.bind(this);
        this.state = {
            infobox_contents: [],
            infobox_contents_length: 0,
            ID: 0,
            isModeOpened: false,
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        this.httpService.get('http://localhost:3000/posts', (response) => {
            this.setState((oldState) => {
                const newState = Object.assign({}, oldState);
                newState.infobox_contents = response;
                newState.infobox_contents_length = response.length;
                return newState;
            });
        });
    }

    setID(postID) {
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.ID = postID;
            return newState;
        });
    }

    toggleDetails(setMode) {
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.isModeOpened = setMode;
            return newState;
        });
    }

    render() {
        return <div className="infobox">
            <INFOboxHeader
                infobox_contents={this.state.infobox_contents}
                id={this.state.ID}
                isModeOpened={this.state.isModeOpened} />
            <INFOboxMain
                infobox_contents={this.state.infobox_contents}
                id={this.state.ID}
                toggleDetails={this.toggleDetails} />
            <INFOboxFooter
                infoboxLength={this.state.infobox_contents_length}
                setPostID={this.setID} />
        </div>
    }
}