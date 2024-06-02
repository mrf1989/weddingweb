import headerView from "./templates/header.js";
import footerView from "./templates/footer.js";

export default function indexView(props) {
  props.contact = true;

  return `
    ${headerView(props)}
    <main class="block-content">
      <h3 class="upper-text title-content">¡Nos casamos!</h3>
      <div id="invitation" class="text-content">
        <h3>Celebra este momento con nosotros</h3>
        <p>Vamos a dar un gran paso en nuestro proyecto de vida, por lo que queremos hacerte partícipe de un día tan importante para nosotros.</p>
        <p>Momentos como este son los que se recuerdan toda la vida, por lo que nos encantaría compartirlo con la gente más importante para nosotros. ¡Viviremos grandes momentos y lo pasaremos a lo grande!</p>
      </div>
      <div id="accordionBtn"><div id="accordionBtnArrow"></div></div>
    </main>
    ${footerView(props)}
  `;
}