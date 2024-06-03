export default function footerView(props) {
  const contactCTA = `
    <h3>Se ruega confirmación</h3>
    <p>Puedes utilizar el siguiente <strong>botón de contacto</strong> para confirmarnos tu asistencia y para comunicarnos algún tipo de intolerancia o cualquier cosa que te gustaría que tuvieramos en cuenta.</p>
    <p><a href="/contacto">Confirma aquí ✉️</a></p>
    <div class="separator"></div>
  `;

  return `
    <footer class="block-content">
      <div class="text-content">
        ${props.hasOwnProperty("contact") ? contactCTA : ""}
        <h3>Ceremonia y celebración</h3>
        <p>Finca Puerta de Hierro<br>SE-221, 21, Fuentes de Andalucía (Sevilla)
        </p>
        <p><a href="https://maps.app.goo.gl/cyRMNSTy4P3oLNtT9" target="_blank">Ver ubicación</a></p>
      </div>
    </footer>
    <div class="footer-end">
      <div>
        <p>Teléfonos: <a href="tel:+34615337550">615 33 75 50</a> (Mario) - <a href="tel:+34655031121">655 03 11 21</a> (Cristina)</p>
      </div>
      <div>
        <p>Email: <a href="mailto:hola@cristinaymario.es">hola@cristinaymario.es</a></p>
      </div>
    </div>
    ${props.hasOwnProperty("js") ? props.js : ""}
  </body>
  </html>
  `;
}