import React from 'react';
import { Gavel, Users, Landmark, Shield, ChevronRight, Scale, Banknote, Globe, Building, LockKeyhole, Lightbulb, Handshake, BookUser, ReceiptText, Server, Newspaper, Plane } from 'lucide-react';
import Footer from './Footer';

const PracticeAreas = () => {
  const areas = [
    { icon: <Gavel className="w-8 h-8 text-amber-500" />, title: "Corporate Law", description: "Comprehensive legal solutions for businesses, including mergers, acquisitions, and compliance.", services: ["Business Formation", "Contract Negotiation", "Corporate Governance"], imageUrl: "https://source.unsplash.com/500x300/?business,law" },
    { icon: <Users className="w-8 h-8 text-amber-500" />, title: "Family Law", description: "Compassionate legal support for divorce, child custody, and estate planning.", services: ["Divorce", "Child Custody", "Estate Planning"], imageUrl: "https://source.unsplash.com/500x300/?family,law" },
    { icon: <Landmark className="w-8 h-8 text-amber-500" />, title: "Civil & Criminal Litigation", description: "Expert legal representation in civil disputes and criminal defense.", services: ["Commercial Disputes", "Contract Disputes", "White Collar Crimes"], imageUrl: "https://source.unsplash.com/500x300/?court,justice" },
    { icon: <Shield className="w-8 h-8 text-amber-500" />, title: "Good Governance & Anti-Corruption", description: "Ensuring transparency and accountability in governance.", services: ["Policy Compliance", "Legal Audits", "Ethical Practices"], imageUrl: "https://source.unsplash.com/500x300/?government,policy" },
    { icon: <Scale className="w-8 h-8 text-amber-500" />, title: "Labour & Employment Law", description: "Protecting rights in workplace legal matters.", services: ["Employee Contracts", "Workplace Disputes", "Labor Regulations"], imageUrl: "https://source.unsplash.com/500x300/?office,employment" },
    { icon: <Banknote className="w-8 h-8 text-amber-500" />, title: "Banking, Insurance & Finance Law", description: "Legal support for financial transactions and disputes.", services: ["Banking Compliance", "Investment Law", "Insurance Claims"], imageUrl: "https://source.unsplash.com/500x300/?bank,finance" },
    { icon: <Globe className="w-8 h-8 text-amber-500" />, title: "Visa & Immigration", description: "Comprehensive immigration solutions for individuals and businesses.", services: ["Work Permits", "Residency", "Citizenship"], imageUrl: "https://source.unsplash.com/500x300/?passport,immigration" },
    { icon: <Building className="w-8 h-8 text-amber-500" />, title: "Tourism & Hospitality", description: "Legal compliance for tourism and hospitality industries.", services: ["Hotel Regulations", "Tourism Licensing", "Travel Law"], imageUrl: "https://source.unsplash.com/500x300/?hotel,travel" },
    { icon: <Lightbulb className="w-8 h-8 text-amber-500" />, title: "Intellectual Property Law", description: "Safeguarding intellectual rights in various industries.", services: ["Patents", "Trademarks", "Copyright Law"], imageUrl: "https://source.unsplash.com/500x300/?copyright,trademark" },
    { icon: <Handshake className="w-8 h-8 text-amber-500" />, title: "Mergers & Acquisitions", description: "Legal guidance for business mergers and restructuring.", services: ["Due Diligence", "Acquisition Agreements", "Shareholder Rights"], imageUrl: "https://source.unsplash.com/500x300/?business,deal" },
    { icon: <BookUser className="w-8 h-8 text-amber-500" />, title: "Energy Law", description: "Expert legal services in energy regulation and sustainability.", services: ["Renewable Energy", "Oil & Gas Laws", "Regulatory Compliance"], imageUrl: "https://source.unsplash.com/500x300/?solar,energy" },
    { icon: <ReceiptText className="w-8 h-8 text-amber-500" />, title: "Tax Law", description: "Legal solutions for tax disputes, planning, and compliance.", services: ["Corporate Tax", "Income Tax Planning", "Dispute Resolution"], imageUrl: "https://source.unsplash.com/500x300/?tax,money" },
    { icon: <LockKeyhole className="w-8 h-8 text-amber-500" />, title: "Cyber Law", description: "Legal protection for digital security, privacy, and cyber crimes.", services: ["Data Protection", "Cyber Fraud", "IT Regulations"], imageUrl: "https://source.unsplash.com/500x300/?cybersecurity,hacking" },
    { icon: <Server className="w-8 h-8 text-amber-500" />, title: "Foreign Investment", description: "Guiding investors in international trade and compliance.", services: ["Investment Approvals", "Foreign Exchange Law", "Regulatory Guidance"], imageUrl: "https://source.unsplash.com/500x300/?investment,global" },
    { icon: <Scale className="w-8 h-8 text-amber-500" />, title: "Good Governance and Anti-Corruption", description: "Ensuring transparency, accountability, and ethical governance in all legal matters.", services: ["Regulatory Compliance", "Anti-Corruption Policies", "Government Ethics"], imageUrl: "https://source.unsplash.com/500x300/?justice,law" },
    { icon: <Newspaper className="w-8 h-8 text-amber-500" />, title: "Media & Entertainment Law", description: "Legal assistance for media houses, content creators, and artists.", services: ["Copyright Law", "Contract Negotiations", "Defamation Cases"], imageUrl: "https://source.unsplash.com/500x300/?media,entertainment" },
    { icon: <Plane className="w-8 h-8 text-amber-500" />, title: "Aviation Law", description: "Legal services for airlines, passengers, and aircraft manufacturers.", services: ["Airline Regulations", "Passenger Rights", "Aviation Insurance"], imageUrl: "https://source.unsplash.com/500x300/?aviation,airport" },
  ];

  return (
    <div className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-amber-500 text-center mb-8">Our Practice Areas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img src={area.imageUrl} alt={area.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {area.icon}
                  <h3 className="text-xl font-semibold">{area.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{area.description}</p>
                <ul className="text-gray-300 text-sm space-y-2">
                  {area.services.map((service, idx) => (
                    <li key={idx} className="flex items-center">
                      <ChevronRight className="w-4 h-4 text-amber-500 mr-2" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PracticeAreas;
