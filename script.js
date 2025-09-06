document.addEventListener("DOMContentLoaded", () => {
  const intro   = document.getElementById("intro");
  const landing = document.getElementById("landing");
  const count   = document.getElementById("count");
  const bg      = document.getElementById("bgSprite");

  if (!intro || !landing || !count || !bg) return;

  // ====== Countdown (intacto) ======
  let cd = 3;
  const cdInt = setInterval(() => {
    if (cd > 1) {
      cd--;
      count.textContent = cd;
    } else {
      count.textContent = "GO!";
      count.style.color = "#ff9500";
      clearInterval(cdInt);
      setTimeout(() => {
        intro.style.display = "none";
        landing.classList.remove("hidden");
      }, 1000);
    }
  }, 1000);

  // ====== Fondo animado con frames Run__000..Run__009 ======
  let frame = 0;
  const totalFrames = 10;                 // 0..9
  const basePath    = "sprite/Run__";     // OJO: 'Run' con R mayúscula y doble guion bajo
  const ext         = ".png";
  const fps         = 6;                  // velocidad (frames por segundo)
  const interval    = 1000 / fps;

  // Precarga
  const cache = [];
  for (let i = 0; i < totalFrames; i++) {
    const pad = String(i).padStart(3, "0"); // 000..009
    const img = new Image();
    img.src = `${basePath}${pad}${ext}`;
    cache.push(img);
  }

  const animate = () => {
    const pad = String(frame).padStart(3, "0");
    const url = `${basePath}${pad}${ext}`;
    bg.style.backgroundImage = `url('${url}')`;
    frame = (frame + 1) % totalFrames;
  };

  animate();
  setInterval(animate, interval);
});



  // ===== Sprites en la sección VIDEO usando los nombres reales =====
  const videoEl = document.getElementById("videoSprite");
  if (videoEl) {
    const fps = 12;
    const interval = 1000 / fps;

    // Lista EXACTA basada en tu brief (respetando mayúsculas y doble guion bajo)
    const frames = [
      "Attack__000.png","Attack__001.png","Attack__002.png","Attack__003.png","Attack__004.png","Attack__005.png",
      "Dead__002.png","Dead__001.png","Dead__000.png","Attack__009.png","Attack__008.png","Attack__007.png","Attack__006.png",
      "Dead__008.png","Dead__007.png","Dead__006.png","Dead__005.png","Dead__004.png","Dead__003.png",
      "Idle__006.png","Idle__005.png","Idle__004.png","Idle__003.png","Idle__002.png","Idle__001.png","Idle__000.png",
      "Dead__009.png",
      "Jump__003.png","Jump__002.png","Jump__001.png","Jump__000.png",
      "Idle__009.png","Idle__008.png","Idle__007.png",
      "Jump_Attack__000.png",
      "Jump__009.png","Jump__008.png","Jump__007.png","Jump__006.png","Jump__005.png","Jump__004.png",
      "Jump_Attack__006.png","Jump_Attack__005.png","Jump_Attack__004.png","Jump_Attack__003.png","Jump_Attack__002.png","Jump_Attack__001.png",
      "Jump_Throw__004.png","Jump_Throw__003.png","Jump_Throw__002.png","Jump_Throw__001.png","Jump_Throw__000.png",
      "Jump_Attack__009.png","Jump_Attack__008.png","Jump_Attack__007.png",
      "Kunai.png",
      "Jump_Throw__009.png","Jump_Throw__008.png","Jump_Throw__007.png","Jump_Throw__006.png","Jump_Throw__005.png",
      "Run__006.png","Run__005.png","Run__004.png","Run__003.png","Run__002.png","Run__001.png","Run__000.png",
      "Slide__004.png","Slide__003.png","Slide__002.png","Slide__001.png","Slide__000.png",
      "Run__009.png","Run__008.png","Run__007.png",
      "Throw__001.png","Throw__000.png",
      "Slide__009.png","Slide__008.png","Slide__007.png","Slide__006.png","Slide__005.png",
      "Throw__009.png","Throw__008.png","Throw__007.png","Throw__006.png","Throw__005.png","Throw__004.png","Throw__003.png","Throw__002.png",
      "girl-ninja-27-08-2025.png"
    ].map(name => `sprite/${name}`);

    // Pre-carga para suavizar
    const cache = frames.map(src => { const img = new Image(); img.src = src; return img; });

    let i = 0;
    const paint = () => {
      videoEl.style.backgroundImage = `url('${frames[i]}')`;
      i = (i + 1) % frames.length;
    };

    paint();
    setInterval(paint, interval);
  }


  