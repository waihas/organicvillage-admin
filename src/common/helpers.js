import Swal from 'sweetalert2';

export default {
    showAlert: function (icon, title, text, showConfirmButton = true, timer) {
        return Swal.fire({
            icon: icon,
            title: title,
            text: text,
            showConfirmButton: showConfirmButton,
            confirmButtonText: 'Confirm',
            confirmButtonColor: "#868F03",
            timer: timer
        })
    },
    showConfirmAlert: function (icon, title, text, yesText, noText, next) {
        Swal.fire({
            icon: icon,
            title: title,
            text: text,
            confirmButtonText: yesText,
            confirmButtonColor: "#868F03",
            showCancelButton: true,
            denyButtonText: noText,
            cancelButtonText: noText,
        }).then((result) => {
            if (result.isConfirmed) {
              next();
            }
        })
    },
}