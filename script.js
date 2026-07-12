const header = document.querySelector("[data-header]");

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 16);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const screenshots = [
  { src: "./assets/poctra.jpg", title: "Welcome", description: "Create a new wallet or begin a validated import flow." },
  { src: "./assets/import.jpg", title: "Import Wallet", description: "Mnemonic, Octra Base64 key, and Ethereum hex key recovery methods." },
  { src: "./assets/assets.jpg", title: "Assets", description: "A clear split between Octra assets and the derived EVM account." },
  { src: "./assets/bridge.jpg", title: "Bridge", description: "Bridge state, daily capacity, fee review, history, and recovery." },
  { src: "./assets/explore.jpg", title: "Explore", description: "Open dApps, Octra Identity names, addresses, and Circle resources." },
  { src: "./assets/overview.jpg", title: "Overview", description: "Public balance, primary actions, identity-aware activity, and network state." },
  { src: "./assets/multiwallet.jpg", title: "Wallets", description: "Name, reorder, import, and switch between multiple wallets." },
  { src: "./assets/trade.jpg", title: "Trade", description: "Candlestick context and a review-first Uniswap v4 swap flow." },
  { src: "./assets/privacy.jpg", title: "Privacy", description: "Encrypted balance and dedicated private operation entry points." },
];

const dialog = document.querySelector("[data-viewer-dialog]");
const viewerImage = dialog?.querySelector("[data-viewer-image]");
const viewerTitle = dialog?.querySelector("[data-viewer-title]");
const viewerDescription = dialog?.querySelector("[data-viewer-description]");
const viewerCounter = dialog?.querySelector("[data-viewer-counter]");
const viewerStage = dialog?.querySelector(".viewer-stage");
let activeIndex = 0;
let lastTrigger = null;
let touchStartX = null;

const renderViewer = () => {
  if (!dialog || !viewerImage || !viewerTitle || !viewerDescription || !viewerCounter) return;
  const item = screenshots[activeIndex];
  viewerImage.src = item.src;
  viewerImage.alt = `${item.title} screen in poctra`;
  viewerTitle.textContent = item.title;
  viewerDescription.textContent = item.description;
  viewerCounter.textContent = `${activeIndex + 1} / ${screenshots.length}`;
};

const openViewer = (index, trigger) => {
  if (!dialog) return;
  activeIndex = Number(index) || 0;
  lastTrigger = trigger;
  renderViewer();
  dialog.showModal();
};

const moveViewer = (direction) => {
  activeIndex = (activeIndex + direction + screenshots.length) % screenshots.length;
  renderViewer();
};

document.querySelectorAll("[data-viewer]").forEach((trigger) => {
  trigger.addEventListener("click", () => openViewer(trigger.dataset.viewer, trigger));
});

dialog?.querySelector("[data-viewer-close]")?.addEventListener("click", () => dialog.close());
dialog?.querySelector("[data-viewer-prev]")?.addEventListener("click", () => moveViewer(-1));
dialog?.querySelector("[data-viewer-next]")?.addEventListener("click", () => moveViewer(1));

dialog?.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

dialog?.addEventListener("close", () => lastTrigger?.focus());

viewerStage?.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0]?.clientX ?? null;
}, { passive: true });

viewerStage?.addEventListener("touchend", (event) => {
  if (touchStartX === null) return;
  const endX = event.changedTouches[0]?.clientX ?? touchStartX;
  const distance = endX - touchStartX;
  touchStartX = null;
  if (Math.abs(distance) < 48) return;
  moveViewer(distance > 0 ? -1 : 1);
}, { passive: true });

document.addEventListener("keydown", (event) => {
  if (!dialog?.open) return;
  if (event.key === "ArrowLeft") moveViewer(-1);
  if (event.key === "ArrowRight") moveViewer(1);
});
