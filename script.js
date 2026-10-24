const data = window.PORTFOLIO || { projects: [], shorts: [] };

const el = (tag, props = {}, ...children) => {
  const node = Object.assign(document.createElement(tag), props);
  children.flat().forEach((c) => c != null && node.append(c));
  return node;
};

const thumbUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
const embedUrl = (id) =>
  `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`;

function thumbButton(youtubeId, label, extra) {
  const btn = el("button", { className: "thumb", type: "button" },
    el("img", { src: thumbUrl(youtubeId), alt: "", loading: "lazy", decoding: "async" }),
    el("span", { className: "play", ariaHidden: "true", textContent: "▶" }),
    extra,
  );
  const img = btn.querySelector("img");
  img.addEventListener("error", () => { img.style.visibility = "hidden"; });
  btn.setAttribute("aria-label", `Play ${label}`);
  return btn;
}

/* Modal player. `films` is a list of { title, youtubeId }. */
function openPlayer({ title, subtitle, films, vertical = false }, trigger) {
  const iframe = el("iframe", {
    allow: "autoplay; encrypted-media; picture-in-picture; fullscreen",
    allowFullscreen: true,
    referrerPolicy: "strict-origin-when-cross-origin",
  });
  const fallback = el("a", { className: "yt-fallback", target: "_blank", rel: "noopener", textContent: "Trouble playing? Watch on YouTube ↗" });
  const close = el("button", { className: "modal-close", type: "button", textContent: "Close ×" });

  const choices = films.length > 1
    ? films.map((f, i) => {
        const b = el("button", { className: "film-choice", type: "button", textContent: f.title });
        b.addEventListener("click", () => select(i));
        return b;
      })
    : [];

  function select(i) {
    iframe.src = embedUrl(films[i].youtubeId);
    iframe.title = `${title}: ${films[i].title}`;
    fallback.href = `https://www.youtube.com/watch?v=${films[i].youtubeId}`;
    choices.forEach((b, j) => b.setAttribute("aria-pressed", String(i === j)));
  }

  const modal = el("dialog", { className: "video-modal" },
    el("div", { className: `modal-panel${vertical ? " vertical" : ""}` },
      el("div", { className: "modal-top" },
        el("div", {}, el("h2", { textContent: title }), subtitle ? el("p", { textContent: subtitle }) : null),
        close,
      ),
      el("div", { className: "player" }, iframe),
      choices.length ? el("div", { className: "film-list" }, choices) : null,
      fallback,
    ),
  );
  modal.setAttribute("aria-label", title);

  close.addEventListener("click", () => modal.close());
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });
  modal.addEventListener("close", () => {
    iframe.src = "about:blank";
    document.body.classList.remove("modal-open");
    modal.remove();
    trigger?.focus();
  });

  document.body.append(modal);
  document.body.classList.add("modal-open");
  modal.showModal();
  select(0);
  close.focus();
}

function renderFeatured() {
  const f = data.featured;
  const host = document.getElementById("featured");
  if (!f || !host) return;
  const btn = thumbButton(f.youtubeId, f.title);
  btn.addEventListener("click", () =>
    openPlayer({ title: f.title, subtitle: f.note, films: [f] }, btn));
  host.append(btn, el("figcaption", {}, el("strong", { textContent: f.title }), el("span", { textContent: f.note || "" })));
}

function renderProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;
  data.projects.forEach((p) => {
    const count = p.videos.length > 1 ? el("span", { className: "film-count", textContent: `${p.videos.length} films` }) : null;
    const btn = thumbButton(p.videos[0].youtubeId, p.title, count);
    const subtitle = [p.client, p.year].filter(Boolean).join(" · ");
    btn.addEventListener("click", () =>
      openPlayer({ title: p.title, subtitle, films: p.videos }, btn));
    grid.append(el("article", { className: "project" },
      btn,
      el("h3", { textContent: p.title }),
      el("p", { className: "project-meta", textContent: [p.client, p.type, p.year].filter(Boolean).join(" · ") }),
      p.role ? el("span", { className: "role" }, el("b", { textContent: "Role: " }), p.role) : null,
      p.description ? el("p", { className: "desc", textContent: p.description }) : null,
    ));
  });
}

function renderShorts() {
  const grid = document.getElementById("shorts-grid");
  const section = document.getElementById("shorts");
  if (!grid) return;
  if (!data.shorts?.length) { section?.remove(); return; }

  data.shorts.forEach((s) => {
    if (s.youtubeId) {
      const btn = thumbButton(s.youtubeId, s.title);
      btn.addEventListener("click", () =>
        openPlayer({ title: s.title, films: [s], vertical: true }, btn));
      grid.append(el("div", { className: "short" }, btn, el("span", { className: "short-title", textContent: s.title })));
    } else if (s.instagramUrl) {
      grid.append(el("a", { className: "short", href: s.instagramUrl, target: "_blank", rel: "noopener" },
        el("span", { className: "thumb insta" },
          el("span", {}, el("span", { className: "ig", textContent: "Instagram" }), "Watch on Instagram ↗")),
        el("span", { className: "short-title", textContent: s.title }),
      ));
    }
  });
}

renderFeatured();
renderProjects();
renderShorts();
document.getElementById("year").textContent = new Date().getFullYear();
