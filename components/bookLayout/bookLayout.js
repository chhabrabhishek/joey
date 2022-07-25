import Image from "next/image";
import bookLayoutStyle from "./bookLayout.module.scss";
import utilStyles from "../../styles/utils.module.scss";

const BookLayout = ({ book }) => {

    const handleBookDownload = () => {
        window.open(book.destinationUrl, "_blank");
    }

    const formatBookName = () => {
        return book.subjectAssociated.replace(/\s/g, "_")
    }

    return (
        <div className={bookLayoutStyle.bookLayoutContainer} onClick={handleBookDownload}>
            <Image
                src={`/static/images/${formatBookName()}.svg`}
                alt={book.bookName}
                layout="responsive"
                width={200}
                height={200}
            />
            <h4 className={`${utilStyles.regularMargin} ${bookLayoutStyle.bookName}`}>
                {book.bookName}
                &nbsp;by&nbsp;
                {
                    book.authorName.map((item, index) => {
                        return index == book.authorName.length - 1? item: index == book.authorName.length - 2?`${item} and `: `${item}, `
                    })
                }
            </h4>
            <h4 className={`${utilStyles.regularMargin} ${bookLayoutStyle.bookName}`}>
                Published by : {book.publisher}
            </h4>
            <h4 className={`${utilStyles.regularMargin} ${bookLayoutStyle.bookName}`}>
                Subject : {book.subjectAssociated}
            </h4>
            <h4 className={`${utilStyles.regularMargin} ${bookLayoutStyle.bookName}`}>
                Format Available : {book.format}
            </h4>
        </div>
    );
}

export default BookLayout;