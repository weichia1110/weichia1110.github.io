/* =====================================================
   個人資料集中區｜平常只需要改這一區（到「渲染程式」之前）
   ===================================================== */

/* USERNAME / ABOUT ME / 狀態 / 等級
   username、displayName 在這裡改；about 每個字串是一段文字 */
const profile = {
  username: "weichia",
  displayName: "Weichia",
  status: "Online",              // Online / Away / Busy / Offline
  shortDesc: "Gamer · Developer · Designer",
  level: 42, xp: 720, xpMax: 1000,
  location: "Taiwan",
  memberSince: "2024",
  about: [                       // ABOUT ME：每個項目會變成一個段落
    "Hello!",
    "I'm a gamer, developer and designer.",
    "I like building small tools, grinding rhythm games and collecting screenshots."
  ],

  /* AVATAR：把頭像放進 assets/avatar/，然後修改這個檔名（PNG/JPG/JPEG/WEBP/GIF） */
  avatar: "assets/avatar/avatar.svg",

  /* PROFILE BANNER：把橫幅放進 assets/banner/，然後修改這個檔名 */
  banner: "assets/banner/banner.svg"
};

/* BACKGROUND MUSIC：將音樂檔放入 assets/music/，然後修改下面的檔名與歌名
   若檔案不存在，播放器會顯示提示，不會報錯 */
const music = { file: "assets/music/background.mp3", name: "Background Music", artist: "Your Artist", volume: 0.4 };

/* RECENT ACTIVITY：近期動態（icon 可用 games 的圖片） */
const activity = [
  { icon: "assets/games/minecraft.svg", text: "Playing Minecraft", time: "2 hours ago" },
  { icon: "assets/games/osu.svg",       text: "Played osu!",       time: "Yesterday" },
  { icon: "assets/avatar/avatar.svg",   text: "Updated Profile",   time: "3 days ago" },
  { icon: "assets/games/cs2.svg",       text: "Played Counter-Strike 2", time: "4 days ago" },
  { icon: "assets/badges/collector.svg",text: "Earned Game Collector Lv.3", time: "1 week ago" }
];

/* GAMES：遊戲清單（圖片放 assets/games/）
   recent: true → 出現在 RECENTLY PLAYED；favorite: true → 出現在 FAVORITE GAMES
   progress 是 0~100，可省略 */
const games = [
  { name: "Minecraft",        image: "assets/games/minecraft.svg", hours: 127, lastPlayed: "Today",       progress: 82, recent: true, favorite: true },
  { name: "osu!",             image: "assets/games/osu.svg",       hours: 86,  lastPlayed: "Yesterday",   progress: 64, recent: true, favorite: true },
  { name: "Counter-Strike 2", image: "assets/games/cs2.svg",       hours: 54,  lastPlayed: "3 days ago",  progress: 40, recent: true },
  { name: "Valorant",         image: "assets/games/valorant.svg",  hours: 210, lastPlayed: "Last week",   favorite: true },
  { name: "Hades",            image: "assets/games/hades.svg",     hours: 63,  lastPlayed: "2 weeks ago", favorite: true },
  { name: "Celeste",          image: "assets/games/celeste.svg",   hours: 18,  lastPlayed: "Last month",  favorite: true }
];

/* GAME STATS：四個統計數字，直接改 value 與 label */
const stats = [
  { value: "24",    label: "GAMES" },
  { value: "1,284", label: "HOURS PLAYED" },
  { value: "342",   label: "ACHIEVEMENTS" },
  { value: "78%",   label: "COMPLETION" }
];

/* BADGES：徽章（圖片放 assets/badges/） */
const badges = [
  { name: "Community Badge", level: 5, icon: "assets/badges/community.svg", desc: "Active member of the community." },
  { name: "Game Collector",  level: 3, icon: "assets/badges/collector.svg", desc: "Owns a growing game library." },
  { name: "Developer",       level: 2, icon: "assets/badges/developer.svg", desc: "Builds things for fun." },
  { name: "Streamer",        level: 1, icon: "assets/badges/streamer.svg",  desc: "Shared a few good matches." }
];

/* SCREENSHOTS：把圖片放進 assets/screenshots/，再在這裡新增一行
   （瀏覽器無法自動讀取資料夾，所以要手動列出檔名）支援 PNG/JPG/JPEG/WEBP/GIF */
const screenshots = [
  { title: "Sunset Build",   file: "assets/screenshots/shot1.svg" },
  { title: "Ranked Clutch",  file: "assets/screenshots/shot2.svg" },
  { title: "Fan Artwork",    file: "assets/screenshots/shot3.svg" },
  { title: "Side Project",   file: "assets/screenshots/shot4.svg" },
  { title: "Speedrun Split", file: "assets/screenshots/shot5.svg" },
  { title: "Night Stream",   file: "assets/screenshots/shot6.svg" }
];

/* SOCIAL LINKS：把 url 的 "#" 換成你的網址，user 換成你的帳號 */
const socials = [
  { name: "Discord",   user: "weichia",   desc: "Chat & voice",     url: "#", icon: "D" },
  { name: "Instagram", user: "@weichia",  desc: "Photos & stories", url: "#", icon: "I" },
  { name: "Spotify",   user: "weichia",   desc: "Playlists",        url: "#", icon: "S" },
  { name: "GitHub",    user: "weichia",   desc: "Code & projects",  url: "#", icon: "G" },
  { name: "YouTube",   user: "@weichia",  desc: "Videos",           url: "#", icon: "Y" }
];

