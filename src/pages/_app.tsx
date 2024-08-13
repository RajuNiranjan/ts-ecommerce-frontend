import NavBar from "@/components/navBar";
import { Toaster } from "@/components/ui/toaster";
import { store } from "@/store/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Toaster />
      <NavBar />
      <div className="p-4">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
