import headerView from "./templates/header.js";
import footerView from "./templates/footer.js";

export default function contactView(props) {
  props.js = `<script src="./js/contact-form.js"></script>`;
  props.css = `<link rel="stylesheet" href="./css/contact-form.css">`;

  const form = `
  <h3 class="upper-text title-content">Confirma tu asistencia</h3>
  <div class="content-form">
    <form id="contactForm" action="/contacto" method="post" onsubmit="return onSubmitContactForm()">
      <div class="form-line">
        <label for="guestUsername">
          <input class="custom-input" type="text" title="guestUsername" name="guestUsername" id="guestUsername" autocomplete="off" tabindex="-1">
        </label>
        <label>Nombre completo<br>
          <input type="text" name="guestName" id="guestName" placeholder="Nombre y apellidos" autocomplete="off" required>
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
          <div id="guestsGroup"></div>
        </label>
        <button id="addGuest" class="btn">+ Añadir otra persona</button>
        <button id="removeGuest" class="btn secondary-btn hidden">Quitar persona</button>
      </div>
      <div class="form-line">
        <label>¿Cómo podemos contactarte?<br>
          <input type="text" name="contact" id="contact" autocomplete="off" placeholder="Teléfono o email">
        </label>
      </div>
      <div class="form-line">
        <label for="message">Lo que quieras decirnos...<br>
          <p class="text-small">Por favor, indica cualquier intolerancia o alergia a alimentos que podáis tener, si necesitas espacio para carrito de bebé o cualquier otra cosa que te podamos facilitar para que todo sea perfecto.</p>
          <textarea cols="50" rows="8" form="contactForm" name="message" id="message" placeholder="Alergias, intolerancias o cualquier cosa a tener en cuenta..."></textarea>
        </label>
      </div>
      <input class="btn" type="submit" value="Enviar">
    </form>
  </div>`;

  const msgConfirm = `
    <h3 class="upper-text title-content">¡Gracias por confirmar!</h3>
  `;

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
