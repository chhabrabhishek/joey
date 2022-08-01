import utilStyles from "../../styles/utils.module.scss";
import subjectDataLayoutStyle from "./subjectDataLayout.module.scss";

const SubjectDataLayout = ({subjectData}) => {

    const subjectDataOptions = ["Course Details", "Course Objectives", "Learning Outcomes", "Text Books", "Reference Material", "Content Structure", "Assignments", "Evaluation Components", "Syllabus For Exams", "Evaluation Guidelines"];

    const handleScrollInto = (event) => {
        document.getElementById(event.target.innerHTML.replace(/\s+/g,"")).scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className={subjectDataLayoutStyle.subjectDataParent}>
            <div className={subjectDataLayoutStyle.subjectDataOptionsParent}>
                {
                    subjectDataOptions.map((item, index) => {
                        return (
                                <p onClick={handleScrollInto} key={index} className={subjectDataLayoutStyle.subjectDataOptions}>{item}</p>
                            );
                    })
                }
            </div>
            <div className={subjectDataLayoutStyle.courseContainer}>
                <div id="CourseDetails">
                    <h2 className={subjectDataLayoutStyle.headingText}>Course Details</h2>
                    <p className={utilStyles.regularMargin}><strong>Course Title:</strong> {subjectData.subjectName}</p>
                    <p className={utilStyles.regularMargin}><strong>Course Number(s):</strong> {subjectData.courseNumber}</p>
                    <p className={utilStyles.regularMargin}><strong>Semester Year:</strong> {subjectData.semesterYear}</p>
                </div>
                <div id="CourseObjectives">
                    <h2 className={subjectDataLayoutStyle.headingText}>Course Objectives</h2>
                    <ul>
                        {subjectData.courseObjectives.map((item, index) => <li className={utilStyles.regularMargin} key={index}>{item}</li>)}
                    </ul>
                </div>
                <div id="LearningOutcomes">
                    <h2 className={subjectDataLayoutStyle.headingText}>Learning Outcomes</h2>
                    <ul>
                        {subjectData.learningOutcomes.map((item, index) => <li className={utilStyles.regularMargin} key={index}>{item}</li>)}
                    </ul>
                </div>
                <div id="TextBooks">
                    <h2 className={subjectDataLayoutStyle.headingText}>Text Books</h2>
                    <ul>
                        {subjectData.textBooks.map((item, index) => 
                            <li className={utilStyles.regularMargin} key={index}>
                                {
                                    item.bookUrl?
                                    <a style={{textDecoration: "underline"}} href={item.bookUrl} target="_blank" rel="noreferrer" className={utilStyles.regularMargin} key={index}>{item.bookName}</a>:
                                    <p className={utilStyles.regularMargin} key={index}>{item.bookName}</p>
                                }
                            </li>
                        )}
                    </ul>
                </div>
                <div id="ReferenceMaterial">
                    <h2 className={subjectDataLayoutStyle.headingText}>Reference Material</h2>
                    {
                        subjectData.referenceMaterial.map((item, indexDiv) => {
                            return (
                                <div key={indexDiv}>
                                    {item.links.length > 0? <p className={utilStyles.regularMargin}><strong>{item.topic}</strong></p>: <p className={utilStyles.regularMargin}>{item.topic}</p>}
                                    <ul>
                                        {item.links.map((link, index) => 
                                            <li className={utilStyles.regularMargin} key={index}>
                                                {
                                                    <a style={{textDecoration: "underline", wordBreak: "break-word"}} href={link} target="_blank" rel="noreferrer" className={utilStyles.regularMargin} key={index}>{link}</a>
                                                }
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
                <div id="ContentStructure">
                    <h2 className={subjectDataLayoutStyle.headingText}>Content Structure</h2>
                    {
                        subjectData.contentStructure.map((item, indexDiv) => {
                            return (
                                <div key={indexDiv}>
                                    <h3>Module: {item.module}</h3>
                                    {
                                        item.content.map((data, index) => {
                                            return (
                                                <div key={index}>
                                                    <p className={utilStyles.regularMargin}><strong>{data.topic}</strong></p>
                                                    <ul>
                                                        {
                                                            data.subtopics.map((subtopic, indexItem) => <li key={indexItem} className={utilStyles.regularMargin}>{subtopic}</li>)
                                                        }
                                                    </ul>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div id="Assignments">
                    <h2 className={subjectDataLayoutStyle.headingText}>Assignments</h2>
                    {
                        !subjectData.assignments[0].number && 
                        <div>
                            <h3>No assignment provided yet for {subjectData.subjectName}.</h3>
                            {
                                subjectData.assignments[0].assignmentGuidelines.length > 0 &&
                                <div>
                                    <p><strong>Assignment Guidelines</strong></p>
                                    <ul> 
                                        {
                                            subjectData.assignments[0].assignmentGuidelines.map((item, index) => <li key={index} className={utilStyles.regularMargin}>{item}</li>)
                                        }
                                    </ul>
                                </div>
                            }
                        </div>
                    }
                    {
                        subjectData.assignments[0].number > 0 && subjectData.assignments.map((item, indexDiv) => {
                            return (
                                <div key={indexDiv}>
                                    <h3>Assignment Number: {item.number}</h3>
                                    <p><strong>Assignment Weightage:</strong> {item.weightage}%</p>
                                    <p><strong>Objective:</strong> {item.objective}</p>
                                    <p><strong>Activity</strong></p>
                                    <ul>
                                        {
                                            item.activity.map((data, index) => <li key={index} className={utilStyles.regularMargin}>{data}</li>)
                                        }
                                    </ul>
                                    <p><strong>Evaluation Criteria</strong></p>
                                    <ul>
                                        {
                                            item.evaluationCriteria.map((data, index) => <li key={index} className={utilStyles.regularMargin}>{data}</li>)
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
                <div id="EvaluationComponents">
                    <h2 className={subjectDataLayoutStyle.headingText}>Evaluation Components</h2>
                        {
                            subjectData.evaluationComponents.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <h3>{item.name}</h3>
                                        <ul>
                                            <li className={utilStyles.regularMargin}><strong>Type:</strong> {item.type}</li>
                                            <li className={utilStyles.regularMargin}><strong>Duration:</strong> {item.duration? item.duration: "N/A"}</li>
                                            <li className={utilStyles.regularMargin}><strong>Weight</strong> {item.weight}</li>
                                            <li className={utilStyles.regularMargin}><strong>Date</strong> {item.date}</li>
                                        </ul>
                                    </div>
                                )
                            })
                        }
                </div>
                <div id="SyllabusForExams">
                    <h2 className={subjectDataLayoutStyle.headingText}>Syllabus For Exams</h2>
                    <ul>
                        {subjectData.syllabusForExams.map((item, index) => <li className={utilStyles.regularMargin} key={index}>{item}</li>)}
                    </ul>
                </div>
                <div id="EvaluationGuidelines">
                    <h2 className={subjectDataLayoutStyle.headingText}>Evaluation Guidelines</h2>
                    <ul>
                        {subjectData.evaluationGuidelines.map((item, index) => <li className={utilStyles.regularMargin} key={index}>{item}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SubjectDataLayout;