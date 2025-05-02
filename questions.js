const questions = [
  {
    q: "¿Cómo reaccionas ante un reto nuevo?",
    options: [
      { text: "Lo enfrento con entusiasmo", values: ["Piyomon", "Agumon"] },
      { text: "Me preparo antes de actuar", values: ["Tentomon", "Gabumon"] },
      { text: "Lo evalúo, pero me lanzo igual", values: ["Patamon"] },
      { text: "Lo enfrento solo, sin pedir ayuda", values: ["Gatomon"] },
      { text: "Pido ayuda o consejo", values: ["Palmon", "Gomamon"] }
    ]
  },
  {
    q: "¿Cuál de estas cualidades valoras más en un amigo?",
    options: [
      { text: "Valentía", values: ["Agumon"] },
      { text: "Lealtad", values: ["Gabumon"] },
      { text: "Creatividad", values: ["Patamon", "Gomamon"] },
      { text: "Independencia", values: ["Gatomon"] },
      { text: "Empatía", values: ["Palmon", "Piyomon"] }
    ]
  },
  {
    q: "¿Qué entorno prefieres?",
    options: [
      { text: "Una ciudad con mucha actividad", values: ["Piyomon", "Agumon"] },
      { text: "Un bosque tranquilo", values: ["Palmon", "Tentomon"] },
      { text: "Una playa o mar", values: ["Gomamon"] },
      { text: "Una biblioteca o lugar callado", values: ["Gatomon", "Gabumon"] },
      { text: "Un cielo abierto o montaña", values: ["Patamon", "Piyomon"] }
    ]
  },
  {
    q: "¿Cómo te describirías en grupo?",
    options: [
      { text: "El líder", values: ["Agumon", "Piyomon"] },
      { text: "El consejero", values: ["Gabumon"] },
      { text: "El curioso", values: ["Patamon"] },
      { text: "El que observa más que habla", values: ["Tentomon", "Gatomon"] },
      { text: "El que hace reír", values: ["Gomamon", "Palmon"] }
    ]
  },
  {
    q: "¿Qué animal representa mejor tu personalidad?",
    options: [
      { text: "León", values: ["Agumon"] },
      { text: "Lobo", values: ["Gabumon"] },
      { text: "Conejo", values: ["Patamon"] },
      { text: "Gato", values: ["Gatomon"] },
      { text: "Pájaro", values: ["Piyomon"] }
    ]
  },
  {
    q: "¿Tu mejor momento del día?",
    options: [
      { text: "Mañana", values: ["Piyomon", "Agumon"] },
      { text: "Tarde", values: ["Patamon", "Tentomon"] },
      { text: "Noche", values: ["Gatomon", "Gabumon"] },
      { text: "Depende del humor", values: ["Palmon", "Gomamon"] },
      { text: "Todo el día si estoy activo", values: ["Piyomon"] }
    ]
  },
  {
    q: "Si fueras un elemento natural, ¿cuál serías?",
    options: [
      { text: "Fuego", values: ["Agumon", "Piyomon"] },
      { text: "Agua", values: ["Gomamon", "Gabumon"] },
      { text: "Aire", values: ["Patamon", "Piyomon"] },
      { text: "Tierra", values: ["Palmon", "Tentomon"] },
      { text: "Luz", values: ["Gatomon"] }
    ]
  },
  {
    q: "¿Qué te motiva más?",
    options: [
      { text: "Superarme a mí mismo", values: ["Piyomon"] },
      { text: "Proteger a los demás", values: ["Agumon", "Gabumon"] },
      { text: "Descubrir cosas nuevas", values: ["Tentomon", "Patamon"] },
      { text: "Ser respetado", values: ["Gatomon"] },
      { text: "Hacer feliz a otros", values: ["Palmon", "Gomamon"] }
    ]
  },
  {
    q: "¿Qué tipo de juegos prefieres?",
    options: [
      { text: "Competitivos", values: ["Piyomon", "Agumon"] },
      { text: "Juegos mentales o de lógica", values: ["Tentomon", "Gatomon"] },
      { text: "Aventuras o exploración", values: ["Patamon", "Gabumon"] },
      { text: "Juegos cooperativos", values: ["Palmon", "Gomamon"] },
      { text: "Juegos con historia y emociones", values: ["Gatomon", "Palmon"] }
    ]
  },
  {
    q: "¿Cuál es tu mayor debilidad?",
    options: [
      { text: "Impulsividad", values: ["Agumon", "Piyomon"] },
      { text: "Dudas internas", values: ["Gabumon", "Patamon"] },
      { text: "Aislamiento", values: ["Gatomon"] },
      { text: "Sensibilidad excesiva", values: ["Palmon"] },
      { text: "Falta de seriedad", values: ["Gomamon"] }
    ]
  },
  {
    q: "¿Cómo manejas el conflicto?",
    options: [
      { text: "Confronto directamente", values: ["Agumon", "Piyomon"] },
      { text: "Busco diálogo", values: ["Gabumon", "Palmon"] },
      { text: "Evito el conflicto si puedo", values: ["Patamon", "Gomamon"] },
      { text: "Actúo si es necesario, sin hablar mucho", values: ["Gatomon"] },
      { text: "Analizo primero, luego actúo", values: ["Tentomon"] }
    ]
  },
  {
    q: "¿Qué rol tomarías en un equipo?",
    options: [
      { text: "Estratega", values: ["Tentomon", "Gabumon"] },
      { text: "Luchador principal", values: ["Agumon", "Piyomon"] },
      { text: "Apoyo emocional", values: ["Palmon", "Patamon"] },
      { text: "Vigilante o espía", values: ["Gatomon"] },
      { text: "Distracción divertida", values: ["Gomamon"] }
    ]
  },
  {
    q: "¿Qué estilo de música prefieres?",
    options: [
      { text: "Rock o metal", values: ["Piyomon", "Agumon"] },
      { text: "Clásica o instrumental", values: ["Tentomon", "Gatomon"] },
      { text: "Pop alegre", values: ["Patamon", "Palmon"] },
      { text: "Alternativa o indie", values: ["Gabumon", "Gomamon"] },
      { text: "Cualquier cosa que me anime", values: ["Gomamon", "Piyomon"] }
    ]
  },
  {
    q: "¿Cuál sería tu lema?",
    options: [
      { text: "¡Nunca me rindo!", values: ["Piyomon", "Agumon"] },
      { text: "Con calma y cabeza, todo se puede.", values: ["Tentomon", "Gabumon"] },
      { text: "¡Todo es una aventura!", values: ["Patamon"] },
      { text: "Prefiero hacer que hablar.", values: ["Gatomon"] },
      { text: "Ríe mientras puedas.", values: ["Gomamon", "Palmon"] }
    ]
  },
  {
    q: "¿Qué cualidad no soportas en otros?",
    options: [
      { text: "Cobardía", values: ["Piyomon", "Agumon"] },
      { text: "Hipocresía", values: ["Gatomon"] },
      { text: "Falta de curiosidad", values: ["Tentomon", "Patamon"] },
      { text: "Egoísmo", values: ["Palmon"] },
      { text: "Pesimismo", values: ["Gomamon", "Gabumon"] }
    ]
  }
];
