import React, {Component} from 'react';
import './App.css';
import filterIcon from './static/filterIcon.png'
import routeIcon from './static/routeIcon.png'
import magniferIcon from './static/magniferIcon.png'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtersBlockShown: false,
            roadBlockShown: false,
            magniferBlockShow: false
        };

        this.onClickLeftBlock = this.onClickLeftBlock.bind(this);
        this.onClickRoadIcon = this.onClickRoadIcon.bind(this);
        this.onClickMagniferIcon = this.onClickMagniferIcon.bind(this);
    }

    onClickLeftBlock() {
        if (!this.state.filtersBlockShown) {
            this.setState({filtersBlockShown: true});
        } else {
            this.setState({filtersBlockShown: false});
        }
    }

    onClickRoadIcon() {
        if (!this.state.roadBlockShown) {
            if (this.state.magniferBlockShow) {
                this.setState({magniferBlockShow: false})
            }
            this.setState({roadBlockShown: true});
        } else {
            this.setState({roadBlockShown: false});
        }
    }

    onClickMagniferIcon() {
        if (!this.state.magniferBlockShow) {
            if (this.state.roadBlockShown) {
                this.setState({roadBlockShown: false})
            }
            this.setState({magniferBlockShow: true});
        } else {
            this.setState({magniferBlockShow: false});
        }
    }

    render() {
        const showFiltersBlock = this.state.filtersBlockShown;
        const showRoadBlock = this.state.roadBlockShown;
        const showMagniferBlock = this.state.magniferBlockShow;

        return (
            <div className="App">
                <div className="topPanel">
                    <div className={"leftBlock " + (showFiltersBlock ? "filterShown bordered" : "")} >
                        <div onClick={this.onClickLeftBlock}>
                            <img src={filterIcon} className={"icon bordered " + (showFiltersBlock ? "iconSelected" : "")} alt="filterIcon"/>
                        </div>
                        {showFiltersBlock &&
                            <div className="filtersBlock">
                                <label className="container">Coffee Point
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">Bathroom
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">Rest Room
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        }
                    </div>
                    <div className={"rightBlock " + ((showRoadBlock || showMagniferBlock)? "rbShown bordered" : "")}>
                        <div className="rbTopPanel">
                            <div className="rbTitle">
                                {showRoadBlock &&
                                    <span>Route</span>
                                }
                                {showMagniferBlock &&
                                    <span>Search</span>
                                }
                            </div>
                            <div className="rbIcons">
                                <div className="road" onClick={this.onClickRoadIcon}>
                                    <div>
                                        <img src={routeIcon} className="icon bordered" alt="routeIcon"/>
                                    </div>
                                </div>
                                <div className="magnifer" onClick={this.onClickMagniferIcon}>
                                    <img src={magniferIcon} className="icon bordered" alt="magniferIcon"/>
                                </div>
                            </div>
                        </div>
                        {showRoadBlock &&
                            <div className="roadBlock">
                                <div className="fromField inputField">
                                    <input placeholder="from:"/>
                                </div>
                                <div className="toField inputField">
                                    <input placeholder="to:"/>
                                </div>
                                <div className="additionalParameters">
                                    <div className="additionalParam"></div>
                                    <div className="additionalParam"></div>
                                </div>
                                <div className="sendBtn">
                                    Go
                                </div>
                            </div>
                        }
                        {showMagniferBlock &&
                            <div className="magniferBlock">
                                <div className="inputField">
                                    <input placeholder="What are you looking for?"/>
                                </div>
                                <div className="sendBtn">
                                    Find
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className="officeMap">

                </div>
            </div>
        )
    };
}

export default App;
