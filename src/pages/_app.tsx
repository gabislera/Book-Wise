import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito_Sans } from "next/font/google";
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const nunito = Nunito_Sans({ subsets: ["latin"] });

export default function App({ Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <div className={`${nunito.className}`}>
      {getLayout(<Component {...pageProps} />)}
    </div>

  );
}
