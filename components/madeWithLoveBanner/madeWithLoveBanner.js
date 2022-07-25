import utilStyles from "../../styles/utils.module.scss";
import madeWithLoveBannerStyle from "./madeWithLoveBanner.module.scss";

const MadeWithLoveBanner = () => {
    return (
        <div className={madeWithLoveBannerStyle.madeWithLoveContainer}>
            <p className={`${madeWithLoveBannerStyle.madeWithLoveText} ${utilStyles.regularMargin}`}>Made with ❤️ by <strong>Abhishek Chhabra</strong></p>
        </div>
    );
}

export default MadeWithLoveBanner;