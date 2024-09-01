const ComMembers = () => {
  const dat = [
    {
      href: "./pdf/comMemb/actMembers.pdf",
      file: "actMembers.pdf",
      title:
        "СПИСОК ДІЮЧИХ ЧЛЕНІВ Національного комітету України з теоретичної і прикладної механіки",
    },
    {
      href: "./pdf/comMemb/exMembers.pdf",
      file: "exMembers.pdf",
      title:
        "Список членів Національного комітету України з теоретичної і прикладної механіки, які вибули з числа діючих членів комітету",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <article className="article">
          <h2>Члени комітету</h2>
          <ul>
            {dat.map((art, indexArt) => {
              return (
                <li key={`art${indexArt}`}>
                  <a href={art.href} download={art.file}>
                    {art.title}
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
export default ComMembers;
