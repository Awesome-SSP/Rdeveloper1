import React, { useState } from 'react';
import { Search, MapPin, Building, Star, ArrowRight, Phone, Mail, ChevronDown } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import TestimonialCard from '../components/TestimonialCard';

const Home: React.FC = () => {
  const [searchType, setSearchType] = useState('buy');
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');

  const featuredProperties = [
    {
      id: 1,
      title: "Luxury Villa in Sector 50",
      location: "Gurugram, Haryana",
      price: "₹3.2 Cr",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      beds: 4,
      baths: 3,
      area: "3500 sq ft",
      status: "For Sale"
    },
    {
      id: 2,
      title: "Modern Apartment",
      location: "Sector 104, Noida",
      price: "₹1.8 Cr",
      image: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800",
      beds: 3,
      baths: 2,
      area: "1850 sq ft",
      status: "For Sale"
    },
    {
      id: 3,
      title: "Premium Penthouse",
      location: "DLF Phase 2, Gurugram",
      price: "₹5.5 Cr",
      image: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800",
      beds: 5,
      baths: 4,
      area: "4200 sq ft",
      status: "For Rent"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Property Investor",
      rating: 5,
      comment: "Exceptional service and expertise in luxury real estate. Found my dream property within weeks!",
      avatar: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Priya Sharma",
      role: "First-time Buyer",
      rating: 5,
      comment: "The team guided me through every step of buying my first home. Professional and trustworthy.",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  const topBuilders = [
    { name: "DLF Limited", logo: "https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&cs=tinysrgb&w=200" },
    { name: "Godrej Properties", logo: "https://images.pexels.com/photos/3182770/pexels-photo-3182770.jpeg?auto=compress&cs=tinysrgb&w=200" },
    { name: "Emaar India", logo: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=200" },
    { name: "Lodha Group", logo: "https://images.pexels.com/photos/3182791/pexels-photo-3182791.jpeg?auto=compress&cs=tinysrgb&w=200" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-purple-900/90 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1920')"
          }}
        ></div>
        
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Find Your
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent block mt-2">
              Dream Home
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90 animate-fade-in-up animation-delay-300">
            Discover premium properties in prime locations with India's most trusted real estate platform
          </p>

          {/* Search Bar */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto animate-fade-in-up animation-delay-600">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex bg-gray-100 rounded-lg p-1">
                {['buy', 'rent', 'sell'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSearchType(type)}
                    className={`px-6 py-2 rounded-md font-medium text-sm transition-all duration-300 ${
                      searchType === type
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
              
              <div className="flex-1 flex flex-col lg:flex-row gap-4">
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter location..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700"
                  />
                </div>
                
                <div className="relative">
                  <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="pl-10 pr-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700 bg-white appearance-none cursor-pointer"
                  >
                    <option value="">Property Type</option>
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                    <option value="plot">Plot</option>
                    <option value="commercial">Commercial</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                </div>
                
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2">
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover handpicked premium properties that define luxury living
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center space-x-2">
              <span>View All Properties</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Prime Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore properties in Delhi NCR's most sought-after locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Gurugram", properties: "2,500+", image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400" },
              { name: "Noida", properties: "1,800+", image: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=400" },
              { name: "Delhi", properties: "3,200+", image: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=400" },
              { name: "Faridabad", properties: "900+", image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=400" }
            ].map((location, index) => (
              <div key={location.name} className={`group cursor-pointer animate-fade-in-up animation-delay-${index * 200}`}>
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src={location.image}
                    alt={location.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{location.name}</h3>
                    <p className="text-sm opacity-90">{location.properties} Properties</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Builders */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Top Builders & Developers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Partner with India's most trusted real estate developers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {topBuilders.map((builder, index) => (
              <div 
                key={builder.name}
                className={`bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-${index * 200}`}
              >
                <img 
                  src={builder.logo}
                  alt={builder.name}
                  className="w-16 h-16 mx-auto mb-4 rounded-lg object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900">{builder.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose PremiumEstate?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Your trusted partner in real estate with unmatched expertise and service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Expert Guidance", description: "Professional advisors with 10+ years of experience", icon: "⭐" },
              { title: "Premium Properties", description: "Curated selection of luxury and investment properties", icon: "🏠" },
              { title: "End-to-End Service", description: "From search to possession, we handle everything", icon: "🤝" }
            ].map((benefit, index) => (
              <div key={benefit.title} className={`text-center animate-fade-in-up animation-delay-${index * 300}`}>
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-lg opacity-90">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from satisfied homeowners and investors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Connect with our expert team for personalized property recommendations
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Call Now: +91 98765 43210</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 inline-flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>Get Free Consultation</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;