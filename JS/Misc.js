function Include(url, pathtoroot = ""){
    fetch(pathtoroot+"Components/"+url+".html")
        .then(res => res.text())
        .then(data => {
            document.getElementById(url).innerHTML = data;
            if(url=="sidebar") populate()
        });
}