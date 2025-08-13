import React from 'react';
import { Award, Shield, Users, Target, Heart, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    { number: "15+", label: "Years Experience" },
    { number: "10,000+", label: "Happy Clients" },
    { number: "500+", label: "Projects Delivered" },
    { number: "50+", label: "Expert Team" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description: "Complete transparency in all dealings with no hidden charges or surprises"
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction and trust are our highest priorities in every interaction"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Commitment to delivering exceptional service and outstanding results"
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Leveraging cutting-edge technology to enhance your property experience"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            About PremiumEstate
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            Transforming Real Estate Dreams into Reality Since 2008
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2008 with a vision to revolutionize the real estate industry in India, 
                PremiumEstate has grown from a small startup to one of the most trusted names in 
                luxury real estate across Delhi NCR.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our journey began with a simple belief: every client deserves personalized attention, 
                transparent dealings, and access to the finest properties. Today, we've helped over 
                10,000 families find their dream homes and assisted numerous investors in building 
                successful real estate portfolios.
              </p>
              <p className="text-lg text-gray-700">
                With deep market knowledge, cutting-edge technology, and an unwavering commitment 
                to excellence, we continue to set new standards in the real estate industry.
              </p>
            </div>
            
            <div className="animate-fade-in-right">
              <img 
                src="https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern office building"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To provide exceptional real estate services that exceed client expectations 
                while maintaining the highest standards of integrity and professionalism.
              </p>
            </div>

            <div className="text-center animate-fade-in-up animation-delay-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be India's most trusted and innovative real estate platform, 
                setting industry benchmarks for quality, transparency, and customer satisfaction.
              </p>
            </div>

            <div className="text-center animate-fade-in-up animation-delay-600">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-700">
                We believe in transparency, integrity, innovation, and putting our clients' 
                interests first in every decision we make.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision and interaction we have
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={value.title}
                  className={`group p-8 bg-gray-50 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:shadow-lg animate-fade-in-up animation-delay-${index * 200}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-700 text-lg">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Achievements
            </h2>
            <p className="text-xl opacity-90">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.label}
                className={`text-center animate-fade-in-up animation-delay-${index * 200}`}
              >
                <div className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  {achievement.number}
                </div>
                <div className="text-lg opacity-90">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We maintain the highest standards of legal compliance and industry certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "RERA Registered",
              "ISO 9001:2015 Certified",
              "Real Estate Business License",
              "GST Compliance",
              "Professional Indemnity Insurance",
              "Data Protection Compliance"
            ].map((certification, index) => (
              <div 
                key={certification}
                className={`flex items-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300 animate-fade-in-up animation-delay-${index * 100}`}
              >
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-lg font-medium text-gray-900">{certification}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our Leadership Team
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
            Experienced professionals dedicated to delivering exceptional real estate services
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Gupta",
                role: "Founder & CEO",
                experience: "15+ Years",
                image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                name: "Priya Sharma",
                role: "VP Sales & Marketing",
                experience: "12+ Years",
                image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                name: "Amit Kumar",
                role: "Head of Operations",
                experience: "10+ Years",
                image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
            ].map((member, index) => (
              <div 
                key={member.name}
                className={`animate-fade-in-up animation-delay-${index * 300}`}
              >
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white/20"
                />
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-200 mb-1">{member.role}</p>
                <p className="text-sm opacity-80">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;