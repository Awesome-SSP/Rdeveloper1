import React from 'react';
import { Phone, Mail, Star, Award, Users, TrendingUp } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Rajesh Gupta",
      role: "Founder & CEO",
      experience: "15+ Years",
      specialization: "Luxury Properties & Investment Advisory",
      rating: 4.9,
      totalDeals: "500+",
      image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400",
      phone: "+91 98765 43210",
      email: "rajesh@premiumestate.com",
      achievements: ["Top Performer 2023", "Customer Choice Award", "Excellence in Sales"],
      bio: "Leading the company with vision and expertise in luxury real estate market across Delhi NCR."
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "VP Sales & Marketing",
      experience: "12+ Years",
      specialization: "Residential Properties & Client Relations",
      rating: 4.8,
      totalDeals: "450+",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      phone: "+91 87654 32109",
      email: "priya@premiumestate.com",
      achievements: ["Best Sales Manager 2023", "Client Satisfaction Award", "Market Leader"],
      bio: "Expert in residential properties with exceptional client relationship management skills."
    },
    {
      id: 3,
      name: "Amit Kumar",
      role: "Head of Operations",
      experience: "10+ Years",
      specialization: "Commercial Properties & Legal Documentation",
      rating: 4.7,
      totalDeals: "300+",
      image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400",
      phone: "+91 76543 21098",
      email: "amit@premiumestate.com",
      achievements: ["Operations Excellence", "Legal Expert", "Process Innovation"],
      bio: "Streamlining operations and ensuring smooth property transactions with legal expertise."
    },
    {
      id: 4,
      name: "Sneha Patel",
      role: "Senior Property Consultant",
      experience: "8+ Years",
      specialization: "First-time Buyers & Affordable Housing",
      rating: 4.8,
      totalDeals: "350+",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
      phone: "+91 65432 10987",
      email: "sneha@premiumestate.com",
      achievements: ["Rising Star 2023", "First-time Buyer Expert", "Community Choice"],
      bio: "Specializing in helping first-time buyers navigate the property market with confidence."
    },
    {
      id: 5,
      name: "Vikash Singh",
      role: "Investment Advisor",
      experience: "11+ Years",
      specialization: "Investment Properties & Portfolio Management",
      rating: 4.9,
      totalDeals: "250+",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400",
      phone: "+91 54321 09876",
      email: "vikash@premiumestate.com",
      achievements: ["Investment Guru", "Portfolio Expert", "ROI Maximizer"],
      bio: "Helping investors build successful real estate portfolios with strategic market insights."
    },
    {
      id: 6,
      name: "Kavya Reddy",
      role: "Marketing Manager",
      experience: "6+ Years",
      specialization: "Digital Marketing & Brand Strategy",
      rating: 4.6,
      totalDeals: "200+",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400",
      phone: "+91 43210 98765",
      email: "kavya@premiumestate.com",
      achievements: ["Digital Innovation", "Brand Builder", "Marketing Excellence"],
      bio: "Driving brand growth through innovative digital marketing strategies and market research."
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "50+", label: "Expert Team", icon: Users },
    { number: "10,000+", label: "Happy Clients", icon: Star },
    { number: "₹500Cr+", label: "Property Value", icon: TrendingUp }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Meet Our Team
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            Experienced professionals dedicated to making your real estate dreams come true
          </p>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={stat.label}
                  className={`text-center animate-fade-in-up animation-delay-${index * 200}`}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the professionals who make property transactions seamless
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in-up animation-delay-${index * 150}`}
              >
                <div className="relative">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold text-gray-900">{member.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.experience} • {member.totalDeals} Deals</p>
                  
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">SPECIALIZATION</h4>
                    <p className="text-sm text-gray-700">{member.specialization}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">ACHIEVEMENTS</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.achievements.slice(0, 2).map((achievement) => (
                        <span 
                          key={achievement}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {achievement}
                        </span>
                      ))}
                      {member.achievements.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{member.achievements.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-1 text-sm">
                      <Phone className="w-4 h-4" />
                      <span>Call</span>
                    </button>
                    <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-1 text-sm">
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Team?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team combines extensive market knowledge with personalized service to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Market Expertise",
                description: "Deep understanding of local market trends, pricing, and investment opportunities across Delhi NCR",
                icon: "📊"
              },
              {
                title: "Personalized Service",
                description: "Dedicated support from initial consultation to final possession with 24/7 availability",
                icon: "🤝"
              },
              {
                title: "Proven Track Record",
                description: "Over 15 years of successful transactions with 98% client satisfaction rate",
                icon: "🏆"
              }
            ].map((benefit, index) => (
              <div 
                key={benefit.title}
                className={`group text-center p-8 bg-gray-50 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:shadow-lg animate-fade-in-up animation-delay-${index * 300}`}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Team CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Work With Our Experts?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Connect with our experienced team for personalized property solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Schedule Consultation</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 inline-flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>Contact Team</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;