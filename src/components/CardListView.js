import React, { Component } from "react";
import FormView from "./FormView";

class CardListView extends Component {

    render() {

        return (

            <div className="container">

                <div className="row mt-4">

                    <div className="col-md-4 text-center">
                        <img src={this.props.logo} className="App-logo" alt="logo" />
                        <FormView AddTask={this.props.handleAddTask}/>
                    </div>

                    <div className="col-md-8">

                        <div className="row">
                            {this.props.layoutView}
                        </div>

                    </div>
                </div>

            </div>

        )

    }

}

export default CardListView