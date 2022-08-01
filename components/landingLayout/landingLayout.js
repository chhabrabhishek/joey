import Image from "next/image";
import ButtonLayout from "../buttonLayout/buttonLayout"
import utilStyles from "../../styles/utils.module.scss";
import landingLayoutStyle from "./landingLayout.module.scss";
import MadeWithLoveBanner from "../madeWithLoveBanner/madeWithLoveBanner";

const LandingLayout = () => {

    const handleButtonClick = (buttonTextCode) => {
        if(buttonTextCode == "ebooks") {
            document.getElementById("subjectShelfContainer").scrollIntoView({ behavior: 'smooth' })
        }
        else {
            window.open("https://elearn.bits-pilani.ac.in/", "_blank")
        }
    }

    return (
        <div className={landingLayoutStyle.leftImageContainer}>
            <div className={landingLayoutStyle.greetingsContainer}>
                <h1 className={`${landingLayoutStyle.greetingsText} ${utilStyles.textAlignLeft} ${utilStyles.regularMarginTop}`}>Hi, I&apos;m Joey.</h1>
                <h2 className={`${landingLayoutStyle.introductoryText} ${utilStyles.textAlignLeft} ${utilStyles.regularMarginTop}`}>Your personal guide in the world of BITS Pilani</h2>
                <h4 className={`${landingLayoutStyle.descriptionText} ${utilStyles.textAlignLeft} ${utilStyles.regularMarginTop}`}>I&apos;ve been made to make your life easier, you can come and ask me questions about your semesters, subjects, books, useful links etc. and I&apos;ll try my best to guide you through it.</h4>
                <div className={landingLayoutStyle.buttonContainer}>
                    <ButtonLayout buttonStylesAndInfo={{buttonText: "Available Subjects", buttonTextCode: "ebooks", backgroundColor: "#F50057", color: "white"}} handleButtonClick={handleButtonClick} />
                    <ButtonLayout buttonStylesAndInfo={{buttonText: "E-Learn Portal", buttonTextCode: "elearn", backgroundColor: "#F50057", color: "white", buttonAdditionalStyle: "margin-left: 1rem"}} handleButtonClick={handleButtonClick} />
                </div>
            </div>
            <div className={landingLayoutStyle.landingImageContainer}>
                <Image
                    src="/static/images/landingImage.svg"
                    alt="Landing Image"
                    layout="fixed"
                    width={500}
                    height={500}
                />
            </div>
            <MadeWithLoveBanner></MadeWithLoveBanner>
        </div>
    );
}

export default LandingLayout;