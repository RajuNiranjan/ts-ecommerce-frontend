import NavBar from "@/components/navBar";
import { Toaster } from "@/components/ui/toaster";
import { persistor, store } from "@/store/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={false} persistor={persistor}>
        <Toaster />
        <NavBar />
        <div className="p-4">
          <Component {...pageProps} />
        </div>
      </PersistGate>
    </Provider>
  );
}
