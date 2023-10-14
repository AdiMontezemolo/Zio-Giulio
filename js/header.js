function add_main_header(id) {
    document.getElementById(id).innerHTML = 
                `<img src="img/logo1.png">
                <nav>
                    <a href="nosotros.html">Nosotros</a>
                    <a href="productos.html">Productos</a>
                    <a href="locales.html">Locales</a>
                    <a href="contacto.html">Contacto</a>
                </nav>`;
  }
  add_main_header("main_header"); //acá ejecuto la función y le envío como argumento (main header) o sea qcuando la funcion se ejecute, el "id" del primer renglon valdrá main_header

  //agrega el header o sea el logo y los botones q le indiqué ahí, en todas las planillas html, para no tener que copiarlas una por una en cada planilla

