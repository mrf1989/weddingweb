export default function indexView(props) {
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
    <title>Cristina & Mario</title>
  </head>
  <body>
    <header id="header" class="block-content">
      <img id="headerDecorator" src="./assets/images/marco-decorador.png" alt="">
      <h1 class="upper-text">Cristina y Mario</h1>
      <h3 class="upper-text">2 de noviembre de 2024. 12:00</h3>
      <p class="italic-text">Finca Puerta de Hierro</p>
    </header>
    <main class="block-content">
      <h3 class="upper-text title-content">¡Nos casamos!</h3>
      <div class="content">
        <h3>Celebra este momento con nosotros</h3>
        <p>Vamos a dar un gran paso en nuestro proyecto de vida, por lo que queremos hacerte partícipe de un día tan importante para nosotros.</p>
        <p>Momentos como este son los que se recuerdan toda la vida, por lo que nos encantaría compartirlo con la gente más importante para nosotros. ¡Viviremos grandes momentos y lo pasaremos a lo grande!</p>
      </div>
    </main>
    <footer class="block-content">
      <div class="content">
        <h3>Se ruega confirmación</h3>
        <p>Puedes utilizar el siguiente formulario de contacto para confirmarnos tu asistencia y para comunicarnos algún tipo de intolerancia o cualquier cosa que te gustaría que tuvieramos en cuenta.</p>
        <p><a href="/contacto">Contacto</a></p>
        <div class="separator"></div>
        <h3>Ceremonia y celebración</h3>
        <p>Finca Puerta de Hierro<br>SE-221, 21, Fuentes de Andalucía (Sevilla)
        </p>
        <p><a href="https://maps.app.goo.gl/cyRMNSTy4P3oLNtT9" target="_blank">Ver ubicación</a></p>
      </div>
    </footer>
    <div class="footer-end"></div>
  </body>
  </html>
  `;
}