/* =====================================================
   渲染程式｜一般不需要修改
   ===================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// Header
const statusColor = { Online: "--online", Away: "--away", Busy: "--busy", Offline: "--offline" };
const sc = `var(${statusColor[profile.status] || "--offline"})`;
$("#avatar").src = profile.avatar;
$("#banner").style.backgroundImage = `url("${profile.banner}")`;
$("#displayName").textContent = profile.displayName;
$("#username").textContent = "@" + profile.username;
$("#status").innerHTML = `<i style="color:${sc}"></i><span style="color:${sc}">${esc(profile.status)}</span>`;
$("#avatarDot").style.background = sc;
$("#shortDesc").textContent = profile.shortDesc;
$("#location").textContent = "📍 " + profile.location;
$("#memberSince").textContent = "Member since " + profile.memberSince;
$("#level").textContent = profile.level;
$("#xpText").textContent = `${profile.xp} / ${profile.xpMax}`;
requestAnimationFrame(() => requestAnimationFrame(() => { $("#xpBar").style.width = Math.min(100, profile.xp / profile.xpMax * 100) + "%"; }));
$("#about").innerHTML = profile.about.map(p => `<p>${esc(p)}</p>`).join("");
document.title = `${profile.displayName} — Player Profile`;

// 各區塊模板
const tpl = {
  activity: (limit) => activity.slice(0, limit).map(a =>
    `<div class="act"><img src="${a.icon}" alt=""><div><b>${esc(a.text)}</b><small>${esc(a.time)}</small></div></div>`).join(""),
  recent: () => games.filter(g => g.recent).map(g =>
    `<div class="rgame"><img src="${g.image}" alt="${esc(g.name)}"><div><b>${esc(g.name)}</b><small>${g.hours} hrs</small><small>Last played ${esc(g.lastPlayed.toLowerCase())}</small>${g.progress != null ? `<div class="mini"><i style="width:${g.progress}%"></i></div>` : ""}</div></div>`).join(""),
  favorites: () => games.filter(g => g.favorite).map(g =>
    `<div class="fgame"><div class="pic"><img src="${g.image}" alt="${esc(g.name)}"></div><div class="t"><b>${esc(g.name)}</b><br><small>${g.hours} hrs played</small></div></div>`).join(""),
  stats: () => stats.map(s => `<div class="stat glass-3"><b>${esc(s.value)}</b><small>${esc(s.label)}</small></div>`).join(""),
  badges: (limit) => badges.slice(0, limit).map(b =>
    `<div class="badge glass-3"><img src="${b.icon}" alt=""><div><b>${esc(b.name)}</b><span>Level ${b.level}</span><small>${esc(b.desc)}</small></div></div>`).join(""),
  showcase: () => screenshots.map(s =>
    `<figure class="shot"><img src="${s.file}" alt="${esc(s.title)}" loading="lazy"><span>${esc(s.title)}</span></figure>`).join(""),
  socials: () => socials.map(s =>
    `<a class="social glass-3" href="${esc(s.url)}" target="_blank" rel="noopener"><div class="ic">${esc(s.icon)}</div><div><b>${esc(s.name)}</b><small>${esc(s.user)}</small><small>${esc(s.desc)}</small></div></a>`).join("")
};
$$("[data-render]").forEach(el => {
  const limit = el.dataset.limit ? +el.dataset.limit : undefined;
  el.innerHTML = tpl[el.dataset.render](limit);
});

// 導覽切換（不重新載入頁面）
$$("#nav button").forEach(btn => btn.addEventListener("click", () => {
  $$("#nav button").forEach(b => b.classList.toggle("active", b === btn));
  $$(".panel").forEach(p => p.classList.toggle("active", p.id === "tab-" + btn.dataset.tab));
  window.scrollTo({ top: 0, behavior: "smooth" });
}));

// 音樂播放器
(function () {
  const audio = new Audio();
  audio.loop = true; audio.volume = music.volume; audio.preload = "none";
  const btn = $("#playBtn"), vol = $("#vol");
  let available = true;
  $("#trackName").textContent = music.name;
  $("#trackArtist").textContent = music.artist;
  vol.value = music.volume * 100;
  const ui = () => { btn.textContent = audio.paused ? "▶" : "❚❚"; };
  const play = () => audio.play().then(ui).catch(() => { ui(); });
  audio.addEventListener("error", () => {
    available = false; $("#trackArtist").textContent = "找不到 " + music.file; ui();
  });
  audio.src = music.file;
  play(); // 嘗試自動播放；被瀏覽器擋下時靜默失敗
  // 自動播放被擋 → 等使用者第一次點擊網站後再播放
  document.addEventListener("pointerdown", function first(e) {
    if (e.target.closest("#player")) return;
    document.removeEventListener("pointerdown", first);
    if (audio.paused && available) play();
  });
  btn.addEventListener("click", () => { if (!available) return; audio.paused ? play() : (audio.pause(), ui()); });
  vol.addEventListener("input", () => { audio.volume = vol.value / 100; });
  audio.addEventListener("play", ui); audio.addEventListener("pause", ui);
})();
