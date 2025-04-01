import { useEffect, useState } from "react";
import { Nav } from "../components/Nav.jsx";

export const Quote = () => {
    const [quotes, setQuotes] = useState([]);

    // Fetch quotes from the API
    useEffect(() => {
        fetch("https://seussology.info/api/quotes")
            .then((res) => res.json())
            .then((data) => {
                setQuotes(data); 
            });
    }, []);

    return (
        <>
            <Nav />
            <div className="container mt-4">
                <h1 className="text-center display-4 fw-bold">Quotes</h1>
                <div className="row g-4 mt-3">
                    {quotes.map((quote) => (
                        <div className="col-sm-6 col-md-4 col-lg-3" key={quote.id}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <p className="card-text">"{quote.text}"</p>
                                    <footer className="blockquote-footer">
                                        From the book: <em>{quote.book.title}</em>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
