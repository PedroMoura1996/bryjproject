import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.scss";
import App from "./ecosystem";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { BryjLoader } from "./ecosystem/atoms/BryjLoader";
import { ThemeProvider } from "./ecosystem/wrappers/ThemeProvider";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Suspense fallback={<BryjLoader />}>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter basename={window._env_.REACT_APP_BASE_DIRECTORY}>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </I18nextProvider>
    </Provider>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
