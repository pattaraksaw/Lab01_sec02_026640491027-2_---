import React, { useState } from "react";
import booksData from "~/data/books.json";
import BookStatus from "~/components/BookStatus";

export default function BooksGrid() {                                                                         // ช สลับ 
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showBestsellers, setShowBestsellers] = useState(false);

  const filteredBooks = booksData.filter((book) => {
    if (showSuggestions && !book.Suggestions) return false;
    if (showBestsellers && !book.Bestsellers) return false;
    return true;
  });

  return (
    <div>
      <div className="mb-4 space-x-4 p-5">
        <button
          onClick={() => setShowSuggestions(!showSuggestions)}                                                 // BT
          className={`px-4 py-2 rounded ${showSuggestions ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >                                                                     
          {showSuggestions ? "Show All Books" : "Show Suggested Books"}                                         
        </button>                                                                                                                   
        <button
          onClick={() => setShowBestsellers(!showBestsellers)}
          className={`px-4 py-2 rounded ${showBestsellers ? "bg-green-500 text-white" : "bg-gray-200"}`}
        >
          {showBestsellers ? "Show All Books" : "Show Bestsellers"}
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {filteredBooks.map((book) => (                                                                         // น ห 
          <div key={book.Code} className="border p-4">
            <img src={book.Cover} alt={book.Title} className="h-48 w-full object-cover" />
            <h2 className="text-xl font-bold">{book.Title}</h2>
            <p text-xl>คำอธิบาย : {book.Description}</p>
            <p>ราคา : {book.Price}</p>
            <BookStatus bestsellers={book.Bestsellers} suggestions={book.Suggestions} />
          </div>
        ))}
      </div>
    </div>
  );
}

//   https://www.naiin.com/   
//    อ้างอิง
