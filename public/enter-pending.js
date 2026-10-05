(function () {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    document.documentElement.setAttribute('data-reveal', 'ready')
  } catch {}
})()
