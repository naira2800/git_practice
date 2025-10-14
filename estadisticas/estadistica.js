Sentry.init({
  dsn: "https://js.sentry-cdn.com/52cd765cdc38a1550effb3ae69fbe395.min.js",
  tracesSampleRate: 1.0,
});

let valores = [];

    function cantPromedio(){
      let valor = parseFloat(document.getElementById("valor").value);

      if (!isNaN(valor)) {
        valores.push(valor);

        // cantidad
        document.getElementById("cantidad").value = valores.length;

        // promedio
        let suma = valores.reduce((a, b) => a + b, 0);
        let promedio = suma / valores.length;
        document.getElementById("promedio").value = promedio;

        // mayor y menor
        document.getElementById("mayor").value = Math.max(...valores);
        document.getElementById("menor").value = Math.min(...valores);

        // limpiar input de valor
        document.getElementById("valor").value = "";
      } else {
        alert("Por favor ingrese un número válido");
      }
    }

    function reset(){
      valores = [];
      document.getElementById("cantidad").value = "";
      document.getElementById("promedio").value = "";
      document.getElementById("mayor").value = "";
      document.getElementById("menor").value = "";
      document.getElementById("valor").value = "";

    }
