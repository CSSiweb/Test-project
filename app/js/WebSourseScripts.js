// JavaScript Document



function SetURL(currentURL) {
   
    if (currentURL.indexOf('?') != -1) {
        var queryString = currentURL.substring(currentURL.indexOf('?'));

        queryString = queryString.substring(1);
        currentURL = currentURL + '?' + queryString;
    }
    else {
        currentURL = currentURL 

    }

    this.window.history.pushState('Page2', "Title", currentURL);
    //getAllHref(this);
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&'); 
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}


function getAllHref() {
   



    var currentLocation = document.URL.substr(0, document.URL.lastIndexOf('/'));

    var currentURL = window.location.href;
    var queryString;
    if (currentURL.indexOf('?') != -1) {
        queryString = currentURL.substring(currentURL.indexOf('?'));

        queryString = queryString.substring(1);
        }

        var anchors = this.document.getElementsByTagName('a');

        for (var i = 0; i < anchors.length; i++) {
            var url = anchors[i].href;
            var l = getLocation(url);
            // alert(l = currentLocation)
            if (l = currentLocation) {
                if (queryString) {
                    anchors[i].href = url + '?' +queryString;
                }

            }
        }


        GetAllIframeByID(queryString);
   
   
   // alert('quesrystring =' + qerystring);
    
}


var getLocation = function (href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function GetAllIframeByTagName() {
   
    var i, frames;
   var iframe = document.getElementsByTagName('iframe')[0];
//document.getElementsByTagName("iframe");
   alert('iframe =' + iframe);
   for (i = 0; i < frames.length; ++i) {
       alert('iframe =' + frames);
   }
}

function GetAllIframeByID(qerystring) {   

    var x = document.getElementById("ifrmQuestionnaire").src;
    if (x) {
        if (qerystring) {
            document.getElementById("ifrmQuestionnaire").src = x + '&' + qerystring; ;
            var y = document.getElementById("ifrmQuestionnaire").src;
        }
    }
}


