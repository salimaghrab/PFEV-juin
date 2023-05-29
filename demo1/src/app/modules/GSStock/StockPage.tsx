import { Outlet, Route, Routes } from "react-router-dom";
import { CorrectCMUP } from "./component/CorrectCMUP";
import { ArticlePerime } from "./component/Inventaire/ArticlePerime";
import { MvtArticle } from "./component/Inventaire/MvtArticle";


const StockPage= () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >
            <Route
                path="Stock/Correction-CMUP"
                element={
                    <>
                    <CorrectCMUP/>
                    </>
                }
            />
            <Route
                path="Stock/ValidationInventaire"
                element={
                    <>
                    </>
                }
            />
            <Route
                path="Stock/EtatStock"
                element={
                    <>
                    </>
                }
            />
        </Route>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >
            <Route
                path="Inventaire/SaisieInventaire"
                element={
                    <>
                    </>
                }
            />
            <Route
                path="Inventaire/ValidationInventaire"
                element={
                    <>
                    </>
                }
            />
            <Route
                path="Inventaire/EtatStock"
                element={
                    <>
                    </>
                }
            />
            <Route
                path="Inventaire/MouvementArticle"
                element={
                    <>
                    <MvtArticle/>
                    </>
                }
            />
            <Route
                path="Inventaire/Articleperime"
                element={
                    <>
                    <ArticlePerime/>
                    </>
                }
            />
           
             
        </Route>
    </Routes>
)
export default StockPage;