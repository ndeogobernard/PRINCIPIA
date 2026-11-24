/* PRINCIPIA motion: scroll reveal for page sections and a hairline under the header once scrolled. */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var header = document.querySelector('header.wp-block-template-part');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  if (reduce || !('IntersectionObserver' in window)) return;

  var targets = document.querySelectorAll(
    '.entry-content > .wp-block-group > .wp-block-columns, .wp-block-column:has(> hr.fq-rule:first-child), .fq-spec'
  );
  if (!targets.length) return;

  document.documentElement.classList.add('p-reveal-ready');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

  targets.forEach(function (el) {
    el.classList.add('p-reveal');
    io.observe(el);
  });
})();
