import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import LayoutComponent from "./components/layout/layout";
import HomePage from "./pages/home/home";

import { IntlProvider } from "react-intl";
import { ERoutes } from "./core/enums/routes";
import { getLangJson } from "./core/utils/lang.util";
import AboutUsPage from "./pages/about-us/about-us";
import BenefitsPage from "./pages/benefits/benefits";
import NotFoundPage404 from "./pages/not-found-404/not-found-404";
import PartnersPage from "./pages/partners/partners";
import TestimonialsPage from "./pages/testimonials/testimonials";
import RecommendationPage from "./pages/recommendation/recommendation";

function App() {
  return (
    <IntlProvider messages={getLangJson()} locale="pt-br" defaultLocale="en">
      <BrowserRouter>
        <Routes>
          <Route path={ERoutes.HOME} element={<LayoutComponent />}>
            <Route index element={<HomePage />} />
            <Route path={ERoutes.ABOUT_US} element={<AboutUsPage />} />
            <Route path={ERoutes.BENEFITS} element={<BenefitsPage />} />
            <Route path={ERoutes.PARTNERS} element={<PartnersPage />} />
            <Route path={ERoutes.TESTIMONIALS} element={<TestimonialsPage />} />
            <Route path={ERoutes.RECOMMENDATION} element={<RecommendationPage />} />

            <Route path="*" element={<NotFoundPage404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
