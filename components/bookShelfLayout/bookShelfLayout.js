import BookLayout from "../bookLayout/bookLayout";
import bookShelfLayoutStyle from "./bookShelfLayout.module.scss";

const BookShelfLayout = ({ books }) => {
    return (
        <div id="bookShelfContainer" className={bookShelfLayoutStyle.bookShelfContainer}>
            {
                books.map(item => <BookLayout key={item._id} book={item}></BookLayout>)
            }
        </div>
    );
}

export default BookShelfLayout;