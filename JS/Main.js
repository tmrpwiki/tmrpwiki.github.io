const getParams = new URLSearchParams(window.location.search);
const loadedVersion = getParams.get('ver');
LoadDB();


function LoadDB(){
    for (let version in versions) {
        fetch("../Versions/"+versions[version])
            .then(response => response.json())
            .then(data => {
                if(data.shortName != loadedVersion) return;
                SetupPage(data.shortName, data.fullName, data.versionDescription, data.additions, data.changes, data.fixes, data.bugs, data.releaseDate, data.mainImage, data.downloadMethod, data.downloadLink, data.versionTags, data.media, data.previousVersion, data.nextVersion, data.trivia, data.remakeUpdateDate, data.videos);
            })
            .catch(error => console.error('Error loading versions:', error));
    }
}

function SetupPage(shortName, fullName, description, additions, changes, fixes, bugs, releaseDate, mainImage, downloadMethod, downloadLink, versionTags, media, previousVersion, nextVersion, trivia, remakeUpdateDate, videos) {
    document.querySelector(".versionTitle").innerHTML = parseContent(fullName);
    document.querySelector(".versionDescription").innerHTML = description;
    document.querySelector(".shortVersion").innerHTML = shortName;
    document.querySelector(".releaseDate").innerHTML = "Release Date: "+releaseDate;
    document.querySelector(".remakeUpdate").innerHTML = "Last Remake Update: "+(remakeUpdateDate=="" ? "N/A" : remakeUpdateDate);
    document.querySelector(".prevVer").innerHTML = "Previous Version: "+ getVersionLink(previousVersion);
    document.querySelector(".nextVer").innerHTML = "Next Version: "+ getVersionLink(nextVersion);
    document.querySelector(".infoBoxImage").src = "Resources/"+shortName+"/"+mainImage;
    for (let i in versionTags) {
        switch (versionTags[i]) {
            case "dev":
                document.querySelector(".versionTagHolder").innerHTML += '<div class="versionTag">\n' +
                    '        <img src="Resources/dirt_slab.png">\n' +
                    '        <div class="tagName">Development Version</div>\n' +
                    '        <div class="tagDescription">This version is a development build of Minecraft not intended to be publicly released.</div>\n' +
                    '      </div><br>';
                break;
            case "tmrp":
                document.querySelector(".versionTagHolder").innerHTML += '<div class="versionTag">\n' +
                    '        <img src="Resources/tmrp.png">\n' +
                    '        <div class="tagName">Recreated Version</div>\n' +
                    '        <div class="tagDescription">The original version is lost, however a recreation of it is available on the TMRP repo.</div>\n' +
                    '      </div><br>';
                break;
            case "omni":
                document.querySelector(".versionTagHolder").innerHTML += '<div class="versionTag">\n' +
                    '        <img src="Resources/omni.png">\n' +
                    '        <div class="tagName">Found Version</div>\n' +
                    '        <div class="tagDescription">This version was once lost, but was found and is now available to download from Omniarchive.</div>\n' +
                    '      </div><br>';
                break;
            case "wip":
                document.querySelector(".versionTagHolder").innerHTML += '<div class="versionTag">\n' +
                    '        <img src="Resources/cog.gif">\n' +
                    '        <div class="tagName">Work in Progress</div>\n' +
                    '        <div class="tagDescription">This article is still being worked on and may not contain all information.</div>\n' +
                    '      </div><br>';
                break;
            case "save":
                document.querySelector(".versionTagHolder").innerHTML += '<div class="versionTag">\n' +
                    '        <img src="Resources/chest.png">\n' +
                    '        <div class="tagName">Version can\'t save</div>\n' +
                    '        <div class="tagDescription">This version doesn\'t allow or has broken saving.</div>\n' +
                    '      </div><br>';
                break;
            case "dangerous":
                document.querySelector(".versionTagHolder").innerHTML += '<div class="versionTag">\n' +
                    '        <img src="Resources/barrier.png">\n' +
                    '        <div class="tagName">Dangerous Version</div>\n' +
                    '        <div class="tagDescription">This version might corrupt your save file, be laggy or unstable.</div>\n' +
                    '      </div><br>';
                break;
            case "missing":
                document.querySelector(".versionTagHolder").innerHTML += '<div class="versionTag">\n' +
                    '        <img src="Resources/missing.png">\n' +
                    '        <div class="tagName">Missing Version</div>\n' +
                    '        <div class="tagDescription">This version is lost and no download is available.</div>\n' +
                    '      </div><br>';
                break;
            case "extension":
                document.querySelector(".versionTagHolder").innerHTML += '<div class="versionTag">\n' +
                    '        <img src="Resources/quiver.png">\n' +
                    '        <div class="tagName">Extension Available</div>\n' +
                    '        <div class="tagDescription">There are extensions available for this version (such as offlinedatsave or lag fixes)</div>\n' +
                    '      </div><br>';
                break;
        }
    }
    if(downloadLink == "") document.querySelector(".download").innerHTML = "Download: None";
    else document.querySelector(".download").innerHTML = "Download: <a class='downloadLink' href='" +downloadLink+"'>"+downloadMethod+"</a>";
    if(additions.length > 0){
        document.querySelector(".mainHolder").innerHTML += "<h2>Additions:</h2>";
        document.querySelector(".mainHolder").innerHTML += "<ul>";
        for(let item in additions){
            document.querySelector(".mainHolder").innerHTML += '<li class="nested">'+parseContent(additions[item])+'</li>';
        }
        document.querySelector(".mainHolder").innerHTML += "</ul> <br>";
    }
    if(changes.length > 0){
        document.querySelector(".mainHolder").innerHTML += "<h2>Changes:</h2>";
        document.querySelector(".mainHolder").innerHTML += "<ul>";
        for(let item in changes){
            document.querySelector(".mainHolder").innerHTML += '<li class="nested">'+parseContent(changes[item])+'</li>';
        }
        document.querySelector(".mainHolder").innerHTML += "</ul> <br>";
    }
    if(fixes.length > 0){
        document.querySelector(".mainHolder").innerHTML += "<h2>Fixes:</h2>";
        document.querySelector(".mainHolder").innerHTML += "<ul>";
        for(let item in fixes){
            document.querySelector(".mainHolder").innerHTML += '<li class="nested">'+parseContent(fixes[item])+'</li>';
        }
        document.querySelector(".mainHolder").innerHTML += "</ul> <br>";
    }
    if(bugs.length > 0){
        document.querySelector(".mainHolder").innerHTML += "<h2>Bugs:</h2>";
        document.querySelector(".mainHolder").innerHTML += "<ul>";
        for(let item in bugs){
            document.querySelector(".mainHolder").innerHTML += '<li class="nested">'+parseContent(bugs[item])+'</li>';
        }
        document.querySelector(".mainHolder").innerHTML += "</ul> <br>";
    }
    if(trivia.length > 0){
        document.querySelector(".mainHolder").innerHTML += "<h2>Trivia:</h2>";
        document.querySelector(".mainHolder").innerHTML += "<ul>";
        for(let item in trivia){
            document.querySelector(".mainHolder").innerHTML += '<li class="nested">'+parseContent(trivia[item])+'</li>';
        }
        document.querySelector(".mainHolder").innerHTML += "</ul> <br>";
    }
    if(media.length > 0){
        let content = "";
        content += "<h2>Media:</h2>";
        content += "<div class=\"versionMedia\">";
        for(let item in media){
            let description = media[item][0];
            let image = media[item][1];
            content += '<div class="versionMediaItem">';
            content += '<img class="versionMediaImage" src="Resources/'+shortName+'/'+ image +'">';
            content += '<div class="versionMediaDescription">'+parseContent(description)+'</div>';
            content += '</div>';
        }
        content += "</div> <br>";
        document.querySelector(".mainHolder").innerHTML += content;
    }
    if(videos.length > 0){
        document.querySelector(".mainHolder").innerHTML += "<h2>Videos:</h2>";
        document.querySelector(".mainHolder").innerHTML += "<ul>";
        for(let item in videos){
            document.querySelector(".mainHolder").innerHTML += '<li class="nested">'+parseContent(videos[item])+'</li>';
        }
        document.querySelector(".mainHolder").innerHTML += "</ul> <br>";
    }
}

