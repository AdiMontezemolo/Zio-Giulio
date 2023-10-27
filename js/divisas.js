//no es necesario que las divisas las ponga en un java script llamado footer. Uno hace el footer, otro las divisas.js y luego pongo las divisas donde quiero

async function update_moneda(element_id, api_url) {  //acá se define una funcion llamada "update_moneda" (actualizar moneda). dicha funcion actualiza las cotizaciones.
                                       //dicha funcion recibe dos parametros (x,y) que son element_id y api_url. la pag tiene varias monedas y hay que actualizar las 3 monedas que queremos, entonces ahí le estamos indicando de dónde sacar la info y cuál info dolar (dolar euro real etc) que es lo del renglon 14
                                          //la funcion está definida entre las lineas 3 y 12 pero no se ejecuta (solo está definida), recién se ejecuta en la línea 14 y se ejecuta 3 veces con 3 valores distintos
    const result = await fetch(api_url);
  
    let respuesta = await result.json();
 
    document.getElementById(element_id).innerHTML = respuesta['venta'] + "  ARS/" + respuesta['moneda'];  //" " esas comillitas son para q agregar un espacio (por encierran un espacio)
  }
  
  update_moneda(
      element_id = 'precio_USD',
      api_url = 'https://dolarapi.com/v1/dolares/solidario',
  );
  update_moneda(
      element_id = 'precio_BRL',
      api_url = 'https://dolarapi.com/v1/cotizaciones/brl',
  );
  update_moneda(
      element_id = 'precio_EUR',
      api_url = 'https://dolarapi.com/v1/cotizaciones/eur',
  );

  //hay una función que es llamada 3 veces. Podría copiar y pegarla 3 veces o bien hacer lo de la línea 14.
  // lo primero q hace la función en la línea 6 es preguntarle a la api. Fetch llama a la info de la página donde está la api y=f(x) (fetch le pregunta a la pagina que está entre paréntesis qué tiene para decir y lo guardamos en result). Entonces result tiene aquello q el website respondió (o sea, el precio del dolar y otros elementos como nombre, casa, venta)
  //En result llega esta cosa rara" --> {"moneda":"USD","casa":"solidario","nombre":"Solidario (Turista)","compra":null,"venta":639.63,"fechaActualizacion":"2023-10-27T11:57:00.000Z"} que hay que convertilo en un diccionario para poder acceder a cada uno de los campos  entonces, en la línea 8 esa info en forma rara la convertimos con jason en un diccionario
  //la linea 10 hace que se imprima en mi página lo que la api le respondió. Entonces si hacemos "respuesta" en el campo "venta" obtenemos el precio de venta de la divisa correspondiente
  //y a eso (respuesta['venta']) lo vamos a guardar en este lugar --> document.getElementById(element_id).innerHTML
  //en algun lugar del arbol del html vamos a tener que poner un div o un párrafo <p> id= precio_USD, otro que sea precio_BRL y otro que sea precio_EUR (puede estar en el header, en sectior, en donde quiera)
  //y el último paso es esto e innerHTML 
  //luego pongo en el html 3 elementos llamados precio_brl, precio_usd, precio_eur en donde yo quiera (header, footer, etc) y cito el archivo "divisas.js"