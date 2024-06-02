import headerView from "./templates/header.js";
import footerView from "./templates/footer.js";

export default function contactView(props) {
  props.js = `<script src="./js/contact-form.js"></script>`;
  props.css = `<link rel="stylesheet" href="./css/contact-form.css">`;

  const form = `
  <h3 class="upper-text title-content">Contacta con nosotros</h3>
  <div class="content-form">
    <form id="contactForm" action="/contacto" method="post">
      <div class="form-line">
        <label>Nombre completo<br>
          <input type="text" name="guestName" id="guestName" placeholder="Nombre y apellidos" required>
        </label>
      </div>
      <div class="form-line">
        <label>¿Te acompañará alguien?<br>
          <input type="radio" name="companion" id="companionTrue" value="Sí" required>
          <label for="companionTrue">Sí</label><br>
          <input type="radio" name="companion" id="companionFalse" value="No">
          <label for="companionFalse">No</label>
        </label>
      </div>
      <div id="companionNameForm" class="form-line hidden">
        <label>¿Quién viene contigo?<br>
          <input type="text" name="companionName" id="companionName" placeholder="Su nombre...">
        </label>
      </div>
      <div class="form-line">
        <label>¿Cómo podemos contactarte?<br>
          <input type="text" name="contact" id="contact" placeholder="Teléfono o email">
        </label>
      </div>
      <div class="form-line">
        <label for="message">Lo que quieras decirnos...<br>
          <p class="text-small">Para que todo sea perfecto, por favor, indica cualquier intolerancia o alergia a alimentos que podáis tener, si necesitas espacio para carrito de bebé o cualquier cosa que te podamos facilitar.</p>
          <textarea cols="50" rows="8" form="contactForm" name="message" id="message" placeholder="Alergias, intolerancias o cualquier cosa a tener en cuenta..."></textarea>
        </label>
      </div>
      <input class="btn" type="submit" value="Enviar">
    </form>
  </div>`;

  const msgConfirm = `
  <h3 class="upper-text title-content">Gracias por contactar con nosotros</h3>
  <p><a href="/">Volver a la invitación</a></p>`;

  let mainContent = "";
  if (props) {
    mainContent = props.formConfirmation ? msgConfirm : form;
  } else {
    mainContent = form;
  }

  return `
    ${headerView(props)}
    <main class="block-content">
      ${mainContent}
      <p><a href="/" class="secondary-btn">Volver</a></p>
    </main>
    ${footerView(props)}
  `;
}
