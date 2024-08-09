import { AppProps } from "next/app";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import { store } from "@/store/store"; // Adjust the path as necessary
import "../styles/globals.css";
import NavBar from "@/components/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <div className="bg-[#BC9179]">
        <NavBar />
        <Component {...pageProps} />
      </div>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default MyApp;
