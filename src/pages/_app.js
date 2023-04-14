import "@/styles/globals.css";
import { Auth0Provider } from "@auth0/auth0-react";

export default function App({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="dev-plxv4i4obbrx8g0n.us.auth0.com"
      clientId="5g1lfbPrRcIlHdyzD8m7IekxNU13pHNF"
      authorizationParams={{ redirect_uri: "http://localhost:3000/" }}
    >
      <Component {...pageProps} />;
    </Auth0Provider>
  );
}
