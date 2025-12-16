function BookCard({ book }) {
  return (
    <div className="card">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <small>{book.year}</small>
    </div>
  );
}

export default BookCard;
