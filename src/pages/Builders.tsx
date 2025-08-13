import React, { useState } from 'react';
import { Search, MapPin, Award, Building, Users, Calendar, ExternalLink, Phone } from 'lucide-react';

const Builders: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const builders = [
    {
      id: 1,
      name: "DLF Limited",
      logo: "https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "India's largest real estate company with over 75 years of experience in developing residential, commercial, and retail properties.",
      established: "1946",
      projects: 150,
      locations: ["Gurugram", "Delhi", "Chennai", "Kolkata", "Kochi"],
      specialties: ["Luxury Residential", "Commercial Spaces", "Retail Malls", "Golf Courses"],
      rating: 4.5,
      totalUnits: "100,000+",
      featured: true
    },
    {
      id: 2,
      name: "Godrej Properties",
      logo: "https://images.pexels.com/photos/3182770/pexels-photo-3182770.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "A leading real estate developer known for sustainable and innovative residential and commercial projects across major Indian cities.",
      established: "1990",
      projects: 80,
      locations: ["Mumbai", "Pune", "NCR", "Bangalore", "Hyderabad"],
      specialties: ["Sustainable Development", "Smart Homes", "Affordable Housing", "Premium Residences"],
      rating: 4.3,
      totalUnits: "60,000+",
      featured: true
    },
    {
      id: 3,
      name: "Emaar India",
      logo: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Part of the globally renowned Emaar Properties, known for creating world-class residential and commercial developments.",
      established: "2005",
      projects: 25,
      locations: ["NCR", "Mumbai", "Mohali", "Chennai"],
      specialties: ["Luxury Developments", "High-rise Towers", "Integrated Townships", "Golf Communities"],
      rating: 4.4,
      totalUnits: "25,000+",
      featured: false
    },
    {
      id: 4,
      name: "Lodha Group",
      logo: "https://images.pexels.com/photos/3182791/pexels-photo-3182791.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "One of India's leading real estate developers with a focus on premium residential and commercial properties.",
      established: "1980",
      projects: 60,
      locations: ["Mumbai", "Pune", "NCR", "London"],
      specialties: ["Ultra-luxury Residences", "Commercial Complexes", "Integrated Developments", "International Projects"],
      rating: 4.2,
      totalUnits: "40,000+",
      featured: true
    },
    {
      id: 5,
      name: "M3M Group",
      logo: "https://images.pexels.com/photos/3182788/pexels-photo-3182788.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "A fast-growing real estate developer known for innovative designs and luxury residential projects in NCR.",
      established: "2010",
      projects: 35,
      locations: ["Gurugram", "Noida", "Greater Noida"],
      specialties: ["Modern Architecture", "Luxury Residences", "Commercial Hubs", "Golf-facing Properties"],
      rating: 4.1,
      totalUnits: "20,000+",
      featured: false
    },
    {
      id: 6,
      name: "Vatika Group",
      logo: "https://images.pexels.com/photos/3182785/pexels-photo-3182785.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "A diversified real estate company with expertise in residential, commercial, and hospitality projects.",
      established: "1986",
      projects: 45,
      locations: ["NCR", "Bhubaneswar"],
      specialties: ["Integrated Townships", "Business Parks", "Hospitality", "Retail Spaces"],
      rating: 4.0,
      totalUnits: "30,000+",
      featured: false
    }
  ];

  const filteredBuilders = builders.filter(builder =>
    builder.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    builder.locations.some(location => 
      location.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const featuredBuilders = filteredBuilders.filter(builder => builder.featured);
  const otherBuilders = filteredBuilders.filter(builder => !builder.featured);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Our Builder Partners
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            Partner with India's most trusted and renowned real estate developers
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search builders or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Builders */}
      {featuredBuilders.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Builders</h2>
              <p className="text-xl text-gray-600">Our premium development partners</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredBuilders.map((builder, index) => (
                <div 
                  key={builder.id}
                  className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in-up animation-delay-${index * 200}`}
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <img 
                          src={builder.logo}
                          alt={builder.name}
                          className="w-16 h-16 rounded-xl object-cover"
                        />
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {builder.name}
                          </h3>
                          <div className="flex items-center mt-1">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <span 
                                  key={i}
                                  className={`text-sm ${
                                    i < Math.floor(builder.rating) 
                                      ? 'text-yellow-400' 
                                      : 'text-gray-300'
                                  }`}
                                >
                                  ★
                                </span>
                              ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-600">
                              {builder.rating}/5
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        FEATURED
                      </span>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {builder.description}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Calendar className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                        <div className="text-sm font-semibold text-gray-900">{builder.established}</div>
                        <div className="text-xs text-gray-600">Established</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Building className="w-6 h-6 mx-auto mb-2 text-green-600" />
                        <div className="text-sm font-semibold text-gray-900">{builder.projects}</div>
                        <div className="text-xs text-gray-600">Projects</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <MapPin className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                        <div className="text-sm font-semibold text-gray-900">{builder.locations.length}</div>
                        <div className="text-xs text-gray-600">Cities</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Users className="w-6 h-6 mx-auto mb-2 text-orange-600" />
                        <div className="text-sm font-semibold text-gray-900">{builder.totalUnits}</div>
                        <div className="text-xs text-gray-600">Units</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">LOCATIONS</h4>
                      <div className="flex flex-wrap gap-2">
                        {builder.locations.map(location => (
                          <span 
                            key={location}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                          >
                            {location}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">SPECIALTIES</h4>
                      <div className="flex flex-wrap gap-2">
                        {builder.specialties.map(specialty => (
                          <span 
                            key={specialty}
                            className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                        <ExternalLink className="w-4 h-4" />
                        <span>View Projects</span>
                      </button>
                      <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>Contact</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Builders */}
      {otherBuilders.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">All Builders</h2>
              <p className="text-xl text-gray-600">Complete directory of our builder partners</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherBuilders.map((builder, index) => (
                <div 
                  key={builder.id}
                  className={`group bg-white border-2 border-gray-100 rounded-xl hover:border-blue-200 hover:shadow-lg transition-all duration-300 p-6 animate-fade-in-up animation-delay-${index * 100}`}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <img 
                      src={builder.logo}
                      alt={builder.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {builder.name}
                      </h3>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <span 
                              key={i}
                              className={`text-xs ${
                                i < Math.floor(builder.rating) 
                                  ? 'text-yellow-400' 
                                  : 'text-gray-300'
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="ml-1 text-xs text-gray-600">
                          {builder.rating}/5
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {builder.description}
                  </p>

                  <div className="grid grid-cols-3 gap-3 mb-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-gray-900">{builder.projects}</div>
                      <div className="text-xs text-gray-600">Projects</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">{builder.locations.length}</div>
                      <div className="text-xs text-gray-600">Cities</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">{builder.totalUnits}</div>
                      <div className="text-xs text-gray-600">Units</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {builder.locations.slice(0, 3).map(location => (
                        <span 
                          key={location}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {location}
                        </span>
                      ))}
                      {builder.locations.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          +{builder.locations.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm">
                    View Projects
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredBuilders.length === 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Building className="w-24 h-24 mx-auto mb-6 text-gray-400" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No Builders Found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search criteria</p>
            <button 
              onClick={() => setSearchTerm('')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Search
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default Builders;