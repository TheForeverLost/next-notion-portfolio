import { Footer } from "@components/footer";
import { Header } from "@components/header";

import "highlight.js/styles/github-dark-dimmed.css";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import React from "react";
import "tailwindcss/tailwind.css";

import "@styles/global.scss";

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
    const domain = process.env.LOCAL
        ? "https://localhost:3000"
        : "https://alan-john-portfolio.vercel.app";
    const url = `${domain}${router.route}`;

    return (
        <>
            <DefaultSeo
                titleTemplate="%s - Alan John"
                openGraph={{
                    type: "website",
                    locale: "en_IE",
                    url,
                    description:
                        "The personal website for Alan John, developer.",
                    site_name: "Alan John",
                    images: [
                        {
                            url: `${domain}/images/social_media_preview.png`,
                            width: 1200,
                            height: 628,
                            alt: "My Portfolio Preview",
                            type: "image/png",
                        },
                    ],
                }}
                canonical={url}
            />
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
