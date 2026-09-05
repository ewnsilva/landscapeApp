// Side-effect import guarantees i18next is initialized before any component
// calls useTranslation, whether that happens through the app's root layout or
// in isolation (e.g. component tests that render a leaf component directly).
import "./index";

export { useTranslation } from "react-i18next";
