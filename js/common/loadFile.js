export function loadFile(callback) {
  const basePath = location.pathname.includes('/portfolio') ? '/portfolio' : '';
  const targets = [
    { selector: '#header', url: `${basePath}/html/header.html` },
    { selector: '#footer', url: `${basePath}/html/footer.html` }
  ];

  let toLoad = targets.filter(t => $(t.selector).length);
  if (!toLoad.length) {
    if (typeof callback === 'function') callback();
    return;
  }

  let loaded = 0;
  toLoad.forEach(t => {
    $(t.selector).load(t.url, function(status, xhr) {
      if (status === "error") {
        console.error(`${t.selector} 로딩 오류:`, xhr.statusText);
      } else {
        $(this).contents().unwrap();
      }
      loaded++;
      if (loaded === toLoad.length && typeof callback === 'function') {
        callback();
      }
    });
  });
}
