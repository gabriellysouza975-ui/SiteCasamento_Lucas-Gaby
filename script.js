const WHATSAPP = "5513988702314";
const PIX_KEY = "13988702314";

// ============================================================
// LISTA DE PRESENTES — EDITE SOMENTE OS CAMPOS ABAIXO
// value = valor em reais
// photo = caminho da foto do presente
// Para trocar uma foto sem mexer no código, substitua o arquivo
// correspondente dentro de images/presentes/ mantendo o mesmo nome.
// ============================================================
const gifts = [
  { icon: "💄", name: "Ajudinha para o dia da noiva no salão", value: 500, photo: "images/presentes/presente-01.jpg" },
  { icon: "🤧", name: "Lenço para noiva não borrar a make", value: 210, photo: "images/presentes/presente-02.jpg" },
  { icon: "🎁", name: "Só para não dizerem que não dei nada", value: 195, photo: "images/presentes/presente-03.jpg" },
  { icon: "💐", name: "Aumente 50% da sua chance de pegar o buquê", value: 550, photo: "images/presentes/presente-04.jpg" },
  { icon: "🛌", name: "Cobertor para a noiva que está sempre coberta de razão", value: 320, photo: "images/presentes/presente-05.jpg" },
  { icon: "🍳", name: "Jogo de panelas de última geração", value: 220, photo: "images/presentes/presente-06.jpg" },
  { icon: "👨‍🍳", name: "Curso de culinária para a noiva", value: 200, photo: "images/presentes/presente-07.jpg" },
  { icon: "💈", name: "Corte de cabelo do noivo por 6 meses", value: 500, photo: "images/presentes/presente-08.jpg" },
  { icon: "🏆", name: "Dei o melhor presente da festa", value: 2000, photo: "images/presentes/presente-09.jpg" },
  { icon: "⛑️", name: "Capacete para o noivo se defender do pau de macarrão", value: 250, photo: "images/presentes/presente-10.jpg" },
  { icon: "🍝", name: "Pau de macarrão para a noiva usar quando necessário", value: 200, photo: "images/presentes/presente-11.jpg" },
  { icon: "👶", name: "Cota para perguntar quando vem os filhos", value: 850, photo: "images/presentes/presente-12.jpg" },
  { icon: "🦶", name: "Acessório para pedicure do noivo", value: 200, photo: "images/presentes/presente-13.jpg" },
  { icon: "✈️", name: "Ajuda para a viagem de lua de mel", value: 400, photo: "images/presentes/presente-14.jpg" },
  { icon: "🍽️", name: "Primeiro a ser servido no jantar", value: 550, photo: "images/presentes/presente-15.jpg" },
  { icon: "🧊", name: "Geladeira moderna", value: 1000, photo: "images/presentes/presente-16.jpg" },
  { icon: "🍟", name: "Air fry", value: 300, photo: "images/presentes/presente-17.jpg" },
  { icon: "📺", name: "Microondas de luxo", value: 400, photo: "images/presentes/presente-18.jpg" },
  { icon: "📺", name: "Tv", value: 1100, photo: "images/presentes/presente-19.jpg" },
  { icon: "🚪", name: "Armário", value: 600, photo: "images/presentes/presente-20.jpg" },
  { icon: "🛋️", name: "Sofá", value: 900, photo: "images/presentes/presente-21.jpg" },
  { icon: "🛏️", name: "Cama", value: 600, photo: "images/presentes/presente-22.jpg" },
  { icon: "🔥", name: "Fogão", value:1000, photo: "images/presentes/presente-23.jpg" },
  { icon: "🎵", name: "Pedir música pro DJ", value: 400, photo: "images/presentes/presente-24.jpg" },
  { icon: "👰", name: "Ir com qualquer roupa branca", value: 1500, photo: "images/presentes/presente-25.jpg" },
  { icon: "💍", name: "Ajudar a pagar as parcelas do casamento", value: 400, photo: "images/presentes/presente-26.jpg" },
  { icon: "🙋", name: "Levar alguém que não foi convidado", value: 1700, photo: "images/presentes/presente-27.jpg" },
  { icon: "🚗", name: "Aluguel do carro na viagem", value: 800, photo: "images/presentes/presente-28.jpg" },
  { icon: "🏠", name: "Tapete de boas vindas", value: 260, photo: "images/presentes/presente-29.jpg" },
  { icon: "💧", name: "Purificador de água", value: 600, photo: "images/presentes/presente-30.jpg" },
  { icon: "🍴", name: "Faqueiro", value: 280, photo: "images/presentes/presente-31.jpg" },
  { icon: "🫙", name: "Potes herméticos", value: 325, photo: "images/presentes/presente-32.jpg" },
  { icon: "💄", name: "Maquiagem da noiva", value: 500, photo: "images/presentes/presente-33.jpg" },
  { icon: "💰", name: "Vou ser generoso e aumentar a verba", value: 650, photo: "images/presentes/presente-34.jpg" },
  { icon: "👞", name: "Ainda tem o sapato e a gravata?", value: 350, photo: "images/presentes/presente-35.jpg" },
  { icon: "🛠️", name: "Kit de ferramentas para o noivo", value: 250, photo: "images/presentes/presente-36.jpg" },
  { icon: "🛏️", name: "Lençol de fio egípcio", value: 500, photo: "images/presentes/presente-37.jpg" },
  { icon: "🛌", name: "Colcha de cama", value: 300, photo: "images/presentes/presente-38.jpg" },
  { icon: "🧺", name: "Máquina de lavar", value: 1500, photo: "images/presentes/presente-39.jpg" },
];

