// Filters the Skills section by category (Languages, Web, ML/NLP, Data & Cloud)
// when a filter button is clicked, using each element's data-category attribute
// to match buttons to their corresponding skill group.

const filterButtons = document.querySelectorAll('.filter-btn');
const skillGroups = document.querySelectorAll('.skill-group');

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        filterButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');

        const selected = button.dataset.category;

        skillGroups.forEach((group) => {
            if (selected === 'all' || group.dataset.category === selected) {
                group.style.display = 'block';
            } else {
                group.style.display = 'none';
            }
        });
    });
});

// Rule-based "entity highlighter" — a simplified, client-side stand-in for
// the real NER model (PyTorch + Hugging Face) in the featured project above.
// Instead of guessing based on capitalization, it checks pasted text against
// a small known dictionary (people, orgs, locations, and tech from the
// Skills section) and highlights only real matches, categorized by type.

// The known dictionary of entities this demo can recognize. Each entry has
// the exact text to look for and which category it belongs to. Anything
// typed that isn't in this list simply won't get highlighted — this is a
// simple lookup demo, not real NLP, so it has no tolerance for typos or
// entities it's never seen before.
const entities = [
    { text: 'Eleah Burman', category: 'person' },
    { text: 'Eleah', category: 'person' },
    { text: 'Tokio Marine HCC', category: 'org' },
    { text: 'Northeastern University', category: 'org' },
    { text: 'Northeastern', category: 'org' },
    { text: 'Hugging Face', category: 'org' },
    { text: 'Google', category: 'org' },
    { text: 'Microsoft', category: 'org' },
    { text: 'OpenAI', category: 'org' },
    { text: 'Anthropic', category: 'org' },
    { text: 'Meta', category: 'org' },
    { text: 'New York', category: 'loc' },
    { text: 'NY', category: 'loc' },
    { text: 'LA', category: 'loc'},
    { text: 'Los Angeles', category: 'loc'},
    { text: 'San Francisco', category: 'loc' },
    { text: 'Boston', category: 'loc' },
    { text: 'Python', category: 'tech' },
    { text: 'Java', category: 'tech' },
    { text: 'JavaScript', category: 'tech' },
    { text: 'TypeScript', category: 'tech' },
    { text: 'SQL', category: 'tech' },
    { text: 'React.js', category: 'tech' },
    { text: 'Node.js', category: 'tech' },
    { text: 'Express.js', category: 'tech' },
    { text: 'Vue.js', category: 'tech' },
    { text: 'Flask', category: 'tech' },
    { text: 'FastAPI', category: 'tech' },
    { text: 'Django', category: 'tech' },
    { text: 'PyTorch', category: 'tech' },
    { text: 'spaCy', category: 'tech' },
    { text: 'NLTK', category: 'tech' },
    { text: 'scikit-learn', category: 'tech' },
    { text: 'LightGBM', category: 'tech' },
    { text: 'Claude API', category: 'tech' },
    { text: 'Pandas', category: 'tech' },
    { text: 'MongoDB', category: 'tech' },
    { text: 'PostgreSQL', category: 'tech' },
    { text: 'AWS', category: 'tech' },
];

// Converts user-typed text into safe HTML text (turns "<" into "&lt;", etc.)
// so someone can't break the page or inject a script by typing HTML/JS
// into the textarea. Always escape user input before inserting it into
// the page with innerHTML.
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Escapes characters that have special meaning in a regular expression
// (like the "." in "React.js") so they're treated as literal characters
// to search for, not as regex syntax.
function escapeRegex(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Sort entities longest-first before building the search pattern. This
// matters when one entity's text is fully contained inside another (e.g.
// "Eleah" inside "Eleah Burman") — checking the longer one first means the
// full name gets matched as a whole, instead of "Eleah" matching alone and
// leaving " Burman" behind unmatched.
const sortedEntities = [...entities].sort((a, b) => b.text.length - a.text.length);

// Build one big regex that matches ANY of the entity names at once, using
// "|" (OR) between each escaped name. \b on each side means "only match
// whole words," so "NY" won't accidentally match inside "TinY". The "gi"
// flags mean: g = find every match in the text, not just the first;
// i = ignore uppercase/lowercase when matching.
const entityPattern = new RegExp(
    '\\b(' + sortedEntities.map((entity) => escapeRegex(entity.text)).join('|') + ')\\b',
    'gi'
);

// Given a piece of matched text (e.g. "python" typed lowercase), find which
// category it belongs to by comparing against the dictionary — case-
// insensitively, since someone might not type it with the exact casing
// shown in the dictionary above.
function findCategory(matchedText) {
    const lowerMatch = matchedText.toLowerCase();
    const found = entities.find((entity) => entity.text.toLowerCase() === lowerMatch);
    return found ? found.category : null;
}

// Takes the raw text someone typed, escapes it for safety, then replaces
// every entity match with the same text wrapped in a <mark> tag carrying
// a category-specific class (e.g. entity-person), which CSS then colors.
function highlightEntities(text) {
    const safeText = escapeHtml(text);
    return safeText.replace(entityPattern, (match) => {
        const category = findCategory(match);
        return `<mark class="entity-${category}">${match}</mark>`;
    });
}

// Grab references to the textarea (where someone types) and the output
// div (where the highlighted result gets displayed).
const inputDemo = document.getElementById('input-demo');
const highlightOutput = document.getElementById('highlight-output');

// Every time the text in the textarea changes (on each keystroke), re-run
// the highlighter and update the output div with the new result — this is
// what makes the highlighting feel "live" instead of needing a submit button.
inputDemo.addEventListener('input', () => {
    highlightOutput.innerHTML = highlightEntities(inputDemo.value);
});