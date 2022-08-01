import { useState } from "react";
import utilStyles from "../../styles/utils.module.scss";
import SubjectLayout from "../subjectLayout/subjectLayout";
import subjectShelfLayoutStyle from "./subjectShelfLayout.module.scss";

const SubjectShelfLayout = ({ subjects }) => {

    const [visibleSubjects, setVisibleSubjects] = useState(subjects)

    const handleSearchSubjects = (event) => {
        const inputText = event.target.value.toLowerCase().trim();
        if(inputText) {
            const tempVisibleSubjects = subjects.filter(item => {
                return (
                    item.subjectName.toLowerCase().trim().includes(inputText)
                )
            })
            setVisibleSubjects(tempVisibleSubjects);
        }
        else {
            setVisibleSubjects(subjects);
        }
    }

    return (
        <div className={subjectShelfLayoutStyle.subjectShelfParentContainer}>
            <div className={subjectShelfLayoutStyle.searchContainer}>
                <p className={utilStyles.regularMargin}>Search your favorite subjects.</p>
                <input
                    className={subjectShelfLayoutStyle.searchInput}
                    placeholder="Enter a subject's name"
                    onChange={handleSearchSubjects}
                />
            </div>
            <p className="clickText">
                👇🏻 Click on any of the cards to view the subject details.
                <style jsx>{`
                    .clickText {
                        font-size: small;
                    }
                `}</style>
            </p>
            <div id="subjectShelfContainer" className={subjectShelfLayoutStyle.subjectShelfContainer}>
                {
                    visibleSubjects.map(item => <SubjectLayout key={item._id} subject={item}></SubjectLayout>)
                }
            </div>
        </div>
    );
}

export default SubjectShelfLayout;