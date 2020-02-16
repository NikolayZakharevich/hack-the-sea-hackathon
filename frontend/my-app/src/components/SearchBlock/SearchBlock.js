import React from "react"
import "./SearchBlock.scss"
import {search} from "../../api/search";
import {getCabinet} from "../../api/cabinet";
import {LAYOUT_CABINET} from "../../App";

class SearchBlock extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            lastTimeSearch: 0,
            searchFieldValue: "",
            searchResult: {
                users: null,
                cabinet: null,
                events: null,
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.onClickCabinet = this.onClickCabinet.bind(this);
    }

    onClickCabinet = id => {
        getCabinet(id).then(r => {
                if (r && r.cabinet) {
                    this.props.setActiveCabinet({id, tables: r.cabinet.tables});
                    this.props.setActiveLayout(LAYOUT_CABINET)
                }
            }
        )
    };

    searchQuery() {
        const value = this.state.searchFieldValue;
        search(value).then(
            r => {
                this.setState({searchResult: r.result})
            }
        )
    };

    handleChange({target}) {
        if (target.value === "") {
            return
        }

        const lastTime = this.state.lastTimeSearch;
        const curTime = new Date().getTime();

        this.setState({searchFieldValue: target.value});

        if (curTime - lastTime >= 150) {
            this.searchQuery();
        }

        this.setState({lastTimeSearch: curTime})
    };

    render() {
        const searchResult = this.state.searchResult;

        return <div className="magniferBlock">
            <div className="mgLabel">
                <span>Example: Cabinet 147, Ivanov Petr, Banquet</span>
            </div>
            <div className="inputField">
                <input placeholder="What are you looking for?" size={"38"} onChange={this.handleChange}/>
            </div>
            {searchResult && searchResult.users  && searchResult.cabinet && searchResult.events &&
            <div className="searchResult">
                {(searchResult.users.length > 0 || searchResult.cabinet.length > 0 || searchResult.events.length > 0) ?
                    <ul>
                        {
                            searchResult.users.map((item, i) => <li key={i}
                                                                    onClick={() => this.onClickCabinet(item.cabinet)}>{item.name + " " + item.surname}</li>)
                        }
                        {
                            searchResult.cabinet.map((item, i) => <li key={i}
                                                                      onClick={() => this.onClickCabinet(item.id)}>{"cabinet " + item.id}</li>)
                        }
                        {
                            searchResult.events.map((item, i) => <li key={i}
                                                                     onClick={() => this.onClickCabinet(item.cabinet_id)}>{"events: " + item.name}</li>)
                        }
                    </ul> :
                    <ul>
                        <li>No matches for your request</li>
                    </ul>
                }
            </div>
            }
        </div>
    };
}

export default SearchBlock
