import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Header from "./components/header";
import Footer from "./components/footer";
import Loading from "./components/Loading";
import Error from "./components/Error";
import { persistor, store } from "./redux/store";
import BackToTopButton from "./components/backToTopButton";
const HomePage = lazy(() => import("./components/homepage"));
const AboutMe = lazy(() => import("./components/AboutMe"));
const ArticlePage = lazy(() => import("./components/ArticlePage"));
const BlogPage = lazy(() => import("./components/BlogPage"));
const BookPage = lazy(() => import("./components/BookPage"));
const PublicationPage = lazy(() => import("./components/PublicationPage"));

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
      {
        path: "aboutMe",
        element: (
          <Suspense fallback={<Loading />}>
            <AboutMe />
          </Suspense>
        ),
      },
      {
        path: "/article/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <ArticlePage />
          </Suspense>
        ),
      },
      {
        path: "/Books/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <BookPage />
          </Suspense>
        ),
      },
      {
        path: "/Blogs/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <BlogPage />
          </Suspense>
        ),
      },
      {
        path: "/Publication/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <PublicationPage />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