const money = value => Number(value).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const giftGrid = document.getElementById("giftGrid");
const modal = document.getElementById("giftModal");
const modalTitle = document.getElementById("modalTitle");
const modalValue = document.getElementById("modalValue");
const modalGiftImage = document.getElementById("modalGiftImage");
const pixArea = document.getElementById("pixArea");
const pixValue = document.getElementById("pixValue");
let selectedGift = null;

function setGiftImage(img, gift) {
  if (!gift.photo) {
    img.hidden = true;
    return;
  }
  img.src = gift.photo;
  img.alt = gift.name;
  img.hidden = false;
  img.onerror = () => {
    img.hidden = true;
  };
}

gifts.forEach((gift, index) => {
  const card = document.createElement("article");
  card.className = "gift";
  card.innerHTML = `
    <div class="gift-photo-wrap">
      <img class="gift-photo" alt="" loading="lazy">
    </div>
    <h3>${gift.name}</h3>
    <div class="gift-price">${money(gift.value)}</div>
    <button type="button" data-index="${index}">Presentear</button>
  `;
  setGiftImage(card.querySelector(".gift-photo"), gift);
  card.querySelector("button").addEventListener("click", () => openGift(gift));
  giftGrid.appendChild(card);
});

function openGift(gift) {
  selectedGift = gift;
  modalTitle.textContent = gift.name;
  modalValue.textContent = money(gift.value);
  pixValue.textContent = money(gift.value);
  setGiftImage(modalGiftImage, gift);
  pixArea.hidden = true;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}
document.getElementById("modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

document.getElementById("pixButton").addEventListener("click", () => {
  pixArea.hidden = false;
  pixArea.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

document.getElementById("copyPix").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(PIX_KEY);
    document.getElementById("copyPix").textContent = "Copiado!";
    setTimeout(() => document.getElementById("copyPix").textContent = "Copiar", 1800);
  } catch {
    alert("Não foi possível copiar automaticamente. Chave PIX: " + PIX_KEY);
  }
});

document.getElementById("creditButton").addEventListener("click", () => {
  if (!selectedGift) return;
  const message = `Olá, Gabrielly e Lucas! 💕%0A%0AQuero presentear vocês com "${selectedGift.name}", no valor de ${money(selectedGift.value)}, utilizando cartão de crédito. 💳%0A%0APodem me enviar o link de pagamento, por favor?`;
  window.open(`https://wa.me/${WHATSAPP}?text=${message}`, "_blank");
});

document.getElementById("rsvpForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("guestName").value.trim();
  const phone = document.getElementById("guestPhone").value.trim();
  const attendance = document.getElementById("attendance").value;
  const notes = document.getElementById("guestNotes").value.trim();

  let message = `Olá, Gabrielly e Lucas! 💕%0A%0A*Confirmação de presença*%0A%0A*Nome:* ${encodeURIComponent(name)}%0A*WhatsApp:* ${encodeURIComponent(phone || "Não informado")}%0A*Presença:* ${encodeURIComponent(attendance)}`;
  if (notes) message += `%0A*Observações:* ${encodeURIComponent(notes)}`;
  window.open(`https://wa.me/${WHATSAPP}?text=${message}`, "_blank");
});

const weddingDate = new Date("2027-03-13T16:30:00-03:00");
function updateCountdown() {
  const diff = weddingDate - new Date();
  if (diff <= 0) {
    ["days","hours","minutes","seconds"].forEach(id => document.getElementById(id).textContent = "0");
    return;
  }
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = String(hours).padStart(2,"0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2,"0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2,"0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("show"));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("show")));
