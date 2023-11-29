import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Error from "./components/Error";
import Loading from "./components/Loading";
import BackToTopButton from "./components/backToTopButton";
import Footer from "./components/footer";
import Header from "./components/header";
import { persistor, store } from "./redux/store";
const HomePage = lazy(() => import("./components/homepage"));

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Header />
        <Outlet />
        <Footer />
        <BackToTopButton />
      </PersistGate>
    </Provider>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
