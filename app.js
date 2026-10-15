/* Arma la página a partir de contenido.js. No necesitas tocar este archivo para actualizar contenido. */
(function () {
  var C = window.CONTENIDO;
  var app = document.getElementById('app');
  var lang = 'es';

  var UI = {
    es: { idioma: 'Idioma', resultados: 'Resultados', titulo: 'Alejandro Salazar | Productor y Editor audiovisual' },
    en: { idioma: 'Language', resultados: 'Results', titulo: 'Alejandro Salazar | Video Producer & Editor' }
  };

  function t(v) {
    if (v == null) return '';
    if (typeof v === 'string') return v;
    return v[lang] != null ? v[lang] : (v.es || '');
  }
  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (attrs[k] == null || attrs[k] === false) continue;
      if (k === 'class') n.className = attrs[k];
      else if (k === 'text') n.textContent = attrs[k];
      else if (k.slice(0, 2) === 'on') n.addEventListener(k.slice(2), attrs[k]);
      else n.setAttribute(k, attrs[k] === true ? '' : attrs[k]);
    }
    (kids || []).forEach(function (c) { if (c) n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return n;
  }
  function claseFormato(f) { return f === '16:9' ? 'f169' : (f === '1:1' ? 'f11' : 'f916'); }
  function correo() { return 'mailto:' + C.perfil.correo; }
  function whatsapp() { return 'https://wa.me/' + C.perfil.whatsapp; }

  function selectorIdioma() {
    function b(code, label) {
      return el('button', { type: 'button', 'aria-pressed': lang === code ? 'true' : 'false', onclick: function () { cambiar(code); } }, [label]);
    }
    return el('div', { class: 'idioma', role: 'group', 'aria-label': UI[lang].idioma }, [b('es', 'ES'), b('en', 'EN')]);
  }

  function encabezado() {
    var p = C.perfil;
    return el('header', { class: 'encabezado' }, [
      el('div', { class: 'marca' }, [
        el('img', { src: p.foto, alt: p.nombre }),
        el('div', { class: 'marca-texto' }, [
          el('span', { class: 'marca-nombre', text: p.nombre }),
          el('span', { class: 'marca-cargo', text: t(p.cargo) })
        ])
      ]),
      el('nav', { class: 'acciones' }, [
        selectorIdioma(),
        el('a', { class: 'boton', href: correo(), text: t(C.botones.correo) }),
        el('a', { class: 'boton lleno', href: whatsapp(), target: '_blank', rel: 'noopener', text: t(C.botones.whatsapp) })
      ])
    ]);
  }

  function hero() {
    var f = el('section', { class: 'franja', 'aria-hidden': 'true' },
      (C.portada.franja || []).map(function (src) { return el('img', { src: src, alt: '', loading: 'lazy' }); }));
    return [
      el('section', { class: 'hero' }, [el('h1', { text: t(C.portada.titulo) }), el('p', { text: t(C.portada.subtitulo) })]),
      f
    ];
  }

  function resultados() {
    return el('section', { class: 'resultados', 'aria-label': UI[lang].resultados },
      (C.resultados || []).map(function (r) {
        return el('div', { class: 'resultado' }, [el('span', { class: 'cifra', text: t(r.cifra) }), el('span', { text: t(r.texto) })]);
      }));
  }

  function proyecto(p) {
    var izq = el('div', { class: 'proyecto-titulo' }, [
      p.logo ? el('img', { src: p.logo, alt: 'Logo' }) : null,
      el('h3', { text: t(p.nombre) }),
      el('p', { class: 'contexto', text: t(p.contexto) })
    ]);
    var der = el('div', { class: 'proyecto-texto' }, [
      el('p', { class: 'gancho', text: t(p.gancho) }),
      el('p', { text: t(p.descripcion) }),
      p.resultado ? el('p', { class: 'dato', text: t(p.resultado) }) : null,
      (p.enlaces && p.enlaces.length) ? el('div', { class: 'enlaces' }, p.enlaces.map(function (e) {
        return el('a', { href: e.url, target: '_blank', rel: 'noopener', text: t(e.texto) });
      })) : null
    ]);
    var vids = el('div', { class: 'videos' }, (p.videos || []).map(function (v) {
      return el('figure', { class: claseFormato(v.formato) }, [
        el('video', { src: v.video, poster: v.portada, controls: true, playsinline: true, preload: 'none', 'aria-label': t(v.descripcion) || t(v.etiqueta) }),
        el('figcaption', { text: t(v.etiqueta) })
      ]);
    }));
    return el('article', { class: 'proyecto' }, [el('div', { class: 'proyecto-info' }, [izq, der]), vids]);
  }

  function trabajo() {
    return el('section', { class: 'trabajo', id: 'trabajo' }, [
      el('h2', { text: t(C.trabajo.titulo) }),
      el('p', { text: t(C.trabajo.intro) })
    ].concat((C.proyectos || []).map(proyecto)));
  }

  function cierre() {
    var c = el('section', { class: 'columnas' }, [
      el('div', null, [el('h2', { text: t(C.comoTrabajo.titulo) }), el('p', { text: t(C.comoTrabajo.texto) })]),
      el('div', null, [el('h2', { text: t(C.herramientas.titulo) }), el('p', { text: t(C.herramientas.texto) }), el('p', { class: 'suave', text: t(C.herramientas.formacion) })])
    ]);
    var pie = el('footer', { class: 'pie' }, [
      el('div', { class: 'pie-texto' }, [
        el('img', { src: 'img/logo-oscuro.png', alt: '' }),
        el('h2', { text: t(C.contacto.titulo) }),
        el('p', { text: C.perfil.correo + ', ' + C.perfil.telefonoVisible + '. ' + t(C.contacto.texto) })
      ]),
      el('div', { class: 'acciones' }, [
        el('a', { class: 'boton grande', href: correo(), text: t(C.botones.correo) }),
        el('a', { class: 'boton acento', href: whatsapp(), target: '_blank', rel: 'noopener', text: t(C.botones.whatsappLargo) })
      ])
    ]);
    return [c, pie];
  }

  function render() {
    var y = window.scrollY;
    app.innerHTML = '';
    [encabezado()].concat(hero(), [resultados(), trabajo()], cierre()).forEach(function (n) { app.appendChild(n); });
    document.documentElement.lang = lang;
    document.title = UI[lang].titulo;
    window.scrollTo(0, y);
  }

  function cambiar(code) {
    lang = code;
    try { localStorage.setItem('idioma', code); } catch (e) {}
    try { var u = new URL(location.href); u.searchParams.set('lang', code); history.replaceState(null, '', u); } catch (e) {}
    render();
  }

  try {
    var q = new URLSearchParams(location.search).get('lang');
    var s = localStorage.getItem('idioma');
    if (q === 'en' || q === 'es') lang = q;
    else if (s === 'en' || s === 'es') lang = s;
    else if (!(navigator.language || 'es').toLowerCase().startsWith('es')) lang = 'en';
  } catch (e) {}
  render();
})();
