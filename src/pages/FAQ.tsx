import React, { useState } from 'react';
import { ChevronDown, Search, Home, DollarSign, FileText, Shield, Users, Phone } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqCategories = [
    { id: 'all', name: 'All Questions', icon: Home },
    { id: 'buying', name: 'Buying Process', icon: Home },
    { id: 'selling', name: 'Selling Process', icon: DollarSign },
    { id: 'legal', name: 'Legal & Documentation', icon: FileText },
    { id: 'financing', name: 'Home Loans & Finance', icon: DollarSign },
    { id: 'services', name: 'Our Services', icon: Users }
  ];

  const faqs = [
    {
      id: 1,
      category: 'buying',
      question: "What documents do I need to buy a property?",
      answer: "For property purchase, you'll need: Identity proof (PAN Card, Aadhaar), Address proof, Income proof (salary slips, ITR), Bank statements (6 months), Property documents (sale deed, NOC, approvals), and Home loan documents if applicable. Our team will guide you through the complete documentation process."
    },
    {
      id: 2,
      category: 'buying',
      question: "How long does the property buying process take?",
      answer: "The property buying process typically takes 45-60 days from offer acceptance to registration. This includes due diligence (7-10 days), loan approval (15-20 days), legal verification (10-15 days), and final registration (5-7 days). Timeline may vary based on documentation and approval processes."
    },
    {
      id: 3,
      category: 'selling',
      question: "How do you determine my property's market value?",
      answer: "We conduct comprehensive property valuation considering recent comparable sales, location factors, property condition, market trends, and current demand. Our certified valuers use scientific methods including cost approach, market comparison, and income approach to provide accurate valuations."
    },
    {
      id: 4,
      category: 'selling',
      question: "What are the costs involved in selling my property?",
      answer: "Selling costs include: Brokerage fee (2% of sale value), legal fees (₹25,000-50,000), registration charges (1% of property value), capital gains tax (if applicable), and marketing expenses. We provide transparent cost breakdown upfront with no hidden charges."
    },
    {
      id: 5,
      category: 'legal',
      question: "What is RERA and why is it important?",
      answer: "RERA (Real Estate Regulatory Authority) is a central law that regulates real estate sector. It ensures transparency, protects buyer interests, mandates project registration, defines delivery timelines, and provides legal recourse. Always verify RERA registration before property purchase."
    },
    {
      id: 6,
      category: 'legal',
      question: "How do you verify property titles and legal documents?",
      answer: "We conduct thorough title verification including: Chain of ownership for 30+ years, Municipal approvals and NOCs, Encumbrance certificate, Court decree verification, Tax payment verification, and Physical survey. Our legal team ensures 100% clear title before purchase."
    },
    {
      id: 7,
      category: 'financing',
      question: "What is the maximum home loan amount I can get?",
      answer: "Home loan eligibility depends on your income, age, credit score, and existing liabilities. Generally, banks offer 80-90% of property value or 60x monthly income (whichever is lower). We help you get pre-approved loans from multiple banks for best rates."
    },
    {
      id: 8,
      category: 'financing',
      question: "What are current home loan interest rates?",
      answer: "Home loan rates currently range from 8.5% to 10.5% per annum, varying by bank, loan amount, and customer profile. We have partnerships with 15+ banks and NBFCs to secure competitive rates. Rates are subject to change based on RBI policies and market conditions."
    },
    {
      id: 9,
      category: 'services',
      question: "What is your brokerage structure?",
      answer: "Our transparent brokerage: 2% for property buying/selling, 1 month rent for rental services. No hidden charges, payment only after successful transaction. We provide end-to-end service including legal support, documentation, and post-sale assistance."
    },
    {
      id: 10,
      category: 'services',
      question: "Do you provide post-purchase support?",
      answer: "Yes, we provide comprehensive post-purchase support including: Property registration assistance, Utility connections, Home loan disbursement, Insurance guidance, Property management services, and 24/7 customer support for any queries or issues."
    },
    {
      id: 11,
      category: 'buying',
      question: "What should I check during property site visit?",
      answer: "During site visits, check: Construction quality, Ventilation and natural light, Water supply and drainage, Electrical fittings, Parking availability, Security arrangements, Neighborhood facilities, Connectivity, and match specifications with brochure. We provide detailed site visit checklists."
    },
    {
      id: 12,
      category: 'legal',
      question: "What is the difference between registered and unregistered properties?",
      answer: "Registered properties have legal ownership documents registered with sub-registrar, providing clear title and ownership rights. Unregistered properties lack legal ownership proof and cannot be mortgaged or sold legally. Always purchase registered properties only."
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            Get answers to common questions about real estate buying, selling, and our services
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
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-lg"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {faqCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div 
                  key={faq.id}
                  className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden animate-fade-in-up animation-delay-${index * 100}`}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                        openFAQ === faq.id ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <div className={`transition-all duration-300 ease-in-out ${
                    openFAQ === faq.id 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    <div className="px-6 pb-4 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No Questions Found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Quick Help Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Need More Help?
            </h2>
            <p className="text-xl text-gray-600">
              Explore our help categories or contact our experts directly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Property Buying Guide",
                description: "Complete guide for first-time buyers",
                icon: Home,
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Legal Documentation",
                description: "Understanding property paperwork",
                icon: FileText,
                color: "from-green-500 to-green-600"
              },
              {
                title: "Investment Advisory",
                description: "Expert advice on property investments",
                icon: DollarSign,
                color: "from-purple-500 to-purple-600"
              }
            ].map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={category.title}
                  className={`group p-8 bg-gradient-to-br ${category.color} text-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in-up animation-delay-${index * 200}`}
                >
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                  <p className="text-lg opacity-90">{category.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our expert team is here to help with personalized assistance for all your real estate needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Call Us: +91 98765 43210</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 inline-flex items-center justify-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>Live Chat Support</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;