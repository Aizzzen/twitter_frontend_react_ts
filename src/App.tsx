import React, {useEffect} from 'react';
import {SignIn} from "./pages/SignIn";
import {Home} from "./pages/Home";
import {Routes, Route, useNavigate} from "react-router-dom";
import {UserPage} from "./pages/UserPage";
import {Layout} from "./pages/Layout";
import {useDispatch, useSelector} from "react-redux";
import {UserApi} from "./services/api/usersApi";
import {setUserData} from "./store/ducks/user/actionCreators";
import {selectIsAuth} from "./store/ducks/user/selectors";

function App() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth)

    const checkAuth = async() => {
        try {
            const {data} = await UserApi.getMe()
            dispatch(setUserData(data))
            // navigate('/home', { replace: true })
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        checkAuth()
    }, [])

    useEffect(() => {
        if(isAuth) {
            navigate('/home', { replace: true })
        }
    }, [isAuth])

    return (
        <div className="App">
            <Routes>
                <Route path='/signin' element={<SignIn />} />
                <Route path='*' element={
                    <Layout>
                        <Route path='/home/*' element={<Home/>}/>
                        <Route path='/user/*' element={<UserPage/>}/>
                    </Layout>
                }/>
            </Routes>
        </div>
  );
}

export default App;
