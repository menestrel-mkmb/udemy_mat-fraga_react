import { toast } from 'react-toastify';

export const dupNotification = () => {
    toast("Aviso, parece que esse filme já está na lista");
}

export const errorNotification = () => {
    toast("Oops, algo deu errado. Filme não foi salvo");
}

export const successNotification = () => {
    toast("Tudo certo. Modificação na lista feita");
}