import { useState } from "react";
import BookLayout from "../bookLayout/bookLayout";
import utilStyles from "../../styles/utils.module.scss";
import bookShelfLayoutStyle from "./bookShelfLayout.module.scss";

const BookShelfLayout = ({ books }) => {

    const [visibleBooks, setVisibleBooks] = useState(books)

    const handleSearchBooks = (event) => {
        const inputText = event.target.value.toLowerCase().trim();
        if(inputText) {
            const tempVisibleBooks = books.filter(item => {
                let authors = ""
                item.authorName.map(author => {
                    authors += `${author} `
                })
                return (
                    item.bookName.toLowerCase().trim().includes(inputText) ||
                    item.subjectAssociated.toLowerCase().trim().includes(inputText) ||
                    item.publisher.toLowerCase().trim().includes(inputText) ||
                    authors.toLowerCase().trim().includes(inputText)
                )
            })

            setVisibleBooks(tempVisibleBooks);
        }
        else {
            setVisibleBooks(books);
        }
    }

    return (
        <div className={bookShelfLayoutStyle.bookShelfParentContainer}>
            <div className={bookShelfLayoutStyle.searchContainer}>
                <p className={utilStyles.regularMargin}>Search your favorite books.</p>
                <input
                    className={bookShelfLayoutStyle.searchInput}
                    placeholder="Enter a book, author or a publisher's name"
                    onChange={handleSearchBooks}
                />
            </div>
            <p className="clickText">
                👇🏻 Click on any of the cards to view the book.
                <style jsx>{`
                    .clickText {
                        font-size: small;
                    }
                `}</style>
            </p>
            <div id="bookShelfContainer" className={bookShelfLayoutStyle.bookShelfContainer}>
                {
                    visibleBooks.map(item => <BookLayout key={item._id} book={item}></BookLayout>)
                }
            </div>
        </div>
    );
}

export default BookShelfLayout;