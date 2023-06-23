import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import features from "/src/mocks/features";
import products from "/src/mocks/products";
import { GlobalStyle } from "./styles";
import { AppRoute } from "/src/const";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "/src/components/pages/main-page/main-page";
import Order from "/src/components/pages/order/order";
import ScrollTop from "/src/components/ui/scroll-top/scroll-top";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollTop />
        <Routes>
          <Route exact path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route
              index
              element={<MainPage features={features} products={products} />}
            />
            <Route
              exact
              path={AppRoute.ORDER.replace(AppRoute.MAIN, "")}
              element={<Order features={features} products={products} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
