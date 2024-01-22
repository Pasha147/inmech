import { genmeet } from "../appdata.js";


const GenMeeting = () => {
  

  return (
    <section className="section">
      <div className="container">
        <article className="article">
          <h2>Загальні збори</h2>
          <ul>
            {genmeet.map((art, indexArt) => {
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
export default GenMeeting;
