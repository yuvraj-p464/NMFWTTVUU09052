:root {
  --bg: #0f172a;
  --panel: #111827;
  --text: #e5e7eb;
  --muted: #9ca3af;
  --accent: #22c55e;
  --accent2: #38bdf8;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
  overflow: hidden;
}

.app {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  padding: 16px;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
}

header h1 {
  font-size: 18px;
  color: var(--accent2);
  margin: 0;
}

.deck {
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 1200px;
  overflow: hidden;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: translateX(40px) scale(0.96);
  transition: opacity 0.6s ease, transform 0.6s ease;
  pointer-events: none;
  padding: 20px;
  box-sizing: border-box;
}

.slide.active {
  opacity: 1;
  transform: translateX(0) scale(1);
  pointer-events: auto;
}

h2 {
  color: var(--accent2);
  margin-top: 0;
}

ul {
  margin: 0;
  padding-left: 20px;
}

footer {
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn {
  padding: 8px 14px;
  background: var(--accent2);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  color: var(--bg);
  transition: transform 0.2s, background 0.3s;
}

.btn:hover:not(:disabled) {
  transform: scale(1.05);
  background: var(--accent);
}

.btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

#step {
  font-size: 14px;
  color: var(--muted);
}

.progress {
  flex: 1;
  height: 6px;
  background: var(--panel);
  border-radius: 3px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  width: 0%;
  background: var(--accent2);
  transition: width 0.4s ease;
}