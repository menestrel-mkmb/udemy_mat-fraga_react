import { toast } from 'react-toastify';

export const dupNotification = () => {
    toast("Aviso, parece que esse filme já está na lista",
    {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
    });
}

export const errorNotification = () => {
    toast("Oops, algo deu errado. Filme não foi salvo",
    {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
    });
}

export const addedNotification = () => {
    toast("Filme adicionado na lista",
    {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
    });
}

export const removedNotification = () => {
    toast("Filme removido da lista",
    {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
    });
}