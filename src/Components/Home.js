import Slider from "./Slider";
import { slider } from "../appdata";
// import { useEffect } from "react";

const Home = () => {
  /*
  useEffect(()=>{
     console.log(slider);
  },[])
  */

  return (
    <section className="section">
      {/* <div className="container"> */}
     
      <article className="article">
        <h3>16 листопада 2023 </h3>
        <h2>Конференція «Актуальні проблеми механіки – 2023»</h2>
        <div className="sliderCont">
          <Slider slider={slider} />
        </div>
        <p>
          {
            "На конференції, організатором якої став Національний комітет України з теоретичної і прикладної механіки спільно з десятьма науковими та освітніми організаціями, було представлено понад 200 доповідей від понад 400 авторів (з них більше 30 – іноземних). Робота проходила в 11 секціях (серед них одна міжнародна). Усього відбулося 21 засідання, 5 з яких було проведено в день відкриття у великій конференц-залі Президії Академії наук України. Дню відкриття присвячена "
          }
          <a href="https://www.nas.gov.ua/UA/Messages/Pages/View.aspx?MessageID=10814">
            яскрава стаття
          </a>
          {" на сайті Національної академії наук України."}
        </p>
      </article>
      <article className="article">
        <h3>12 вересня 2023 </h3>
        <h2>Загальні збори</h2>
        <p>
          12 вересня 2023 року відбулись Загальні збори членів Національного
          комітету України з теоретичної і прикладної механіки. За відсутності
          за станом здоров’я голови Комітету О.М. Гузя головуючим на засіданні
          було обрано вченого секретаря Комітету Я.Я. Рущицького. Було заслухано
          звіт голови Комітету, визнано роботу Комітету та його голови
          задовільною та висловлена вдячність за видатний внесок у становленні
          Комітету та забезпечення його ефективної роботи голові Комітету. За
          підсумками відкритого голосування до Комітету було включено 76 нових
          членів з 22-х освітніх, наукових та промислових організацій України.
          Головою Комітету обрано В.Л. Богданова, його заступниками – М.І.
          Бобиря, А.Ф. Булата, Я.О. Жука, Р.М. Кушніра і В.М. Назаренка, вченим
          секретарем – М.Ф. Селіванова. Також було затверджено склад Президії
          Комітету, в який також увійшли Г.О. Воропаєв, О.М. Гузь, Л.М. Лобанов,
          З.Т. Назарчук, О.В. Пилипенко, Я.Я. Рущицький, О.М. Тимоха, В.В.
          Харченко і О.М. Хіміч. Базовою організацією Комітету залишився
          Інститут механіки ім. С.П. Тимошенка НАН України.
        </p>
      </article>
      {/* </div> */}
    </section>
  );
};
export default Home;
