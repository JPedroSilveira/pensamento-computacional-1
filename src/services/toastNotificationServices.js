import { toast } from 'react-toastify';

class ToastNotificationServices {
    show = (message, type) => {
        toast(message, {
            autoClose: 5000,
            draggable: true,
            position: (MobileServices.isMobile()) ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
            type: type
        })
    }

    warning = (message) => {
        show(message, toast.TYPE.WARNING)
    }

    error = (message) => {
        show(message, toast.TYPE.ERROR)
    }

    info = (message) => {
        show(message, toast.TYPE.INFO)
    }

    success = (message) => {
        show(message, toast.TYPE.SUCCESS)
    }

    default = (message) => {
        show(message, toast.TYPE.DEFAULT)
    }
}

const toastNotificationServices = new ToastNotificationServices()

export default toastNotificationServices