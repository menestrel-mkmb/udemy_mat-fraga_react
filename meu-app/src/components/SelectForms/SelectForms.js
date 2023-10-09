import React, {Component} from "react";

class SelectForms extends Component {
    constructor(props){
        super(props);
        this.state = {
            defaultGender: props.defaultGender,
            selectGender: props.selectGender
        }
    }

    render(){
        return(<section>
            <label htmlFor="gender">Gênero: </label>
            <select name="gender" id="gender"
                value={this.state.defaultGender} className={"gender__form-slc"}
                onChange={(e) => {this.setState({defaultGender: e.target.value})}}
                required
            >
                {this.state.selectGender.map( (gender) => {
                    return(
                        <option key={gender.id}
                            value={gender.name}>{gender.value}</option>
                    )}
                )}
            </select>
        </section>);
    }
}

export default SelectForms;