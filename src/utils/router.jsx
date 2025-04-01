import { Books } from "../routes/Books.jsx"; 
import { Quote } from "../routes/Quote.jsx";
import { BookDetail } from "../routes/BookDetail.jsx"; 

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Books /> 
    },
    {
        path: '/quote',
        element: <Quote />
    },
    {   
        path: '/books/:id', 
        element: <BookDetail /> 
    }
]);

export default router;
