document.addEventListener("DOMContentLoaded", () => {
  const _0x4a2b = document.getElementById("c");
  if (_0x4a2b) {
    const _0x1f8e = document.createElementNS("http://www.w3.org/1999/xhtml", "iframe");
    _0x1f8e.setAttribute("id", "f");
    _0x1f8e.setAttribute("src", "about:blank");
    
    
    _0x1f8e.style.width = "100vw";
    _0x1f8e.style.height = "100vh";
    _0x1f8e.style.border = "none";
    _0x1f8e.style.display = "block";
    
    _0x4a2b.appendChild(_0x1f8e);
    
    fetch("https://raw.githubusercontent.com/lightspedfr/single/refs/heads/main/index.html")
      .then(_0x2c91 => _0x2c91.text())
      .then(_0x5d3a => {
        _0x1f8e.srcdoc = _0x5d3a;
      })
      .catch(() => {});
  }
});
