import { Outlet, Route, Routes } from "react-router-dom";
import { Famille } from "./component/Famille";
import { Article } from "./component/Article";


const FamilleArticlePage = () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }


        >
            <Route
                path="familles"
                element={
                    <>
                      <Famille/>  
                    </>
                }
            /> 
            <Route
                path="article"
                element={
                    <>
                     <Article/>  
                    </>
                }
            /> 
        </Route>
    </Routes>
)
export default FamilleArticlePage;