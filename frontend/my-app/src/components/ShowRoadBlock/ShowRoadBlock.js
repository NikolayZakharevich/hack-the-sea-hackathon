import React from "react"
import "./ShowRoadBlock.scss"
import {getRoute} from "../../api/route";

class ShowRoadBlock extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            from: null,
            to: null,
        }
    }

    onChangeFromInput = e => {
        this.setState({from: e.target.value})
    };

    onChangeToInput = e => {
        this.setState({to: e.target.value})
    };

    onSendButtonClick = () => {
        const {from, to} = this.state;
        const {drawPath} = this.props;
        getRoute(from, to).then(r => {
            if (r && r.path) {
                drawPath(r.path);
            }
        })
    };

    render() {
        return <div className="ShowRoadBlock__roadBlock">
            <div className="ShowRoadBlock__fromField ShowRoadBlock__inputField">
                <input placeholder="from:" onChange={this.onChangeFromInput}/>
            </div>
            <div className="ShowRoadBlock__toField ShowRoadBlock__inputField">
                <input placeholder="to:" onChange={this.onChangeToInput}/>
            </div>
            <div className="ShowRoadBlock__additionalParameters">
                <div className="ShowRoadBlock__additionalParam"/>
                <div className="ShowRoadBlock__additionalParam"/>
            </div>
            <div className="ShowRoadBlock__sendBtn" onClick={this.onSendButtonClick}>
                Go
            </div>
        </div>
    };
}

export default ShowRoadBlock
