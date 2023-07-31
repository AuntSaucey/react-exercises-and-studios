export default function BookList() {
   let pageTitle = "Good Movies";
   let book1 = "https://target.scene7.com/is/image/Target/GUEST_60d0ce8d-39b3-4e3f-8fd9-34b053213d9a?wid=488&hei=488&fmt=pjpeg";
   let book2 = "https://m.media-amazon.com/images/I/41urJNhlFzL.jpg";
   let book3 = "https://m.media-amazon.com/images/M/MV5BNDMwNjAzNzYwOF5BMl5BanBnXkFtZTcwMDY5NzcyMw@@._V1_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Twilight" />
         <img src={book2} alt="New Moon" />
         <img src={book3} alt="Eclipse" />
      </div>      
   );
}