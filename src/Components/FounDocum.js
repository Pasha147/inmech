const FounDocum = () => {
  return (
    <section className="section">
      <div className="container">
        <h2>Установчі документи</h2>
        <article className="article">
          <a href="./pdf/post.pdf" download="./pdf/post.pdf">
            Постанова Президії АН України від 1992 року про заснування комітету
          </a>
        </article>
        <article className="article">
          <a href="./pdf/pol.pdf" download="./pdf/pol.pdf">
            Положення про комітет від 1992 року, затверджене Президією академії
          </a>
        </article>
        <article className="article">
          <a href="./pdf/stat.pdf" download="./pdf/stat.pdf">
            Статут комітету
          </a>
        </article>
      </div>
    </section>
  );
};
export default FounDocum;
