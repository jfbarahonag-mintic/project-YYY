import Cookies from 'js-cookie'

export default {
    setUserLogged(userLogged) {
        Cookies.set('userLogged', userLogged, { expires: 1 })
    },

    getUserLogged() {
        return Cookies.get('userLogged')
    },

    deleteUserLogged() {
        Cookies.remove('userLogged')
    },
}