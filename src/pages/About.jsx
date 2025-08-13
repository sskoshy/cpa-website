import PageNav from "../components/PageNav";

function About() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Title */}
          <h1 className="text-4xl font-bold text-slate-900 mb-8">
            About Us
          </h1>
          
          {/* Mission Statement */}
          <p className="text-lg text-slate-700 leading-relaxed mb-12">
            Our mission is to provide exceptional accounting, tax, and consulting services 
            with integrity, professionalism, and care.
          </p>
          
          {/* History / Philosophy */}
          <p className="text-slate-600 leading-relaxed mb-16">
            Founded with a passion for helping clients succeed, our firm combines years of 
            expertise with a commitment to personalized service. We believe in building 
            long-lasting relationships and delivering results that matter.
          </p>
          
          {/* Call to Action */}
          <a
            href="/team"
            className="inline-block bg-sky-600 text-white px-6 py-3 rounded-lg shadow hover:bg-sky-700 transition"
          >
            Meet Our Team
          </a>

          {/* Navigation Buttons */}
          <PageNav back="/" next="/team" />

          
        </div>
      </div>
    );
  }
  
  export default About;
  