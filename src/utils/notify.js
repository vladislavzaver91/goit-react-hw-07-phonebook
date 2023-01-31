import { toast, Zoom } from 'react-toastify';

export const onExistContact = findedContact =>
toast.info(`${findedContact.name} is already in contacts!`, {
    position: "top-right",
    autoClose: 2000,
    transition: Zoom,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});

export const onSuccesAddContact = contact => 
toast.info(`${contact.name} was successfully added!`, {
    position: "top-right",
    autoClose: 2000,
    transition: Zoom,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});

export const onDelContact = name =>
toast.info(`${name} was removed from your list!`, {
    position: "top-right",
    autoClose: 2000,
    transition: Zoom,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});