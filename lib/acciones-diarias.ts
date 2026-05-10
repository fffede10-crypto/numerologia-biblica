export type AccionDiaria = {
  accion: string
  versiculo: { cita: string; texto: string }
}

type AccionesPorArea = {
  relaciones?: AccionDiaria
  trabajo?: AccionDiaria
  fe?: AccionDiaria
  decision?: AccionDiaria
  sanacion?: AccionDiaria
  autoconocimiento?: AccionDiaria
  default: AccionDiaria
}

const ACCIONES: Record<number, AccionesPorArea> = {
  1: {
    relaciones: {
      accion: 'Elegí a alguien con quien tenés una relación difícil y ofrecé un gesto pequeño de reconciliación hoy — un mensaje, una llamada, un gesto concreto. El 1 nos recuerda que Dios es el origen de todo vínculo y tiene poder para restaurar lo que parece imposible.',
      versiculo: { cita: 'Romanos 12:18', texto: 'Si es posible, en cuanto dependa de vosotros, estad en paz con todos los hombres.' },
    },
    trabajo: {
      accion: 'Escribí en una hoja tu propósito profesional en una sola oración. Si no podés, ese es el trabajo de hoy: encontrar esa frase. El 1 habla de que todo comienza con una declaración de intención — sin claridad sobre el para qué, el cómo se vuelve caótico.',
      versiculo: { cita: 'Proverbios 16:3', texto: 'Encomienda a Jehová tus obras, y tus pensamientos serán afirmados.' },
    },
    fe: {
      accion: 'Declará en voz alta una verdad sobre quién es Dios para vos hoy. El 1 habla de soberanía absoluta — reconocerla en voz alta ancla tu fe en lo que no ves todavía.',
      versiculo: { cita: 'Deuteronomio 6:4', texto: 'Oye, Israel: Jehová nuestro Dios, Jehová uno es.' },
    },
    decision: {
      accion: 'Antes de cualquier decisión importante, escribí una sola pregunta: "¿Está esto alineado con quién Dios me llamó a ser?" Esperá la respuesta antes de actuar. El 1 es el número del origen — volver al principio aclara cada encrucijada.',
      versiculo: { cita: 'Isaías 46:10', texto: 'Que anuncio lo por venir desde el principio, y desde la antigüedad lo que aún no era hecho.' },
    },
    sanacion: {
      accion: 'Escribí una verdad positiva sobre vos mismo basada en lo que Dios dice de vos en las Escrituras — no en lo que sentís, sino en lo que Él declaró. El 1 habla de que la sanación empieza por recuperar la identidad original que el dolor distorsionó.',
      versiculo: { cita: 'Salmo 139:14', texto: 'Te alabaré; porque formidables, maravillosas son tus obras; estoy maravillado, y mi alma lo sabe muy bien.' },
    },
    autoconocimiento: {
      accion: 'Pasá 10 minutos en silencio preguntándote: "¿Cuál es la única cosa que más me define?" El 1 señala la esencia — en la multiplicidad de roles e identidades, hay algo central que Dios puso en vos desde el principio.',
      versiculo: { cita: 'Génesis 1:27', texto: 'Y creó Dios al hombre a su imagen, a imagen de Dios lo creó.' },
    },
    default: {
      accion: 'Tomá una hoja y escribí la única cosa que Dios te está llamando a hacer hoy. El 1 es el número del principio — toda transformación empieza con una acción concreta y singular.',
      versiculo: { cita: 'Proverbios 16:3', texto: 'Encomienda a Jehová tus obras, y tus pensamientos serán afirmados.' },
    },
  },

  2: {
    relaciones: {
      accion: 'Contactá a alguien que hace tiempo no ves y decile específicamente por qué lo valorás — no de forma genérica, sino con una razón concreta. El 2 es el número de la alianza: los vínculos profundos necesitan ser declarados, no solo sentidos.',
      versiculo: { cita: 'Eclesiastés 4:9', texto: 'Mejores son dos que uno; porque tienen mejor paga de su trabajo.' },
    },
    trabajo: {
      accion: 'Buscá a un colega o colaborador con quien puedas compartir un desafío profesional hoy. El 2 nos recuerda que Jesús envió a sus discípulos de dos en dos — el trabajo fructífero raramente es solitario.',
      versiculo: { cita: 'Eclesiastés 4:10', texto: 'Porque si cayeren, el uno levantará a su compañero; pero ¡ay del solo! que cuando cayere, no habrá segundo que lo levante.' },
    },
    fe: {
      accion: 'Compartí con alguien de confianza algo que Dios está haciendo en tu vida — una historia concreta, aunque sea pequeña. El 2 es el número del testimonio: tu historia de fe cobra poder cuando es contada, no guardada.',
      versiculo: { cita: 'Mateo 18:20', texto: 'Donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos.' },
    },
    decision: {
      accion: 'Antes de decidir, consultalo con alguien que te conozca bien y sea honesto contigo. El 2 es el número del testimonio y la confirmación — una voz externa ilumina muchas veces lo que la soledad oscurece.',
      versiculo: { cita: 'Proverbios 11:14', texto: 'Donde no hay dirección sabia, caerá el pueblo; mas en la multitud de consejeros hay seguridad.' },
    },
    sanacion: {
      accion: 'Hablá con alguien de confianza sobre lo que estás atravesando — aunque sea brevemente. El 2 dice que el dolor compartido pierde fuerza. La sanación más profunda ocurre en comunidad, no en aislamiento.',
      versiculo: { cita: 'Gálatas 6:2', texto: 'Sobrellevad los unos las cargas de los otros, y cumplid así la ley de Cristo.' },
    },
    autoconocimiento: {
      accion: 'Pedile a alguien cercano que te diga tres palabras que te describan. El 2 nos recuerda que nos conocemos mejor a través del otro — el espejo externo revela lo que el propio no puede ver.',
      versiculo: { cita: 'Proverbios 27:17', texto: 'Hierro con hierro se aguza; y así el hombre aguza el rostro de su amigo.' },
    },
    default: {
      accion: 'Buscá a alguien hoy y ofrecé un gesto concreto de apoyo. El 2 es el número de la alianza — estamos hechos para caminar acompañados, no solos.',
      versiculo: { cita: 'Eclesiastés 4:9', texto: 'Mejores son dos que uno; porque tienen mejor paga de su trabajo.' },
    },
  },

  3: {
    relaciones: {
      accion: 'Orá específicamente por tres personas de tu círculo cercano — nombrándolas. El 3 es el número de la completitud divina: cuando involucramos a Dios en nuestros vínculos, algo cambia en el campo espiritual de esas relaciones.',
      versiculo: { cita: 'Colosenses 3:14', texto: 'Y sobre todas estas cosas vestíos de amor, que es el vínculo perfecto.' },
    },
    trabajo: {
      accion: 'Antes de tomar una decisión profesional importante hoy, consultalo con dos personas de confianza. El 3 es el número del testimonio y la confirmación — las mejores decisiones nacen de la comunidad, no de la soledad.',
      versiculo: { cita: 'Proverbios 15:22', texto: 'Los pensamientos son frustrados donde no hay consejo; mas en la multitud de consejeros se afirman.' },
    },
    fe: {
      accion: 'Adorá a Dios en tres formas distintas hoy: con palabras (declará quién es), con acciones (hacé algo por otros) y en silencio (escuchá). El 3 es el número de la plenitud divina — la Trinidad se revela en la totalidad.',
      versiculo: { cita: 'Juan 4:24', texto: 'Dios es Espíritu; y los que le adoran, en espíritu y en verdad es necesario que adoren.' },
    },
    decision: {
      accion: 'Antes de decidir, consultalo con dos personas de confianza. El 3 es el número del testimonio — las Escrituras establecen que toda palabra se confirma en boca de dos o tres testigos. Tu decisión también merece esa confirmación.',
      versiculo: { cita: 'Deuteronomio 19:15', texto: 'En el dicho de dos o de tres testigos se resolverá el asunto.' },
    },
    sanacion: {
      accion: 'Identificá tres cosas por las que podés dar gracias HOY, aunque sean pequeñas. El 3 es el número de la resurrección — la gratitud activa es uno de los primeros signos de que algo está comenzando a vivir dentro de lo que parecía muerto.',
      versiculo: { cita: '1 Tesalonicenses 5:18', texto: 'Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.' },
    },
    autoconocimiento: {
      accion: 'Escribí tres palabras que te describen hoy y tres palabras que describís querer ser. La diferencia entre ambas listas es tu área de crecimiento. El 3 habla de plenitud — la identidad plena incluye tanto lo que somos como lo que estamos llegando a ser.',
      versiculo: { cita: 'Filipenses 1:6', texto: 'El que comenzó en vosotros la buena obra, la perfeccionará hasta el día de Jesucristo.' },
    },
    default: {
      accion: 'Buscá dos o tres referencias bíblicas que confirmen algo que sentís que Dios te está mostrando. El 3 es el número de la confirmación divina — la certeza espiritual se asienta en la Palabra.',
      versiculo: { cita: '2 Corintios 13:1', texto: 'En boca de dos o de tres testigos se decidirá todo asunto.' },
    },
  },

  4: {
    relaciones: {
      accion: 'Identificá un fundamento común que compartís con alguien importante en tu vida — un valor, una historia, una fe compartida. Comunícaselo hoy. El 4 habla de que los vínculos duraderos están edificados sobre bases sólidas, no sobre emociones variables.',
      versiculo: { cita: 'Efesios 3:17', texto: 'Que habite Cristo por la fe en vuestros corazones, a fin de que, arraigados y cimentados en amor...' },
    },
    trabajo: {
      accion: 'Revisá si tu trabajo diario está construido sobre los fundamentos correctos: honestidad, excelencia, servicio. El 4 habla de cimientos — si la base es correcta, el edificio resiste las tormentas.',
      versiculo: { cita: '1 Corintios 3:11', texto: 'Nadie puede poner otro fundamento que el que está puesto, el cual es Jesucristo.' },
    },
    fe: {
      accion: 'Identificá un fundamento de tu fe que necesita ser reforzado. Leé un pasaje que hable específicamente de ese aspecto y escribí una oración basada en él. El 4 habla de cimientos — la fe sólida tiene raíces profundas.',
      versiculo: { cita: 'Mateo 7:24', texto: 'El hombre prudente... edificó su casa sobre la roca... y no cayó, porque estaba fundada sobre la roca.' },
    },
    decision: {
      accion: 'Antes de decidir, preguntate: "¿Esto está construido sobre mis valores fundamentales?" El 4 habla de cimientos — las decisiones que no se alinean con tus fundamentos generan inestabilidad aunque a corto plazo parezcan buenas.',
      versiculo: { cita: 'Proverbios 10:25', texto: 'Como pasa el torbellino, así el malo no permanece; mas el justo es base eterna.' },
    },
    sanacion: {
      accion: 'Establecé un hábito de autocuidado pequeño que puedas comenzar HOY y sostener esta semana. El 4 habla de fundamentos: la sanación duradera se construye sobre estructuras estables, no sobre grandes momentos aislados.',
      versiculo: { cita: '1 Corintios 6:19', texto: '¿O ignoráis que vuestro cuerpo es templo del Espíritu Santo, el cual está en vosotros?' },
    },
    autoconocimiento: {
      accion: 'Escribí tus cuatro valores más importantes — los principios que no negocias bajo ninguna circunstancia. El 4 habla de los fundamentos: conocer tu núcleo te permite navegar cualquier tormenta sin perderte.',
      versiculo: { cita: 'Salmo 62:2', texto: 'El solamente es mi roca y mi salvación; es mi refugio, no resbalaré mucho.' },
    },
    default: {
      accion: 'Identificá un área de tu vida que necesita una base más sólida y tomá una acción pequeña pero concreta para reforzarla hoy. El 4 habla de fundamentos — lo que se construye bien, resiste.',
      versiculo: { cita: 'Mateo 7:24', texto: 'Todo aquel que oye estas palabras mías, y las hace, le compararé a un hombre prudente, que edificó su casa sobre la roca.' },
    },
  },

  5: {
    relaciones: {
      accion: 'Extendé gracia concreta a alguien que te falló: no significa olvidar ni habilitar, sino elegir no cargar con el peso del resentimiento. El 5 habla de que el favor que recibiste de Dios es el fundamento del favor que podés dar.',
      versiculo: { cita: 'Efesios 4:32', texto: 'Antes sed benignos unos con otros, misericordiosos, perdonándoos unos a otros, como Dios también os perdonó a vosotros en Cristo.' },
    },
    trabajo: {
      accion: 'Identificá a un colega o empleado que necesita reconocimiento y díselo hoy, con una razón específica. El 5 habla de gracia y favor — cuando lo que recibiste de Dios fluye hacia otros, tu entorno laboral se transforma.',
      versiculo: { cita: 'Proverbios 3:27', texto: 'No te niegues a hacer el bien a quien es debido, cuando tuvieres poder para hacerlo.' },
    },
    fe: {
      accion: 'Pasá 15 minutos adorando a Dios solo por quien Él es, sin pedir nada. El 5 habla del favor inmerecido — la adoración que no busca nada a cambio es la forma más pura de relacionarse con un Dios que da gratuitamente.',
      versiculo: { cita: 'Efesios 2:8', texto: 'Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios.' },
    },
    decision: {
      accion: 'Antes de decidir, preguntate: "¿Estoy actuando desde el miedo o desde la gracia?" El 5 habla de que las mejores decisiones nacen de una postura de favor, no de escasez — Dios ya te dio más de lo que merecés.',
      versiculo: { cita: '2 Corintios 9:8', texto: 'Y poderoso es Dios para hacer que abunde en vosotros toda gracia, a fin de que... abundéis para toda buena obra.' },
    },
    sanacion: {
      accion: 'Hoy recibí el perdón — no como emoción sino como decisión. Declará en voz alta: "Me perdono por [lo que sea que cargás]". El 5 habla de gracia: la sanación no comienza hasta que dejamos de ser nuestro propio fiscal.',
      versiculo: { cita: '1 Juan 1:9', texto: 'Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda maldad.' },
    },
    autoconocimiento: {
      accion: 'Identificá un área donde sos muy duro con vos mismo y aplicá gracia: buscá cómo Dios te ve en esa área según las Escrituras. El 5 nos recuerda que el autoconocimiento real incluye ver lo que Dios ve, no solo lo que nosotros creemos sobre nosotros mismos.',
      versiculo: { cita: 'Salmo 103:14', texto: 'Porque él conoce nuestra condición; se acuerda de que somos polvo.' },
    },
    default: {
      accion: 'Elegí extender gracia a alguien hoy — sea perdonar, afirmar o simplemente estar presente. El 5 habla de que la gracia que recibimos de Dios no es para guardarla, sino para transmitirla.',
      versiculo: { cita: '1 Pedro 4:10', texto: 'Cada uno según el don que ha recibido, minístrelo a los otros, como buenos administradores de la multiforme gracia de Dios.' },
    },
  },

  6: {
    relaciones: {
      accion: 'Reconocé ante alguien cercano una falla tuya en la relación — sin excusas, con responsabilidad genuina. El 6 habla de la humanidad compartida: cuando reconocemos nuestra imperfección, creamos espacio para que el otro también sea imperfecto y amado.',
      versiculo: { cita: 'Santiago 5:16', texto: 'Confesaos vuestras ofensas unos a otros, y orad unos por otros, para que seáis sanados.' },
    },
    trabajo: {
      accion: 'Terminá hoy esa tarea que estás postergando. El 6 habla del trabajo humano como acto de co-creación con Dios — la fidelidad en lo pequeño es lo que abre puertas a responsabilidades mayores.',
      versiculo: { cita: 'Colosenses 3:23', texto: 'Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres.' },
    },
    fe: {
      accion: 'Reconocé ante Dios un área de debilidad específica que has estado tratando de manejar solo. El 6 habla de que la humanidad reconocida abre la puerta a la gracia divina — Dios no puede llenar lo que insistimos en cargar solos.',
      versiculo: { cita: '2 Corintios 12:9', texto: 'Bástate mi gracia; porque mi poder se perfecciona en la debilidad.' },
    },
    decision: {
      accion: 'Antes de decidir, identificá tus limitaciones en esta decisión: ¿qué no sabés?, ¿dónde necesitás ayuda? El 6 habla de humanidad — las peores decisiones nacen de creer que lo sabemos todo. Reconocer los límites abre el camino a la sabiduría.',
      versiculo: { cita: 'Proverbios 3:5', texto: 'Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia.' },
    },
    sanacion: {
      accion: 'Permití sentir hoy lo que estás sintiendo sin juzgarte. El 6 habla de humanidad — Jesús lloró, tuvo miedo, sintió abandono. Tu dolor no te hace menos espiritual; te hace profundamente humano y profundamente necesitado de Dios.',
      versiculo: { cita: 'Salmo 34:18', texto: 'Cercano está Jehová a los quebrantados de corazón; y salva a los contritos de espíritu.' },
    },
    autoconocimiento: {
      accion: 'Escribí tres limitaciones tuyas sin juzgarlas. Luego escribe cómo cada una puede ser una fortaleza en el contexto correcto. El 6 nos recuerda que la humanidad reconocida es la base del crecimiento real — no podemos cambiar lo que no admitimos.',
      versiculo: { cita: '2 Corintios 12:10', texto: 'Porque cuando soy débil, entonces soy fuerte.' },
    },
    default: {
      accion: 'Elegí ser honesto contigo mismo sobre algo en lo que fallaste esta semana. Sin condena, solo reconocimiento. El 6 nos recuerda que somos humanos — y desde esa humanidad reconocida es que la gracia opera.',
      versiculo: { cita: '1 Juan 1:8', texto: 'Si decimos que no tenemos pecado, nos engañamos a nosotros mismos, y la verdad no está en nosotros.' },
    },
  },

  7: {
    relaciones: {
      accion: 'Tomá 10 minutos hoy para interceder específicamente por alguien con quien tenés una relación difícil — sin pedir nada para vos, solo intercediendo por esa persona. El 7 habla de que los vínculos sanados nacen del reposo en Dios, no del esfuerzo propio.',
      versiculo: { cita: 'Santiago 5:16', texto: 'La oración eficaz del justo puede mucho.' },
    },
    trabajo: {
      accion: 'Antes de tomar cualquier decisión profesional hoy, dedicá 10 minutos de silencio y oración. El 7 habla de que la claridad vocacional nace del reposo, no de la urgencia — las mejores decisiones profesionales se toman desde la quietud.',
      versiculo: { cita: 'Salmo 46:10', texto: 'Estad quietos, y conoced que yo soy Dios.' },
    },
    fe: {
      accion: 'Guardá un tiempo de descanso intencional hoy: apagá el teléfono, salí a caminar, respirá. El 7 habla de que el sabbat no es pereza — es el ritmo que Dios diseñó para que el alma pueda recibir lo que el activismo espiritual cierra.',
      versiculo: { cita: 'Mateo 11:28', texto: 'Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.' },
    },
    decision: {
      accion: 'Dormí esta decisión una noche más. El 7 habla de que las mejores elecciones nacen del reposo — la mente cansada cierra posibilidades, la mente descansada las abre. La prisa es consejera del error.',
      versiculo: { cita: 'Salmo 127:2', texto: 'Por demás es que os levantéis de madrugada... pues que a su amado dará Dios el sueño.' },
    },
    sanacion: {
      accion: 'Practicá descanso intencional hoy — no como huida sino como acto de confianza. El 7 dice que Dios descansó no porque estaba cansado, sino porque lo que había creado era bueno. Tu proceso de sanación también tiene ritmos — respetalos.',
      versiculo: { cita: 'Salmo 23:2', texto: 'En lugares de delicados pastos me hará descansar; junto a aguas de reposo me pastoreará.' },
    },
    autoconocimiento: {
      accion: 'Pasá 15 minutos en silencio absoluto hoy — sin música, sin teléfono, sin agenda. Solo prestá atención a lo que emerge. El 7 habla de que el autoconocimiento más profundo no viene de la introspección ansiosa, sino del reposo atento.',
      versiculo: { cita: 'Salmo 46:10', texto: 'Estad quietos, y conoced que yo soy Dios.' },
    },
    default: {
      accion: 'Tomate al menos 10 minutos de quietud hoy — aunque sea. El 7 habla de que el descanso no es el opuesto del trabajo sino su fundamento.',
      versiculo: { cita: 'Éxodo 20:11', texto: 'Porque en seis días hizo Jehová los cielos y la tierra... y reposó en el séptimo día.' },
    },
  },

  8: {
    relaciones: {
      accion: 'Elegí perdonar — no porque la otra persona lo merezca, sino porque vos merecés la libertad que el perdón da. Escribí una carta que nunca vas a enviar diciéndole lo que sentís y lo que elegís soltar. El 8 habla de nuevos comienzos — no pueden existir sin liberar el pasado.',
      versiculo: { cita: 'Isaías 43:18-19', texto: 'No os acordéis de las cosas anteriores... He aquí que yo hago algo nuevo.' },
    },
    trabajo: {
      accion: 'Comenzá hoy ese proyecto o idea que postergaste por miedo a fallar. El 8 habla de resurrección — las visiones que Dios puso en vos no mueren aunque las hayas enterrado. Es hora de desenterrarlas.',
      versiculo: { cita: 'Filipenses 4:13', texto: 'Todo lo puedo en Cristo que me fortalece.' },
    },
    fe: {
      accion: 'Escribí en un papel algo de tu pasado espiritual que querés dejar atrás — una duda crónica, una herida religiosa, un patrón que se repite — y romperlo. Es un acto simbólico pero poderoso. El 8 habla de nueva creación: el evangelio es siempre una historia de lo que Dios hace con lo que parecía terminado.',
      versiculo: { cita: '2 Corintios 5:17', texto: 'De modo que si alguno está en Cristo, nueva criatura es; las cosas viejas pasaron; he aquí todas son hechas nuevas.' },
    },
    decision: {
      accion: 'Decidí como si tuvieras una segunda oportunidad — porque la tenés. El 8 habla de nueva creación: si el pasado te enseñó, no tiene que limitarte. Tomá esta decisión desde la libertad que da el nuevo comienzo, no desde el miedo a repetir errores.',
      versiculo: { cita: 'Lamentaciones 3:22-23', texto: 'Por la misericordia de Jehová no hemos sido consumidos... Nuevas son cada mañana; grande es tu fidelidad.' },
    },
    sanacion: {
      accion: 'Identificá algo que considerás "muerto" en vos — un sueño, una parte de tu identidad — y preguntale a Dios en oración: ¿está realmente terminado, o solo necesita resurrección? El 8 dice que Dios es especialista en hacer cosas nuevas con lo que el mundo descartó.',
      versiculo: { cita: 'Ezequiel 37:3', texto: 'Y me dijo: Hijo de hombre, ¿vivirán estos huesos? Y dije: Señor Jehová, tú lo sabes.' },
    },
    autoconocimiento: {
      accion: 'Escribí una lista de cinco versiones de vos mismo que ya no sos — cosas que creías sobre vos y que ya no son verdad. El 8 habla de nueva creación: conocerte a vos mismo incluye reconocer lo que has dejado atrás.',
      versiculo: { cita: 'Efesios 4:22-24', texto: 'Despojaos del viejo hombre... y revestíos del nuevo hombre, creado según Dios en la justicia y santidad de la verdad.' },
    },
    default: {
      accion: 'Empezá hoy algo que estabas postergando. El 8 habla de nuevos comienzos — cada día trae una oportunidad de resurrección.',
      versiculo: { cita: 'Lamentaciones 3:23', texto: 'Nuevas son cada mañana; grande es tu fidelidad.' },
    },
  },

  9: {
    relaciones: {
      accion: 'Identificá a alguien que plantó algo bueno en tu vida y agradecéselo hoy, de forma específica y concreta. El 9 habla de fruto — los vínculos que dan fruto no se dan por sentados, se cuidan y se reconocen.',
      versiculo: { cita: '1 Tesalonicenses 5:11', texto: 'Por lo cual, animaos unos a otros, y edificaos unos a otros, así como lo hacéis.' },
    },
    trabajo: {
      accion: 'Evaluá honestamente: ¿tu trabajo está dando el fruto que esperabas? Si no, identificá una causa raíz — no síntomas — y un cambio concreto que podés hacer hoy. El 9 habla de cosecha: lo que cosechamos revela lo que sembramos.',
      versiculo: { cita: 'Gálatas 6:7', texto: 'Todo lo que el hombre sembrare, eso también segará.' },
    },
    fe: {
      accion: 'Compartí con alguien el fruto espiritual que Dios produjo en vos durante el último año — una historia concreta de crecimiento. El 9 habla de cosecha espiritual: el fruto que no se comparte se desperdicia.',
      versiculo: { cita: 'Juan 15:8', texto: 'En esto es glorificado mi Padre, en que llevéis mucho fruto, y seáis así mis discípulos.' },
    },
    decision: {
      accion: 'Mirá hacia atrás: ¿qué cosechaste de decisiones pasadas similares a la que estás tomando? El 9 habla de que el fruto del pasado es el mejor maestro — no para paralizarte, sino para guiarte con sabiduría.',
      versiculo: { cita: 'Proverbios 14:23', texto: 'En toda labor hay fruto; mas las vanas palabras de los labios empobrecen.' },
    },
    sanacion: {
      accion: 'Identificá un fruto de tu proceso de dolor — algo que aprendiste, algo que creció en vos a través de lo que atravesaste. El 9 habla de cosecha: en el diseño de Dios, incluso el sufrimiento produce algo valioso cuando se le permite.',
      versiculo: { cita: 'Romanos 5:3-4', texto: 'La tribulación produce paciencia; y la paciencia, prueba; y la prueba, esperanza.' },
    },
    autoconocimiento: {
      accion: 'Escribí tres frutos de tu vida — cosas que produjiste, construiste o aportaste que te enorgullecen genuinamente. El 9 nos recuerda que conocerse también es reconocer el fruto que hemos dado, no solo los fracasos.',
      versiculo: { cita: 'Mateo 7:20', texto: 'Así que, por sus frutos los conoceréis.' },
    },
    default: {
      accion: 'Identificá qué fruto está produciendo tu vida en este momento. El 9 habla de cosecha — siempre cosechamos lo que sembramos, y la pregunta es si lo que sembramos hoy es lo que queremos cosechar mañana.',
      versiculo: { cita: 'Juan 15:5', texto: 'El que permanece en mí, y yo en él, éste lleva mucho fruto; porque separados de mí nada podéis hacer.' },
    },
  },

  10: {
    relaciones: {
      accion: 'Revisá tus compromisos relacionales: ¿estás cumpliendo lo que prometiste? El 10 habla de responsabilidad — los vínculos sanos tienen estructura, y en esa estructura se honran los compromisos aunque cueste.',
      versiculo: { cita: 'Mateo 5:37', texto: 'Pero sea vuestro hablar: Sí, sí; no, no; porque lo que es más de esto, de mal procede.' },
    },
    trabajo: {
      accion: 'Organizá tu semana laboral ahora: identificá tus tres prioridades más importantes y protegé tiempo específico para ellas en tu agenda. El 10 habla de orden divino — la productividad que honra a Dios no es frenética, es ordenada y con propósito.',
      versiculo: { cita: '1 Corintios 14:40', texto: 'Pero hágase todo decentemente y con orden.' },
    },
    fe: {
      accion: 'Establecé un tiempo fijo de devoción para esta semana — un horario concreto, un lugar específico. El 10 habla de que el orden espiritual no es legalismo, es el andamiaje que permite que la gracia fluya sin obstáculos.',
      versiculo: { cita: 'Salmo 119:105', texto: 'Lámpara es a mis pies tu palabra, y lumbrera a mi camino.' },
    },
    decision: {
      accion: 'Escribí los pros y los contras en dos columnas ordenadas. El 10 habla de que las decisiones sabias no se toman en el caos — el orden mental es el primer paso hacia la claridad divina. Organizar el pensamiento es un acto espiritual.',
      versiculo: { cita: 'Proverbios 21:5', texto: 'Los pensamientos del diligente ciertamente tienden a la abundancia; mas todo el que se apresura alocadamente, de cierto va a la pobreza.' },
    },
    sanacion: {
      accion: 'Establecé una rutina de autocuidado específica para esta semana — algo concreto, a una hora concreta. El 10 habla de que la sanación tiene estructura: no ocurre en el caos, sino en el orden intencional que creamos.',
      versiculo: { cita: '1 Corintios 6:19-20', texto: '¿O ignoráis que vuestro cuerpo es templo del Espíritu Santo?... Glorificad, pues, a Dios en vuestro cuerpo.' },
    },
    autoconocimiento: {
      accion: 'Revisá si tus valores declarados y tus compromisos reales coinciden. ¿Cómo organizás tu tiempo refleja lo que decís que importa? El 10 habla de responsabilidad — la coherencia entre lo que creemos y cómo vivimos es la base del autoconocimiento honesto.',
      versiculo: { cita: 'Lucas 16:10', texto: 'El que es fiel en lo muy poco, también en lo más es fiel.' },
    },
    default: {
      accion: 'Elegí cumplir un compromiso que postergaste esta semana. El 10 habla de responsabilidad — la integridad se construye en los detalles pequeños que nadie ve.',
      versiculo: { cita: 'Lucas 16:10', texto: 'El que es fiel en lo muy poco, también en lo más es fiel.' },
    },
  },

  12: {
    relaciones: {
      accion: 'Hacé una contribución activa a un grupo al que pertenecés hoy — algo que fortalezca al conjunto, no solo que te beneficie a vos. El 12 habla de gobierno comunitario: estamos diseñados para vivir en estructuras de mutua responsabilidad.',
      versiculo: { cita: 'Romanos 12:4-5', texto: 'De la manera que en un cuerpo tenemos muchos miembros... así nosotros, siendo muchos, somos un cuerpo en Cristo.' },
    },
    trabajo: {
      accion: 'Identificá cómo tu rol contribuye al propósito mayor de tu organización o equipo. El 12 habla de gobierno y estructura — cuando cada persona ocupa su lugar con excelencia, el todo funciona. ¿Estás en tu lugar correcto?',
      versiculo: { cita: '1 Corintios 12:18', texto: 'Mas ahora Dios ha colocado los miembros cada uno de ellos en el cuerpo, como él quiso.' },
    },
    fe: {
      accion: 'Comprometete con tu comunidad de fe de forma más activa esta semana — no solo asistir, sino participar. El 12 habla de que la fe fue diseñada para vivirse en comunidad, con roles y responsabilidades mutuas.',
      versiculo: { cita: 'Hebreos 10:25', texto: 'No dejando de congregarnos... sino exhortándonos; y tanto más, cuanto veis que aquel día se acerca.' },
    },
    decision: {
      accion: 'Consultá esta decisión con alguien de autoridad espiritual — un pastor, mentor o persona sabia que te conozca. El 12 habla de que las grandes decisiones necesitan estructuras de apoyo y rendición de cuentas.',
      versiculo: { cita: 'Proverbios 12:15', texto: 'El camino del necio es derecho en su opinión; mas el que obedece el consejo es sabio.' },
    },
    sanacion: {
      accion: 'Buscá un grupo de apoyo, un consejero o una comunidad donde puedas ser acompañado en este proceso. El 12 habla de que la sanación profunda ocurre dentro de estructuras de cuidado comunitario — no estamos diseñados para sanarnos solos.',
      versiculo: { cita: 'Gálatas 6:2', texto: 'Sobrellevad los unos las cargas de los otros, y cumplid así la ley de Cristo.' },
    },
    autoconocimiento: {
      accion: 'Identificá tu rol natural en los grupos a los que pertenecés: ¿sos líder, apoyo, visionario, ejecutor, conector? El 12 habla de que cada persona tiene un lugar específico en la estructura — conocer el tuyo es parte esencial del autoconocimiento.',
      versiculo: { cita: '1 Corintios 12:7', texto: 'Pero a cada uno le es dada la manifestación del Espíritu para provecho.' },
    },
    default: {
      accion: 'Identificá cómo podés contribuir al bienestar de tu comunidad más cercana hoy — una acción concreta, no una intención general. El 12 habla de que estamos diseñados para funcionar en estructuras de mutua responsabilidad.',
      versiculo: { cita: 'Romanos 12:5', texto: 'Así nosotros, siendo muchos, somos un cuerpo en Cristo, y todos miembros los unos de los otros.' },
    },
  },

  40: {
    relaciones: {
      accion: 'Identificá una relación que está en prueba. Escribí una oración específica por esa persona y por vos en esa relación. El 40 dice que las pruebas en los vínculos tienen propósito formativo — algo está siendo forjado en este desierto que no puede formarse en la comodidad.',
      versiculo: { cita: 'Santiago 1:2-3', texto: 'Tened por sumo gozo cuando os halléis en diversas pruebas, sabiendo que la prueba de vuestra fe produce paciencia.' },
    },
    trabajo: {
      accion: 'Identificá el mayor desafío que tenés en tu trabajo ahora mismo y escribí qué virtud o habilidad está desarrollando en vos. El 40 habla de que los períodos difíciles son siempre períodos de formación — Moisés pasó 40 años en el desierto antes de su mayor misión.',
      versiculo: { cita: 'Deuteronomio 8:2', texto: 'Y te acordarás de todo el camino por donde te ha traído Jehová tu Dios estos cuarenta años en el desierto.' },
    },
    fe: {
      accion: 'Escribí una oración honesta sobre la prueba que estás atravesando — sin filtros, sin intentar sonar espiritual. El 40 habla de que en el desierto Dios no está ausente, está más cerca que nunca. La honestidad en la oración abre esa presencia.',
      versiculo: { cita: 'Salmo 22:1', texto: 'Dios mío, Dios mío, ¿por qué me has desamparado?' },
    },
    decision: {
      accion: 'No tomes decisiones grandes hoy desde el cansancio o la presión. El 40 habla de que el desierto es el lugar de preparación, no el lugar de las grandes decisiones — esperá a tener más claridad y fortaleza antes de comprometerte a algo definitivo.',
      versiculo: { cita: 'Isaías 40:31', texto: 'Los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas.' },
    },
    sanacion: {
      accion: 'Escribí una carta honesta a tu dolor: "¿Qué me estás enseñando? ¿Qué querés de mí?" El 40 habla de que los procesos de formación son incómodos pero no sin propósito — incluso Jesús fue llevado al desierto por el Espíritu.',
      versiculo: { cita: 'Romanos 8:18', texto: 'Las aflicciones del tiempo presente no son comparables con la gloria venidera que en nosotros ha de manifestarse.' },
    },
    autoconocimiento: {
      accion: 'Preguntate: ¿qué parte de mi carácter está siendo probada en este momento? Escríbelo. El 40 habla de que los desiertos revelan lo que estaba oculto — fortalezas y debilidades que no sabíamos que teníamos hasta que la presión las sacó.',
      versiculo: { cita: 'Deuteronomio 8:2', texto: 'Para afligirte, para probarte, para saber lo que había en tu corazón.' },
    },
    default: {
      accion: 'Escribí una cosa que este tiempo difícil te está enseñando. El 40 habla de que en los desiertos se forma el carácter que no puede forjarse en la comodidad.',
      versiculo: { cita: 'Santiago 1:4', texto: 'Mas tenga la paciencia su obra completa, para que seáis perfectos y cabales, sin que os falte cosa alguna.' },
    },
  },

  50: {
    relaciones: {
      accion: 'Liberá a alguien de una deuda emocional o expectativa que tenés sobre ellos — no verbalmente si no es el momento, sino en tu corazón. El 50 habla de jubileo: la libertad que declaramos para otros termina siendo nuestra propia libertad.',
      versiculo: { cita: 'Lucas 6:37', texto: 'No juzguéis, y no seréis juzgados; no condenéis, y no seréis condenados; perdonad, y seréis perdonados.' },
    },
    trabajo: {
      accion: 'Identificá una tarea, proyecto o rol que ya cumplió su tiempo y que necesitás soltar para avanzar. El 50 habla de jubileo — en el año del jubileo se liberaban las deudas para que hubiera capacidad de algo nuevo. ¿Qué necesita ser liberado en tu área profesional?',
      versiculo: { cita: 'Isaías 61:1', texto: 'A proclamar el año de la buena voluntad de Jehová.' },
    },
    fe: {
      accion: 'Declarate libre de una atadura espiritual hoy — un patrón de pensamiento negativo, una culpa que ya fue perdonada, un miedo que gobierna tus decisiones. El 50 habla de Pentecostés: el Espíritu viene a liberar, no a encadenar.',
      versiculo: { cita: 'Juan 8:36', texto: 'Así que, si el Hijo os libertare, seréis verdaderamente libres.' },
    },
    decision: {
      accion: 'Antes de decidir, preguntate: "¿Estoy decidiendo desde la libertad o desde el miedo?" El 50 habla de jubileo — las decisiones que honran a Dios nacen de la libertad, no de la obligación o el temor.',
      versiculo: { cita: 'Gálatas 5:1', texto: 'Estad, pues, firmes en la libertad con que Cristo nos hizo libres, y no estéis otra vez sujetos al yugo de esclavitud.' },
    },
    sanacion: {
      accion: 'Elegí soltar hoy algo que estás cargando y que no te pertenece — una culpa ajena, una responsabilidad que no es tuya, un estándar imposible. El 50 habla de liberación: algunas cargas no las pusiste vos y no tenés que llevarlas.',
      versiculo: { cita: 'Mateo 11:30', texto: 'Porque mi yugo es fácil, y ligera mi carga.' },
    },
    autoconocimiento: {
      accion: 'Identificá una creencia limitante sobre vos mismo que te tiene prisionero. Escribila y luego escribí la verdad bíblica que la contradice. El 50 habla de jubileo: la libertad más profunda empieza cuando la mente es renovada.',
      versiculo: { cita: 'Romanos 12:2', texto: 'No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento.' },
    },
    default: {
      accion: 'Elegí liberar algo hoy — una expectativa, un resentimiento, una carga que no es tuya. El 50 habla de jubileo: hay una libertad que Dios diseñó específicamente para vos.',
      versiculo: { cita: 'Juan 8:36', texto: 'Así que, si el Hijo os libertare, seréis verdaderamente libres.' },
    },
  },

  70: {
    relaciones: {
      accion: 'Pensá en alguien que te ha conocido en diferentes etapas de tu vida. Comunicate hoy y recordá juntos algo significativo. El 70 habla de la plenitud de los tiempos — los vínculos profundos tienen historia, y esa historia compartida es un regalo que se sostiene en el tiempo.',
      versiculo: { cita: 'Jeremías 29:11', texto: 'Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis.' },
    },
    trabajo: {
      accion: 'Evaluá el impacto de largo plazo de tu trabajo: ¿está construyendo algo que trasciende tu persona? El 70 habla de la dimensión universal del plan de Dios — el trabajo que honra a Dios tiene una magnitud que va más allá de lo inmediato y lo visible.',
      versiculo: { cita: 'Jeremías 29:7', texto: 'Procurad la paz de la ciudad a la cual os hice transportar, y rogad por ella a Jehová; porque en su paz tendréis vosotros paz.' },
    },
    fe: {
      accion: 'Orá por algo más grande que vos mismo hoy — tu ciudad, tu nación, las naciones. El 70 habla del gobierno universal de Dios: la fe que cambia el mundo empieza cuando nuestras oraciones trascienden nuestro círculo inmediato.',
      versiculo: { cita: '1 Timoteo 2:1', texto: 'Exhorto ante todo, a que se hagan rogativas, oraciones, peticiones y acciones de gracias, por todos los hombres.' },
    },
    decision: {
      accion: 'Mirá esta decisión con perspectiva de largo plazo: ¿cómo va a impactar en 10 años? ¿En la próxima generación? El 70 habla de la dimensión eterna de cada elección — las decisiones sabias consideran el horizonte completo, no solo el alivio inmediato.',
      versiculo: { cita: 'Proverbios 22:3', texto: 'El avisado ve el mal y se esconde; mas los simples pasan y llevan el daño.' },
    },
    sanacion: {
      accion: 'Reconocé que tu proceso de sanación tiene un propósito más allá de vos mismo — para equiparte para acompañar a otros en el futuro. El 70 habla de restauración a escala universal: Dios raramente sana solo para el individuo, sino para que ese individuo sea agente de sanación.',
      versiculo: { cita: '2 Corintios 1:3-4', texto: 'Dios de toda consolación, el cual nos consuela en todas nuestras tribulaciones, para que podamos también nosotros consolar a los que están en cualquier tribulación.' },
    },
    autoconocimiento: {
      accion: 'Preguntate hoy: ¿cuál es el legado que quiero dejar? ¿Qué quiero que otros digan de mí? El 70 habla de la perspectiva de la eternidad — conocerse profundamente incluye entender el propósito que trasciende la vida cotidiana.',
      versiculo: { cita: 'Salmo 90:12', texto: 'Enséñanos de tal modo a contar nuestros días, que traigamos al corazón sabiduría.' },
    },
    default: {
      accion: 'Orá por algo más grande que tu situación inmediata hoy. El 70 habla de que el plan de Dios es universal — y vos sos parte de él, aunque no lo veás completo todavía.',
      versiculo: { cita: 'Jeremías 29:11', texto: 'Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal.' },
    },
  },

  13: {
    relaciones: {
      accion: 'Si hay una relación que sientes que "debería haber terminado", preguntale a Dios si en realidad está en proceso de transformación. El 13 no es mala suerte — es el ciclo que Dios rompe para hacer algo nuevo.',
      versiculo: { cita: 'Isaías 43:19', texto: 'He aquí que yo hago cosa nueva; pronto saldrá a luz. ¿No la conoceréis?' },
    },
    trabajo: {
      accion: 'Frente a una situación laboral que parece "maldita" o bloqueada, resistí la tentación de rendirte. El 13 aparece antes de las liberaciones: Dios está rompiendo un ciclo que te limitaba.',
      versiculo: { cita: 'Romanos 8:28', texto: 'A los que aman a Dios, todas las cosas les ayudan a bien.' },
    },
    fe: {
      accion: 'Examiná si hay alguna área de tu vida donde seguís "en rebelión" sin darte cuenta — un hábito, una actitud, una resistencia a Dios. El 13 invita a la transformación genuina, no al castigo.',
      versiculo: { cita: 'Ezequiel 36:26', texto: 'Os daré corazón nuevo, y pondré espíritu nuevo dentro de vosotros.' },
    },
    decision: {
      accion: 'Antes de tomar esta decisión, preguntate: ¿estoy actuando desde el miedo o desde la fe? El 13 llama a romper el ciclo de decisiones reactivas. Esperá un día si podés.',
      versiculo: { cita: 'Proverbios 3:5', texto: 'Confía en Jehová con todo tu corazón, y no te apoyes en tu propia prudencia.' },
    },
    sanacion: {
      accion: 'Identificá un ciclo de dolor que se repite en tu vida: la misma herida con distinta cara. El 13 es la invitación de Dios a que ese ciclo se rompa hoy. Nombralo en oración.',
      versiculo: { cita: 'Salmo 34:18', texto: 'Cercano está Jehová a los quebrantados de corazón; y salva a los contritos de espíritu.' },
    },
    autoconocimiento: {
      accion: 'El número 13 en la Biblia marca momentos donde la rebelión se convierte en obediencia. ¿Qué parte de vos todavía resiste a Dios? No con culpa — con curiosidad y honestidad.',
      versiculo: { cita: 'Jeremías 17:9', texto: 'Engañoso es el corazón más que todas las cosas, y perverso; ¿quién lo conocerá?' },
    },
    default: {
      accion: 'El 13 bíblico habla de ciclos que se rompen y rebeliones que se transforman. Hoy, identificá algo en tu vida que necesita un quiebre — y ofrecéselo a Dios.',
      versiculo: { cita: 'Isaías 43:19', texto: 'He aquí que yo hago cosa nueva; pronto saldrá a luz. ¿No la conoceréis?' },
    },
  },

  14: {
    relaciones: {
      accion: 'Si hay una relación marcada por el conflicto o la distancia, recordá que el 14 habla del cordero pascual — la sangre que protege y libera. Orá hoy por esa persona con cobertura, no con resentimiento.',
      versiculo: { cita: 'Éxodo 12:13', texto: 'Y la sangre os será por señal en las casas donde vosotros estéis; y veré la sangre y pasaré de vosotros.' },
    },
    trabajo: {
      accion: 'El 14 es el número de la liberación activa: Dios no solo prometió sacar a Israel, sino que lo sacó en el día exacto. Confiá hoy en que hay una salida real, no solo espiritual, para lo que te aprieta laboralmente.',
      versiculo: { cita: 'Filipenses 4:19', texto: 'Mi Dios, pues, suplirá todo lo que os falta conforme a sus riquezas en gloria en Cristo Jesús.' },
    },
    fe: {
      accion: 'El cordero de la Pascua prefigura a Cristo. Hoy, meditá en lo que fue comprado por Él para vos: libertad de lo que te esclavizaba. Dalo por real, no solo por doctrinal.',
      versiculo: { cita: '1 Pedro 1:19', texto: 'Sino con la sangre preciosa de Cristo, como de un cordero sin mancha y sin contaminación.' },
    },
    decision: {
      accion: 'El 14 en la genealogía de Mateo marca las 14 generaciones de liberación progresiva hasta Cristo. Cada decisión que tomás forma parte de una historia más larga. Tomá esta decisión pensando en lo que viene después.',
      versiculo: { cita: 'Mateo 1:17', texto: 'De modo que todas las generaciones desde Abraham hasta David son catorce generaciones.' },
    },
    sanacion: {
      accion: 'La Pascua no fue solo escape — fue un nuevo comienzo. Hoy preguntate: ¿de qué necesito ser liberado para poder realmente comenzar de nuevo? Nombralo y dáselo al Cordero.',
      versiculo: { cita: 'Apocalipsis 5:12', texto: 'El Cordero que fue inmolado es digno de tomar el poder, las riquezas, la sabiduría, la fortaleza, la honra, la gloria y la alabanza.' },
    },
    autoconocimiento: {
      accion: '¿Qué te tiene en esclavitud sin que lo hayas nombrado como tal? El 14 es la Pascua: Dios vio la opresión de su pueblo antes de que ellos mismos lo reconocieran. Mirá honestamente.',
      versiculo: { cita: 'Éxodo 3:7', texto: 'Bien he visto la aflicción de mi pueblo que está en Egipto, y he oído su clamor.' },
    },
    default: {
      accion: 'El 14 habla del cordero pascual y la liberación de Dios que llega en el momento exacto. Hoy, confiá en que lo que te aprieta tiene fecha de salida.',
      versiculo: { cita: '1 Pedro 1:19', texto: 'Sino con la sangre preciosa de Cristo, como de un cordero sin mancha y sin contaminación.' },
    },
  },

  17: {
    relaciones: {
      accion: 'El 17 es victoria perfecta — nada puede separarnos del amor de Dios (Romanos 8). Hoy, recordale a alguien cercano que su valor no depende de lo que logra. Una palabra de afirmación genuina puede cambiar su día.',
      versiculo: { cita: 'Romanos 8:38-39', texto: 'Ni la muerte, ni la vida, ni ángeles, ni principados, ni lo presente, ni lo por venir... podrá separarnos del amor de Dios.' },
    },
    trabajo: {
      accion: 'La victoria del 17 no es ausencia de obstáculos sino la certeza de que Dios es más grande. Frente al desafío laboral de hoy, trabajá con la confianza de quien ya conoce el resultado final.',
      versiculo: { cita: '1 Corintios 15:57', texto: 'Mas gracias sean dadas a Dios, que nos da la victoria por medio de nuestro Señor Jesucristo.' },
    },
    fe: {
      accion: 'El arca de Noé descansó el día 17 del mes — un nuevo mundo después del diluvio. Tu fe hoy puede descansar en esa misma certeza: Dios sostiene incluso lo que parecía destruido.',
      versiculo: { cita: 'Génesis 8:4', texto: 'Y reposó el arca en el mes séptimo, a los diecisiete días del mes, sobre los montes de Ararat.' },
    },
    decision: {
      accion: 'Tomar una decisión desde la victoria, no desde el miedo, cambia el proceso completo. El 17 invita a decidir como alguien que ya ganó, no como alguien que tiene miedo de perder.',
      versiculo: { cita: 'Josué 1:9', texto: 'Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo.' },
    },
    sanacion: {
      accion: 'La mayor victoria del 17 es que nada — ni el pasado, ni el pecado, ni la vergüenza — puede cortar el amor de Dios por vos. Dejá que esa verdad entre hoy en el lugar donde más duele.',
      versiculo: { cita: 'Romanos 8:38-39', texto: 'Ni la muerte, ni la vida, ni ángeles, ni principados... podrá separarnos del amor de Dios.' },
    },
    autoconocimiento: {
      accion: '¿Desde dónde operás habitualmente: desde la victoria o desde el miedo al fracaso? El 17 te llama a identificar los patrones de pensamiento derrotistas y reemplazarlos con la certeza del Dios que ya venció.',
      versiculo: { cita: '2 Timoteo 1:7', texto: 'Porque no nos ha dado Dios espíritu de cobardía, sino de poder, de amor y de dominio propio.' },
    },
    default: {
      accion: 'El 17 habla de victoria perfecta y del amor que nada puede separar. Hoy, actuá desde la certeza de que ya estás del lado del que gana.',
      versiculo: { cita: 'Romanos 8:37', texto: 'Antes, en todas estas cosas somos más que vencedores por medio de aquel que nos amó.' },
    },
  },

  18: {
    relaciones: {
      accion: 'El 18 en hebreo es "Chai" — vida. Si hay una relación que se siente muerta o sin salida, orá hoy específicamente por el soplo de vida de Dios sobre ella. Él es el Dios de resurrección también en los vínculos.',
      versiculo: { cita: 'Ezequiel 37:5', texto: 'Así ha dicho Jehová el Señor a estos huesos: He aquí, yo hago entrar espíritu en vosotros, y viviréis.' },
    },
    trabajo: {
      accion: 'El 18 también habla del fin de la opresión: Jesús sanó a la mujer encorvada después de 18 años. ¿Cuánto tiempo llevas cargando una situación laboral que te dobla? Pedí hoy la misma intervención.',
      versiculo: { cita: 'Lucas 13:12', texto: 'Cuando Jesús la vio, la llamó y le dijo: Mujer, eres libre de tu enfermedad.' },
    },
    fe: {
      accion: 'Chai — vida — es el regalo central del evangelio. Hoy, meditá no en lo que Dios puede darte sino en lo que ya te dio: vida. Agradecé activamente por al menos tres expresiones concretas de esa vida.',
      versiculo: { cita: 'Juan 10:10', texto: 'Yo he venido para que tengan vida, y para que la tengan en abundancia.' },
    },
    decision: {
      accion: 'La opresión de 18 años terminó en un instante con la palabra de Jesús. Antes de decidir desde la angustia acumulada, preguntate: ¿estoy tomando esta decisión desde la opresión o desde la libertad que Cristo ya compró?',
      versiculo: { cita: 'Gálatas 5:1', texto: 'Estad, pues, firmes en la libertad con que Cristo nos hizo libres, y no estéis otra vez sujetos al yugo de esclavitud.' },
    },
    sanacion: {
      accion: '18 años encorvada, y Jesús la vio, la llamó, la tocó. Él te ve hoy exactamente como eras vos antes de que esa carga llegara. Dejá que el encuentro con Jesús te enderece de nuevo.',
      versiculo: { cita: 'Lucas 13:13', texto: 'Y le impuso las manos; y ella se enderezó luego, y glorificaba a Dios.' },
    },
    autoconocimiento: {
      accion: '¿Qué opresión llevas tanto tiempo que ya ni la notas como opresión? El 18 llama a identificar las cargas que normalizaste. Hacé una lista honesta de lo que te dobla — Dios quiere verte erguido.',
      versiculo: { cita: 'Mateo 11:28', texto: 'Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.' },
    },
    default: {
      accion: 'El 18 (Chai) habla de vida y del fin de la opresión. La mujer encorvada 18 años fue liberada con una sola palabra. Acercate a Jesús hoy con la carga que llevas.',
      versiculo: { cita: 'Juan 10:10', texto: 'Yo he venido para que tengan vida, y para que la tengan en abundancia.' },
    },
  },

  20: {
    relaciones: {
      accion: 'El 20 habla de espera prolongada que culmina en cumplimiento. Si esperás que alguien cambie o que una relación mejore, preguntale a Dios si tu rol en esa espera es activo (orar, crecer) o pasivo (solo aguardar).',
      versiculo: { cita: 'Salmo 27:14', texto: 'Aguarda a Jehová; esfuérzate, y aliéntese tu corazón; sí, espera a Jehová.' },
    },
    trabajo: {
      accion: 'Isaac esperó hasta los 20 años de casado para tener hijos — una espera que casi no tenía sentido. Tu espera laboral tampoco es olvido de Dios. Hacé algo productivo con este tiempo de espera.',
      versiculo: { cita: 'Isaías 40:31', texto: 'Los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas.' },
    },
    fe: {
      accion: 'Jacob sirvió 20 años para recibir lo que Dios le había prometido. ¿Tu fe resiste la espera larga? Hoy, renová el pacto con Dios no para que apure los tiempos sino para estar presente en ellos.',
      versiculo: { cita: 'Génesis 31:38', texto: 'Estos veinte años he estado contigo; tus ovejas y tus cabras nunca abortaron, ni yo comí carnero de tus ovejas.' },
    },
    decision: {
      accion: 'El 20 invita a no tomar decisiones apresuradas para cortar la espera. Algunas cosas requieren maduración completa. Preguntate: ¿estoy apurado porque confío poco o porque genuinamente es tiempo de mover?',
      versiculo: { cita: 'Eclesiastés 3:1', texto: 'Todo tiene su tiempo, y todo lo que se quiere debajo del cielo tiene su hora.' },
    },
    sanacion: {
      accion: 'La espera de 20 años puede haber dejado heridas: dudas, amargura, preguntas sin respuesta. Hoy, en lugar de pedir que la espera termine, pedí que Dios sane lo que la espera lastimó.',
      versiculo: { cita: 'Salmo 147:3', texto: 'El sana a los quebrantados de corazón, y venda sus heridas.' },
    },
    autoconocimiento: {
      accion: '¿Cómo te comportás durante la espera? ¿Te cerrás, te amargás, te distraés, o crecés? El 20 invita a conocerte en la espera — porque ahí se revela quién realmente sos.',
      versiculo: { cita: 'Santiago 1:3', texto: 'Sabiendo que la prueba de vuestra fe produce paciencia.' },
    },
    default: {
      accion: 'El 20 habla de esperas largas que culminan en el momento exacto de Dios. Hoy, confiá en que los tiempos de Dios son perfectos aunque no sean los tuyos.',
      versiculo: { cita: 'Isaías 40:31', texto: 'Los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas.' },
    },
  },

  21: {
    relaciones: {
      accion: 'Daniel oró 21 días y la respuesta ya había partido al primer día. Si estás intercediendo por alguien sin ver resultados, no pares. La demora no es un "no" — hay una batalla que no ves.',
      versiculo: { cita: 'Daniel 10:12', texto: 'Desde el primer día que dispusiste tu corazón a entender y a humillarte en la presencia de tu Dios, fueron oídas tus palabras.' },
    },
    trabajo: {
      accion: 'La perseverancia de 21 días de Daniel no fue pasiva — fue ayuno, humillación, búsqueda activa. Si tu trabajo requiere breakthrough, combiná la oración con acción concreta y sostenida hoy.',
      versiculo: { cita: 'Daniel 10:3', texto: 'No comí manjar delicado, ni entró en mi boca carne ni vino, ni me ungí con ungüento, hasta que se cumplieron las tres semanas.' },
    },
    fe: {
      accion: 'El mensajero enviado a Daniel el primer día fue bloqueado 21 días. Dios responde y a veces hay resistencia espiritual. Hoy, orá con la certeza de que tu oración ya tiene respuesta enviada.',
      versiculo: { cita: 'Daniel 10:13', texto: 'Mas el príncipe del reino de Persia se me opuso durante veintiún días; pero he aquí Miguel, uno de los principales príncipes, vino para ayudarme.' },
    },
    decision: {
      accion: 'Antes de decidir, dale a la oración el tiempo que merece. ¿Cuánto días llevás buscando dirección divina para esto? Si es poco, considerá extender tu búsqueda antes de actuar.',
      versiculo: { cita: 'Proverbios 8:17', texto: 'Yo amo a los que me aman, y me hallan los que temprano me buscan.' },
    },
    sanacion: {
      accion: 'La persistencia en la oración durante 21 días de Daniel fue posible porque él entendió que Dios lo escuchó desde el primer día. Orá hoy sin desesperanza: ya fuiste escuchado.',
      versiculo: { cita: '1 Juan 5:14', texto: 'Y esta es la confianza que tenemos en él, que si pedimos alguna cosa conforme a su voluntad, él nos oye.' },
    },
    autoconocimiento: {
      accion: '¿Sos de los que oran unos días y, al no ver respuesta, dejan de orar? El 21 de Daniel invita a conocer tu capacidad de perseverancia espiritual — y, si es corta, a desarrollarla como músculo.',
      versiculo: { cita: 'Lucas 18:1', texto: 'También les refirió Jesús una parábola sobre la necesidad de orar siempre, y no desmayar.' },
    },
    default: {
      accion: 'Los 21 días de Daniel muestran que la respuesta parte al primer día aunque no llegue hasta el día 21. Seguí orando — no porque Dios no oyó, sino porque hay un camino que recorrer.',
      versiculo: { cita: 'Daniel 10:12', texto: 'Desde el primer día que dispusiste tu corazón a entender y a humillarte en la presencia de tu Dios, fueron oídas tus palabras.' },
    },
  },

  24: {
    relaciones: {
      accion: 'Los 24 ancianos del Apocalipsis se postran continuamente ante Dios. Hoy, invitá a alguien a adorar juntos — no como acto religioso sino como reconocimiento compartido de que hay Alguien más grande que sus problemas.',
      versiculo: { cita: 'Apocalipsis 4:10', texto: 'Los veinticuatro ancianos se postran delante del que está sentado en el trono, y adoran al que vive por los siglos de los siglos.' },
    },
    trabajo: {
      accion: 'La adoración continua de los 24 no era porque no tenían qué hacer — era porque habían entendido que la adoración es el centro. ¿Tu trabajo nace de un corazón adorador o de la obligación? La diferencia se nota en el fruto.',
      versiculo: { cita: 'Colosenses 3:23', texto: 'Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres.' },
    },
    fe: {
      accion: 'El sacerdocio en Israel tenía 24 turnos de servicio — nada en el templo quedaba sin cobertura. Hoy, ofrecé tu tiempo a Dios como turno de servicio: no solo tus momentos "espirituales" sino toda la jornada.',
      versiculo: { cita: '1 Crónicas 24:1', texto: 'Así fueron distribuidos en su ministerio los hijos de Aarón.' },
    },
    decision: {
      accion: 'Los ancianos del 24 tiran sus coronas ante el trono — reconocen que su autoridad viene de Dios. Antes de decidir, ¿ya reconociste que tu capacidad de decidir bien también viene de Él?',
      versiculo: { cita: 'Apocalipsis 4:11', texto: 'Señor, digno eres de recibir la gloria y la honra y el poder; porque tú creaste todas las cosas.' },
    },
    sanacion: {
      accion: 'La adoración continua de los 24 ancianos no depende de cómo se sienten — es una postura del ser. Hoy, elegí adorar aunque no tengas ganas. La adoración que cuesta más es la que más sana.',
      versiculo: { cita: 'Salmo 34:1', texto: 'Bendeciré a Jehová en todo tiempo; su alabanza estará de continuo en mi boca.' },
    },
    autoconocimiento: {
      accion: '¿Qué ocuparía el trono de tu corazón si Dios no estuviera? El 24 de los ancianos que se postran te invita a examinar qué es lo que genuinamente adora tu vida cotidiana.',
      versiculo: { cita: 'Éxodo 20:3', texto: 'No tendrás dioses ajenos delante de mí.' },
    },
    default: {
      accion: 'Los 24 ancianos nos muestran que la adoración es continua y total. Hoy, encontrá un momento para postrarte — literal o figuradamente — y reconocer que Dios es el centro.',
      versiculo: { cita: 'Apocalipsis 4:10', texto: 'Los veinticuatro ancianos se postran delante del que está sentado en el trono, y adoran al que vive por los siglos de los siglos.' },
    },
  },

  30: {
    relaciones: {
      accion: 'Jesús comenzó su ministerio a los 30 — después de 30 años de preparación silenciosa. Las personas en tu vida que parecen "tarde" o que todavía no llegaron a su potencial: no las descartes. Su momento puede estar llegando.',
      versiculo: { cita: 'Lucas 3:23', texto: 'Jesús mismo al comenzar su ministerio era como de treinta años.' },
    },
    trabajo: {
      accion: 'El 30 habla de madurez alcanzada después de preparación invisible. Si sentís que tu trabajo no está dando el fruto esperado todavía, preguntate: ¿estoy en los 30 años de preparación o ya llegó el momento de comenzar?',
      versiculo: { cita: 'Números 4:3', texto: 'De treinta años arriba hasta cincuenta años, todos los que entran en compañía para servir en el tabernáculo de reunión.' },
    },
    fe: {
      accion: 'José fue exaltado a los 30. David comenzó a reinar a los 30. Jesús comenzó su ministerio a los 30. El 30 bíblico es señal de madurez para el servicio. ¿En qué área de tu fe sentís que llegaste a esa madurez? Úsala.',
      versiculo: { cita: 'Génesis 41:46', texto: 'Era José de edad de treinta años cuando fue presentado ante Faraón rey de Egipto.' },
    },
    decision: {
      accion: 'Las decisiones que tomás desde la madurez (30) son distintas a las que tomás desde la urgencia. Hoy, antes de decidir, preguntate: ¿estoy actuando desde la madurez ganada con tiempo o desde la reacción inmediata?',
      versiculo: { cita: 'Proverbios 19:2', texto: 'El alma sin ciencia no es buena, y aquel que se apresura con los pies, peca.' },
    },
    sanacion: {
      accion: '30 años de vida "oculta" no fueron desperdiciados para Jesús: fueron la base de todo. Lo que viviste antes de llegar aquí — incluso lo doloroso — forma parte de tu preparación. Dios no desperdicia nada.',
      versiculo: { cita: 'Romanos 8:28', texto: 'A los que aman a Dios, todas las cosas les ayudan a bien.' },
    },
    autoconocimiento: {
      accion: '¿Cuántos de tus años los ves como "preparación" y cuántos como "pérdida"? El 30 invita a reencuadrar toda tu historia como formación, no como fracaso. Hacé ese ejercicio hoy.',
      versiculo: { cita: 'Salmo 139:16', texto: 'En tu libro estaban escritas todas aquellas cosas que fueron luego formadas, sin faltar una de ellas.' },
    },
    default: {
      accion: 'El 30 bíblico marca la madurez para el ministerio — Jesús, José, David, todos comenzaron a los 30. Lo que Dios preparó en vos silenciosamente está listo para ser usado.',
      versiculo: { cita: 'Lucas 3:23', texto: 'Jesús mismo al comenzar su ministerio era como de treinta años.' },
    },
  },

  33: {
    relaciones: {
      accion: 'Jesús vivió 33 años y los entregó completamente. La consagración total no es para los "súper espirituales" — es para quienes eligen amar sin reserva. ¿Hay alguien a quien puedas amar hoy sin condiciones?',
      versiculo: { cita: 'Juan 13:34', texto: 'Un mandamiento nuevo os doy: Que os améis unos a otros; como yo os he amado, que también os améis unos a otros.' },
    },
    trabajo: {
      accion: 'Una vida completamente entregada no divide entre sagrado y secular. El trabajo que hacés hoy puede ser un acto de consagración total si lo ofrecés conscientemente a Dios. Cambia la intención y cambia el valor.',
      versiculo: { cita: 'Colosenses 3:17', texto: 'Y todo lo que hacéis, sea de palabra o de hecho, hacedlo todo en el nombre del Señor Jesús.' },
    },
    fe: {
      accion: 'El 33 es la edad de la cruz — el punto más alto de consagración total. Hoy, considerá si hay un área de tu vida que todavía no entregaste completamente a Dios. No hay medias entregas en el reino.',
      versiculo: { cita: 'Marcos 8:34', texto: 'Si alguno quiere venir en pos de mí, niéguese a sí mismo, y tome su cruz, y sígame.' },
    },
    decision: {
      accion: 'La consagración total cambia cómo se toman las decisiones: ya no se decide qué conviene a mí, sino qué conviene al reino. Antes de decidir, preguntate: ¿qué elegiría alguien completamente consagrado a Dios?',
      versiculo: { cita: 'Gálatas 2:20', texto: 'Con Cristo estoy juntamente crucificado, y ya no vivo yo, mas vive Cristo en mí.' },
    },
    sanacion: {
      accion: 'La cruz del 33 no fue solo sufrimiento — fue entrega voluntaria que produjo vida. Si estás sufriendo, preguntale a Dios: ¿cómo puede este dolor, entregado a vos, producir vida para mí y para otros?',
      versiculo: { cita: 'Juan 12:24', texto: 'De cierto, de cierto os digo, que si el grano de trigo no cae en la tierra y muere, queda solo; pero si muere, lleva mucho fruto.' },
    },
    autoconocimiento: {
      accion: '¿Cuáles son las áreas de tu vida que todavía no pusiste completamente en las manos de Dios? El 33 no te llama a la perfección — te llama a la honestidad sobre lo que todavía retenés.',
      versiculo: { cita: 'Lucas 9:23', texto: 'Si alguno quiere venir en pos de mí, niéguese a sí mismo, tome su cruz cada día, y sígame.' },
    },
    default: {
      accion: 'El 33 marca la vida completamente entregada — como la de Cristo. Hoy, identificá una sola área donde podés hacer una entrega más completa a Dios.',
      versiculo: { cita: 'Gálatas 2:20', texto: 'Con Cristo estoy juntamente crucificado, y ya no vivo yo, mas vive Cristo en mí.' },
    },
  },

  42: {
    relaciones: {
      accion: 'Las 42 paradas en el desierto no fueron casuales — cada una tuvo su propósito. Las personas que cruzaron tu vida en los momentos difíciles fueron parte de esas paradas. Agradecé hoy a alguien que apareció en tu "desierto".',
      versiculo: { cita: 'Números 33:1', texto: 'Estas son las jornadas de los hijos de Israel, que salieron de la tierra de Egipto por sus ejércitos.' },
    },
    trabajo: {
      accion: 'El camino de 42 paradas se veía ineficiente comparado con la ruta directa. Tu camino laboral también puede parecer largo o lleno de desvíos. Preguntale a Dios qué aprendiste en cada "parada" que no podrías haber aprendido de otra forma.',
      versiculo: { cita: 'Deuteronomio 8:2', texto: 'Y te acordarás de todo el camino por donde te ha traído Jehová tu Dios estos cuarenta años en el desierto.' },
    },
    fe: {
      accion: 'Las 42 paradas terminan en la Tierra Prometida. Tu camino también tiene destino — aunque ahora estés en una parada incómoda. La fe del 42 es confiar en el mapa aunque no veas el destino desde donde estás.',
      versiculo: { cita: 'Hebreos 11:13', texto: 'Conforme a la fe murieron todos éstos sin haber recibido lo prometido, sino mirándolo de lejos, y creyéndolo.' },
    },
    decision: {
      accion: 'El pueblo tomó decisiones en cada parada: quejarse o confiar, avanzar o retroceder. En la parada en la que estás hoy, ¿cuál es la decisión que Dios te está pidiendo? Elegí bien en esta parada.',
      versiculo: { cita: 'Josué 24:15', texto: 'Escogeos hoy a quién sirváis... pero yo y mi casa serviremos a Jehová.' },
    },
    sanacion: {
      accion: 'Muchas paradas del desierto fueron dolorosas: falta de agua, serpientes, rebeliones. Si estás en una de esas, recordá que todas las 42 paradas terminaron. Esta también va a terminar.',
      versiculo: { cita: 'Salmo 23:4', texto: 'Aunque ande en valle de sombra de muerte, no temeré mal alguno, porque tú estarás conmigo.' },
    },
    autoconocimiento: {
      accion: '¿Cuántas "paradas" de tu historia podés identificar? ¿Qué aprendiste en cada una? El 42 invita a hacer el ejercicio de mirar atrás y ver el mapa completo — vas a encontrar a Dios en cada punto.',
      versiculo: { cita: 'Deuteronomio 8:2', texto: 'Y te acordarás de todo el camino por donde te ha traído Jehová tu Dios.' },
    },
    default: {
      accion: 'Las 42 paradas del desierto no fueron accidentes — cada una fue necesaria. Donde estás hoy, incluso si parece una parada inútil, tiene propósito en el mapa de Dios.',
      versiculo: { cita: 'Deuteronomio 8:2', texto: 'Y te acordarás de todo el camino por donde te ha traído Jehová tu Dios estos cuarenta años en el desierto.' },
    },
  },

  60: {
    relaciones: {
      accion: 'La imagen de 60 codos de Nabucodonosor fue construida para que todos se inclinaran. ¿Hay alguna persona o grupo que ejerza una presión similar en tu vida — que te pida doblar donde no deberías? Identificala hoy.',
      versiculo: { cita: 'Daniel 3:18', texto: 'Y si no, sepas oh rey, que no serviremos a tus dioses, ni tampoco adoraremos la estatua que has levantado.' },
    },
    trabajo: {
      accion: 'El mundo laboral tiene sus propias "imágenes de 60 codos": sistemas que piden lealtad total, valores que no son los tuyos. El 60 te llama a la integridad visible: a no inclinarte aunque cueste.',
      versiculo: { cita: 'Daniel 3:18', texto: 'Y si no, sepas oh rey, que no serviremos a tus dioses, ni tampoco adoraremos la estatua que has levantado.' },
    },
    fe: {
      accion: 'El orgullo construye estatuas de sí mismo y exige adoración. Examiná hoy si hay áreas donde vos mismo construiste una "imagen" — una versión idealizada de vos que esperás que otros reverencien.',
      versiculo: { cita: 'Proverbios 16:18', texto: 'Antes del quebrantamiento es la soberbia, y antes de la caída la altivez de espíritu.' },
    },
    decision: {
      accion: 'Sadrac, Mesac y Abed-nego decidieron de antemano que no se inclinarían. Las mejores decisiones bajo presión se toman antes de que llegue la presión. Definí hoy tus límites antes de que los necesites.',
      versiculo: { cita: 'Daniel 1:8', texto: 'Daniel propuso en su corazón no contaminarse con la porción de la comida del rey.' },
    },
    sanacion: {
      accion: 'La soberbia del 60 también puede ser tu propia: la arrogancia que esconde inseguridad, el control que esconde miedo. El horno que destruyó la imagen no los destruyó a ellos. Dejá que Dios queme lo que tiene que quemar.',
      versiculo: { cita: 'Isaías 48:10', texto: 'He aquí que yo te he purificado, y no como a plata; te he escogido en horno de aflicción.' },
    },
    autoconocimiento: {
      accion: '¿A qué "imágenes" te has inclinado en tu vida sin darte cuenta? El 60 invita a identificar las lealtades que compiten con Dios — no las obvias sino las sutiles: el éxito, la aprobación, la seguridad.',
      versiculo: { cita: 'Mateo 6:24', texto: 'No podéis servir a Dios y a las riquezas.' },
    },
    default: {
      accion: 'La imagen de 60 codos advierte sobre el orgullo y los sistemas que exigen lealtad total. Hoy, identificá en qué áreas de tu vida estás tentado a inclinarte donde no deberías.',
      versiculo: { cita: 'Daniel 3:18', texto: 'Y si no, sepas oh rey, que no serviremos a tus dioses, ni tampoco adoraremos la estatua que has levantado.' },
    },
  },

  66: {
    relaciones: {
      accion: 'Los 66 libros de la Biblia son la Palabra completa de Dios para su pueblo — sin faltarle nada. ¿Hay alguien en tu vida que necesita escuchar una Palabra específica de Dios? Sé hoy el instrumento para compartirla.',
      versiculo: { cita: '2 Timoteo 3:16', texto: 'Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia.' },
    },
    trabajo: {
      accion: 'La Biblia tiene 66 libros de géneros completamente distintos pero con un solo hilo: la redención. Tu trabajo también puede tener un hilo redentor único aunque lo que hacés parezca mundano. ¿Cuál es ese hilo en tu caso?',
      versiculo: { cita: 'Colosenses 3:23', texto: 'Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres.' },
    },
    fe: {
      accion: 'El 66 es la plenitud de la Revelación escrita. Hoy, elegí un libro de la Biblia que nunca leíste o que leíste hace mucho — y abrilo con la expectativa de encontrar algo nuevo. La Palabra siempre tiene más.',
      versiculo: { cita: 'Hebreos 4:12', texto: 'Porque la palabra de Dios es viva y eficaz, y más cortante que toda espada de dos filos.' },
    },
    decision: {
      accion: 'Antes de decidir, buscá en la Palabra. No para encontrar un versículo que justifique lo que ya querés hacer, sino para dejar que Dios hable con autoridad sobre la situación.',
      versiculo: { cita: 'Salmo 119:105', texto: 'Lámpara es a mis pies tu palabra, y lumbrera a mi camino.' },
    },
    sanacion: {
      accion: 'Los 66 libros incluyen Lamentaciones, Job, los Salmos de angustia — Dios no censuró el dolor de su pueblo. Tu dolor también tiene lugar en la Palabra. Hoy, buscá un salmo que nombre lo que sentís.',
      versiculo: { cita: 'Salmo 34:18', texto: 'Cercano está Jehová a los quebrantados de corazón; y salva a los contritos de espíritu.' },
    },
    autoconocimiento: {
      accion: '¿Qué tipo de libros bíblicos lees habitualmente y cuáles evitás? El 66 es completo — evitar partes de la Biblia suele revelar áreas de nuestra vida que no queremos que Dios toque.',
      versiculo: { cita: '2 Timoteo 3:16', texto: 'Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia.' },
    },
    default: {
      accion: 'Los 66 libros de la Biblia son la Palabra completa de Dios: sin que sobre ni falte nada. Hoy, acercate a la Escritura con hambre — hay algo específico para vos en ella.',
      versiculo: { cita: 'Hebreos 4:12', texto: 'Porque la palabra de Dios es viva y eficaz, y más cortante que toda espada de dos filos.' },
    },
  },

  72: {
    relaciones: {
      accion: 'Jesús envió a los 72 de dos en dos — la misión es relacional por diseño. ¿Con quién podrías hacer hoy algo que tenga impacto en otros? El 72 llama a ir en equipo, no solo.',
      versiculo: { cita: 'Lucas 10:1', texto: 'Después de estas cosas, designó el Señor también a otros setenta, a quienes envió de dos en dos delante de él.' },
    },
    trabajo: {
      accion: 'Los 72 volvieron con gozo: "hasta los demonios se nos sujetan". El trabajo hecho en misión produce un gozo diferente al trabajo hecho por obligación. ¿Cuál es la dimensión misionera de lo que hacés hoy?',
      versiculo: { cita: 'Lucas 10:17', texto: 'Entonces los setenta regresaron con gozo, diciendo: Señor, aun los demonios se nos sujetan en tu nombre.' },
    },
    fe: {
      accion: 'Jesús los envió a ciudades donde Él mismo iba a ir después. No te mandó a preparar el camino para otro — te mandó a preparar el camino para que Él llegue. Tu misión es abrir puertas para que Jesús entre.',
      versiculo: { cita: 'Lucas 10:1', texto: 'a toda ciudad y lugar adonde él había de ir.' },
    },
    decision: {
      accion: 'Los 72 recibieron instrucciones claras antes de salir: qué llevar, qué hacer, qué decir. Antes de tu próxima acción, preguntale a Jesús el "briefing": ¿qué me mandás hacer exactamente en esta situación?',
      versiculo: { cita: 'Juan 5:19', texto: 'No puede el Hijo hacer nada por sí mismo, sino lo que ve hacer al Padre.' },
    },
    sanacion: {
      accion: 'Los 72 sanaron enfermos en el nombre de Jesús — no en el propio. Si estás buscando sanación, la fuente no es vos, es Él. Alejate del autoayuda y acercate al nombre que tiene autoridad real.',
      versiculo: { cita: 'Lucas 10:9', texto: 'Y sanad a los enfermos que en ella haya, y decidles: Se ha acercado a vosotros el reino de Dios.' },
    },
    autoconocimiento: {
      accion: '¿Te ves a vos mismo como alguien enviado? El 72 muestra que Jesús no envió solo a los doce — la misión es para todos sus seguidores. Preguntate honestamente: ¿estoy viviendo como enviado o como espectador?',
      versiculo: { cita: 'Juan 20:21', texto: 'Como me envió el Padre, así también yo os envío.' },
    },
    default: {
      accion: 'Los 72 enviados por Jesús volvieron con gozo porque fueron en su nombre. Hoy, hacé algo — por pequeño que sea — como representante de Jesús, no por tu propio esfuerzo.',
      versiculo: { cita: 'Lucas 10:17', texto: 'Entonces los setenta regresaron con gozo, diciendo: Señor, aun los demonios se nos sujetan en tu nombre.' },
    },
  },

  120: {
    relaciones: {
      accion: 'Los 120 del aposento alto no esperaron solos — esperaron juntos. La plenitud antes del derramamiento requiere comunidad. ¿Con quién estás esperando, orando y creyendo en este tiempo de espera?',
      versiculo: { cita: 'Hechos 1:14', texto: 'Todos éstos perseveraban unánimes en oración y ruego, con las mujeres, y con María la madre de Jesús.' },
    },
    trabajo: {
      accion: 'Los 120 no salieron a hacer el trabajo antes del derramamiento — primero esperaron la unción. ¿Hay algo en tu trabajo que estás haciendo con fuerzas propias y que necesita primero ser ungido? Pará, esperá, pedí.',
      versiculo: { cita: 'Zacarías 4:6', texto: 'No con ejército, ni con fuerza, sino con mi Espíritu, ha dicho Jehová de los ejércitos.' },
    },
    fe: {
      accion: 'El aposento alto tenía 120 personas — un número completo para dar testimonio legal en Israel. Dios organizó los detalles. Confiá hoy en que Él también organizó los detalles de tu situación aunque no los veas.',
      versiculo: { cita: 'Hechos 1:15', texto: 'En aquellos días Pedro se levantó en medio de los hermanos (y los reunidos eran como ciento veinte en número).' },
    },
    decision: {
      accion: 'Los 120 no decidieron cuándo llegar el Espíritu — esperaron el tiempo de Dios. Hay decisiones que requieren esperar la "llenura" antes de actuar. ¿Estás lo suficientemente lleno del Espíritu para tomar esta decisión hoy?',
      versiculo: { cita: 'Hechos 2:1', texto: 'Cuando llegó el día de Pentecostés, estaban todos unánimes juntos.' },
    },
    sanacion: {
      accion: 'Después del trauma de la crucifixión y la confusión de la resurrección, los 120 encontraron sanación en la espera comunitaria. Si estás herido, el aposento alto también es para vos: comunidad + oración + expectativa.',
      versiculo: { cita: 'Hechos 1:14', texto: 'Todos éstos perseveraban unánimes en oración y ruego.' },
    },
    autoconocimiento: {
      accion: '¿Sos de los que esperan bien o de los que se impacientan cuando Dios no actúa en sus tiempos? Los 120 esperaron 10 días después de la ascensión. ¿Cuánto tiempo podés esperar confiado antes de impacientarte?',
      versiculo: { cita: 'Santiago 5:7', texto: 'El labrador espera el precioso fruto de la tierra, aguardando con paciencia hasta que reciba la lluvia temprana y la tardía.' },
    },
    default: {
      accion: 'Los 120 del aposento alto esperaron juntos hasta la plenitud del Espíritu. Hoy, esperá con expectativa: lo que viene después de la espera vale más que lo que tenés ahora.',
      versiculo: { cita: 'Hechos 2:1', texto: 'Cuando llegó el día de Pentecostés, estaban todos unánimes juntos.' },
    },
  },

  144: {
    relaciones: {
      accion: 'Los 144,000 sellados en Apocalipsis muestran que Dios no olvida a ninguno de los suyos — 12,000 de cada tribu, nadie sin cobertura. ¿Hay alguien en tu vida que se sienta olvidado o sin protección? Sé hoy señal de la cobertura de Dios.',
      versiculo: { cita: 'Apocalipsis 7:4', texto: 'Y oí el número de los sellados: ciento cuarenta y cuatro mil sellados de todas las tribus de los hijos de Israel.' },
    },
    trabajo: {
      accion: 'El sello de los 144 es protección divina en medio del caos. Trabajá hoy con la seguridad de alguien sellado por Dios — no con ansiedad por los resultados sino con la confianza de quien tiene cobertura sobrenatural.',
      versiculo: { cita: 'Efesios 1:13', texto: 'En él también vosotros, habiendo oído la palabra de verdad, el evangelio de vuestra salvación, y habiendo creído en él, fuisteis sellados con el Espíritu Santo de la promesa.' },
    },
    fe: {
      accion: 'El 144 (12×12) es la estructura perfecta del pueblo de Dios — orden divino completo. Tu fe no es caótica: hay una estructura que Dios diseñó. Confiá hoy en que estás exactamente donde Él planeó que estuvieras.',
      versiculo: { cita: 'Efesios 2:10', texto: 'Somos hechura suya, creados en Cristo Jesús para buenas obras, las cuales Dios preparó de antemano para que anduviésemos en ellas.' },
    },
    decision: {
      accion: 'El sello divino precede a la tribulación en Apocalipsis — la protección viene antes del desafío. Antes de entrar en una situación difícil, recibí primero la cobertura de Dios en oración. Sé intencional con eso hoy.',
      versiculo: { cita: 'Juan 17:15', texto: 'No ruego que los quites del mundo, sino que los guardes del mal.' },
    },
    sanacion: {
      accion: 'Ser sellado significa: identificado, protegido, perteneciente. Si tu herida viene del rechazo o del abandono, el sello del 144 dice lo opuesto: sos conocido, sos cubierto, sos de Él. Deja que esa verdad entre hoy.',
      versiculo: { cita: 'Isaías 43:1', texto: 'No temas, porque yo te redimí; te puse nombre, mío eres tú.' },
    },
    autoconocimiento: {
      accion: '¿Te sentís más identificado con los que "llegaron" o con los que todavía no? El 144 muestra que Dios conoce a los suyos por nombre y tribu. Vos también tenés un lugar específico en su plan — no genérico, específico.',
      versiculo: { cita: 'Juan 10:3', texto: 'El portero le abre, y las ovejas oyen su voz; y a sus ovejas llama por nombre, y las saca.' },
    },
    default: {
      accion: 'Los 144 sellados muestran que Dios protege y conoce a cada uno de los suyos. Hoy, confiá en que tu nombre también está en ese registro — sellado, conocido, cubierto.',
      versiculo: { cita: 'Efesios 1:13', texto: 'Fuisteis sellados con el Espíritu Santo de la promesa.' },
    },
  },

  153: {
    relaciones: {
      accion: 'Los 153 peces en la red que no se rompió muestran que la comunidad que Dios teje puede sostener mucho más de lo que parece. Invertí hoy en una relación que parezca "demasiado" — Dios la puede sostener.',
      versiculo: { cita: 'Juan 21:11', texto: 'Simón Pedro subió y sacó la red a tierra, llena de grandes peces, ciento cincuenta y tres; y aun siendo tantos, la red no se rompió.' },
    },
    trabajo: {
      accion: 'Los discípulos trabajaron toda la noche sin resultado, y a la mañana siguiente, con una sola palabra de Jesús, la red se llenó. ¿Estás trabajando de noche o de mañana? ¿Estás siguiendo tu estrategia o la de Él?',
      versiculo: { cita: 'Juan 21:6', texto: 'Y él les dijo: Echad la red a la derecha de la barca, y hallaréis. Entonces la echaron, y ya no la podían sacar, por la gran cantidad de peces.' },
    },
    fe: {
      accion: 'La red no se rompió con 153 peces — símbolo de que la misión de Cristo puede cargar con todos los que Él atrae. Tu fe tampoco se rompe bajo el peso de lo que Dios deposita en ella. Confiá en la red.',
      versiculo: { cita: 'Juan 21:11', texto: 'y aun siendo tantos, la red no se rompió.' },
    },
    decision: {
      accion: 'Pedro dudó la noche antes pero obedeció por la mañana. Antes de decidir, preguntate: ¿estoy en el ciclo de la noche (esfuerzo propio sin fruto) o en el de la mañana (obediencia simple a la voz de Cristo)?',
      versiculo: { cita: 'Juan 21:3-6', texto: 'Respondióles Pedro: Voy a pescar. Ellos le dijeron: Vamos nosotros también contigo... y aquella noche no pescaron nada.' },
    },
    sanacion: {
      accion: 'La escena del 153 ocurre después de la traición de Pedro — Jesús le dio trabajo antes de darle el perdón verbal. A veces la restauración viene en el hacer, no en el sentir. ¿Qué "red" podés echar hoy aunque no te sientas restaurado del todo?',
      versiculo: { cita: 'Juan 21:15', texto: 'Cuando hubieron comido, Jesús dijo a Simón Pedro: Simón, hijo de Jonás, ¿me amas más que éstos?' },
    },
    autoconocimiento: {
      accion: '¿Cuántas veces en tu vida "pescaste de noche" — con esfuerzo propio sin resultados — antes de ceder el control? El 153 invita a identificar ese patrón y acortarlo cada vez más.',
      versiculo: { cita: 'Proverbios 3:5', texto: 'Confía en Jehová con todo tu corazón, y no te apoyes en tu propia prudencia.' },
    },
    default: {
      accion: 'Los 153 peces y la red que no se rompió muestran que la obediencia a la voz de Cristo produce abundancia imposible con solo esfuerzo humano. Hoy, echá la red donde Él dice.',
      versiculo: { cita: 'Juan 21:6', texto: 'Echad la red a la derecha de la barca, y hallaréis.' },
    },
  },

  200: {
    relaciones: {
      accion: 'Los discípulos calcularon 200 denarios como imposible para alimentar a la multitud — y Jesús los multiplicó de otra forma. Frente a la relación que parece demasiado costosa o difícil, preguntale a Dios qué tiene Él que vos no estás viendo.',
      versiculo: { cita: 'Juan 6:9', texto: 'Aquí está un muchacho, que tiene cinco panes de cebada y dos pececillos; mas ¿qué es esto para tantos?' },
    },
    trabajo: {
      accion: 'La insuficiencia del 200 es el punto de partida del milagro, no su obstáculo. En tu trabajo, lo que parece imposible con tus recursos es exactamente el lugar donde Dios puede mostrar su capacidad. Decile tu "no me alcanza" hoy.',
      versiculo: { cita: 'Juan 6:7', texto: 'Felipe le respondió: Doscientos denarios de pan no bastarían para que cada uno de ellos tomase un poco.' },
    },
    fe: {
      accion: 'Fe no es fingir que alcanza cuando no alcanza — es traerle a Dios honestamente lo que tenés (cinco panes y dos peces) y confiar en que Él lo multiplique. Presentale hoy lo que tenés, no lo que deberías tener.',
      versiculo: { cita: 'Juan 6:11', texto: 'Y Jesús tomó aquellos panes, y habiendo dado gracias, los repartió entre los discípulos.' },
    },
    decision: {
      accion: 'Los discípulos decidieron sobre la base de sus recursos: "no alcanza". Jesús decidió sobre otra base. Antes de decidir "no se puede", preguntate qué cambiaría si Dios también está en la ecuación.',
      versiculo: { cita: 'Mateo 19:26', texto: 'Para los hombres esto es imposible; mas para Dios todo es posible.' },
    },
    sanacion: {
      accion: 'El 200 habla de la insuficiencia que clama a Dios. Si te sentís insuficiente — como persona, como padre, como creyente — ese sentimiento puede ser el inicio de un encuentro real con Él. Clamá desde la insuficiencia, no desde la vergüenza.',
      versiculo: { cita: '2 Corintios 12:9', texto: 'Y me ha dicho: Bástate mi gracia; porque mi poder se perfecciona en la debilidad.' },
    },
    autoconocimiento: {
      accion: '¿Cuánto depende tu autoestima de "ser suficiente"? El 200 muestra que el punto de partida del milagro es la insuficiencia reconocida — no la ocultada. ¿Qué estás ocultando que en realidad no alcanza?',
      versiculo: { cita: '2 Corintios 12:9', texto: 'Por tanto, de buena gana me gloriaré más bien en mis debilidades, para que repose sobre mí el poder de Cristo.' },
    },
    default: {
      accion: 'Los 200 denarios imposibles fueron el escenario del milagro de la multiplicación. Hoy, en lugar de calcular tus limitaciones, presentáselas a Dios como el punto de partida.',
      versiculo: { cita: 'Mateo 19:26', texto: 'Para los hombres esto es imposible; mas para Dios todo es posible.' },
    },
  },

  390: {
    relaciones: {
      accion: 'Los 390 días de Ezequiel representan ciclos de pecado colectivo que se interrumpen por la intervención de Dios. En tus relaciones, ¿hay patrones generacionales de herida o pecado que se repiten? Orá hoy para que ese ciclo sea el último.',
      versiculo: { cita: 'Ezequiel 4:4-5', texto: 'Y tú te acostarás sobre tu lado izquierdo, y pondrás sobre él la maldad de la casa de Israel... trescientos noventa días llevarás la maldad de la casa de Israel.' },
    },
    trabajo: {
      accion: 'Los ciclos largos de Ezequiel muestran que algunas situaciones requieren tiempo para resolverse completamente. Si estás en un proceso largo y agotador, recordá que Dios no pide que lo resuelvas vos — pide que lo sostengas con Él.',
      versiculo: { cita: 'Gálatas 6:9', texto: 'No nos cansemos, pues, de hacer bien; porque a su tiempo segaremos, si no desmayamos.' },
    },
    fe: {
      accion: 'Ezequiel cargó el pecado del pueblo en su propio cuerpo durante 390 días — imagen profética de lo que Cristo haría definitivamente. Hoy, medita en la carga que Cristo llevó para que vos no la tuvieras que cargar.',
      versiculo: { cita: 'Isaías 53:4', texto: 'Ciertamente llevó él nuestras enfermedades, y sufrió nuestros dolores.' },
    },
    decision: {
      accion: 'El ciclo del 390 puede interrumpirse. No tenés que repetir los patrones que heredaste o que construiste. Esta decisión puede ser el punto de quiebre — si la tomás diferente de como la tomaste antes.',
      versiculo: { cita: 'Romanos 12:2', texto: 'No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento.' },
    },
    sanacion: {
      accion: 'Los ciclos de 390 se interrumpen — eso es lo que muestra el texto. Tu ciclo de herida, vergüenza o fracaso también puede interrumpirse. No por tu voluntad sola, sino por la intervención de Dios que Ezequiel profetizó.',
      versiculo: { cita: 'Joel 2:25', texto: 'Y os restituiré los años que comió la oruga, el saltón, el revoltón y la langosta.' },
    },
    autoconocimiento: {
      accion: '¿Podés identificar patrones en tu vida que se repiten con pequeñas variaciones? El 390 es la invitación a reconocer esos ciclos, nombrarlos, y entregarlos conscientemente a Dios para que los interrumpa.',
      versiculo: { cita: 'Lamentaciones 3:40', texto: 'Escudriñemos nuestros caminos, y busquemos, y volvámonos a Jehová.' },
    },
    default: {
      accion: 'Los 390 días de Ezequiel representan ciclos largos de pecado que Dios puede interrumpir. Hoy, entregá a Dios el ciclo que más necesita ser cortado en tu vida.',
      versiculo: { cita: 'Joel 2:25', texto: 'Y os restituiré los años que comió la oruga, el saltón, el revoltón y la langosta.' },
    },
  },

  430: {
    relaciones: {
      accion: 'Los 430 años de esclavitud en Egipto terminaron exactamente el día prometido. Si llevás mucho tiempo esperando que una relación cambie, recordá: el tiempo de Dios es exacto, no aproximado.',
      versiculo: { cita: 'Éxodo 12:41', texto: 'Y pasados los cuatrocientos treinta años, en el mismo día salieron todos los ejércitos de Jehová de la tierra de Egipto.' },
    },
    trabajo: {
      accion: 'El Éxodo ocurrió exactamente el día 430 — ni un día antes ni uno después. Lo que parece tardanza en tu trabajo no es retraso de Dios: tiene un día exacto de cumplimiento. Trabajá hoy con esa expectativa.',
      versiculo: { cita: 'Habacuc 2:3', texto: 'Aunque la visión tardará aún por un tiempo, mas se apresura hacia el fin, y no mentirá; aunque tarde, espéralo.' },
    },
    fe: {
      accion: 'Pablo cita los 430 años en Gálatas 3 para mostrar que la Ley no puede anular la promesa hecha a Abraham. Lo que Dios prometió antes de tus fracasos sigue vigente. La promesa no venció.',
      versiculo: { cita: 'Gálatas 3:17', texto: 'Y esto digo: el pacto previamente ratificado por Dios... la ley que vino cuatrocientos treinta años después, no lo abroga.' },
    },
    decision: {
      accion: 'El día exacto del 430 requirió que Israel estuviera listo para moverse. ¿Estás preparado para cuando Dios diga "ahora"? La preparación en la espera no es activismo — es disposición.',
      versiculo: { cita: 'Éxodo 12:11', texto: 'Y lo comeréis así: con vuestros lomos ceñidos, vuestro calzado en vuestros pies, y vuestro bordón en vuestra mano.' },
    },
    sanacion: {
      accion: '430 años de esclavitud dejaron heridas profundas en el pueblo — y Dios no los sacó sanados, los sacó para sanarlos en el camino. Tu sanación también puede empezar antes de que la situación se resuelva.',
      versiculo: { cita: 'Salmo 107:20', texto: 'Envió su palabra, y los sanó, y los libró de su ruina.' },
    },
    autoconocimiento: {
      accion: '¿Qué "Egipto" llevas mucho tiempo habitando que ya no reconocés como cautiverio? A veces la esclavitud más larga es la que se volvió familiar. El 430 te llama a identificar lo que normalizaste como "así son las cosas".',
      versiculo: { cita: 'Juan 8:36', texto: 'Así que, si el Hijo os libertare, seréis verdaderamente libres.' },
    },
    default: {
      accion: 'Los 430 años del Éxodo terminaron exactamente el día prometido. Confiá en que el tiempo exacto de Dios llegará — ni un día tarde.',
      versiculo: { cita: 'Éxodo 12:41', texto: 'Y pasados los cuatrocientos treinta años, en el mismo día salieron todos los ejércitos de Jehová.' },
    },
  },

  490: {
    relaciones: {
      accion: 'Setenta veces siete — 490 — es el número del perdón sin límite de Mateo 18. Si llevas la cuenta de cuántas veces perdonaste a alguien, ese conteo es la señal de que todavía no perdonaste como Dios perdonó.',
      versiculo: { cita: 'Mateo 18:22', texto: 'Jesús le dijo: No te digo hasta siete, sino aun hasta setenta veces siete.' },
    },
    trabajo: {
      accion: 'El perdón de 490 también aplica a los errores propios. ¿Cuántos de tus fracasos laborales pasados todavía cargás como deuda? El 490 dice: la cuenta está cancelada. Operá desde cero, no desde el déficit acumulado.',
      versiculo: { cita: 'Filipenses 3:13', texto: 'Olvidando ciertamente lo que queda atrás, y extendiéndome a lo que está delante.' },
    },
    fe: {
      accion: 'Las 70 semanas de Daniel (490 años) terminan en Cristo — el tiempo completo de la redención. Todo el tiempo de la historia caminó hacia la cruz. Hoy, meditate en que vivís del otro lado de ese cumplimiento: la deuda ya fue pagada.',
      versiculo: { cita: 'Daniel 9:24', texto: 'Setenta semanas están determinadas sobre tu pueblo... para expiar la iniquidad, para traer la justicia perdurable.' },
    },
    decision: {
      accion: 'Antes de decidir cómo responder a alguien que te lastimó, preguntate: ¿estoy en el ciclo del perdón (490) o en el ciclo del cálculo? Las decisiones desde el perdón sueltan; las del cálculo encadenan.',
      versiculo: { cita: 'Efesios 4:32', texto: 'Antes sed benignos unos con otros, misericordiosos, perdonándoos unos a otros, como Dios también os perdonó a vosotros en Cristo.' },
    },
    sanacion: {
      accion: 'La falta de perdón es una de las mayores fuentes de herida interior. El 490 no es permiso para que el otro te lastime de nuevo — es libertad para que la herida deje de definirte. Perdonar es soltarte vos.',
      versiculo: { cita: 'Mateo 18:35', texto: 'Así también mi Padre celestial hará con vosotros si no perdonáis de todo corazón cada uno a su hermano sus ofensas.' },
    },
    autoconocimiento: {
      accion: '¿Llevas cuentas internas de las ofensas que recibiste? El 490 invita a honestidad brutal: el perdón no declarado — el que todavía tiene número — todavía no es perdón real.',
      versiculo: { cita: '1 Corintios 13:5', texto: 'No busca lo suyo, no se irrita, no guarda rencor.' },
    },
    default: {
      accion: 'Setenta veces siete — el perdón sin límite del 490. Hoy, en lugar de llevar cuentas, elegí la libertad del perdón que no calcula.',
      versiculo: { cita: 'Mateo 18:22', texto: 'Jesús le dijo: No te digo hasta siete, sino aun hasta setenta veces siete.' },
    },
  },

  600: {
    relaciones: {
      accion: 'Los 600 carros de Faraón que se hundieron representan el poder del opresor destruido. Si alguien en tu entorno ejerce control o intimidación sobre vos, recordá: el poder que te persigue tiene una orilla donde se acaba.',
      versiculo: { cita: 'Éxodo 14:28', texto: 'Y las aguas volvieron, y cubrieron los carros y la caballería, y todo el ejército de Faraón.' },
    },
    trabajo: {
      accion: 'Los 600 carros parecían garantía de derrota para Israel. La situación laboral que te aplasta hoy puede parecer lo mismo. La misma Mano que abrió el mar también puede hundirla. No renuncies antes del milagro.',
      versiculo: { cita: 'Éxodo 14:13', texto: 'No temáis; estad firmes, y ved la salvación que Jehová hará hoy con vosotros.' },
    },
    fe: {
      accion: 'Israel cantó después de cruzar — no antes. A veces la alabanza llega después de la salvación, no como fe anticipatoria sino como respuesta gozosa. Hoy, cantá algo — incluso si el milagro todavía no llegó.',
      versiculo: { cita: 'Éxodo 15:1', texto: 'Entonces cantó Moisés y los hijos de Israel este cántico a Jehová: Cantaré yo a Jehová, porque se ha magnificado grandemente.' },
    },
    decision: {
      accion: 'Israel estuvo "atrapado" entre el mar y los carros. En tu situación que parece sin salida, Dios puede abrir un camino donde vos solo ves obstáculos. Antes de decidir rendirte, esperá ver si hay un mar que se abre.',
      versiculo: { cita: 'Éxodo 14:15', texto: 'Y Jehová dijo a Moisés: ¿Por qué clamas a mí? Di a los hijos de Israel que marchen.' },
    },
    sanacion: {
      accion: 'El poder que te persiguió puede hundirse en el mar. Si cargás el miedo al "Faraón" de tu historia — la persona, el sistema, el trauma que te perseguía — traé ese miedo hoy a la orilla del mar de la gracia de Dios.',
      versiculo: { cita: 'Salmo 46:1', texto: 'Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones.' },
    },
    autoconocimiento: {
      accion: '¿De qué "Faraón" seguís huyendo que en realidad ya no tiene poder sobre vos? El 600 te llama a identificar los miedos a poderes ya derrotados que todavía gobiernan tus decisiones.',
      versiculo: { cita: 'Romanos 8:15', texto: 'Pues no habéis recibido el espíritu de esclavitud para estar otra vez en temor, sino que habéis recibido el espíritu de adopción.' },
    },
    default: {
      accion: 'Los 600 carros de Faraón se hundieron en el mar — el poder del opresor tiene un límite. Hoy, confiá en que lo que te persigue también tiene una orilla donde Dios lo detiene.',
      versiculo: { cita: 'Éxodo 14:13', texto: 'No temáis; estad firmes, y ved la salvación que Jehová hará hoy con vosotros.' },
    },
  },

  666: {
    relaciones: {
      accion: 'El 666 llama al discernimiento ante sistemas que reemplazan a Dios. ¿Hay personas en tu vida cuya influencia te lleva a alejarte de Dios en lugar de acercarte? No con juicio sino con claridad: identificala.',
      versiculo: { cita: '1 Juan 4:1', texto: 'Amados, no creáis a todo espíritu, sino probad los espíritus si son de Dios; porque muchos falsos profetas han salido por el mundo.' },
    },
    trabajo: {
      accion: 'El 666 habla del sistema del mundo que ofrece seguridad a cambio de lealtad total. ¿Tu trabajo te pide una lealtad que compite con tus valores centrales? El discernimiento es la herramienta, no el miedo.',
      versiculo: { cita: 'Mateo 6:24', texto: 'No podéis servir a Dios y a las riquezas.' },
    },
    fe: {
      accion: 'El número del 666 en Apocalipsis no es para generar terror sino para dar sabiduría y discernimiento. Hoy, pedile a Dios la capacidad de ver con claridad cuándo los sistemas del mundo intentan ocupar el lugar de Él.',
      versiculo: { cita: 'Apocalipsis 13:18', texto: 'Aquí hay sabiduría. El que tiene entendimiento, cuente el número de la bestia.' },
    },
    decision: {
      accion: 'El 666 señala decisiones que parecen sabias según el mundo pero que en realidad son lealtades al sistema del mundo. Antes de decidir hoy, preguntate: ¿esta decisión me acerca o me aleja de Dios?',
      versiculo: { cita: 'Santiago 4:4', texto: '¿No sabéis que la amistad del mundo es enemistad contra Dios?' },
    },
    sanacion: {
      accion: 'El miedo al 666 también puede ser una herida — una religiosidad que atemoriza en lugar de liberar. Si este número te genera más miedo que sabiduría, pedile a Dios que reemplace el terror con discernimiento y confianza.',
      versiculo: { cita: '2 Timoteo 1:7', texto: 'Porque no nos ha dado Dios espíritu de cobardía, sino de poder, de amor y de dominio propio.' },
    },
    autoconocimiento: {
      accion: '¿Qué sistemas de este mundo ejercen más control sobre tus decisiones de lo que reconocés? El 666 no invita al miedo paranoico sino al autoexamen honesto: ¿dónde le doy más autoridad al mundo que a Dios?',
      versiculo: { cita: 'Romanos 12:2', texto: 'No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento.' },
    },
    default: {
      accion: 'El 666 llama al discernimiento, no al miedo. Hoy, pedile a Dios sabiduría para reconocer qué sistemas o influencias intentan reemplazar su lugar en tu vida.',
      versiculo: { cita: 'Apocalipsis 13:18', texto: 'Aquí hay sabiduría. El que tiene entendimiento, cuente el número de la bestia.' },
    },
  },

  1000: {
    relaciones: {
      accion: 'Un día para Dios es como mil años — Él opera en una escala de tiempo completamente distinta a la nuestra. Tus relaciones también están en esa perspectiva eterna. Lo que parece urgente hoy puede no serlo desde la eternidad.',
      versiculo: { cita: '2 Pedro 3:8', texto: 'Mas, oh amados, no ignoréis esto: que para el Señor un día es como mil años, y mil años como un día.' },
    },
    trabajo: {
      accion: 'El 1000 de Dios relativiza el corto plazo sin invalidarlo. Lo que hacés hoy tiene valor eterno aunque no lo veas así. Hacé tu trabajo con perspectiva de eternidad: ¿qué de lo que hacés hoy importará en 100 años?',
      versiculo: { cita: 'Eclesiastés 3:11', texto: 'Todo lo hizo hermoso en su tiempo; y ha puesto eternidad en el corazón de ellos.' },
    },
    fe: {
      accion: 'El Reino del Milenio — los 1000 años de Apocalipsis — es la promesa del reinado completo de Cristo. Hoy, viví como ciudadano de ese reino que ya viene, no solo del que ya fue.',
      versiculo: { cita: 'Apocalipsis 20:6', texto: 'Bienaventurado y santo el que tiene parte en la primera resurrección. Reinarán con él mil años.' },
    },
    decision: {
      accion: 'La perspectiva de los 1000 años cambia qué se siente urgente. Antes de decidir sobre algo que parece urgentísimo hoy, preguntate: ¿esto importará en 5 años? ¿en 50? La respuesta cambia la decisión.',
      versiculo: { cita: 'Mateo 6:33', texto: 'Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas.' },
    },
    sanacion: {
      accion: 'La perspectiva eterna del 1000 no minimiza el dolor presente — lo ubica en un contexto más grande. Tu herida es real y Dios la ve. Y también hay un "después" que trasciende todo lo que estás viviendo ahora.',
      versiculo: { cita: 'Romanos 8:18', texto: 'Pues tengo por cierto que las aflicciones del tiempo presente no son comparables con la gloria venidera que en nosotros ha de manifestarse.' },
    },
    autoconocimiento: {
      accion: '¿Qué tan influenciado estás por la urgencia del corto plazo? El 1000 invita a calibrar tus prioridades con la perspectiva de eternidad — a preguntarte qué realmente importa cuando la historia llegue a su fin.',
      versiculo: { cita: 'Salmo 90:12', texto: 'Enséñanos de tal modo a contar nuestros días, que traigamos al corazón sabiduría.' },
    },
    default: {
      accion: 'Para Dios, mil años son como un día. El 1000 te invita a poner tu situación en perspectiva eterna — lo que parece urgente hoy puede no ser lo que realmente importa.',
      versiculo: { cita: '2 Pedro 3:8', texto: 'Para el Señor un día es como mil años, y mil años como un día.' },
    },
  },

  7000: {
    relaciones: {
      accion: 'Los 7000 que no doblaron rodilla ante Baal muestran que siempre hay un remanente fiel. En tu entorno, ¿quiénes son los 7000 — las personas que mantienen la fe cuando todos parecen haberse alejado? Buscalos y fortalecete con ellos.',
      versiculo: { cita: '1 Reyes 19:18', texto: 'Y yo haré que queden en Israel siete mil, cuyas rodillas no se encorvaron ante Baal.' },
    },
    trabajo: {
      accion: 'Elías creyó estar solo — y tenía 7000 compañeros sin saberlo. Si te sentís solo en tu trabajo o en tus valores, Dios puede tener un remanente que todavía no te mostró. Pedile que te lo revele.',
      versiculo: { cita: '1 Reyes 19:14', texto: 'He sido muy celoso por Jehová Dios de los ejércitos; y los hijos de Israel han dejado tu pacto... y sólo yo he quedado.' },
    },
    fe: {
      accion: 'El remanente de 7000 no era conocido ni reconocido — pero Dios lo sabía. Tu fe fiel, aunque invisible para el mundo, es conocida por Él. No necesitás ser visto para ser real.',
      versiculo: { cita: 'Romanos 11:4', texto: 'Me he reservado siete mil hombres, que no han doblado la rodilla delante de Baal.' },
    },
    decision: {
      accion: 'Elías tomó decisiones desde la soledad y la depresión — y Dios lo corrigió suavemente. Antes de decidir algo importante desde el agotamiento o el aislamiento, esperá que Dios te muestre el remanente que está con vos.',
      versiculo: { cita: '1 Reyes 19:5', texto: 'Y echándose debajo del enebro, se quedó dormido; y he aquí luego un ángel le tocó, y le dijo: Levántate, come.' },
    },
    sanacion: {
      accion: 'La depresión de Elías en el desierto es una de las escenas más humanas de toda la Biblia. Si te sentís agotado y solo, Dios trató a Elías con comida, descanso y compañía — no con un sermón. Hoy, pedile lo mismo.',
      versiculo: { cita: '1 Reyes 19:7', texto: 'El ángel de Jehová volvió la segunda vez, y lo tocó, diciendo: Levántate y come, porque largo camino te resta.' },
    },
    autoconocimiento: {
      accion: '¿Tenés tendencia al pensamiento de "soy el único que..." ? El 7000 de Elías revela ese patrón como una distorsión real. Identificá si tenés una narrativa de soledad que en realidad no corresponde a los hechos.',
      versiculo: { cita: '1 Reyes 19:18', texto: 'Y yo haré que queden en Israel siete mil, cuyas rodillas no se encorvaron ante Baal.' },
    },
    default: {
      accion: 'Cuando Elías creyó estar solo, había 7000 que no habían doblado rodilla. Nunca estás tan solo como parece — Dios siempre preserva un remanente fiel.',
      versiculo: { cita: 'Romanos 11:4', texto: 'Me he reservado siete mil hombres, que no han doblado la rodilla delante de Baal.' },
    },
  },

  12000: {
    relaciones: {
      accion: 'Los 12,000 de cada tribu en Apocalipsis 7 muestran que en el reino de Dios, nadie es olvidado — cada familia, cada origen, cada tribu representada. Si te sentís fuera de lugar en tu comunidad, el 12,000 dice: tenés tribu.',
      versiculo: { cita: 'Apocalipsis 7:5-8', texto: 'De la tribu de Judá, doce mil sellados. De la tribu de Rubén, doce mil sellados...' },
    },
    trabajo: {
      accion: 'El 12,000 habla de cada tribu con su aporte específico al conjunto. Tu trabajo, por técnico o rutinario que parezca, es la "tribu" que completa el cuerpo. Sin vos, falta algo que nadie más puede poner.',
      versiculo: { cita: '1 Corintios 12:22', texto: 'Antes bien los miembros del cuerpo que parecen más débiles, son los más necesarios.' },
    },
    fe: {
      accion: 'Cada tribu en el relato del 12,000 lleva su historia — victorias, fracasos, pecados conocidos. Dios los sellò a todos. Tu historia, con todo lo que incluye, no te descalifica del sello divino.',
      versiculo: { cita: 'Apocalipsis 7:4', texto: 'Y oí el número de los sellados: ciento cuarenta y cuatro mil sellados de todas las tribus.' },
    },
    decision: {
      accion: 'Cada tribu fue llamada por nombre — no en masa, sino individualmente. Antes de tomar esta decisión como "uno más entre muchos", recordá que Dios te llama por nombre y tribu. Tu decisión específica importa.',
      versiculo: { cita: 'Juan 10:3', texto: 'A sus ovejas llama por nombre, y las saca.' },
    },
    sanacion: {
      accion: 'Las tribus de Israel tenían historias muy distintas, algunas marcadas por traiciones profundas. Pero en el 12,000, todas están representadas. Tu historia particular, incluso la más difícil, tiene lugar en el plan de Dios.',
      versiculo: { cita: 'Isaías 43:1', texto: 'No temas, porque yo te redimí; te puse nombre, mío eres tú.' },
    },
    autoconocimiento: {
      accion: '¿De qué "tribu" te sentís parte? ¿Cuál es tu identidad de origen — familiar, cultural, espiritual — que Dios quiere usar? El 12,000 celebra la diversidad del pueblo de Dios, no la uniformidad.',
      versiculo: { cita: 'Apocalipsis 5:9', texto: 'con tu sangre nos has redimido para Dios, de todo linaje y lengua y pueblo y nación.' },
    },
    default: {
      accion: 'Los 12,000 de cada tribu muestran que nadie queda sin representación en el plan de Dios. Hoy, confiá en que tu historia, tu origen y tu tribu tienen lugar específico en el reino.',
      versiculo: { cita: 'Apocalipsis 7:4', texto: 'Y oí el número de los sellados: ciento cuarenta y cuatro mil sellados de todas las tribus.' },
    },
  },

  144000: {
    relaciones: {
      accion: 'Los 144,000 cantan un cántico que solo ellos pueden cantar — el de su experiencia redimida específica. Compartí hoy con alguien cercano algo de tu historia de redención personal. Nadie más puede cantarlo como vos.',
      versiculo: { cita: 'Apocalipsis 14:3', texto: 'Y cantaban un cántico nuevo delante del trono... y nadie podía aprender el cántico sino aquellos ciento cuarenta y cuatro mil.' },
    },
    trabajo: {
      accion: 'Los 144,000 son llamados "primicias" — los primeros frutos que anticipan la cosecha completa. Tu trabajo fiel hoy es primicia: un anticipo del mundo que viene, sembrado en el que existe.',
      versiculo: { cita: 'Apocalipsis 14:4', texto: 'Estos son los que siguen al Cordero por dondequiera que va. Estos fueron redimidos de entre los hombres como primicias para Dios.' },
    },
    fe: {
      accion: 'El cántico del 144,000 no puede ser aprendido — solo vivido. Tu testimonio de fe tampoco puede ser copiado. La forma específica en que Dios te rescató, formó y usó es única. Hoy, agradecé esa singularidad.',
      versiculo: { cita: 'Apocalipsis 14:3', texto: 'nadie podía aprender el cántico sino aquellos ciento cuarenta y cuatro mil que fueron redimidos de entre la tierra.' },
    },
    decision: {
      accion: 'Los 144,000 "siguen al Cordero por dondequiera que va" — su decisión central ya está tomada: irán donde Él vaya. Antes de tu decisión de hoy, preguntate si va en la misma dirección que el Cordero.',
      versiculo: { cita: 'Apocalipsis 14:4', texto: 'Estos son los que siguen al Cordero por dondequiera que va.' },
    },
    sanacion: {
      accion: 'Los 144,000 son llamados "sin mancha" — no porque nunca fallaron sino porque fueron redimidos completamente. Lo que te hace sentir manchado hoy no tiene la última palabra. El Cordero tiene la última palabra.',
      versiculo: { cita: 'Apocalipsis 14:5', texto: 'Y en sus bocas no fue hallada mentira, pues son sin mancha delante del trono de Dios.' },
    },
    autoconocimiento: {
      accion: '¿Cuál es el cántico único que solo vos podés cantar? ¿Cuál es la historia de redención que Dios escribió en tu vida y que nadie más tiene? Tomá un tiempo hoy para escribirla o contarla — aunque sea solo para vos.',
      versiculo: { cita: 'Apocalipsis 14:3', texto: 'Y cantaban un cántico nuevo delante del trono... nadie podía aprender el cántico sino aquellos.' },
    },
    default: {
      accion: 'Los 144,000 redimidos cantan un cántico que solo ellos pueden cantar. Tu historia de redención es única — nadie más tiene la tuya. Hoy, valorá el cántico específico que Dios puso en tu vida.',
      versiculo: { cita: 'Apocalipsis 14:4', texto: 'Estos fueron redimidos de entre los hombres como primicias para Dios y para el Cordero.' },
    },
  },
}

const FALLBACK_ACCION: AccionDiaria = {
  accion: 'Tomá un momento de silencio hoy y preguntale a Dios una sola cosa: "¿Qué querés que haga hoy?" Escuchá la respuesta antes de actuar. La Palabra viva habla a quienes están dispuestos a escuchar.',
  versiculo: { cita: 'Salmo 32:8', texto: 'Te haré entender, y te enseñaré el camino en que debes andar; sobre ti fijaré mis ojos.' },
}

export function getAccionDiaria(numero: number, area?: string | null): AccionDiaria {
  const porNumero = ACCIONES[numero]
  if (!porNumero) return FALLBACK_ACCION

  if (area) {
    const accionPorArea = porNumero[area as keyof AccionesPorArea]
    if (accionPorArea) return accionPorArea as AccionDiaria
  }

  return porNumero.default
}
