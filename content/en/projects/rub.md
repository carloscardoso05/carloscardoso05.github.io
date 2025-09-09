---
title: "RUBot"
summary: "A Telegram bot for UFPA's university restaurant that delivers daily and weekly menus."
date: 2025-09-09
draft: false
tags: ["NestJS", "Web Scraping", "TypeScript", "Node.js"]
---

# RUBot

**RUBot** is a Telegram bot built with **NestJS** that delivers the daily and weekly menu of UFPA’s university restaurant. It scrapes the official RU website, formats the menu, and sends it through a user-friendly Telegram interface.  

The project also includes a RESTful API for retrieving menus in JSON format (currently private).

{{< github repo="carloscardoso05/rubjs" showThumbnail=false >}}

---

## Features

### Telegram Bot
- Built with [Telegraf](https://telegraf.js.org/) and [nestjs-telegraf](https://github.com/bukhalo/nestjs-telegraf) for seamless Telegram API integration.
- Commands:
  - `/hoje` → Returns today’s menu.  
  - `/semana` → Returns the menu for the entire week.

### Web Scraping
- Uses [Cheerio](https://cheerio.js.org/) to extract daily and weekly menus directly from UFPA’s RU website.
- Automatically formats meals with icons highlighting the main dish, vegetarian option, and side dishes.

### REST API
- Provides endpoints for programmatic access to menus:
  - `/hoje` → Today’s menu in JSON format.  
  - `/semana` → Weekly menu in JSON format.  

### Security & Reliability
- Prevents abuse with rate limiting using `telegraf-ratelimit`.
- Includes basic error handling for scraping failures.

---

## Tech Stack

- **Programming Language:** TypeScript  
- **Backend Framework:** [NestJS](https://nestjs.com)  
- **Scraping:** [Cheerio](https://cheerio.js.org/)  
- **Messaging:** [Telegraf](https://telegraf.js.org/), [nestjs-telegraf](https://github.com/bukhalo/nestjs-telegraf)  
- **Tools:**  
  - ESLint + Prettier (linting and formatting)  
  - Jest (unit and e2e testing)  
  - dotenv (environment configuration)

---

## Project Structure

- `src/scraper/` → Extracts menus from the RU website.  
- `src/formatter/` → Formats scraped data into readable messages for Telegram.  
- `src/bot/` → Handles Telegram commands and bot interactions.  
- `src/app.controller.ts` → REST API endpoints for menus.

---

## Example Interaction

**User:** `/hoje`  
**Bot:**  
```

🍛 Today’s Menu:

* Main dish: Chicken with rice
* Vegetarian: Lentil stew
* Side dishes: Salad, beans

````

**User:** `/semana`  
**Bot:** Lists the menu for each weekday with icons and formatting.

---

## Installation & Running

### Prerequisites
- Node.js 18+ and npm installed.
- Telegram bot token (create one via [Telegram Bot Tutorial](https://core.telegram.org/bots/tutorial)).

### Setup
1. Create a `.env` file in the project root:

```env
TELEGRAM_KEY=<your_bot_token>
````

2. Install dependencies:

```bash
npm install
```

3. Run in development mode:

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

Contributions, issues, and feature requests are welcome! Please fork the repository and submit a pull request.

---

## License

This project is licensed under the MIT License.