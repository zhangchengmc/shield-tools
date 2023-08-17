function addPrefix() {
    var input = document.getElementById("input");
    var lines = input.value.split("\n");
    var formattedText = "";
    
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].trim() !== "") {
            formattedText += "127.0.0.1 " + lines[i].trim() + "\n";
        } else {
            formattedText += "\n";
        }
    }
    
    input.value = formattedText.trim();
}

function copyText() {
    var input = document.getElementById("input");
    input.select();
    document.execCommand("copy");
    alert("hosts已复制到剪贴板！");
}

function saveAsHost() {
    var input = document.getElementById("input");
    var text = input.value;
    
    var element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
    element.setAttribute("download", "hosts");
    element.style.display = "none";
    document.body.appendChild(element);
    
    element.click();
    document.body.removeChild(element);
}