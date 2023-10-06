import React, {Component} from "react";
import InputForms from "../InputForms/InputForms";

class Formulario extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "Login",
            data: [
                {id: 1, name: "email", type:"email", label: "e-mail", value: "example@site.domain"},
                {id: 2, name: "pass", type:"password", label: "password: ", value: "********"},
            ]
        }

        //this = bind(this)
    }

    render() {
        return(<article class="forms">
            <h2>{this.state.title}</h2>
            {this.state.data.map( (inp) => {
                return(
                    <InputForms key={inp.id}
                        name={inp.name} label={inp.label} value={inp.value}
                    />
                )}
            )}
        </article>);
    }
}

export default Formulario;