export default function contactView(props) {
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
        <label>Lo que quieras decirnos...<br>
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
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Young+Serif&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/contact-form.css">
    <title>Contacto | Cristina & Mario</title>
  </head>
  <body>
    <header id="header" class="block-content">
      <img id="headerDecorator" src="./assets/images/marco-decorador.png" alt="">
      <h1 class="upper-text">Cristina y Mario</h1>
      <h3 class="upper-text">2 de noviembre de 2024. 12:00</h3>
      <p class="italic-text">Finca Puerta de Hierro</p>
    </header>
    <main class="block-content">`
    + mainContent +
    `</main>
    <footer class="block-content">
      <div class="content">
        <h3>Ceremonia y celebración</h3>
        <p>Finca Puerta de Hierro<br>SE-221, 21, Fuentes de Andalucía (Sevilla)
        </p>
        <p><a href="https://maps.app.goo.gl/cyRMNSTy4P3oLNtT9" target="_blank">Ver ubicación</a></p>
      </div>
    </footer>
    <div class="footer-end"></div>
    <script src="js/contact-form.js"></script>
  </body>
  </html>
  `;
}
