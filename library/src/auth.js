import Cookies from 'js-cookie'

export default {
    setUserLogged(userLogged) {
        Cookies.set('userLogged', userLogged, { expires: 1 })
    },

    getUserLogged() {
        console.log(Cookies.get('userLogged'));
        return Cookies.get('userLogged')
    },

    deleteUserLogged() {
        Cookies.remove('userLogged')
    },
}