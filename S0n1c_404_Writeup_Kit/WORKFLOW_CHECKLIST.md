# S0n1c_404 — Repeatable Write-up Workflow

Use this checklist every time a new CTF or authorized lab is solved.

## A. During testing
- [ ] Confirm the target is an authorized CTF/lab.
- [ ] Start with the challenge description and visible application features.
- [ ] Map endpoints, authentication states, and workflows.
- [ ] Capture relevant requests and responses in Burp.
- [ ] Save screenshots immediately with ordered names: `01-recon.png`, `02-baseline.png`, `03-finding.png`, `04-impact.png`.
- [ ] Record the exact observation, not just a conclusion.
- [ ] Keep a private note of the full reproduction sequence.

## B. Build the narrative
Use a first-person chronological story:
1. **I started by…** map the application and identify features.
2. **I tested…** establish normal behavior.
3. **I noticed…** document the anomaly.
4. **I hypothesized…** explain the likely cause.
5. **I verified…** show the minimum evidence needed to support the finding.
6. **I concluded…** explain root cause, impact, and remediation.

Do not write as though every hypothesis is confirmed. Clearly distinguish observations, hypotheses, and verified conclusions.

## C. Prepare the public edition
- [ ] Use `S0n1c_404` as the author handle.
- [ ] Embed screenshots using relative paths, e.g. `![Caption](images/03-finding.png)`.
- [ ] Add captions that explain what each screenshot proves.
- [ ] Redact session cookies, API keys, passwords, private data, and other bearer tokens.
- [ ] Blur the flag or final secret if you want to avoid spoilers.
- [ ] Omit the final copy-paste payload or exact reproduction sequence when you do not want the article to be a turnkey exploit guide.
- [ ] Link only to the platform and relevant official educational references.
- [ ] Check every link and every image before publishing.

## D. Make the ZIP easy to open
Recommended structure:

```text
Challenge-Name-Writeup/
├── README.md
├── PUBLISHING_NOTES.md
└── images/
    ├── 01-recon.png
    ├── 02-baseline.png
    ├── 03-finding.png
    └── 04-impact.png
```

The first thing readers should see after extracting the ZIP is `README.md`. Markdown images display automatically on GitHub and most Markdown previewers when the image paths are relative. Some desktop previewers do not render local images; in that case, open `README.md` in VS Code with a Markdown preview, or view it on GitHub.

## E. Keep two editions when useful
- **Private notes:** full reproduction details for your own authorized lab records.
- **Public write-up:** screenshots with secrets redacted, no live tokens, and only as much exploitation detail as you intend to publish.

Never include a valid session cookie in either edition longer than necessary; invalidate the session and redact the token.
