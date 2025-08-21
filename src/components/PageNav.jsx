// src/components/PageNav.jsx
import { Link } from "react-router-dom";

/**
 * PageNav
 * - Homepage: only Next button, bottom-right
 * - Other pages: Back (bottom-left), Next (bottom-right)
 * - Last page: shows only Back (no broken layout)
 */
function PageNav({
  back,
  next,
  backLabel = "Back",
  nextLabel = "Next",
  always = false,
  isHome = false,
}) {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // HOMEPAGE: Next button only, bottom-right
  if (isHome) {
    if (!next) return null;
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          to={next}
          onClick={handleClick}
          className="
            inline-flex items-center gap-2
            px-5 py-3 rounded-lg font-medium
            bg-indigo-700 text-white hover:bg-indigo-800
            shadow-lg transition
          "
          aria-label={nextLabel}
          title={nextLabel}
        >
          {nextLabel}
          <span aria-hidden>→</span>
        </Link>
      </div>
    );
  }

  // ALL OTHER PAGES: Back left, Next right
  if (!always || (!back && !next)) return null;

  return (
    <>
      {back && (
        <div className="fixed bottom-6 left-6 z-50">
          <Link
            to={back}
            onClick={handleClick}
            className="
              inline-flex items-center gap-2
              px-5 py-2.5 rounded-lg font-medium
              bg-white text-slate-800 border border-slate-200
              hover:bg-slate-50 shadow-sm transition
            "
            aria-label={backLabel}
            title={backLabel}
          >
            <span aria-hidden>←</span>
            {backLabel}
          </Link>
        </div>
      )}

      {next && (
        <div className="fixed bottom-6 right-6 z-50">
          <Link
            to={next}
            onClick={handleClick}
            className="
              inline-flex items-center gap-2
              px-5 py-2.5 rounded-lg font-medium
              bg-indigo-700 text-white hover:bg-indigo-800
              shadow-lg transition
            "
            aria-label={nextLabel}
            title={nextLabel}
          >
            {nextLabel}
            <span aria-hidden>→</span>
          </Link>
        </div>
      )}
    </>
  );
}

export default PageNav;
