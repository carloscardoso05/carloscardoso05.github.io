---
title: "RUBot"
summary: "A Telegram bot for UFPA's university restaurant that delivers daily and weekly menus."
date: 2025-09-09
draft: false
tags: ["NestJS", "Web Scraping", "TypeScript", "Node.js"]
---

## Summary

**RUBot** is a Telegram bot built with **NestJS** that delivers the daily and weekly menu of UFPA’s university restaurant.  
It scrapes the official RU website, formats the menu, and sends it through a user-friendly Telegram interface.  
The project also exposes a private RESTful API for retrieving menus in JSON format.

{{< button href="<https://t.me/rub_pa_bot>" target="_blank" >}}
Try it here
{{< /button >}}

GitHub repository:

{{< github repo="carloscardoso05/rubjs" showThumbnail=false >}}

---

## Problem & Motivation

At UFPA, the official university restaurant (RU) publishes its menu only on a static web page, which is not mobile-friendly and can be cumbersome for students to access daily.  
**RUBot** was created to provide an easier way for students to check the menu through Telegram, a tool most already use daily.

---

## Features

{{< figure
    src="rubot-hoje.png"
    alt="Chat with the RUBot displaying the daily menu"
    caption="RUBot answering the `/hoje` command showing the daily menu"
    >}}

{{< figure
    src="rubot-semana.png"
    alt="Chat with the RUBot displaying the weekly menu"
    caption="RUBot answering the `/semana` command showing the weekly menu"
    >}}

### Telegram Bot

- Built with [Telegraf](https://telegraf.js.org/) and [nestjs-telegraf](https://github.com/bukhalo/nestjs-telegraf).
- Commands:
  - `/hoje` → Returns today’s menu.  
  - `/semana` → Returns the full week’s menu.  

### Web Scraping

- Uses [Cheerio](https://cheerio.js.org/) to extract menus directly from UFPA’s RU website.  
- Formats meals with emojis for clarity (main dish, vegetarian option, side dishes).  

### REST API

- Provides programmatic access to menus in JSON format:
  - `/hoje` → Today’s menu.  
  - `/semana` → Weekly menu.  

### Security & Reliability

- Implements rate limiting with `telegraf-ratelimit`.  
- Includes error handling for scraping failures.  

---

## Tech Stack

- **Language:** TypeScript  
- **Framework:** [NestJS](https://nestjs.com)  
- **Scraping:** [Cheerio](https://cheerio.js.org/)  
- **Telegram integration:** [Telegraf](https://telegraf.js.org/), [nestjs-telegraf](https://github.com/bukhalo/nestjs-telegraf)  
- **Tooling:** ESLint + Prettier, Jest (unit & e2e tests), dotenv  

---

## Project Structure

The bot follows a modular architecture within a NestJS application:

- `src/scraper/` → Extracts menus from the RU website.  
- `src/formatter/` → Formats scraped data for Telegram.  
- `src/bot/` → Handles commands and Telegram integration.  
- `src/app.controller.ts` → REST API endpoints for menus.  

**User:** `/semana`  
**Bot:** Lists the menu for each weekday with emojis.

<!-- ---

## Results & Impact

- Simplified menu access for UFPA students (currently ~100+ daily users).  
- Improved accessibility compared to the official RU page.  
- Served as a practical exercise in **NestJS, web scraping, API design, and Telegram bot development**.   -->

---

## Installation & Running

### Prerequisites

- Node.js 18+ and npm.  
- Telegram bot token (via [BotFather](https://core.telegram.org/bots/tutorial)).  

### Setup

1. Create a `.env` file in the root:

```env
TELEGRAM_KEY=<your_bot_token>
```

2. Install dependencies:

```bash
npm install
```

3. Run in development:

```bash
npm run start:dev
```

4. Run in production:

```bash
npm run start:prod
```

### Testing

```bash
npm run test
```

---

## Contributing

Contributions, issues, and feature requests are welcome.
Please fork the repository and open a pull request.

---

## License

This project is licensed under the MIT License.
