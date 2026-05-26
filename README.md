# Arbor

A simple and lightweight open-source link hub made with plain HTML, CSS, and JavaScript.

Arbor lets you display a clean list of profile links, social accounts, websites, or any other URLs using data from a JSON file. No frameworks, no dependencies, and easy to customize.

The links given on the GitHub Pages are mere examples, the author doesn't have any affiliantion to any of them.
Their respective names, logos, links and domains remain their properties and subject to respective licenses.
This repo simply provides a structured, easy and organised way to present the links.

---

## Features

- Lightweight and fast
- No frameworks or build tools required
- Fully customizable
- Loads links dynamically from JSON
- Responsive design
- Open-source and forkable
- Beginner-friendly codebase

---

## Preview

Arbor displays a centered list of cards containing:

- An icon/image
- A clickable link
- Responsive layout for desktop and mobile

---

# Project Structure

```txt
arbor/
│
├── index.html
├── style.css
├── script.js
│
├── assets/
│   └── links.json
│
├── LICENSE
└── README.md
```

---

# How It Works

The application fetches data from:

```txt
/assets/links.json
```

Each object inside the JSON file is rendered as a link card using JavaScript.

Example:

```json
{
    "0": {
        "icon": "icon.png",
        "text": "@example",
        "link": "https://example.com"
    }
}
```

---

# Installation

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/arbor.git
```

## 2. Open the Project

```bash
cd arbor
```

## 3. Run a Local Server

Because the project uses `fetch()`, opening the HTML file directly may not work in some browsers.

You should run a local server instead.

### Using Python

```bash
python -m http.server
```

Then open:

```txt
http://localhost:8000
```

### Using VS Code Live Server

Install the Live Server extension and click:

```txt
Go Live
```

---

# How To Use

## Edit Your Links

Open:

```txt
/assets/links.json
```

Replace the example entries with your own:

```json
{
    "0": {
        "icon": "./assets/github.png",
        "text": "@yourname",
        "link": "https://github.com/yourname"
    }
}
```

---

## Add More Links

Simply create more numbered objects:

```json
{
    "0": {
        "icon": "./assets/github.png",
        "text": "@github",
        "link": "https://github.com/github"
    },

    "1": {
        "icon": "./assets/twitter.png",
        "text": "@twitter",
        "link": "https://twitter.com/twitter"
    }
}
```

---

## Customize The Style

Edit:

```txt
style.css
```

You can customize:

- Colors
- Fonts
- Layout
- Borders
- Sizes
- Spacing
- Responsive behavior

---

# Customization Ideas

You can easily extend Arbor with:

- Dark mode
- Animations
- Hover effects
- Search bar
- Categories
- Link statistics
- Themes
- Profile header
- Social media integrations

---

# Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

---

# Browser Support

Arbor works in all modern browsers including:

- Chrome
- Firefox
- Edge
- Safari

---

# Open Source

This project is licensed under the MIT License.

You are free to:

- Use
- Modify
- Fork
- Publish
- Distribute

As long as the original license is included.

---

# Forking

Since Arbor is fully open-source and publicly available on GitHub, anyone can fork the repository and build their own version.

If you create something cool with it, consider sharing it.

---

# Contributing

While contributions, issues, and feature requests are not accepted, since the project is just for funny and personal revision of the web development.

But feel free to:

1. Fork the repository
2. Make your changes

---

# License

MIT License © 2026 mr-known-random

See the `LICENSE` file for more information.

---

# Future Plans

Possible future improvements:

- Admin panel
- Drag-and-drop link ordering
- Theme presets
- Better mobile UI
- Markdown support
- Link analytics
- JSON validation

---

# Author

Created by **mr-known-random**.