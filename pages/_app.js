import "../styles/globals.css";
import { useEffect } from "react";

function DefaultLayout({ children }) {
  return <>{children}</>;
}

function MyApp({ Component, pageProps }) {
  const ChildrenLayout = Component.Layout || DefaultLayout;
  return (
    <ChildrenLayout>
      <Component {...pageProps} />
    </ChildrenLayout>
  );
}

export default MyApp;
