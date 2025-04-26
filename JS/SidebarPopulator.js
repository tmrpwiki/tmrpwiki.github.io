function populate() {
    console.log("sdadas");

    const insertHTML = (selector, html) => {
        document.querySelector(selector).innerHTML += html;
        document.querySelector(selector+"Mobile").innerHTML += html;
    };

    if (preclassic.length > 0) {
        Promise.all(preclassic.map(version => fetch("../Versions/" + version)
            .then(response => response.json())))
            .then(dataArray => {
                dataArray.forEach(data => {
                    insertHTML("#preclassic", `<li><a href="version.html?ver=${data.shortName}"><i class="bi bi-dot"></i> ${data.shortName}</a></li>`);
                });
            })
            .catch(error => console.error('Error loading versions:', error));
    } else {
        insertHTML("#preclassic", `<li><div class="empty"><i class="bi bi-ban"></i> Empty </div></li>`);
    }

    if (classic.length > 0) {
        Promise.all(classic.map(version => fetch("../Versions/" + version)
            .then(response => response.json())))
            .then(dataArray => {
                dataArray.forEach(data => {
                    insertHTML("#classic", `<li><a href="version.html?ver=${data.shortName}"><i class="bi bi-dot"></i> ${data.shortName}</a></li>`);
                });
            })
            .catch(error => console.error('Error loading versions:', error));
    } else {
        insertHTML("#classic", `<li><div class="empty"><i class="bi bi-ban"></i> Empty </div></li>`);
    }

    if (indev.length > 0) {
        Promise.all(indev.map(version => fetch("../Versions/" + version)
            .then(response => response.json())))
            .then(dataArray => {
                dataArray.forEach(data => {
                    insertHTML("#indev", `<li><a href="version.html?ver=${data.shortName}"><i class="bi bi-dot"></i> ${data.shortName}</a></li>`);
                });
            })
            .catch(error => console.error('Error loading versions:', error));
    } else {
        insertHTML("#indev", `<li><div class="empty"><i class="bi bi-ban"></i> Empty </div></li>`);
    }

    if (infdev.length > 0) {
        Promise.all(infdev.map(version => fetch("../Versions/" + version)
            .then(response => response.json())))
            .then(dataArray => {
                dataArray.forEach(data => {
                    insertHTML("#infdev", `<li><a href="version.html?ver=${data.shortName}"><i class="bi bi-dot"></i> ${data.shortName}</a></li>`);
                });
            })
            .catch(error => console.error('Error loading versions:', error));
    } else {
        insertHTML("#infdev", `<li><div class="empty"><i class="bi bi-ban"></i> Empty </div></li>`);
    }

    if (alpha.length > 0) {
        Promise.all(alpha.map(version => fetch("../Versions/" + version)
            .then(response => response.json())))
            .then(dataArray => {
                dataArray.forEach(data => {
                    insertHTML("#alpha", `<li><a href="version.html?ver=${data.shortName}"><i class="bi bi-dot"></i> ${data.shortName}</a></li>`);
                });
            })
            .catch(error => console.error('Error loading versions:', error));
    } else {
        insertHTML("#alpha", `<li><div class="empty"><i class="bi bi-ban"></i> Empty </div></li>`);
    }

    if (beta.length > 0) {
        Promise.all(beta.map(version => fetch("../Versions/" + version)
            .then(response => response.json())))
            .then(dataArray => {
                dataArray.forEach(data => {
                    insertHTML("#beta", `<li><a href="version.html?ver=${data.shortName}"><i class="bi bi-dot"></i> ${data.shortName}</a></li>`);
                });
            })
            .catch(error => console.error('Error loading versions:', error));
    } else {
        insertHTML("#beta", `<li><div class="empty"><i class="bi bi-ban"></i> Empty </div></li>`);
    }

    if (release.length > 0) {
        Promise.all(release.map(version => fetch("../Versions/" + version)
            .then(response => response.json())))
            .then(dataArray => {
                dataArray.forEach(data => {
                    insertHTML("#release", `<li><a href="version.html?ver=${data.shortName}"><i class="bi bi-dot"></i> ${data.shortName}</a></li>`);
                });
            })
            .catch(error => console.error('Error loading versions:', error));
    } else {
        insertHTML("#release", `<li><div class="empty"><i class="bi bi-ban"></i> Empty </div></li>`);
    }
}

// random button
if (versions.length > 0) {
    version = Math.floor(Math.random() * versions.length)
    fetch("../Versions/" + versions[version])
        .then(response => response.json())
        .then(data => {
            let buttons = document.querySelectorAll(".randomVerButton");
            buttons.forEach(button => {
                button.href = "version.html?ver=" + data.shortName;
            });
        })
        .catch(error => console.error('Error loading versions:', error));
}
