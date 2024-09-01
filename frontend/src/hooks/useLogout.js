import useAuthContext from "./useAuthContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const logout = () => {
        // Logout logic here
        localStorage.removeItem('user')

        // dispatch logout action

        dispatch({type: 'logout'})
    }
    return { logout}
}