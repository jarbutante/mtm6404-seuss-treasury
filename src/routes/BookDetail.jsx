import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "../components/Nav.jsx";

export const BookDetail = () => {
    const [book, setBook] = useState(null);
    const { id } = useParams(); 

    useEffect(() => {
        fetch(`https://seussology.info/api/books/${id}`)
            .then((res) => res.json())
            .then((data) => setBook(data));
    }, [id]); 

    if (!book) return null; 

    return (
        <>
            <Nav />
            <div className="container mt-4">
                <h1 className="display-4">{book.title}</h1>
                <p><strong>Published:</strong> {book.year_published}</p>
                <p><strong>Description:</strong> {book.description}</p>
                <div className="text-center">
                    <img 
                        src={book.image} 
                        alt={book.title} 
                        className="img-fluid" 
                        width="300" 
                    />
                </div>
            </div>
        </>
    );
};
