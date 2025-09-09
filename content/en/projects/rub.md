---
title: "RUBot"
summary: "A Telegram Bot for UFPA's universitary restaurant"
date: 2025-09-09
draft: false
tags: ["NestJS", "Web Scraping", "TypeScript", "Node.js"]

---

## Overview

**RUBot** is a Telegram bot built with **NestJS** that provides the weekly and daily menu of the universitary restaurant at **UFPA** (Universidade Federal do Pará).  
It automatically scrapes the official RU website, formats the menu, and delivers it through a simple and user-friendly Telegram interface.

It also counts with a RESTful API that provides the complete the daily or weekly menu on JSON format, but it's not publicly available yet.

{{< github repo="carloscardoso05/rubjs" showThumbnail=false >}}

## Features

- **Telegram Bot Integration**: Built with [Telegraf](https://telegraf.js.org/) and [nestjs-telegraf](https://github.com/bukhalo/nestjs-telegraf) for seamless Telegram API communication. Telegram commands:
  - `/hoje` → Returns today’s menu.  
  - `/semana` → Returns the entire week’s menu.
- **Web Scraping**: Uses [Cheerio](https://cheerio.js.org/) to extract daily and weekly menus directly from UFPA’s RU website.  
- **Rate Limiting**: Prevents abuse with request throttling using `telegraf-ratelimit`.
- **REST API Endpoints**:  
  - `/hoje` → Returns today’s menu.  
  - `/semana` → Returns the entire week’s menu.
- **Formatted Messages**: Meals are displayed with icons, highlighting *main dish*, *vegetarian option*, and *side dishes*.  

## Tech Stack

- **Programming language**: TypeScript
- **Backend Framework**: [NestJS](https://nestjs.com)
- **Scraping**: [Cheerio](https://cheerio.js.org/)  
- **Messaging**: [Telegraf](https://telegraf.js.org/), [nestjs-telegraf](https://github.com/bukhalo/nestjs-telegraf)  
- **Other Tools**:  
  - ESLint + Prettier (linting/formatting)  
  - Jest (unit and e2e testing)  
  - dotenv (environment configuration)  

## Project Structure

- `src/scraper/` → Handles menu extraction from the RU website.  
- `src/formatter/` → Formats scraped data into structured, readable text for Telegram.  
- `src/bot/` → Manages Telegram commands and bot interactions.  
- `src/app.controller.ts` → REST endpoints for fetching menus programmatically.  

## Example Interaction

- User sends `/hoje` → Bot responds with today’s lunch and dinner options.  
- User sends `/semana` → Bot lists the menu for each weekday.  

## Installation & Run

If you want to reproduce this project, you first need to create a Telegram bot. Acess this tutorial for more information: [https://core.telegram.org/bots/tutorial](https://core.telegram.org/bots/tutorial).

You also need to create a `.env` file at the root folder, it must contain the key `TELEGRAM_KEY` with yout bot key.

```.env
TELEGRAM_KEY=<your_key>
```

After this setup, you can install the dependencies and run the project.

```bash
# Install dependencies
npm install

# Development mode
npm run start:dev

# Production
npm run start:prod
