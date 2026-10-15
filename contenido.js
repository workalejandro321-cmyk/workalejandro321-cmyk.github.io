/*
  ============================================================
  CONTENIDO DEL PORTAFOLIO DE ALEJANDRO SALAZAR
  ============================================================
  Este es el ÚNICO archivo que necesitas editar para actualizar la página.
  La página se arma sola a partir de lo que escribas aquí.

  REGLAS RÁPIDAS
  - Cada texto tiene dos versiones: "es" (español) y "en" (inglés).
  - Escribe siempre entre comillas dobles: "así".
  - Separa cada elemento de una lista con una coma.
  - Si algo deja de funcionar, revisa que no falte una coma o una comilla.

  AGREGAR UN VIDEO NUEVO A UN PROYECTO
  1. Sube el video a la carpeta "videos" (MP4, máximo 25 MB).
  2. Sube su portada a la carpeta "portadas" (JPG).
  3. Copia uno de los bloques { "video": ... } de abajo, pégalo en la lista
     "videos" del proyecto y cambia los nombres de archivo y los textos.
     "formato" puede ser "9:16" (vertical), "1:1" (cuadrado) o "16:9" (horizontal).

  AGREGAR UN PROYECTO NUEVO
  Copia un bloque completo de "proyectos" (desde { "nombre" hasta su } final),
  pégalo donde quieras que aparezca y cambia el contenido.
  Si un proyecto no tiene enlaces, deja: "enlaces": []
  Si no tiene resultado con cifras, borra la línea "resultado".
  ============================================================
*/
window.CONTENIDO = {
  "perfil": {
    "nombre": "Alejandro Salazar",
    "cargo": {
      "es": "Productor y Editor audiovisual profesional",
      "en": "Professional Video Producer & Editor"
    },
    "foto": "img/foto.jpg",
    "correo": "work.alejandro321@gmail.com",
    "whatsapp": "573218969002",
    "telefonoVisible": "+57 321 896 9002"
  },
  "portada": {
    "titulo": {
      "es": "Cada corte tiene un propósito.",
      "en": "Every cut has a purpose."
    },
    "subtitulo": {
      "es": "Produzco y edito video para marcas de Colombia y Estados Unidos. Reels, anuncios, VSL y video de marca, construidos para retener la atención y mover resultados.",
      "en": "I produce and edit video for brands in the United States and Latin America. Reels, ads, VSLs and brand films, built to hold attention and drive results."
    },
    "franja": [
      "portadas/avjet2.jpg",
      "portadas/corte1.jpg",
      "portadas/uncle2.jpg",
      "portadas/eye4.jpg",
      "portadas/child1.jpg",
      "portadas/somos2.jpg",
      "portadas/fdg2.jpg",
      "portadas/avjet6.jpg"
    ]
  },
  "resultados": [
    {
      "cifra": {
        "es": "1,58 millones",
        "en": "1.58 million"
      },
      "texto": {
        "es": "de vistas en TikTok para Avjet Global.",
        "en": "TikTok views for Avjet Global."
      }
    },
    {
      "cifra": {
        "es": "$1.200 millones",
        "en": "~USD 300K"
      },
      "texto": {
        "es": "en ventas en tres meses con los anuncios de SOMOS.",
        "en": "in sales in three months from SOMOS video ads."
      }
    },
    {
      "cifra": {
        "es": "De 1.000 a 11.000",
        "en": "From 1,000 to 11,000"
      },
      "texto": {
        "es": "seguidores en un año para SOMOS.",
        "en": "followers in one year for SOMOS."
      }
    }
  ],
  "trabajo": {
    "titulo": {
      "es": "Trabajo seleccionado",
      "en": "Selected work"
    },
    "intro": {
      "es": "Dale play a cualquier pieza. Todo lo que ves aquí lo produje o lo edité.",
      "en": "Press play on any piece. Everything here was produced or edited by me."
    }
  },
  "proyectos": [
    {
      "nombre": {
        "es": "Avjet Global",
        "en": "Avjet Global"
      },
      "contexto": {
        "es": "Bróker de jets privados, Los Ángeles. Con El Enclave.",
        "en": "Private jet broker, Los Angeles. With El Enclave."
      },
      "gancho": {
        "es": "La aviación privada, a un scroll de distancia.",
        "en": "Private aviation, one scroll away."
      },
      "descripcion": {
        "es": "Quince meses de edición continua: recorridos de aeronaves, comparativas y piezas con vocero para Instagram y TikTok.",
        "en": "Fifteen months of continuous editing: aircraft walkthroughs, comparisons and spokesperson pieces for Instagram and TikTok."
      },
      "resultado": {
        "es": "1,58 M de vistas en TikTok con 6,26 % de interacción. Solo en julio de 2026: 1,17 M de impresiones y 3.322 seguidores nuevos, sin pauta.",
        "en": "1.58M TikTok views at a 6.26% engagement rate. In July 2026 alone: 1.17M impressions and 3,322 new followers, fully organic."
      },
      "enlaces": [
        {
          "texto": {
            "es": "Ver la cuenta",
            "en": "View the account"
          },
          "url": "https://www.instagram.com/avjetglobal/"
        }
      ],
      "videos": [
        {
          "video": "videos/avjet6.mp4",
          "portada": "portadas/avjet6.jpg",
          "formato": "9:16",
          "etiqueta": {
            "es": "Vocero a cámara",
            "en": "Spokesperson on camera"
          },
          "descripcion": {
            "es": "Avjet Global, vocero",
            "en": "Avjet Global, spokesperson"
          }
        },
        {
          "video": "videos/avjet2.mp4",
          "portada": "portadas/avjet2.jpg",
          "formato": "9:16",
          "etiqueta": {
            "es": "Recorrido de aeronave",
            "en": "Aircraft walkthrough"
          },
          "descripcion": {
            "es": "Avjet Global, recorrido BBJ 2",
            "en": "Avjet Global, BBJ 2 walkthrough"
          }
        },
        {
          "video": "videos/avjet3.mp4",
          "portada": "portadas/avjet3.jpg",
          "formato": "9:16",
          "etiqueta": {
            "es": "Pieza aspiracional",
            "en": "Aspirational piece"
          },
          "descripcion": {
            "es": "Avjet Global, pieza aspiracional",
            "en": "Avjet Global, aspirational piece"
          }
        },
        {
          "video": "videos/avjet1.mp4",
          "portada": "portadas/avjet1.jpg",
          "formato": "9:16",
          "etiqueta": {
            "es": "Highlight",
            "en": "Highlight"
          },
          "descripcion": {
            "es": "Avjet Global, highlight",
            "en": "Avjet Global, highlight"
          }
        },
        {
          "video": "videos/avjet4.mp4",
          "portada": "portadas/avjet4.jpg",
          "formato": "9:16",
          "etiqueta": {
            "es": "Comparativa",
            "en": "Comparison"
          },
          "descripcion": {
            "es": "Avjet Global, comparativa",
            "en": "Avjet Global, comparison"
          }
        },
        {
          "video": "videos/avjet5.mp4",
          "portada": "portadas/avjet5.jpg",
          "formato": "9:16",
          "etiqueta": {
            "es": "Pieza corta",
            "en": "Short piece"
          },
          "descripcion": {
            "es": "Avjet Global, pieza corta",
            "en": "Avjet Global, short piece"
          }
        }
      ]
    },
    {
      "nombre": {
        "es": "SOMOS",
        "en": "SOMOS"
      },
      "contexto": {
        "es": "Academia de liderazgo, Colombia. Con Fanero.",
        "en": "Leadership academy, Colombia. With Fanero."
      },
      "gancho": {
        "es": "De anuncios estancados a $1.200 millones en ventas.",
        "en": "From stalled ads to ~USD 300K in sales."
      },
      "descripcion": {
        "es": "Desde la edición rediseñamos el creativo: ganchos, ritmo y llamados a la acción probados de forma sistemática en Meta Ads. También edité su contenido orgánico y el VSL de su diplomado.",
        "en": "We rebuilt the creative from the edit: hooks, pacing and calls to action tested systematically on Meta Ads. I also edited their organic content and the VSL for their program."
      },
      "resultado": {
        "es": "$1.200 M COP en ventas en tres meses de campaña y de 1.000 a 11.000 seguidores en un año.",
        "en": "COP 1.2 billion (~USD 300K) in sales over a three-month campaign, and growth from 1,000 to 11,000 followers in one year."
      },
      "enlaces": [
        {
          "texto": {
            "es": "Ver la cuenta",
            "en": "View the account"
          },
          "url": "https://www.instagram.com/s_o_m_o_s_/"
        }
      ],
      "videos": [
        {
          "video": "videos/somos1.mp4",
          "portada": "portadas/somos1.jpg",
          "formato": "1:1",
          "etiqueta": {
            "es": "Anuncio para Meta Ads",
            "en": "Meta Ads creative"
          },
          "descripcion": {
            "es": "SOMOS, anuncio 1",
            "en": "SOMOS, ad 1"
          }
        },
        {
          "video": "videos/somos2.mp4",
          "portada": "portadas/somos2.jpg",
          "formato": "9:16",
          "etiqueta": {
            "es": "Anuncio para Meta Ads",
            "en": "Meta Ads creative"
          },
          "descripcion": {
            "es": "SOMOS, anuncio 2",
            "en": "SOMOS, ad 2"
          }
        },
        {
          "video": "videos/somos3.mp4",
          "portada": "portadas/somos3.jpg",
          "formato": "9:16",
          "etiqueta": {
            "es": "Orgánico",
            "en": "Organic"
          },
          "descripcion": {
            "es": "SOMOS, orgánico",
            "en": "SOMOS, organic"
          }
        },
        {
          "video": "videos/somos4.mp4",
          "portada": "portadas/somos4.jpg",
          "formato": "9:16",
          "etiqueta": {
            "es": "Orgánico",
            "en": "Organic"
          },
          "descripcion": {
            "es": "SOMOS, autodescubrimiento",
            "en": "SOMOS, self-discovery"
          }
        },
        {
          "video": "videos/somos5.mp4",
          "portada": "portadas/somos5.jpg",
          "formato": "9:16",
          "etiqueta": {
            "es": "Orgánico",
            "en": "Organic"
          },
          "descripcion": {
            "es": "SOMOS, desconexión emocional",
            "en": "SOMOS, emotional disconnection"
          }
        },
        {
          "video": "videos/somos6.mp4",
          "portada": "portadas/somos6.jpg",
          "formato": "16:9",
          "etiqueta": {
            "es": "Fragmento del VSL",
            "en": "VSL excerpt"
          },
          "descripcion": {
            "es": "SOMOS, fragmento del VSL",
            "en": "SOMOS, VSL excerpt"
          }
        }
      ]
    },
    {
      "nombre": {
        "es": "La Corte Orgánica",
        "en": "La Corte Orgánica"
      },
      "contexto": {
        "es": "Captación de pacientes en salud mental. Con Fanero.",
        "en": "Patient acquisition in mental health. With Fanero."
      },
      "gancho": {
        "es": "Una presentadora, tres locaciones, una sola identidad.",
        "en": "One presenter, three locations, one identity."
      },
      "descripcion": {
        "es": "Anuncios de captación unificados por un sistema propio de tipografía animada y editados para convertir.",
        "en": "Acquisition ads tied together by a custom animated typography system and edited to convert."
      },
      "enlaces": [],
      "videos": [
        {
          "video": "videos/corte1.mp4",
          "portada": "portadas/corte1.jpg",
          "formato": "9:16",
          "etiqueta": {
            "es": "Anuncio 1",
            "en": "Ad 1"
          },
          "descripcion": {
            "es": "La Corte Orgánica, anuncio 1",
            "en": "La Corte Orgánica, ad 1"
          }
        },
        {
          "video": "videos/corte2.mp4",
          "portada": "portadas/corte2.jpg",
          "formato": "9:16",
          "etiqueta": {
            "es": "Anuncio 2",
            "en": "Ad 2"
          },
          "descripcion": {
            "es": "La Corte Orgánica, anuncio 2",
            "en": "La Corte Orgánica, ad 2"
          }
        },
        {
          "video": "videos/corte3.mp4",
          "portada": "portadas/corte3.jpg",
          "formato": "9:16",
          "etiqueta": {
            "es": "Anuncio 3",
            "en": "Ad 3"
          },
          "descripcion": {
            "es": "La Corte Orgánica, anuncio 3",
            "en": "La Corte Orgánica, ad 3"
          }
        }
      ]
    },
    {
      "nombre": {
        "es": "Eyetrade y Bran de Salcedo",
        "en": "Eyetrade & Bran de Salcedo"
      },
      "contexto": {
        "es": "Formación financiera, Colombia.",
        "en": "Financial education, Colombia."
      },
      "gancho": {
        "es": "Educación financiera con ritmo de redes.",
        "en": "Financial education at social media speed."
      },
      "descripcion": {
        "es": "Productor, editor y subtitulador principal de dos cuentas en paralelo. Set de entrevista con iluminación diseñada y cobertura de formaciones presenciales.",
        "en": "Lead producer, editor and subtitler for two accounts in parallel. Interview set with designed lighting and coverage of in-person trainings."
      },
      "enlaces": [
        {
          "texto": {
            "es": "Ver Eyetrade",
            "en": "View Eyetrade"
          },
          "url": "https://www.instagram.com/eyetrade_/"
        },
        {
          "texto": {
            "es": "Ver Bran de Salcedo",
            "en": "View Bran de Salcedo"
          },
          "url": "https://www.instagram.com/bran.desalcedo/"
        }
      ],
      "videos": [
        {
          "video": "videos/eye2.mp4",
          "portada": "portadas/eye2.jpg",
          "formato": "9:16",
          "etiqueta": {
            "es": "Contenido educativo",
            "en": "Educational content"
          },
          "descripcion": {
            "es": "Eyetrade, contenido educativo",
            "en": "Eyetrade, educational content"
          }
        },
        {
          "video": "videos/eye4.mp4",
          "portada": "portadas/eye4.jpg",
          "formato": "9:16",
          "etiqueta": {
            "es": "Cobertura de viaje",
            "en": "Travel coverage"
          },
          "descripcion": {
            "es": "Eyetrade, viaje a Europa",
            "en": "Eyetrade, Europe trip"
          }
        },
        {
          "video": "videos/eye3.mp4",
          "portada": "portadas/eye3.jpg",
          "formato": "9:16",
          "etiqueta": {
            "es": "Historia para Instagram",
            "en": "Instagram story"
          },
          "descripcion": {
            "es": "Eyetrade, historia",
            "en": "Eyetrade, story"
          }
        },
        {
          "video": "videos/eye1.mp4",
          "portada": "portadas/eye1.jpg",
          "formato": "9:16",
          "etiqueta": {
            "es": "Historia para Instagram",
            "en": "Instagram story"
          },
          "descripcion": {
            "es": "Eyetrade, preexperiencia",
            "en": "Eyetrade, pre-experience"
          }
        }
      ]
    },
    {
      "nombre": {
        "es": "Child Therapy Center LA",
        "en": "Child Therapy Center LA"
      },
      "contexto": {
        "es": "Terapia infantil, Los Ángeles. Con El Enclave.",
        "en": "Child therapy, Los Angeles. With El Enclave."
      },
      "gancho": {
        "es": "Formato largo que sostiene la atención.",
        "en": "Long-form that holds attention."
      },
      "descripcion": {
        "es": "Video de venta con B-roll, motion graphics y un sistema de subtítulos con la identidad de la marca.",
        "en": "Sales video with B-roll, motion graphics and a branded subtitle system."
      },
      "enlaces": [
        {
          "texto": {
            "es": "Ver el sitio web",
            "en": "View the website"
          },
          "url": "https://www.childtherapycenterla.com/"
        }
      ],
      "videos": [
        {
          "video": "videos/child1.mp4",
          "portada": "portadas/child1.jpg",
          "formato": "16:9",
          "etiqueta": {
            "es": "Video de venta (VSL)",
            "en": "Sales video (VSL)"
          },
          "descripcion": {
            "es": "Child Therapy Center LA, VSL",
            "en": "Child Therapy Center LA, VSL"
          }
        }
      ]
    },
    {
      "nombre": {
        "es": "Uncle Paulie’s Delis",
        "en": "Uncle Paulie’s Delis"
      },
      "contexto": {
        "es": "Delicatessen, Los Ángeles. Con El Enclave.",
        "en": "Delicatessen, Los Angeles. With El Enclave."
      },
      "gancho": {
        "es": "Un negocio, tres lenguajes visuales.",
        "en": "One business, three visual languages."
      },
      "descripcion": {
        "es": "Collage de producto, revelación de menú y bitácora del local: tres formatos con identidad propia para un mismo negocio.",
        "en": "Product collage, menu reveal and a behind-the-counter log: three formats with their own identity for one business."
      },
      "enlaces": [
        {
          "texto": {
            "es": "Ver la cuenta",
            "en": "View the account"
          },
          "url": "https://www.instagram.com/unclepauliesdeli/"
        }
      ],
      "videos": [
        {
          "video": "videos/uncle2.mp4",
          "portada": "portadas/uncle2.jpg",
          "formato": "9:16",
          "etiqueta": {
            "es": "Revelación de menú",
            "en": "Menu reveal"
          },
          "descripcion": {
            "es": "Uncle Paulie’s, menú",
            "en": "Uncle Paulie’s, menu"
          }
        },
        {
          "video": "videos/uncle1.mp4",
          "portada": "portadas/uncle1.jpg",
          "formato": "9:16",
          "etiqueta": {
            "es": "Collage de producto",
            "en": "Product collage"
          },
          "descripcion": {
            "es": "Uncle Paulie’s, producto",
            "en": "Uncle Paulie’s, product"
          }
        },
        {
          "video": "videos/uncle3.mp4",
          "portada": "portadas/uncle3.jpg",
          "formato": "9:16",
          "etiqueta": {
            "es": "Bitácora del local",
            "en": "Behind the counter"
          },
          "descripcion": {
            "es": "Uncle Paulie’s, bitácora",
            "en": "Uncle Paulie’s, behind the counter"
          }
        }
      ]
    },
    {
      "nombre": {
        "es": "FDG MultiServices",
        "en": "FDG MultiServices"
      },
      "contexto": {
        "es": "Construcción y remodelación, Nueva Jersey. Con El Enclave.",
        "en": "Construction and remodeling, New Jersey. With El Enclave."
      },
      "gancho": {
        "es": "La obra real, contada en segundos.",
        "en": "Real job sites, told in seconds."
      },
      "descripcion": {
        "es": "Contenido mensual para Instagram editado con material grabado en obra.",
        "en": "Monthly Instagram content edited from footage shot on real job sites."
      },
      "enlaces": [
        {
          "texto": {
            "es": "Ver la cuenta",
            "en": "View the account"
          },
          "url": "https://www.instagram.com/fdg.multiservices/"
        }
      ],
      "videos": [
        {
          "video": "videos/fdg2.mp4",
          "portada": "portadas/fdg2.jpg",
          "formato": "9:16",
          "etiqueta": {
            "es": "The art of building",
            "en": "The art of building"
          },
          "descripcion": {
            "es": "FDG, The art of building",
            "en": "FDG, The art of building"
          }
        },
        {
          "video": "videos/fdg1.mp4",
          "portada": "portadas/fdg1.jpg",
          "formato": "9:16",
          "etiqueta": {
            "es": "One call",
            "en": "One call"
          },
          "descripcion": {
            "es": "FDG, One call",
            "en": "FDG, One call"
          }
        },
        {
          "video": "videos/fdg3.mp4",
          "portada": "portadas/fdg3.jpg",
          "formato": "9:16",
          "etiqueta": {
            "es": "Working all day",
            "en": "Working all day"
          },
          "descripcion": {
            "es": "FDG, Working all day",
            "en": "FDG, Working all day"
          }
        }
      ]
    },
    {
      "nombre": {
        "es": "Wander Wave Media",
        "en": "Wander Wave Media"
      },
      "contexto": {
        "es": "Agencia de marketing, Los Ángeles. Con El Enclave.",
        "en": "Marketing agency, Los Angeles. With El Enclave."
      },
      "gancho": {
        "es": "El detrás de cámaras, con estética de marca.",
        "en": "Behind the scenes, with a brand look."
      },
      "descripcion": {
        "es": "Video de marca en 4K para la agencia, construido con el detrás de cámaras de sus producciones.",
        "en": "4K brand video for the agency, built from behind-the-scenes footage of its productions."
      },
      "enlaces": [],
      "videos": [
        {
          "video": "videos/wwm1.mp4",
          "portada": "portadas/wwm1.jpg",
          "formato": "16:9",
          "etiqueta": {
            "es": "Detrás de cámaras 1",
            "en": "Behind the scenes 1"
          },
          "descripcion": {
            "es": "Wander Wave Media, detrás de cámaras 1",
            "en": "Wander Wave Media, behind the scenes 1"
          }
        },
        {
          "video": "videos/wwm2.mp4",
          "portada": "portadas/wwm2.jpg",
          "formato": "16:9",
          "etiqueta": {
            "es": "Detrás de cámaras 2",
            "en": "Behind the scenes 2"
          },
          "descripcion": {
            "es": "Wander Wave Media, detrás de cámaras 2",
            "en": "Wander Wave Media, behind the scenes 2"
          }
        }
      ]
    },
    {
      "nombre": {
        "es": "Mi marca personal",
        "en": "My personal brand"
      },
      "contexto": {
        "es": "@JustAlejandro321 y @AlejandroCars321. Contenido automotor para Colombia.",
        "en": "@JustAlejandro321 and @AlejandroCars321. Automotive content for Colombia."
      },
      "gancho": {
        "es": "Mi laboratorio de formatos.",
        "en": "My format lab."
      },
      "descripcion": {
        "es": "Idea, guion, grabación y edición, de principio a fin. Aquí pruebo las estructuras de video corto que luego aplico con marcas, y que han logrado alcance viral en Instagram y TikTok al mismo tiempo.",
        "en": "Concept, script, shoot and edit, start to finish. This is where I test the short-form structures I later apply for brands, which have gone viral on Instagram and TikTok at the same time."
      },
      "enlaces": [
        {
          "texto": {
            "es": "Ver en Instagram",
            "en": "View on Instagram"
          },
          "url": "https://www.instagram.com/justalejandro321/"
        },
        {
          "texto": {
            "es": "Ver en TikTok",
            "en": "View on TikTok"
          },
          "url": "https://www.tiktok.com/@alejandrocars321"
        }
      ],
      "videos": [
        {
          "video": "videos/mp1.mp4",
          "portada": "portadas/mp1.jpg",
          "formato": "9:16",
          "etiqueta": {
            "es": "Honda, 63 días",
            "en": "Honda, 63 days"
          },
          "descripcion": {
            "es": "Marca personal, Honda 63 días",
            "en": "Personal brand, Honda 63 days"
          }
        },
        {
          "video": "videos/mp2.mp4",
          "portada": "portadas/mp2.jpg",
          "formato": "9:16",
          "etiqueta": {
            "es": "Torneo de aura",
            "en": "Aura tournament"
          },
          "descripcion": {
            "es": "Marca personal, torneo de aura",
            "en": "Personal brand, aura tournament"
          }
        },
        {
          "video": "videos/mp3.mp4",
          "portada": "portadas/mp3.jpg",
          "formato": "9:16",
          "etiqueta": {
            "es": "Nissan Qashqai",
            "en": "Nissan Qashqai"
          },
          "descripcion": {
            "es": "Marca personal, Nissan Qashqai",
            "en": "Personal brand, Nissan Qashqai"
          }
        },
        {
          "video": "videos/mp4.mp4",
          "portada": "portadas/mp4.jpg",
          "formato": "9:16",
          "etiqueta": {
            "es": "Velocidad",
            "en": "Speed limits"
          },
          "descripcion": {
            "es": "Marca personal, velocidad",
            "en": "Personal brand, speed limits"
          }
        }
      ],
      "logo": "img/logo.jpg"
    }
  ],
  "comoTrabajo": {
    "titulo": {
      "es": "Cómo trabajo",
      "en": "How I work"
    },
    "texto": {
      "es": "Antes del primer corte, entiendo para qué existe la pieza. Leo el guion, organizo el material y construyo el ritmo alrededor del mensaje, para que cada segundo trabaje a favor del resultado.",
      "en": "Before the first cut, I understand why the piece exists. I read the script, organize the footage and build the pacing around the message, so every second works toward the result."
    }
  },
  "herramientas": {
    "titulo": {
      "es": "Herramientas",
      "en": "Tools"
    },
    "texto": {
      "es": "Premiere Pro, CapCut Pro, Audition y Lightroom. Producción con Sony Alpha, Canon y Nikon, a una o dos cámaras.",
      "en": "Premiere Pro, CapCut Pro, Audition and Lightroom. Production with Sony Alpha, Canon and Nikon, on one or two cameras."
    },
    "formacion": {
      "es": "Comunicador Social y Periodista, Uniminuto. Inglés intermedio-avanzado.",
      "en": "B.A. in Social Communication and Journalism, Uniminuto. Upper-intermediate English."
    }
  },
  "contacto": {
    "titulo": {
      "es": "¿Tienes un proyecto en mente?",
      "en": "Have a project in mind?"
    },
    "texto": {
      "es": "Disponible para proyectos remotos y presenciales.",
      "en": "Available for remote and on-site projects."
    }
  },
  "botones": {
    "correo": {
      "es": "Escribir un correo",
      "en": "Send an email"
    },
    "whatsapp": {
      "es": "WhatsApp",
      "en": "WhatsApp"
    },
    "whatsappLargo": {
      "es": "Escribir por WhatsApp",
      "en": "Message on WhatsApp"
    }
  }
};
