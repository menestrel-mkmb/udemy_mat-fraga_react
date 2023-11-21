import RoutesApp from "./routes";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const dupNotification = () => {
    toast("Aviso, parece que esse filme já está na lista");
}

export const errorNotification = () => {
    toast("Oops, algo deu errado. Filme não foi salvo");
}

export const successNotification = () => {
    toast("Tudo certo. Modificação na lista feita");
}

function App() {    
    return(
        <div className="App">
            <ToastContainer />
            <RoutesApp />
        </div>
    );
}

export default App;