import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login&Register/Login/Login";
import Register from "../../Pages/Login&Register/Register/Register";
import News from "../../Pages/News/News/News";
import Profile from "../../Pages/Others/Profile/Profile";
import TermsAndConditions from "../../Pages/Others/TermsAndConditions";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Main />, children: [
            {
                path: '/',
                loader: () => fetch('https://dragon-news-server-theta-two.vercel.app/news'), element: <Home />
            },

            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`https://dragon-news-server-theta-two.vercel.app/category/${params.id}`), element: <Category />
            },

            {
                path: '/news/:id',
                loader: ({ params }) => fetch(`https://dragon-news-server-theta-two.vercel.app/news/${params.id}`),
                element: <PrivateRoute><News /></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/terms',
                element: <TermsAndConditions />
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
            }
        ]
    }
])