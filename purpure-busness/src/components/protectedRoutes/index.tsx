import { useContext, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"


export const ProtectedRoutes = () => {
    
    const { user, setCurrentRoute } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if(!user){
            const path = window.location.pathname
            if(path !== '/'){
                setCurrentRoute(path)
            }
            navigate('/')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {user && <Outlet/> }
        </>
    )
}