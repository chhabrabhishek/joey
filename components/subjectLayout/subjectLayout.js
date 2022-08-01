import Image from "next/image";
import subjectLayoutStyle from "./subjectLayout.module.scss";
import utilStyles from "../../styles/utils.module.scss";

const SubjectLayout = ({ subject }) => {

    const navigateToSubjectDetails = () => {
        window.location.href = `subjects/${subject.subjectName}`;
    }

    const formatSubjectName = () => {
        const thumbnailUrl = subject.subjectName.replace(/\s/g, "");
        return thumbnailUrl.charAt(0).toLowerCase() + thumbnailUrl.slice(1);
    }

    return (
        <div className={subjectLayoutStyle.subjectLayoutContainer} onClick={navigateToSubjectDetails}>
            <Image
                src={`/static/images/${formatSubjectName()}.svg`}
                alt={subject.subjectName}
                layout="responsive"
                width={200}
                height={200}
            />
            <h3 className={`${utilStyles.regularMargin} ${subjectLayoutStyle.subjectName}`}>
                {subject.subjectName}
            </h3>
        </div>
    );
}

export default SubjectLayout;