import React, {Component} from 'react';
import './App.css';
import filterIcon from './static/filterIcon.png'
import routeIcon from './static/routeIcon.png'
import magniferIcon from './static/magniferIcon.png'
import {filterResults} from "./api/floor";
import {search} from "./api/search";
import {RouteNode} from "react-router5";
import {PAGE_BUILDING, PAGE_CABINET, PAGE_FLOOR} from "./routes";
import FloorLayout from "./components/FloorLayout/FloorLayout";
import CabinetLayout from "./components/CabinetLayout/CabinetLayout";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filtersBlockShown: false,
            roadBlockShown: false,
            magniferBlockShow: false,
            cabinets: null,
            activeCabinets: null,
            currentFilter: {
                coffeePoint: false,
                bathroom: false,
                restRoom: false
            }
        };

        this.onClickLeftBlock = this.onClickLeftBlock.bind(this);
        this.onClickRoadIcon = this.onClickRoadIcon.bind(this);
        this.onClickMagniferIcon = this.onClickMagniferIcon.bind(this);
        this.setupCoffeePointFilter = this.setupCoffeePointFilter.bind(this);
        this.setupBathroomFilter = this.setupBathroomFilter.bind(this);
        this.setupRestRoomFilter = this.setupRestRoomFilter.bind(this);
        this.prepareFilters = this.prepareFilters.bind(this);
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

    filterResult = (filters) => {
        const id = this.props.route.params.id;
        filterResults(id, filters).then(r => {
            this.renderLayout()
        })
    };

    prepareFilters() {
        const filters = this.state.currentFilter;

        this.filterResult(Object.keys(filters).filter(e => filters[e]).join("\,"));
    }

    setupCoffeePointFilter = () => {
        const currentFilter = this.state.currentFilter;
        currentFilter.coffeePoint = true;
        this.setState({currentFilter})

        this.prepareFilters()
    };

    setupBathroomFilter = () => {
        const currentFilters = this.state.currentFilter;
        currentFilters.bathroom = true;
        this.setState({currentFilter: currentFilters});

        this.prepareFilters()
    };

    setupRestRoomFilter = () => {
        const currentFilter = this.state.currentFilter;
        currentFilter.restRoom = true;
        this.setState({currentFilter})

        this.prepareFilters()
    };

    searchQuery = str => {
        search(str).then(
            r => {
                this.setState({activeCabinets: r.result})
            }
        )
    };

    renderLayout = () => {
        const route = this.props.route;
        if (!route) {
            return <div/>
        }
        const topRouteName = route.name.split('.')[0]
        const id = route.params.id;

        if (topRouteName === PAGE_BUILDING) {
            return <FloorLayout id={id}/>
        }

        if (topRouteName === PAGE_FLOOR) {
            return <FloorLayout id={id}/>
        }

        if (topRouteName === PAGE_CABINET) {
            return <CabinetLayout id={id}/>
        }
        return <div/>
    };

    render() {
        const showFiltersBlock = this.state.filtersBlockShown;
        const showRoadBlock = this.state.roadBlockShown;
        const showMagniferBlock = this.state.magniferBlockShow;

        let searchQuery = "";

        return (
            <div className="App">
                <div className="topPanel">
                    <div className={"leftBlock " + (showFiltersBlock ? "filterShown bordered" : "")}>
                        <div onClick={this.onClickLeftBlock}>
                            <img src={filterIcon}
                                 className={"icon bordered " + (showFiltersBlock ? "iconSelected" : "")}
                                 alt="filterIcon"/>
                        </div>
                        {showFiltersBlock &&
                        <div className="filtersBlock">
                            <label className="container">Coffee Point
                                <input type="checkbox" onClick={this.setupCoffeePointFilter}/>
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">Bathroom
                                <input type="checkbox" onClick={this.setupBathroomFilter}/>
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">Rest Room
                                <input type="checkbox" onClick={this.setupRestRoomFilter}/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        }
                    </div>
                    <div className={"rightBlock " + ((showRoadBlock || showMagniferBlock) ? "rbShown bordered" : "")}>
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
                            <div className="mgLabel">
                                <span>Example: Cabinet 147, Ivanov Petr, Banquet</span>
                            </div>
                            <div className="inputField">
                                <input placeholder="What are you looking for?" size="38" value={searchQuery}/>
                            </div>
                            <div className="sendBtn" onClick={search(searchQuery)}>
                                Find
                            </div>
                        </div>
                        }
                    </div>
                </div>
                <div className="officeMap">
                    {
                        this.renderLayout()
                    }
                </div>
            </div>
        )
    };
}

export default (props) => (
    <RouteNode nodeName="">
        {({route}) => <App route={route} {...props} />}
    </RouteNode>
)
