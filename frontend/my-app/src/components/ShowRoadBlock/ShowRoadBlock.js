import React from "react"
import "./ShowRoadBlock.scss"
import {getRoute} from "../../api/route";

class ShowRoadBlock extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            from: null,
            to: null,
            isStairsEnabled: false,
            isEscalateEnabled: false,
        };

        this.onChangeFromInput = this.onChangeFromInput.bind(this);
        this.onChangeToInput = this.onChangeToInput.bind(this);
        this.onSendButtonClick = this.onSendButtonClick.bind(this);
        this.onStairs = this.onStairs.bind(this);
        this.onEscalate = this.onEscalate.bind(this);
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

    onStairs = () => {
        const isStairsEnabled = this.state.isStairsEnabled;
        this.setState({isStairsEnabled: !isStairsEnabled})
    };

    onEscalate = () => {
        const isEscalateEnabled = this.state.isEscalateEnabled;
        this.setState({isEscalateEnabled: !isEscalateEnabled})
    };

    render() {
        const onStairs = this.state.isStairsEnabled;
        const onEscalate = this.state.isEscalateEnabled;

        return <div className="ShowRoadBlock__roadBlock">
            <div className="ShowRoadBlock__fromField ShowRoadBlock__inputField">
                <input placeholder="from:" onChange={this.onChangeFromInput}/>
            </div>
            <div className="ShowRoadBlock__toField ShowRoadBlock__inputField">
                <input placeholder="to:" onChange={this.onChangeToInput}/>
            </div>
            <div className="ShowRoadBlock__additionalParameters">
                <div className="ShowRoadBlock__additionalParam" onClick={this.onStairs}>
                    <div className={"ShowRoadBlock__iconAdParam " + (onStairs ? "ShowRoadBlock__filled" : "")}/>
                    <div className="ShowRoadBlock__textAdParam">Use stairs</div>
                </div>
                <div className="ShowRoadBlock__additionalParam" onClick={this.onEscalate}>
                    <div className={"ShowRoadBlock__iconAdParam " + (onEscalate ? "ShowRoadBlock__filled" : "")}/>
                    <div className="ShowRoadBlock__textAdParam">Use escalator</div>
                </div>
            </div>
            <div className="ShowRoadBlock__sendBtn" onClick={this.onSendButtonClick}>
                Go
            </div>
        </div>
    };
}

export default ShowRoadBlock
