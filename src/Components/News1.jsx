import Slider from "./Slider";
import { sliderNews1 } from "../appdata";
import cl from "./News1.module.css";

const News1 = () => {
  return (
    <article className="article">
      <h3 className={cl.h3News1}>8 жовтня 2024 </h3>
      <h2>
        Міжнародна наукова конференція «Механіка: сучасність і перспективи –
        2024».
      </h2>
      <p>
        &emsp;&emsp;Національний комітет України з теоретичної і прикладної
        механіки виступив у якості співорганізатора Міжнародної наукової
        конференції «Механіка: сучасність і перспективи – 2024».
        <br />
        &emsp;&emsp;Захід тривав з 8-го по10-те жовтня 2024 року в Інституті
        механіки ім. С.П. Тимошенка НАН України. В ньому взяли участь понад 270
        науковців з України та інших країн світу. Доповіді було представлено
        працівниками 55 установ та організацій.
        <br />
        &emsp;&emsp;Конференція об'єднала дослідників у галузях теоретичної,
        прикладної та обчислювальної механіки, що сприяло обміну новітніми
        досягненнями та обговоренню актуальних викликів у сучасній науці.
        <br />
        &emsp;&emsp;До участі у конференції зголосилися вчені з України, Італії,
        Іспанії, Литви, Німеччини, Польщі. Захід було організовано Інститутом
        механіки НАН України та Національним комітетом України з теоретичної і
        прикладної механіки.
        <br />
        &emsp;&emsp;Обговорення було поділено за такими секціями:
      </p>

      <ul className={cl.ulItem}>
        <li> Механіка композитних та неоднорідних середовищ</li>
        <li>Контактна механіка</li>
        <li>Механіка оболонкових систем</li>
        <li>Механіка зв'язних полів у матеріалах та елементах конструкцій</li>
        <li>Механіка руйнування та втома</li>
        <li>Динаміка та стійкість руху механічних систем</li>
      </ul>
      <p>
        &emsp;&emsp;Конференцію відкрив академік НАН України, директор Інституту
        механіки НАН України Володимир Назаренко. Він привітав учасників і
        побажавши їм плідної роботи.
        <br />
        &emsp;&emsp;Привітання від імені Національного комітету України з
        теоретичної і прикладної механіки виголосив академік НАН України
        Вячеслав Богданов.
        <br />
        &emsp;&emsp;По завершенню вступної частини робота конференції тривала у
        секціях, де науковці могли поділитися власними досягненнями та думками
        щодо розвитку наукових досліджень з різноманітних тем.
      </p>
      <div className="sliderCont">
        <Slider slider={sliderNews1} />
      </div>
      <p>
      &emsp;&emsp;Усі матеріали конференції доступні на 
        <a className={cl.link_logo} href="/">&emsp;сайті Інституту механіки ім. С.П.
        Тимошенка НАН України.
          </a>
          <br />
      </p>
    </article>
  );
};
export default News1;
