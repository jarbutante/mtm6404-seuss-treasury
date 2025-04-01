import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "../components/Nav.jsx";

export const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://seussology.info/api/books")
            .then((res) => res.json())
            .then((data) => {
                setBooks(data);
            });
    }, []);

    return (
        <>
            <Nav />
            <div className="container mt-4">
                <h1 className="text-center display-4 fw-bold">Books</h1>
                <div className="row g-4 mt-3">
                    {books.map((book) => (
                        <div className="col-sm-6 col-md-4 col-lg-3" key={book.id}>
                            <Link to={`/books/${book.id}`}>
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="img-fluid"
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
