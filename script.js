
const cursuri = [
  {
    id: 1,
    titlu: "GHID GRATUIT MARKETING DIGITAL harta ta spre venit",
    pret: "Gratuit",
    descriere: "Ghid digital pentru a începe în marketing digital.",
    imagine: "Icon/gratuit.jpeg",
    actiune: "Află mai multe",
    pdf: "pdf/ghid-marketing.pdf"
  },
  {
    id: 2,
    titlu: "Creeaza gratuit cont monetizat Stan și începe sa v",
    pret: "Gratuit",
    descriere: "Ghid pas cu pas pentru cont monetizat pe Stan.",
    imagine: "Icon/cont-monetizat.jpeg",
    actiune: "Află mai multe",
    pdf: "pdf/cont-monetizat.pdf"
  },
  {
    id: 3,
    titlu: "Biblioteca ta digitală este aici",
    pret: "€9.99",
    descriere: "Acces la resurse digitale pentru dezvoltare.",
    imagine: "Icon/biblioteca.jpg",
    actiune: "Află mai multe",
    pdf: "pdf/biblioteca-digitala.pdf"
  },
  {
    id: 4,
    titlu: "PACHET BASIC ✨",
    pret: "€95.00",
    descriere: "Pachetul de bază pentru marketing digital.",
    imagine: "Icon/basic.jpeg",
    actiune: "Află mai multe",
    pdf: "pdf/pachet-basic.pdf"
  },
  {
    id: 5,
    titlu: "PACHET MEDIUM",
    pret: "€139.00",
    descriere: "Resurse suplimentare și webinarii exclusive.",
    imagine: "Icon/medium.jpeg",
    actiune: "Află mai multe",
    pdf: "pdf/pachet-medium.pdf"
  },
  {
    id: 6,
    titlu: "PACHET VIP+ 1:1 consultanță video+ Magazin la cheie",
    pret: "€250.00",
    descriere: "Consultanță 1:1 și magazin online gata de lansare.",
    imagine: "Icon/vip.jpeg",
    actiune: "Află mai multe",
    pdf: "pdf/pachet-vip.pdf"
  },
  {
    id: 7,
    titlu: "Consultație 1:1 cu mine",
    pret: "€50.00",
    descriere: "Sesiune individuală de consultanță personalizată.",
    imagine: "Icon/consultatie.jpeg",
    actiune: "Consultă",
    pdf: "pdf/consultatie.pdf"
  },
];

function afiseazaCursuri() {
  const lista = document.getElementById('cursuri-lista');
  lista.innerHTML = '';
  cursuri.forEach(curs => {
    const isGratuit = curs.pret.toLowerCase() === 'gratuit';
    const card = document.createElement('div');
    card.className = 'curs-card' + (isGratuit ? ' gratuit' : '');
    card.innerHTML = `
      <div class="curs-img-wrap">
        <img src="${curs.imagine}" alt="${curs.titlu}" class="curs-img">
        ${isGratuit ? '<span class="badge-gratuit">Gratuit</span>' : ''}
      </div>
      <h3>${curs.titlu}</h3>
      ${curs.titlu.toUpperCase().includes('MEDIUM') ? '<div style="height:1.5rem;"></div>' : ''}
      <div class="pret">${curs.pret}</div>
      <p class="curs-desc">${curs.descriere}</p>
      ${curs.titlu.includes('BASIC') ? `<a href="pachet-basic.html" class="pachet-btn" style="width:85%;margin:0 auto;display:block;margin-top:0.5rem;">${curs.actiune}</a>` : curs.titlu.toUpperCase().includes('GHID GRATUIT') ? `<a href="ghid-gratuit.html" class="pachet-btn" style="width:85%;margin:0 auto;display:block;margin-top:0.5rem;">${curs.actiune}</a>` : `<button onclick="deschideModal(${curs.id})">${curs.actiune}</button>`}
    `;
    lista.appendChild(card);
  });
}

afiseazaCursuri();

window.deschideModal = function(id) {
  const curs = cursuri.find(c => c.id === id);
  const modal = document.getElementById('modal');
  const body = document.getElementById('modal-body');
  body.innerHTML = `
    <img src="${curs.imagine}" alt="${curs.titlu}" class="curs-img" style="max-width:120px;margin-bottom:1rem;">
    <h3>${curs.titlu}</h3>
    <p>${curs.descriere}</p>
    <div class="pret">${curs.pret}</div>
    <button onclick="cumparaCurs('${curs.titlu}')">${curs.actiune} acum</button>
  `;
  modal.classList.add('active');
}

document.getElementById('closeModal').onclick = function() {
  document.getElementById('modal').classList.remove('active');
}

window.cumparaCurs = function(titlu) {
  const body = document.getElementById('modal-body');
  body.innerHTML = `<h3>Felicitări!</h3><p>Ai achiziționat <b>${titlu}</b>.<br>Vei primi detalii pe email.</p>`;
}

document.querySelector('.contact-form').onsubmit = function(e) {
  e.preventDefault();
  alert('Mesaj trimis! Vă vom contacta în curând.');
  this.reset();
}
