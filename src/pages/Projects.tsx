import React, { useState } from 'react';
import { Search, Filter, MapPin, Calendar, Building, ChevronDown, Grid, List } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBuilder, setSelectedBuilder] = useState('');
  const [selectedSector, setSelectedSector] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('newest');

  const projects = [
    {
      id: 1,
      title: "The Residences at DLF 5",
      location: "Sector 43, Gurugram",
      price: "₹2.5 Cr",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      beds: 3,
      baths: 3,
      area: "2200 sq ft",
      status: "Ready to Move",
      builder: "DLF Limited",
      sector: "Residential",
      possession: "Immediate"
    },
    {
      id: 2,
      title: "Godrej Summit",
      location: "Sector 104, Noida",
      price: "₹1.8 Cr",
      image: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800",
      beds: 2,
      baths: 2,
      area: "1450 sq ft",
      status: "Under Construction",
      builder: "Godrej Properties",
      sector: "Residential",
      possession: "Dec 2025"
    },
    {
      id: 3,
      title: "Emaar Palm Hills",
      location: "Sector 77, Gurugram",
      price: "₹4.2 Cr",
      image: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800",
      beds: 4,
      baths: 4,
      area: "3100 sq ft",
      status: "New Launch",
      builder: "Emaar India",
      sector: "Residential",
      possession: "Jun 2026"
    },
    {
      id: 4,
      title: "Lodha Supremus",
      location: "Sector 103, Gurugram",
      price: "₹3.8 Cr",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
      beds: 4,
      baths: 3,
      area: "2850 sq ft",
      status: "Ready to Move",
      builder: "Lodha Group",
      sector: "Residential",
      possession: "Immediate"
    },
    {
      id: 5,
      title: "M3M Golf Estate",
      location: "Sector 65, Gurugram",
      price: "₹6.5 Cr",
      image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800",
      beds: 5,
      baths: 5,
      area: "4500 sq ft",
      status: "Under Construction",
      builder: "M3M Group",
      sector: "Residential",
      possession: "Mar 2026"
    },
    {
      id: 6,
      title: "Vatika City Center",
      location: "Sector 49, Gurugram",
      price: "₹2.2 Cr",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      beds: 3,
      baths: 2,
      area: "1950 sq ft",
      status: "Ready to Move",
      builder: "Vatika Group",
      sector: "Residential",
      possession: "Immediate"
    }
  ];

  const builders = ["All Builders", "DLF Limited", "Godrej Properties", "Emaar India", "Lodha Group", "M3M Group", "Vatika Group"];
  const sectors = ["All Sectors", "Residential", "Commercial", "Mixed Use"];
  const statuses = ["All Status", "Ready to Move", "Under Construction", "New Launch"];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBuilder = selectedBuilder === '' || selectedBuilder === 'All Builders' || project.builder === selectedBuilder;
    const matchesSector = selectedSector === '' || selectedSector === 'All Sectors' || project.sector === selectedSector;
    const matchesStatus = selectedStatus === '' || selectedStatus === 'All Status' || project.status === selectedStatus;
    
    return matchesSearch && matchesBuilder && matchesSector && matchesStatus;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            Discover premium residential and commercial projects across Delhi NCR
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white shadow-lg sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by project name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-lg"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Builder Filter */}
              <div className="relative">
                <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <select
                  value={selectedBuilder}
                  onChange={(e) => setSelectedBuilder(e.target.value)}
                  className="pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-white appearance-none cursor-pointer min-w-[200px]"
                >
                  {builders.map(builder => (
                    <option key={builder} value={builder}>{builder}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
              </div>

              {/* Sector Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <select
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
                  className="pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-white appearance-none cursor-pointer min-w-[180px]"
                >
                  {sectors.map(sector => (
                    <option key={sector} value={sector}>{sector}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
              </div>

              {/* Status Filter */}
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-white appearance-none cursor-pointer min-w-[180px]"
                >
                  {statuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* View Mode and Sort */}
            <div className="flex items-center gap-4">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-white"
              >
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="area">Area</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-gray-600">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length > 0 ? (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProjects.map((project, index) => (
                <div key={project.id} className={viewMode === 'list' ? 'max-w-4xl mx-auto' : ''}>
                  <PropertyCard property={project} index={index} />
                  {viewMode === 'list' && (
                    <div className="bg-white rounded-b-xl p-6 border-t border-gray-100">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center">
                              <Building className="w-4 h-4 mr-1" />
                              {project.builder}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {project.possession}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                            View Details
                          </button>
                          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Schedule Visit
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                <Building className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No Projects Found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedBuilder('');
                  setSelectedSector('');
                  setSelectedStatus('');
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Load More */}
      {filteredProjects.length > 0 && (
        <section className="py-8 bg-gray-50">
          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Load More Projects
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default Projects;