import { SmoothScrollProvider } from '@/src/context/SmoothScroll.context';
import Preloader from '../src/components/Preloader'
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Fragment, useEffect, useState } from "react";

export default function App({ Component, pageProps }) {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
        setTimeout(() => {
          window.scrollTo(1000, 1000);
        }, 100);
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'

        }, 2000)
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 2500);
      }
    )()
  }, [])
  return (
    <Fragment>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Component {...pageProps} />

    </Fragment>
  );
}
