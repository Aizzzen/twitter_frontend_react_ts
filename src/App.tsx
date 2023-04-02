import React, {useEffect} from 'react';
import {SignIn} from "./pages/SignIn";
import {Home} from "./pages/Home";
import {Route, Routes, useNavigate} from "react-router-dom";
import {UserPage} from "./pages/UserPage";
import {Layout} from "./pages/Layout";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserData} from "./store/ducks/user/actionCreators";
import {selectIsAuth, selectUserStatus} from "./store/ducks/user/selectors";
import {LoadingStatus} from "./store/types";
import {useStylesHomeStyle} from "./pages/Home/theme";
import TwitterIcon from "@material-ui/icons/Twitter";

function App() {
    const classes = useStylesHomeStyle()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth)
    const loadingStatus = useSelector(selectUserStatus)
    const isReady = loadingStatus !== LoadingStatus.NEVER && loadingStatus !== LoadingStatus.LOADING

    useEffect(() => {
        dispatch(fetchUserData())
    }, [])

    useEffect(() => {
        if(!isAuth && isReady) {
            navigate('/signin', { replace: true })
        } else {
            navigate('/home', { replace: true })
        }
    }, [isAuth, isReady])

    if(!isReady) {
        return (
            <div className={classes.centered}>
                <TwitterIcon color='primary' style={{width: 80, height: 80}} />
            </div>
        )
    }

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
