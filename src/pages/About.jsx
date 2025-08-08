import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* About Us Page Content */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Learn more about our mission, values, and the people behind our firm.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Our Mission & Values</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our mission is to provide reliable, insightful, and customized financial solutions to businesses and individuals. 
            We believe in transparency, collaboration, and delivering results that help clients achieve long-term success.
          </p>
        </div>

        {/* History / Philosophy */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Our Philosophy</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Since our founding, we've maintained a client-first approach. 
            We value strong relationships, consistent communication, and a deep understanding of each client’s unique goals.
            Our team is committed to helping you grow with confidence.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            to="/team"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Meet Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
