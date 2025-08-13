import React, { useState } from 'react';
import { MapPin, TrendingUp, Car, Plane, Train, School, Guitar as Hospital, ShoppingBag, Coffee } from 'lucide-react';

const Locations: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState('');

  const locations = [
    {
      id: 'gurugram',
      name: 'Gurugram',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'The Millennium City - A modern financial and technology hub',
      avgPrice: '₹8,500/sq ft',
      priceGrowth: '+12%',
      totalProjects: '2,500+',
      connectivity: {
        metro: ['Yellow Line', 'Rapid Metro'],
        airport: '15 km to IGI Airport',
        highway: 'NH-8, Sohna Road',
        railway: 'Gurugram Railway Station'
      },
      sectors: [
        { name: 'DLF Phase 1-5', avgPrice: '₹12,000/sq ft', properties: ['Luxury Apartments', 'Villas', 'Penthouses'] },
        { name: 'Sector 104-106', avgPrice: '₹7,500/sq ft', properties: ['Mid-segment Apartments', 'Builder Floors'] },
        { name: 'Golf Course Road', avgPrice: '₹15,000/sq ft', properties: ['Premium Condos', 'Sky Villas'] },
        { name: 'Sohna Road', avgPrice: '₹6,000/sq ft', properties: ['Affordable Housing', 'Plots'] }
      ],
      amenities: [
        { icon: School, name: 'Top Schools', count: '50+' },
        { icon: Hospital, name: 'Hospitals', count: '25+' },
        { icon: ShoppingBag, name: 'Malls', count: '15+' },
        { icon: Coffee, name: 'Restaurants', count: '200+' }
      ]
    },
    {
      id: 'noida',
      name: 'Noida',
      image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Planned city with excellent infrastructure and IT hubs',
      avgPrice: '₹6,800/sq ft',
      priceGrowth: '+8%',
      totalProjects: '1,800+',
      connectivity: {
        metro: ['Blue Line', 'Magenta Line', 'Aqua Line'],
        airport: '45 km to IGI Airport',
        highway: 'NH-24, DND Flyway',
        railway: 'New Delhi Railway Station'
      },
      sectors: [
        { name: 'Sector 61-78', avgPrice: '₹8,500/sq ft', properties: ['Premium Apartments', 'Office Spaces'] },
        { name: 'Sector 104-108', avgPrice: '₹7,200/sq ft', properties: ['Modern Residences', 'Sports City'] },
        { name: 'Sector 128-137', avgPrice: '₹6,000/sq ft', properties: ['Affordable Housing', 'Plots'] },
        { name: 'Noida Extension', avgPrice: '₹3,800/sq ft', properties: ['Budget Apartments', 'Independent Houses'] }
      ],
      amenities: [
        { icon: School, name: 'Educational Institutes', count: '40+' },
        { icon: Hospital, name: 'Healthcare', count: '20+' },
        { icon: ShoppingBag, name: 'Shopping Centers', count: '12+' },
        { icon: Coffee, name: 'F&B Outlets', count: '150+' }
      ]
    },
    {
      id: 'faridabad',
      name: 'Faridabad',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Industrial city transforming into a residential hub',
      avgPrice: '₹5,200/sq ft',
      priceGrowth: '+6%',
      totalProjects: '900+',
      connectivity: {
        metro: ['Violet Line Extension'],
        airport: '35 km to IGI Airport',
        highway: 'NH-2, Mathura Road',
        railway: 'Faridabad Railway Station'
      },
      sectors: [
        { name: 'Sector 66-89', avgPrice: '₹6,500/sq ft', properties: ['Residential Complexes', 'Group Housing'] },
        { name: 'Neharpar', avgPrice: '₹5,800/sq ft', properties: ['Independent Houses', 'Builder Floors'] },
        { name: 'Greater Faridabad', avgPrice: '₹4,200/sq ft', properties: ['Affordable Housing', 'Plots'] },
        { name: 'Ballabhgarh', avgPrice: '₹3,800/sq ft', properties: ['Budget Homes', 'Agricultural Land'] }
      ],
      amenities: [
        { icon: School, name: 'Schools', count: '30+' },
        { icon: Hospital, name: 'Medical Centers', count: '15+' },
        { icon: ShoppingBag, name: 'Markets', count: '8+' },
        { icon: Coffee, name: 'Dining Options', count: '80+' }
      ]
    },
    {
      id: 'ghaziabad',
      name: 'Ghaziabad',
      image: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Gateway to NCR with rapid infrastructure development',
      avgPrice: '₹4,800/sq ft',
      priceGrowth: '+7%',
      totalProjects: '750+',
      connectivity: {
        metro: ['Red Line', 'Blue Line'],
        airport: '50 km to IGI Airport',
        highway: 'NH-24, NH-9',
        railway: 'Ghaziabad Railway Junction'
      },
      sectors: [
        { name: 'Raj Nagar Extension', avgPrice: '₹4,200/sq ft', properties: ['Affordable Apartments', 'Independent Floors'] },
        { name: 'Crossings Republik', avgPrice: '₹5,500/sq ft', properties: ['Integrated Township', 'Luxury Villas'] },
        { name: 'Indirapuram', avgPrice: '₹6,200/sq ft', properties: ['Established Societies', 'Premium Apartments'] },
        { name: 'Vasundhara', avgPrice: '₹5,800/sq ft', properties: ['Residential Plots', 'Builder Floors'] }
      ],
      amenities: [
        { icon: School, name: 'Educational Hubs', count: '35+' },
        { icon: Hospital, name: 'Hospitals', count: '18+' },
        { icon: ShoppingBag, name: 'Shopping Areas', count: '10+' },
        { icon: Coffee, name: 'Restaurants', count: '100+' }
      ]
    }
  ];

  const selectedLocationData = locations.find(loc => loc.id === selectedLocation) || locations[0];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Prime Locations
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            Explore Delhi NCR's most promising real estate destinations
          </p>
        </div>
      </section>

      {/* Location Selector */}
      <section className="py-8 bg-white shadow-lg sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => setSelectedLocation(location.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedLocation === location.id || (selectedLocation === '' && location.id === 'gurugram')
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {location.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Location Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {selectedLocationData.name}
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                {selectedLocationData.description}
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">{selectedLocationData.avgPrice}</div>
                  <div className="text-sm text-gray-600">Avg. Price</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-green-600">{selectedLocationData.priceGrowth}</div>
                  <div className="text-sm text-gray-600">YoY Growth</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-purple-600">{selectedLocationData.totalProjects}</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
              </div>

              {/* Connectivity */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Car className="w-6 h-6 mr-2 text-blue-600" />
                  Connectivity
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Train className="w-5 h-5 mr-2 text-green-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Metro</div>
                      <div className="text-sm text-gray-600">{selectedLocationData.connectivity.metro.join(', ')}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Plane className="w-5 h-5 mr-2 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Airport</div>
                      <div className="text-sm text-gray-600">{selectedLocationData.connectivity.airport}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Car className="w-5 h-5 mr-2 text-purple-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Highway</div>
                      <div className="text-sm text-gray-600">{selectedLocationData.connectivity.highway}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Train className="w-5 h-5 mr-2 text-orange-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Railway</div>
                      <div className="text-sm text-gray-600">{selectedLocationData.connectivity.railway}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <img 
                src={selectedLocationData.image}
                alt={selectedLocationData.name}
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sector-wise Analysis */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sector-wise Insights
            </h2>
            <p className="text-xl text-gray-600">
              Detailed analysis of top sectors in {selectedLocationData.name}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {selectedLocationData.sectors.map((sector, index) => (
              <div 
                key={sector.name}
                className={`group p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-${index * 200}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {sector.name}
                  </h3>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">{sector.avgPrice}</div>
                    <div className="text-sm text-gray-600">Avg. Price</div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">POPULAR PROPERTY TYPES</h4>
                  <div className="flex flex-wrap gap-2">
                    {sector.properties.map(property => (
                      <span 
                        key={property}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {property}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center">
                    View Properties
                    <TrendingUp className="w-4 h-4 ml-1" />
                  </button>
                  <div className="flex items-center text-green-600 text-sm">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    High Demand
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities & Infrastructure */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Amenities & Infrastructure
            </h2>
            <p className="text-xl text-gray-600">
              World-class facilities and infrastructure in {selectedLocationData.name}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {selectedLocationData.amenities.map((amenity, index) => {
              const IconComponent = amenity.icon;
              return (
                <div 
                  key={amenity.name}
                  className={`group text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-${index * 150}`}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{amenity.name}</h3>
                  <div className="text-2xl font-bold text-blue-600">{amenity.count}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Potential */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Why Invest in {selectedLocationData.name}?
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
            Strategic advantages that make {selectedLocationData.name} a prime investment destination
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Strategic Location", 
                description: "Excellent connectivity to major business hubs and transport networks",
                icon: "🎯"
              },
              { 
                title: "Infrastructure Growth", 
                description: "Ongoing and planned infrastructure developments boosting property values",
                icon: "🚀"
              },
              { 
                title: "High ROI Potential", 
                description: "Strong rental yields and capital appreciation prospects",
                icon: "📈"
              }
            ].map((benefit, index) => (
              <div 
                key={benefit.title}
                className={`animate-fade-in-up animation-delay-${index * 300}`}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-lg opacity-90">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>Explore Properties in {selectedLocationData.name}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;