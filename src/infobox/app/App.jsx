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
            infobox_contents_length: 0,
            ID: 0,
            isModeOpened: false,
            infobox_contents: [
                {
                    id: 0,
                    title: "Time to Share: 6 for $3.99*",
                    description: "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
                    note: "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
                    productUrl: "/products/promo1.html"
                },
                {
                    id: 1,
                    title: "Rise 'n shine",
                    description: "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
                    note: "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
                    productUrl: "/products/promo2.html"
                },
                {
                    id: 2,
                    title: "PM Snackers: Brownie Bites",
                    description: "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
                    note: "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
                    productUrl: "/products/promo3.html"
                },
                {
                    id: 3,
                    title: "PM Snackers: Brownie Bites new",
                    description: "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
                    note: "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
                    productUrl: "/products/promo4.html"
                }
            ],
        };
    }

    componentDidMount() {
        // this.fetchData();
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.infobox_contents_length = this.state.infobox_contents.length;
            return newState;
        });
    }

    // fetchData() {
    //     this.httpService.get('http://localhost:3000/posts', (response) => {
    //         this.setState((oldState) => {
    //             const newState = Object.assign({}, oldState);
    //             newState.infobox_contents = response;
    //             newState.infobox_contents_length = response.length;
    //             return newState;
    //         });
    //     });
    // }

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