🧬 Metabolic Calculator v1.0
An advanced, single-file interactive web application designed to track, analyze, and forecast metabolic status, energy balance, glycemic load, and continuous insulin response.

Created and maintained by HVA2026.

🚀 Key Features
Body Composition & TDEE Analysis: Estimates body fat percentage and lean mass using biological parameters (including the U.S. Navy body fat formula based on waist, neck, and hip measurements) and calculates Total Daily Energy Expenditure (TDEE) across adjustable activity multipliers.

Strategic Goal Tracking: Supports dynamic weekly weight-loss pacing (1%, 0.75%, 0.5%, or 0.25% body weight loss per week), weight maintenance, or custom daily calorie deficit/surplus targets.

Timestamped Meal Logging: Log individual meals with custom timestamps, tracking carbohydrates, protein, and fat throughout the day.

Calorie Budget Ledger: Clear financial-style ledger comparing your target eating budget against your ingested food load and remaining capacity.

mTOR Muscle Protection: Automatically calculates single-meal protein thresholds to support optimal muscle protein synthesis and protection.

Glycemic & Insulin Response Modeling:

Calculates Daily Glycemic Load (GL).

Models Total Insulin Production (I-Tot) and the Digestion Buffer Factor (D).

Computes Cumulative Insulin Peak (I-Peak) and provides real-time metabolic status feedback (e.g., active ketosis vs. insulin buffering).

24-Hour Visual Dynamics Chart: An interactive, scrollable canvas chart mapping out estimated 24-hour continuous insulin and GL curves, complete with a fat-burning threshold line (35 uIU/ml) and a live current-time indicator.

Cumulative History Summary: Review aggregated data across custom date ranges, including total tracked days, energy consumption, cumulative deficit/surplus, estimated fat burned (in kg and liters), and mTOR-active days.

Multilingual Support (i18n): Fully localized interface supporting both Finnish (FI) and English (EN).

Built-in Demo Mode: Pre-loaded mock scenarios to easily demonstrate features and data tracking across different days.

Local Storage Persistence: All data is stored securely and privately in your browser using localStorage.

🛠️ Technology Stack
Single-File Architecture: Pure HTML5, CSS3, and Vanilla JavaScript with zero external build steps, frameworks, or dependencies.

Responsive Design: Mobile-friendly terminal-style dark mode interface optimized for both desktop and mobile screens.

📦 Deployment & Hosting
Because this application is fully self-contained within a single index.html file, deployment is frictionless:

Create a public repository on GitHub.

Upload the index.html file.

Enable GitHub Pages under the repository settings (Settings -> Pages -> branch main/root) to publish it instantly as a live web application.

Alternatively, deploy it effortlessly on static hosting platforms like Vercel or Netlify.

🔒 Data Privacy & Security
- **Privacy by Design**: All calculation data, biological metrics, and meal logs are stored locally in your browser's `localStorage`. No data is ever transmitted to external tracking servers or third-party databases.
- **Restricted Google Drive Sync**: Optional auto-sync utilizes Google OAuth with the strictly limited `drive.file` scope (`https://www.googleapis.com/auth/drive.file`). The app only accesses its own created backup file (`metabolic_calculator_backup.json`) and has **zero access** to any other files or folders in your Google Drive.
- **Zero Third-Party Tracking**: No analytics, tracking pixels, or cookies are used.
- For full details, see the [PRIVACY.md](./PRIVACY.md) document.

📄 Copyright & License
© 2026 HVA2026.
This program is free software: you can redistribute it and/or modify it under the terms of the **GNU General Public License v3.0** as published by the Free Software Foundation.
