import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import EducationalBackground from "../Pages/EducationalBackground/EducationalBackground";
import ContactInformation from "../Pages/ContactInformation/ContactInformation";
import Projects from "../Pages/Projects/Projects";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/educationalBackground',
                element: <EducationalBackground></EducationalBackground>
            },
            {
                path: '/contactInformation',
                element: <ContactInformation>F</ContactInformation>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
        ]
    },
]);