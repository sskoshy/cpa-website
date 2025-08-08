import Navbar from '../components/Navbar';

function Team() {
    const teamMembers = [
        {
            name: '...',
            title: '...',
            bio: '...',
            image: '...',
            linkedin: '...', 
        },
        {
            name: '...',
            title: '...',
            bio: '...',
            image: '...',
            linkedin: '...',    
        },
        {
            name: '...',
            title: '...',
            bio: '...',
            image: '...',
            linkedin: '...', 
        },
    ];
    return (
        <div className="min-h-screen bg-gray-50">
          <Navbar />
    
          <div className="max-w-7xl mx-auto px-6 py-20">
            <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 text-center mb-4">Our Team</h1>
            <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              Meet the experienced professionals driving our commitment to excellence and personalized service.
            </p>
    
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition duration-300"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 object-cover rounded-full border-4 border-blue-200 shadow mb-4"
                  />
                  <h3 className="text-xl font-semibold text-blue-800">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.title}</p>
                  <p className="text-center text-gray-600 mt-3 text-sm">{member.bio}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    
    export default Team;    