import React from 'react';
import { Home, Key, DollarSign, FileText, Users, Shield, TrendingUp, Clock } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 'buy',
      title: 'Property Buying',
      icon: Home,
      description: 'Find your dream home with our expert guidance and comprehensive property search',
      features: ['Curated Property Selection', 'Market Analysis', 'Legal Verification', 'Negotiation Support'],
      process: [
        'Requirement Analysis',
        'Property Shortlisting',
        'Site Visits',
        'Documentation & Closure'
      ]
    },
    {
      id: 'sell',
      title: 'Property Selling',
      icon: Key,
      description: 'Maximize your property value with our strategic selling approach',
      features: ['Property Valuation', 'Marketing Strategy', 'Buyer Screening', 'Quick Closure'],
      process: [
        'Property Evaluation',
        'Price Setting',
        'Marketing Launch',
        'Sale Completion'
      ]
    },
    {
      id: 'rent',
      title: 'Rental Services',
      icon: DollarSign,
      description: 'Hassle-free rental solutions for tenants and landlords',
      features: ['Tenant Verification', 'Rent Collection', 'Property Maintenance', 'Legal Support'],
      process: [
        'Property Listing',
        'Tenant Matching',
        'Agreement Execution',
        'Ongoing Management'
      ]
    }
  ];

  const brokerageInfo = [
    {
      service: 'Buying',
      rate: '2% of property value',
      description: 'Transparent brokerage with no hidden charges'
    },
    {
      service: 'Selling',
      rate: '2% of sale value',
      description: 'Performance-based pricing for best results'
    },
    {
      service: 'Renting',
      rate: '1 month rent',
      description: 'One-time fee for rental services'
    }
  ];

  const additionalServices = [
    {
      title: 'Legal Services',
      icon: FileText,
      description: 'Complete legal support for property transactions',
      benefits: ['Title Verification', 'Documentation Review', 'Registration Support']
    },
    {
      title: 'Property Management',
      icon: Users,
      description: 'End-to-end property management solutions',
      benefits: ['Tenant Management', 'Maintenance Coordination', 'Rent Collection']
    },
    {
      title: 'Investment Advisory',
      icon: TrendingUp,
      description: 'Expert guidance for real estate investments',
      benefits: ['Market Research', 'ROI Analysis', 'Portfolio Planning']
    },
    {
      title: 'Insurance Services',
      icon: Shield,
      description: 'Comprehensive property insurance solutions',
      benefits: ['Property Insurance', 'Home Loan Insurance', 'Liability Coverage']
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core Services
            </h2>
            <p className="text-xl text-gray-600">
              Expert assistance for all your real estate needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={service.id}
                  className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in-up animation-delay-${index * 200}`}
                >
                  <div className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Our Process</h4>
                      <div className="space-y-3">
                        {service.process.map((step, i) => (
                          <div key={i} className="flex items-center">
                            <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                              {i + 1}
                            </div>
                            <span className="text-gray-700">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                      Get Started
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brokerage Transparency */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              No hidden charges, clear fee structure for all services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brokerageInfo.map((info, index) => (
              <div 
                key={info.service}
                className={`group text-center p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-${index * 200}`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{info.service}</h3>
                <div className="text-3xl font-bold text-green-600 mb-4">{info.rate}</div>
                <p className="text-gray-700">{info.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Why Choose Our Pricing?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-6 h-6" />
                <span>100% Transparent</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-6 h-6" />
                <span>No Hidden Charges</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <TrendingUp className="w-6 h-6" />
                <span>Performance Based</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive support beyond property transactions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={service.title}
                  className={`group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-${index * 150}`}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-700 text-sm mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-1">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Guarantee */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Our Service Guarantee
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
            We stand behind our services with confidence and commitment
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Expert Team", 
                description: "Certified professionals with 10+ years experience",
                icon: "👥"
              },
              { 
                title: "Market Knowledge", 
                description: "Deep understanding of local real estate markets",
                icon: "📊"
              },
              { 
                title: "Customer First", 
                description: "Your satisfaction is our highest priority",
                icon: "⭐"
              }
            ].map((guarantee, index) => (
              <div 
                key={guarantee.title}
                className={`animate-fade-in-up animation-delay-${index * 300}`}
              >
                <div className="text-4xl mb-4">{guarantee.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{guarantee.title}</h3>
                <p className="text-lg opacity-90">{guarantee.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Start Your Property Journey
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;