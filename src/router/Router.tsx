import {Route, Routes} from "react-router-dom";
import Login from "../pages/Login.tsx";
import Home from "../pages/Home.tsx";
import {HOME_ROUTES, LOGIN_ROUTES} from "../utils/route.ts";
import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";

const Router = () => {
    const userNow = useSelector((state: RootState) => state.user)
    return (
        <Routes>
            <Route path={HOME_ROUTES} element={<Home />} />
            <Route path={LOGIN_ROUTES} element={<Login />} />
        </Routes>
    );
};

export default Router;