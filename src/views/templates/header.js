export default function headerView(props) {
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
    <link rel="stylesheet" href="./css/styles.css">
    ${props.hasOwnProperty("css") ? props.css : ""}
    <title>Cristina & Mario</title>
  </head>
  <body>
    <header id="header" class="block-content">
      <div class="header-info-wrapper">
        <h1 class="upper-text shadow">Cristina y Mario</h1>
        <h3 class="upper-text shadow">2 de noviembre de 2024. 12:00</h3>
        <p class="italic-text shadow">Finca Puerta de Hierro</p>
      </div>
    </header>
  `;
}