import React from "react";

const BookStatus = ({ bestsellers, suggestions }: { bestsellers: boolean, suggestions: boolean }) => {
  return (
    <div>
      {bestsellers && <p>หนังสือดี้ ดี!</p>}
      {suggestions && <p>แนะนำสุดๆ!</p>}
    </div>
  );
};

export default BookStatus;
