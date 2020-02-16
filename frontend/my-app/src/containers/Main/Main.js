import React from 'react'
import {RouteNode} from 'react-router5'
import {PAGE_BUILDING, PAGE_CABINET, PAGE_FLOOR} from "../../routes";
import FloorLayout from "../../components/FloorLayout/FloorLayout";
import CabinetLayout from "../../components/CabinetLayout/CabinetLayout";

function Main({route}) {
    const topRouteName = route.name.split('.')[0]

    console.log(route)

    if (topRouteName === PAGE_BUILDING) {
        return <FloorLayout id={1}/>
    }

    if (topRouteName === PAGE_FLOOR) {
        return <FloorLayout id={1}/>
    }

    if (topRouteName === PAGE_CABINET) {
        return <CabinetLayout id={106}/>
    }

    return <div>
        ???
    </div>
}

export default (props) => (
    <RouteNode nodeName="">
        {({route}) => <Main route={route} {...props} />}
    </RouteNode>
)