function parseContent(content){
    content = content.replace("<spec>", "<div class='speculationTag'><img class='infoTagImage' src='Resources/crying_obsidian.png'> Speculation</div>");
    content = content.replace("<irc>", "<div class='ircTag'><img class='infoTagImage' src='Resources/book_and_quill.png'> IRC Logs</div>");
    content = content.replace("<artificial>", "<div class='artificialTag'><img class='infoTagImage' src='Resources/command_block.png'> Artificial Change</div>");
    content = content.replace("<recreation>", "<div class='recreationTag'><img class='infoTagImage' src='Resources/rainbow_dragon.png'> Recreated Graphics</div>");
    content = content.replace("<ogscreenshot>", "<div class='ogTag'><img class='infoTagImage' src='Resources/11a.png'> OG Screenshot</div>");
    content = content.replace("<remakescreenshot>", "<div class='remakeTag'><img class='infoTagImage' src='Resources/pre4-dev.png'> Recreated Screenshot</div>");
    content = content.replace("<social>", "<div class='ircTag'><img class='infoTagImage' src='Resources/lalalalava.png'> Other Social Media</div>");
    content = content.replace("<code>", "<div class='ircTag'><img class='infoTagImage' src='Resources/creeper.png'> Verified by Code Difference</div>");
    content = content.replace("<notch>", "<div class='ircTag'><img class='infoTagImage' src='Resources/notch.png'> Word of Notch</div>");
    return content;
}

function getVersionLink(shortVersion){
    if(shortVersion == "") return "Unknown";
    if(versions.includes(shortVersion+".json")){
        return '<a class=\'downloadLink\' href="version.html?ver='+shortVersion+'">'+shortVersion+'</a>';
    }
    return shortVersion;
}