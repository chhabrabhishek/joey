import Head from "next/head";
import { IoBag } from "react-icons/io5";
import { IoMdHelp } from "react-icons/io";
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
                <p className={layoutStyle.productHeading}>{siteTitle}</p>
                <div>
                    <IoMdHelp className={layoutStyle.iconStyle} />
                    <IoBag className={layoutStyle.iconStyle} />
                </div>
            </div>
            <main>{children}</main>
        </div>
    );
}

export default Layout;