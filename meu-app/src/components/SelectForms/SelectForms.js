import React, {Component} from "react";

class SelectForms extends Component {
    constructor(props){
        super(props);
        this.state = {
            defaultGender: "na",
            selectGender: [
                {id: 1, name: "masc", value: "Masculino"},
                {id: 2, name: "femn", value: "Feminino"},
                {id: 3, name: "other", value: "Outro"},
                {id: 4, name: "na", value: "Prefiro não responder"},
            ]
        }
    }

    render(){
        return(<section>
            <label htmlFor="gender">Gênero: </label>
            <select name="gender" id="gender"
                value={this.state.defaultGender}
                onChange={(e) => {this.setState({defaultGender: e.target.value})}}
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