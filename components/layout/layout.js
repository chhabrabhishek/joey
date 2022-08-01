import Link from "next/link";
import Head from "next/head";
import layoutStyle from "./layout.module.scss";

export const siteTitle = "joey";

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Onboarding made easy."
                />
                <meta name="og:title" content={siteTitle} />
            </Head>
            <div className={layoutStyle.navbarContainer}>
                <Link href="/">
                    <a className={layoutStyle.productHeading}>{siteTitle}</a>
                </Link>
            </div>
            <main>{children}</main>
        </div>
    );
}

export default Layout;