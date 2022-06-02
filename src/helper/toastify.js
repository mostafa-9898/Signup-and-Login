import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const toastify = (type, text) => {

    if (type === 'success') {
        return toast.success(text)
    } else {
        return toast.error(text)
    }
}