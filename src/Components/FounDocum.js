const FounDocum = () => {
  const fdLi = [
    {
      href: "./pdf/p26.pdf",
      download: "./pdf/p26.pdf",
      text: `Постанова про затвердження Положення про 
        Національний комітет України з теоретичної і прикладної 
        механіки (24.01.2024)`,
    },
    {
      href: "./pdf/post.pdf",
      download: "./pdf/post.pdf",
      text: `Постанова Президії АН України від 1992 року про 
    заснування комітету`,
    },
    {
      href: "./pdf/pol.pdf",
      download: "./pdf/pol.pdf",
      text: `Положення про комітет від 1992 року, затверджене Президією
    академії`,
    },
    {
      href: "./pdf/stat.pdf",
      download: "./pdf/stat.pdf",
      text: `Статут комітету`,
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <article className="article">
          <h2>Установчі документи</h2>
          <ul>
            {fdLi.map((item, num) => {
              return (
                <li key={`fdLi ${num}`}>
                  <a href={item.href} download={item.download}>
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </section>
  );
};
export default FounDocum;
