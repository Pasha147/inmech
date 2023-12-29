const FounDocum = () => {
  return (
    <section className="section">
      <div className="container">
        <article className="article">
          <h2>Установчі документи</h2>
          <ul>
            <li>
              <a href="./pdf/post.pdf" download="./pdf/post.pdf">
                Постанова Президії АН України від 1992 року про заснування
                комітету
              </a>
            </li>
            <li>
              <a href="./pdf/pol.pdf" download="./pdf/pol.pdf">
                Положення про комітет від 1992 року, затверджене Президією
                академії
              </a>
            </li>
            <li>
              <a href="./pdf/stat.pdf" download="./pdf/stat.pdf">
                Статут комітету
              </a>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
export default FounDocum;
