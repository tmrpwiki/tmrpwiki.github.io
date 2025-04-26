function relocateSideHolder() {
    const sideHolder = document.querySelector('.sideHolder');
    const mobilePlaceholder = document.querySelector('.mobile-placeholder');

    if (window.innerWidth < 1450) {
        if (!mobilePlaceholder.contains(sideHolder)) {
            mobilePlaceholder.appendChild(sideHolder);
        }
    } else {
        const content = document.querySelector('.content');
        content.appendChild(sideHolder);
    }
}

window.addEventListener('DOMContentLoaded', relocateSideHolder);
window.addEventListener('resize', relocateSideHolder);