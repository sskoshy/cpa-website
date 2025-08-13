function PageNav({ back, next }) {
    return (
      <div className="flex justify-between items-center mt-12">
        {/* Back Button */}
        {back ? (
          <a href={back} className="bg-slate-200 px-4 py-2 rounded hover:bg-slate-300">
            ← Back
          </a>
        ) : <div></div>}
  
        {/* Next Button */}
        {next && (
          <a href={next} className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700">
            Next →
          </a>
        )}
      </div>
    );
  }
  
  export default PageNav;
  