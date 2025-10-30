// 🚀 Auto Deploy Angular Project to GitHub Pages
// Mohamed Hatem - Automated Deployment Script

import { execSync } from "child_process";
import fetch from "node-fetch";
import fs from "fs";

const REPO = "Portfolio"; // 👈 اسم المستودع
const USER = "M0hatem2";  // 👈 اسم المستخدم على GitHub
const TOKEN = process.env.GITHUB_TOKEN;

// GitHub API URL
const API_URL = `https://api.github.com/repos/${USER}/${REPO}`;

// Helper to run terminal commands
const run = (cmd) => {
  console.log(`\n🧩 Running: ${cmd}`);
  execSync(cmd, { stdio: "inherit" });
};

// ========== 1. Build Angular project ==========
run(`ng build --output-path docs --base-href /${REPO}/`);

// ========== 2. Initialize Git & Push ==========
if (!fs.existsSync(".git")) {
  run(`git init`);
  run(`git branch -M main`);
  run(`git remote add origin https://github.com/${USER}/${REPO}.git`);
}

run(`git add .`);
run(`git commit -m "Auto deploy to GitHub Pages" || echo "No changes to commit"`);
run(`git push -u origin main`);

// ========== 3. Make Repo Public ==========
await fetch(API_URL, {
  method: "PATCH",
  headers: {
    "Authorization": `token ${TOKEN}`,
    "Accept": "application/vnd.github+json"
  },
  body: JSON.stringify({ private: false })
});
console.log("✅ Repository is now Public!");

// ========== 4. Enable GitHub Pages ==========
await fetch(`${API_URL}/pages`, {
  method: "POST",
  headers: {
    "Authorization": `token ${TOKEN}`,
    "Accept": "application/vnd.github+json"
  },
  body: JSON.stringify({
    source: {
      branch: "main",
      path: "/docs"
    }
  })
});
console.log("🌐 GitHub Pages Enabled Successfully!");

console.log(`\n🎉 Done! Your site will be live soon at:
👉 https://${USER}.github.io/${REPO}/`);
