// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "El la estaba esperando ", time: 15 },
  { text: "con una flor amarilla", time: 16 },
  { text: "Ella lo estaba soñando", time: 24 },
  { text: "con la luz en su pupila", time: 25 },
  { text: "Y el amarillo del sol", time: 32 },
  { text: "iluminaba la esquina", time: 33 },
  { text: "Lo sentía tan cercano,", time: 40 },
  { text: "lo sentía desde niña", time: 41 },
  { text: "Ella sabía que él sabía", time: 45 },
  { text: "Que algún día pasaría", time: 47 },
  { text: "Que vendría a buscarla", time: 49 },
  { text: "Con sus flores amarillas", time: 51 },
  { text: "No te apures, no detengas", time: 57 },
  { text: "El instante del encuentro", time: 59 },
  { text: "Está dicho que es un hecho", time: 61 },
  { text: "No la pierdas, no hay derecho", time: 63 },
  { text: "No te olvides que la vida", time: 65 },
  { text: "Casi nunca está dormida", time: 67 },
  { text: "En ese bar tan desierto", time: 94 },
  { text: "nos esperaba el encuentro", time: 95 },
  { text: "Ella llegó en limusina", time: 100 },
  { text: "amarilla por supuesto", time: 101 },
  { text: "Él se acercó de repente", time: 108 },
  { text: "la miro tan de frente", time: 109 },
  { text: "Toda una vida soñada", time: 116 },
  { text: "y no pudo decir nada", time: 117 },
  { text: "Ella sabían que él sabía", time: 122 },
  { text: "Que algún día pasaría", time: 124 },
  { text: "Que vendría a buscarla", time: 126 },
  { text: "Con sus flores amarillas", time: 128 },
  { text: "No te apures, no detengas", time: 134 },
  { text: "El instante del encuentro", time: 136 },
  { text: "Está dicho que es un hecho", time: 138 },
  { text: "Y la verdad no creo que", time: 142 },
  { text: "escuches la canción completa", time: 144 },
  { text: "Mucho menos la leas así", time: 150 },
  { text: "que dejo de transcribir subs.", time: 152 },
  { text: "Espero no me funes", time: 156 },
  { text: "Solo es un detallito chiquito", time: 160 },
  { text: "Atte: Henry 8a", time: 162 },
  { text: "Para:", time: 164 },
  { text: "La jugadora de Genshin", time: 166 },
  { text: "en tablet de diseño", time: 168 },
  { text: "LOf pa ti si leíste completo", time: 170 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);