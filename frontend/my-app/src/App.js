import React, {Component} from 'react';
import './App.css';
import filterIcon from './static/filterIcon.png'
import routeIcon from './static/routeIcon.png'
import magniferIcon from './static/magniferIcon.png'
import {filterResults, getFloor} from "./api/floor";
import {search} from "./api/search";
import FloorLayout from "./components/FloorLayout/FloorLayout";
import CabinetLayout from "./components/CabinetLayout/CabinetLayout";
import ShowRoadBlock from "./components/ShowRoadBlock/ShowRoadBlock";

export const LAYOUT_FLOOR = 'LAYOUT_FLOOR';
export const LAYOUT_CABINET = 'LAYOUT_CABINET';

const START_FLOOR_ID = 1;

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            stateVersions: [],

            filtersBlockShown: false,
            roadBlockShown: false,
            magniferBlockShow: false,
            currentFilter: {
                coffeepoint: false,
                bathroom: false,
                workerRoom: false,
                meetingRoom: false,
                warehouse: false
            },

            isFirstFloor: true,
            isLastFloor: false,

            activeLayout: LAYOUT_FLOOR,
            activeFloor: {
                id: START_FLOOR_ID,
                cabinets: [],
                points: [],
            },
            activeCabinet: {
                tables: []
            },
            lastTimeSearch: 0,
            searchFieldValue: "",
            searchResult: {
                users: null,
                cabinet: null,
                events: null,
            }
        };

        this.onClickLeftBlock = this.onClickLeftBlock.bind(this);
        this.onClickRoadIcon = this.onClickRoadIcon.bind(this);
        this.onClickMagniferIcon = this.onClickMagniferIcon.bind(this);
        this.setupCoffeePointFilter = this.setupCoffeePointFilter.bind(this);
        this.setupBathroomFilter = this.setupBathroomFilter.bind(this);
        this.setupWorkerRoomFilter = this.setupWorkerRoomFilter.bind(this);
        this.setupMeetingRoomFilter = this.setupMeetingRoomFilter.bind(this);
        this.setupWarehouseFilter = this.setupWarehouseFilter.bind(this);
        this.prepareFilters = this.prepareFilters.bind(this);
        this.loadFloor = this.loadFloor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.searchQuery = this.searchQuery.bind(this);
        this.drawPath = this.drawPath.bind(this);
    }

    loadFloor = (id) => {
        getFloor(id).then(r => {
                const isValidResponse = !!r && !!r.floor;
                if (isValidResponse) {
                    const floor = r.floor;
                    if (!!floor.cabinets) {
                        this.setActiveFloor({id: id, cabinets: floor.cabinets});
                    } else {
                        console.log('Failed to load cabinets')
                    }
                } else {
                    console.log('Failed to load floor')
                }
            }
        );
    };

    componentDidMount() {
        this.loadFloor(START_FLOOR_ID);
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

    setStateWithHistory = state => {
        const stateVersions = this.state.stateVersions.slice()
        stateVersions.push(this.state);
        this.setState({stateVersions})
    };

    setActiveLayout = activeLayout => {
        this.setStateWithHistory({activeLayout})
    };

    setActiveFloor = (floor) => {
        this.setState({activeFloor: floor})
    };

    setActiveCabinet = ({id, tables}) => {
        const newState = this.state;
        newState.activeCabinet = {id, tables};
        this.setState(newState)
    };

    filterResult = (filters) => {
        const id = this.state.activeFloor.id;
        filterResults(id, filters).then(r => {
            this.setActiveFloor({id, cabinets: r.floor.cabinets})
        })
    };

    prepareFilters() {
        const filters = this.state.currentFilter;
        this.filterResult(Object.keys(filters).filter(e => filters[e]).join("\,"));
    }

    onClickBackButton = () => {
        const versions = this.state.stateVersions.slice();
        if (versions.length === 0) {
            return;
        }
        const prevVersion = versions[versions.length - 1];
        versions.pop();
        this.setState(prevVersion)
    };

    setupCoffeePointFilter = () => {
        const currentFilter = this.state.currentFilter;
        currentFilter.coffeepoint = !currentFilter.coffeepoint;
        this.setState({currentFilter});
        this.prepareFilters()
    };

    setupBathroomFilter = () => {
        const currentFilter = this.state.currentFilter;
        currentFilter.bathroom = !currentFilter.bathroom;
        this.setState({currentFilter});
        this.prepareFilters()
    };

    setupWorkerRoomFilter = () => {
        const currentFilter = this.state.currentFilter;
        currentFilter.workerRoom = !currentFilter.workerRoom;
        this.setState({currentFilter});
        this.prepareFilters()
    };

    setupMeetingRoomFilter = () => {
        const currentFilter = this.state.currentFilter;
        currentFilter.workerRoom = !currentFilter.workerRoom;
        this.setState({currentFilter});
        this.prepareFilters()
    };

    setupWarehouseFilter = () => {
        const currentFilter = this.state.currentFilter;
        currentFilter.warehouse = !currentFilter.warehouse;
        this.setState({currentFilter});
        this.prepareFilters()
    };

    searchQuery() {
        const value = this.state.searchFieldValue;
        console.log(value);
        search(value).then(
            r => {
                console.log(r)
                this.setState({searchResult: r.result})
            }
        )
    };

    drawPath(points) {
        const floor = this.state.activeFloor;
        this.setActiveFloor({...floor, points})
    }

    handleChange({target}) {
        if (target.value === "") {
            return
        }

        const lastTime = this.state.lastTimeSearch;
        const curTime = new Date().getTime();

        this.setState({searchFieldValue: target.value});

        if (curTime - lastTime >= 300) {
            this.searchQuery();
        }

        this.setState({lastTimeSearch: curTime})
    };

    toUpTapped = () => {
        const curId = this.state.activeFloor.id;

        if (curId >= 3) {
            return;
        }

        if (curId + 2 >= 3) {
            this.setState({isFirstFloor: false, isLastFloor: true});
        }

        this.loadFloor(curId + 2);
    };

    toDownTapped = () => {
        const curId = this.state.activeFloor.id;

        if (curId <= 1) {
            return;
        }

        if (curId - 2 <= 1) {
            this.setState({isFirstFloor: true, isLastFloor: false});
        }

        this.loadFloor(curId - 2);
    };

    renderLayout = () => {
        const {activeLayout, activeFloor, activeCabinet} = this.state;
        switch (activeLayout) {
            case LAYOUT_FLOOR:
                return <FloorLayout
                    id={activeFloor.id}
                    cabinets={activeFloor.cabinets}
                    points={activeFloor.points}
                    setActiveLayout={this.setActiveLayout}
                    setActiveFloor={this.setActiveFloor}
                    setActiveCabinet={this.setActiveCabinet}
                />;
            case LAYOUT_CABINET:
                return <CabinetLayout
                    id={activeCabinet.id}
                    tables={activeCabinet.tables}
                    setActiveLayout={this.setActiveLayout}
                    setActiveFloor={this.setActiveFloor}
                    setActiveCabinet={this.setActiveCabinet}
                />
        }
    };

    updateResultSearch() {
        const result = this.state.searchResult;

        result.users.map((item, i) => <li key={i}>item.name + " " + item.surname</li>);
        result.cabinet.map((item, i) => <li key={i}>"cabinet " + item.id</li>);
        // result.events.map((item, i) => <li key={i}>"event: " + item.name</li>);
    }

    render() {
        const showFiltersBlock = this.state.filtersBlockShown;
        const showRoadBlock = this.state.roadBlockShown;
        const showMagniferBlock = this.state.magniferBlockShow;
        const curFloor = this.state.activeFloor.id;
        const {stateVersions} = this.state;

        const hasNoHistory = stateVersions.length === 0;
        const isFirstFloor = this.state.isFirstFloor;
        const isLastFloor = this.state.isLastFloor;
        const searchResult = this.state.searchResult;
        console.log(searchResult);

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
                                <span className="checkmark"/>
                            </label>
                            <label className="container">Bathroom
                                <input type="checkbox" onClick={this.setupBathroomFilter}/>
                                <span className="checkmark"/>
                            </label>
                            <label className="container">Worker Room
                                <input type="checkbox" onClick={this.setupWorkerRoomFilter}/>
                                <span className="checkmark"/>
                            </label>
                            <label className="container">Meeting Room
                                <input type="checkbox" onClick={this.setupMeetingRoomFilter}/>
                                <span className="checkmark"/>
                            </label>
                            <label className="container">Warehouse
                                <input type="checkbox" onClick={this.setupWarehouseFilter}/>
                                <span className="checkmark"/>
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
                        {showRoadBlock && <ShowRoadBlock drawPath={this.drawPath}/>}
                        {showMagniferBlock &&
                        <div className="magniferBlock">
                            <div className="mgLabel">
                                <span>Example: Cabinet 147, Ivanov Petr, Banquet</span>
                            </div>
                            <div className="inputField">
                                <input placeholder="What are you looking for?" size="38" onChange={this.handleChange}/>
                            </div>
                            {searchResult && searchResult.users  && searchResult.cabinet && searchResult.events &&
                                <div className="searchResult">
                                    <ul>
                                        {
                                            searchResult.users.map((item, i) => <li key={i}>{item.name + " " + item.surname}</li>)
                                        }
                                        {
                                            searchResult.cabinet.map((item, i) => <li key={i}>{"cabinet " + item.id}</li>)
                                        }
                                        {
                                            searchResult.events.map((item, i) => <li key={i}>{"events: " + item.name}</li>)
                                        }
                                    </ul>
                                </div>
                            }
                            <div className="sendBtn">
                                Find
                            </div>
                        </div>
                        }
                    </div>
                </div>
                <div className="officeMap">
                    <div className="omTopPanel">
                        <div className="floorSwitcher">
                            <div className={"toUp switcherBtn  " + (isLastFloor ? "buttonDisabled" : "")}
                                 onClick={this.toUpTapped}>
                                ▲
                            </div>
                            <div className={"toDown switcherBtn  " + (isFirstFloor ? "buttonDisabled" : "")}
                                 onClick={this.toDownTapped}>
                                ▼
                            </div>
                        </div>
                        <div className="floorTitle">
                            <span>Floor {curFloor}</span>
                        </div>
                        <div className={"backButton " + (hasNoHistory ? "buttonDisabled" : "")}
                             onClick={this.onClickBackButton}>
                            Back
                        </div>
                    </div>
                    <div className="svg">
                        {
                            this.renderLayout()
                        }
                    </div>
                </div>
            </div>
        )
    };
}

export default App
