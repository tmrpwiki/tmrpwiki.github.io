function populate(){

console.log("sdadas")

if(preclassic.length > 0) {
    for (let version in preclassic) {
        fetch("../Versions/"+versions[version])
            .then(response => response.json())
            .then(data => {
                document.querySelector("#preclassic").innerHTML += '<li> <a href="version.html?ver='+data.shortName+'"><i class="bi bi-dot"></i> '+data.shortName+'</a></li>';
            })
            .catch(error => console.error('Error loading versions:', error));
    }
}
else{
    document.querySelector("#preclassic").innerHTML += '<li><div class="empty"><i class="bi bi-ban"></i> Empty </div></li>';
}

if(classic.length > 0) {
    for (let version in classic) {
        fetch("../Versions/"+versions[version])
            .then(response => response.json())
            .then(data => {
                document.querySelector("#classic").innerHTML += '<li> <a href="version.html?ver='+data.shortName+'"><i class="bi bi-dot"></i> '+data.shortName+'</a></li>';
            })
            .catch(error => console.error('Error loading versions:', error));
    }
}
else{
    document.querySelector("#classic").innerHTML += '<li><div class="empty"><i class="bi bi-ban"></i> Empty </div></li>';
}

if(indev.length > 0) {
    for (let version in indev) {
        fetch("../Versions/"+versions[version])
            .then(response => response.json())
            .then(data => {
                document.querySelector("#indev").innerHTML += '<li> <a href="version.html?ver='+data.shortName+'"><i class="bi bi-dot"></i> '+data.shortName+'</a></li>';
            })
            .catch(error => console.error('Error loading versions:', error));
    }
}
else{
    document.querySelector("#indev").innerHTML += '<li><div class="empty"><i class="bi bi-ban"></i> Empty </div></li>';
}

if(infdev.length > 0) {
    for (let version in infdev) {
        fetch("../Versions/"+versions[version])
            .then(response => response.json())
            .then(data => {
                document.querySelector("#infdev").innerHTML += '<li> <a href="version.html?ver='+data.shortName+'"><i class="bi bi-dot"></i> '+data.shortName+'</a></li>';
            })
            .catch(error => console.error('Error loading versions:', error));
    }
}
else{
    document.querySelector("#infdev").innerHTML += '<li><div class="empty"><i class="bi bi-ban"></i> Empty </div></li>';
}

if(alpha.length > 0) {
    for (let version in alpha) {
        fetch("../Versions/"+versions[version])
            .then(response => response.json())
            .then(data => {
                document.querySelector("#alpha").innerHTML += '<li> <a href="version.html?ver='+data.shortName+'"><i class="bi bi-dot"></i> '+data.shortName+'</a></li>';
            })
            .catch(error => console.error('Error loading versions:', error));
    }
}
else{
    document.querySelector("#alpha").innerHTML += '<li><div class="empty"><i class="bi bi-ban"></i> Empty </div></li>';
}

if(beta.length > 0) {
    for (let version in beta) {
        fetch("../Versions/"+versions[version])
            .then(response => response.json())
            .then(data => {
                document.querySelector("#beta").innerHTML += '<li> <a href="version.html?ver='+data.shortName+'"><i class="bi bi-dot"></i> '+data.shortName+'</a></li>';
            })
            .catch(error => console.error('Error loading versions:', error));
    }
}
else{
    document.querySelector("#beta").innerHTML += '<li><div class="empty"><i class="bi bi-ban"></i> Empty </div></li>';
}

if(release.length > 0) {
    for (let version in release) {
        fetch("../Versions/"+versions[version])
            .then(response => response.json())
            .then(data => {
                document.querySelector("#release").innerHTML += '<li> <a href="version.html?ver='+data.shortName+'"><i class="bi bi-dot"></i> '+data.shortName+'</a></li>';
            })
            .catch(error => console.error('Error loading versions:', error));
    }
}
else{
    document.querySelector("#release").innerHTML += '<li><div class="empty"><i class="bi bi-ban"></i> Empty </div></li>';
}
}

//random button
if(versions.length > 0) {
    version = Math.floor(Math.random() * versions.length)
    fetch("../Versions/"+versions[version])
        .then(response => response.json())
        .then(data => {
            document.querySelector("#randomVerButton").href = "version.html?ver="+data.shortName;
            //document.querySelector("#release").innerHTML += '<li> <a href="version.html?ver='++'"><i class="bi bi-dot"></i> '+data.shortName+'</a></li>';
        })
        .catch(error => console.error('Error loading versions:', error));

}