import { FiAward, FiUsers, FiShoppingBag, FiHeart } from 'react-icons/fi';
import { TeamCard , Brand } from '../../components';
import { images } from '../../assets';


const AboutUs = () => {
  const stats = [
    { value: '10,000+', label: 'Happy Customers', icon: <FiUsers className="text-3xl" /> },
    { value: '5+', label: 'Years in Business', icon: <FiAward className="text-3xl" /> },
    { value: '500+', label: 'Quality Products', icon: <FiShoppingBag className="text-3xl" /> },
    { value: '99%', label: 'Satisfaction Rate', icon: <FiHeart className="text-3xl" /> }
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      image: images.ceoImage,
      bio: 'Electronics enthusiast with 15+ years in the industry'
    },
    {
      name: 'Sarah Chen',
      role: 'Head of Operations',
      image: images.sarah,
      bio: 'Supply chain expert ensuring smooth operations'
    },
    {
      name: 'Marcus Lee',
      role: 'Tech Director',
      image: images.directorProfile,
      bio: 'Keeps our tech stack cutting edge'
    },
    {
      name: 'Hamza',
      role: 'Customer Success',
      image: images.hamzaProfile,
      bio: 'Makes sure every customer is delighted'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl max-w-3xl mx-auto">
            From a small startup to the leading electronics e-commerce platform
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About <Brand withText={true} /></h2>
            <p className="text-gray-600 mb-4">
              Founded in 2018, Elecxo began with a simple mission: to make cutting-edge electronics accessible to everyone. 
              What started as a small online store has grown into one of the most trusted names in e-commerce.
            </p>
            <p className="text-gray-600 mb-4">
              Our team of tech enthusiasts carefully curates every product in our catalog, ensuring you get the best quality 
              at competitive prices. We partner directly with manufacturers to bring you authentic products with full warranties.
            </p>
            <p className="text-gray-600">
              Beyond just selling products, we're building a community of tech lovers through our blog, tutorials, 
              and exceptional customer support.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df" 
              alt="Our office"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-600 flex justify-center mb-4">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet The Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <TeamCard
              key={member.name}
              name={member.name}
              role={member.role}
              image={member.image}
              bio={member.bio}
            />
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Authenticity</h3>
              <p className="text-gray-300">
                We only sell 100% genuine products with proper warranties. No knockoffs or imitations.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Customer First</h3>
              <p className="text-gray-300">
                Your satisfaction is our top priority. Our support team is available 24/7 to help.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Tech Passion</h3>
              <p className="text-gray-300">
                We're tech lovers first, which means we understand what matters to you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;