# BuzzTrail Presentations

AI-generated Slidev presentations for BuzzTrail demos.

## How It Works

This repository hosts dynamically generated presentation decks using [Slidev](https://sli.dev/). Each deck is created on-demand via the BuzzTrail API and published to GitHub Pages.

## Structure

```
decks/
├── a1b2-c3d4-e5f6/     # Each deck has a unique ID
│   ├── slides.md       # Slidev markdown content
│   └── package.json    # Slidev configuration
├── x7y8-z9w0-q1r2/
└── ...
```

## Accessing Decks

Each deck is available at:
```
https://buzztrail.github.io/buzztrail-presentations/{deckId}/
```

For example:
- `https://buzztrail.github.io/buzztrail-presentations/a1b2-c3d4-e5f6/`

## Technology

- **Slidev**: Presentation framework for developers
- **GitHub Pages**: Free static hosting with CDN
- **GitHub Actions**: Automatic build and deployment

## License

© BuzzTrail - All Rights Reserved
