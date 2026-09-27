# Eleah Burman — Personal Homepage (Project 1)

## Author
Eleah Burman

## Class Link
CS5610 Web Development — Northeastern University, taught by John Alexis Guerra Gómez
TODO: add the course site/syllabus link here

## Project Objective
A personal, tech-forward portfolio homepage built with vanilla HTML5, CSS3, and ES6 modules — no frameworks, no backend. The site targets recruiters and hiring managers in ML/NLP and software engineering, presenting my background, real projects, and an interactive JavaScript demo that reflects the NLP work I actually build.

## Screenshot
TODO: add a screenshot of the deployed site once index.html/projects.html/resume.html are built and live (this is the final-site screenshot the rubric asks for — separate from the design mockup below).

## Instructions to Build
```bash
git clone https://github.com/EleahBurman/eleah-burman-project-1.git
cd eleah-burman-project-1
npm install
```
Open `index.html` in a browser, or serve locally with a static server of your choice.
TODO: update this once you know your actual deploy/run steps (e.g. live-server, GitHub Pages).

---

## Design Document

### Project description
A tech-forward personal homepage supporting my Summer 2027 internship and full-time SWE/ML search. The site presents my background (Northeastern M.S. CS, current SWE role at Tokio Marine HCC, B.F.A. from NYU) and real technical projects to recruiters and hiring managers at quant firms, AI labs, and tech companies. Built with vanilla HTML5/CSS3/ES6+, deployed publicly, with an interactive JS feature (an entity highlighter) that echoes my in-progress NER fine-tuning project.

### User Personas

**1. Amelia, Technical Recruiter at an AI Lab**
Looks through a many portfolios per day and usually spends less than 90 seconds on each one. She wants to quickly see relevant coursework, projects, and contact information.

**2. Mark, Engineering Manager at a Quant Trading Firm**
Cares more about the actual work than flashy design. He wants clear project descriptions, the technologies used, links to the code, and a resume.

**3. Brad, Fellow Northeastern Student / Networking Contact**
Found the site through class or LinkedIn. Wants to see what Eleah is currently working on and potentially connect or collaborate.

### User Stories
- As a technical recruiter, I want to see Eleah's current role and the types of positions she's looking for right away, so I can quickly decide if she's a potential fit.
- As a hiring manager, I want to click on a project and see what technologies were used and a link to the repository, so I can get a better idea of her experience.
- As a mobile visitor, I want the website to work well on my phone, so I can easily look through it without the layout being difficult to use.
- As a recruiter, I want to be able to download Eleah's resume, so I don't have to contact her just to ask for it.
- As a networking contact, I want to see what Eleah is currently working on, so I have an idea of what to talk to her about.

### Design mockups
Site map — 3 pages:
- `index.html` (hand-coded) — hero, about, skills
- `projects.html` (hand-coded) — featured projects, currently-building NER project, interactive entity-highlighter demo
- `resume.html` (AI-generated, see below) — resume download, education, contact

![Homepage mockup](images/homepage-mockup.svg)

---

## Use of GenAI
TODO: fill in once the AI-generated page (resume.html) is built. Document: model name + version, the prompts used, and how the output was reviewed/edited.

## License
MIT — see [LICENSE](./LICENSE)