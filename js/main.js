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