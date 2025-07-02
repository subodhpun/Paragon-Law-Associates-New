// import React from 'react';
// import { Helmet } from 'react-helmet';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import {
//   Gavel,
//   Users,
//   Landmark,
//   Shield,
//   FileText,
//   BookOpen,
//   ChevronRight,
//   Briefcase,
//   HelpCircle,
//   Award,
// } from 'lucide-react';
// import Footer from './Footer';
// import SlideOnScroll from '@/components/ui/Slideonscroll';

// const PracticeAreas = () => {
//   const areas = [
//     {
//       icon: <Gavel className="w-8 h-8 text-[#FBBF24]" />, // Gold
//       title: "Corporate Law",
//       description:
//         "Comprehensive legal solutions for businesses of all sizes, including mergers, acquisitions, and compliance.",
//       services: ["Business Formation", "Contract Negotiation", "Corporate Governance"],
//     },
//     {
//       icon: <Users className="w-8 h-8 text-[#FBBF24]" />, // Gold
//       title: "Family Law",
//       description:
//         "Compassionate representation in family matters and disputes, ensuring your interests are protected.",
//       services: ["Divorce", "Child Custody", "Estate Planning"],
//     },
//     {
//       icon: <Landmark className="w-8 h-8 text-[#FBBF24]" />, // Gold
//       title: "Civil Litigation",
//       description:
//         "Strategic advocacy in complex civil disputes and litigation, with a track record of success.",
//       services: ["Commercial Disputes", "Property Litigation", "Contract Disputes"],
//     },
//     {
//       icon: <Shield className="w-8 h-8 text-[#FBBF24]" />, // Gold
//       title: "Criminal Defense",
//       description: "Expert defense in criminal cases, protecting your rights and freedom.",
//       services: ["White Collar Crime", "Federal Defense", "Appeals"],
//     },
//     {
//       icon: <FileText className="w-8 h-8 text-[#FBBF24]" />, // Gold
//       title: "Real Estate Law",
//       description:
//         "Comprehensive real estate legal services for commercial and residential properties.",
//       services: ["Property Transactions", "Lease Agreements", "Zoning Laws"],
//     },
//     {
//       icon: <BookOpen className="w-8 h-8 text-[#FBBF24]" />, // Gold
//       title: "Intellectual Property",
//       description:
//         "Protection and enforcement of intellectual property rights in the digital age.",
//       services: ["Patents", "Trademarks", "Copyright Law"],
//     },
//   ];

//   return (
//     <>
//       <Helmet>
//         <title>Practice Areas | Paragon Law Associates - Legal Services in Nepal</title>
//         <meta
//           name="description"
//           content="Explore our comprehensive legal services including corporate law, family law, litigation, and more. Expert legal solutions tailored to your needs."
//         />
//         <meta
//           name="keywords"
//           content="legal services Nepal, corporate law, family law, litigation, cyber law, employment law, tax law, real estate law"
//         />
//         <link rel="canonical" href="https://lawparagon.com/practice-areas " />
//         {/* Open Graph Tags */}
//         <meta property="og:title" content="Our Practice Areas - Paragon Law Associates" />
//         <meta
//           property="og:description"
//           content="Comprehensive legal services across multiple practice areas. Expert solutions for all your legal needs."
//         />
//         <meta property="og:url" content="https://lawparagon.com/practice-areas " />
//         <meta property="og:type" content="website" />
//         {/* Schema.org Markup */}
//         <script type="application/ld+json">
//           {JSON.stringify({
//             "@context": "https://schema.org ",
//             "@type": "LegalService",
//             "name": "Paragon Law Associates - Practice Areas",
//             "description": "Comprehensive legal services across multiple practice areas",
//             "provider": {
//               "@type": "Organization",
//               "name": "Paragon Law Associates",
//               "url": "https://lawparagon.com ",
//             },
//             "areaServed": {
//               "@type": "Country",
//               "name": "Nepal",
//             },
//             "hasOfferCatalog": {
//               "@type": "OfferCatalog",
//               "name": "Legal Services",
//               "itemListElement": areas.map((area) => ({
//                 "@type": "Offer",
//                 "itemOffered": {
//                   "@type": "Service",
//                   "name": area.title,
//                   "description": area.description,
//                 },
//               })),
//             },
//           })}
//         </script>
//       </Helmet>
//       {/* Main Content */}
//       <div className="flex flex-col min-h-screen bg-[#0F172A] text-gray-300">
//         {/* Hero Section */}
//         <SlideOnScroll direction="up" duration={1}>
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16">
//             <div className="-mx-4 sm:-mx-6 lg:-mx-8">
//               <div className="px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center space-x-2 mb-6">
//                   <div className="h-1 w-12 bg-[#FBBF24]"></div>
//                   <span className="text-[#FBBF24] font-semibold tracking-wider uppercase">
//                     Areas of Expertise
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <h1 className="text-4xl font-serif text-[#FBBF24] text-center">
//               Our Practice Areas
//             </h1>
//             <p className="text-gray-400 text-center max-w-2xl mx-auto mt-4">
//               Comprehensive legal expertise across multiple disciplines to serve your needs
//             </p>
//           </div>
//         </SlideOnScroll>
//         <SlideOnScroll direction="up" duration={1}>
//           <div className="mt-6 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
//             {areas.map((area, index) => (
//               <Link
//                 key={index}
//                 to={`/practice-areas/${area.title.toLowerCase().replace(/\s+/g, '-')}`}
//                 className="block bg-[#1E293B] border-2 border-gold rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
//               >
//                 <div className="bg-[#0F172A] w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto mt-6 group-hover:bg-[#FBBF24] transition">
//                   {area.icon}
//                 </div>
//                 <div className="px-6 pb-6">
//                   <h3 className="text-xl font-semibold mb-4 text-[#FBBF24] text-center">
//                     {area.title}
//                   </h3>
//                   <p className="text-gray-300 mb-6 text-center">{area.description}</p>
//                   <ul className="space-y-2">
//                     {area.services.map((service, idx) => (
//                       <li key={idx} className="flex items-center text-sm text-gray-300">
//                         <ChevronRight className="w-4 h-4 text-[#FBBF24] mr-2" />
//                         {service}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </SlideOnScroll>
//         {/* Other sections remain unchanged */}
//       </div>
//     </>
//   );
// };

// export default PracticeAreas;


// import React, { useEffect, useState } from 'react';
// import { Helmet } from 'react-helmet';
// import { Link } from 'react-router-dom';
// import {
//   Gavel,
//   Users,
//   Landmark,
//   Shield,
//   FileText,
//   BookOpen,
//   BadgeCheck,
//   Building,
//   Scale,
//   Banknote,
//   Scroll,
//   FileSignature,
//   Briefcase,
//   Handshake,
//   UserCheck,
//   ClipboardList,
//   FolderKanban,
//   Stamp,
//   UserPlus,
//   UserMinus,
//   Fingerprint,
//   Globe,
//   Lock,
//   Unlock,
//   Megaphone,
//   MessageSquare,
//   Camera,
//   Cpu,
//   MonitorSmartphone,
//   Quote,
//   KeyRound,
//   Home,
//   HelpCircle,
//   AlertTriangle,
//   ChevronRight,
//   TreeDeciduous,
//   Eye,
//   Search
// } from 'lucide-react';

// import SlideOnScroll from '@/components/ui/Slideonscroll';
// import Footer from './Footer';

// const PracticeAreas = () => {
//   const [areas, setAreas] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch practice areas data from the backend API
//   useEffect(() => {
//     fetch('/api/practice-areas')
//       .then((res) => res.json())
//       .then((data) => {
//         console.log('RAW DATA:', JSON.stringify(data, null, 2));
//         setAreas(data.data || []);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Failed to fetch practice areas:', err);
//         setLoading(false);
//       });
//   }, []);

//   // Function to map icon names to Lucide React icons
//   const getIcon = (icon) => {
//     switch (icon) {
//       case 'corporate-law':
//         return <Building className="w-8 h-8 text-[#FBBF24]" />;
//       case 'family-law':
//         return <Gavel className="w-8 h-8 text-[#FBBF24]" />;
//       case 'civil-litigation':
//         return <Scale className="w-8 h-8 text-[#FBBF24]" />;
//       case 'criminal-defense':
//         return <Shield className="w-8 h-8 text-[#FBBF24]" />;
//       case 'real-estate-law':
//         return <Home className="w-8 h-8 text-[#FBBF24]" />;
//       case 'intellectual-property':
//         return <BadgeCheck className="w-8 h-8 text-[#FBBF24]" />;
//       case 'immigration-law':
//         return <Globe className="w-8 h-8 text-[#FBBF24]" />;
//       case 'employment-law':
//         return <Briefcase className="w-8 h-8 text-[#FBBF24]" />;
//       case 'tax-law':
//         return <Banknote className="w-8 h-8 text-[#FBBF24]" />;
//       case 'constitutional-law':
//         return <FileText className="w-8 h-8 text-[#FBBF24]" />;
//       case 'contract-law':
//         return <FileSignature className="w-8 h-8 text-[#FBBF24]" />;
//       case 'estate-planning':
//         return <ClipboardList className="w-8 h-8 text-[#FBBF24]" />;
//       case 'notary-services':
//         return <Stamp className="w-8 h-8 text-[#FBBF24]" />;
//       case 'compliance-law':
//         return <Lock className="w-8 h-8 text-[#FBBF24]" />;
//       case 'mediation-law':
//         return <Handshake className="w-8 h-8 text-[#FBBF24]" />;
//       case 'general-practice':
//         return <Users className="w-8 h-8 text-[#FBBF24]" />;
//       case 'cyber-law':
//         return <Cpu className="w-8 h-8 text-[#FBBF24]" />;
//       case 'forensic-law':
//         return <Search className="w-8 h-8 text-[#FBBF24]" />;
//       case 'data-privacy-law':
//         return <KeyRound className="w-8 h-8 text-[#FBBF24]" />;
//       case 'human-rights-law':
//         return <UserCheck className="w-8 h-8 text-[#FBBF24]" />;
//       case 'juvenile-law':
//         return <UserMinus className="w-8 h-8 text-[#FBBF24]" />;
//       case 'elder-law':
//         return <UserPlus className="w-8 h-8 text-[#FBBF24]" />;
//       case 'media-law':
//         return <Camera className="w-8 h-8 text-[#FBBF24]" />;
//       case 'defamation-law':
//         return <AlertTriangle className="w-8 h-8 text-[#FBBF24]" />;
//       case 'surveillance-law':
//         return <Eye className="w-8 h-8 text-[#FBBF24]" />;
//       case 'digital-rights-law':
//         return <Megaphone className="w-8 h-8 text-[#FBBF24]" />;
//       case 'property-law':
//         return <Landmark className="w-8 h-8 text-[#FBBF24]" />;
//       case 'tenant-law':
//         return <Scroll className="w-8 h-8 text-[#FBBF24]" />;
//       case 'public-interest-law':
//         return <MessageSquare className="w-8 h-8 text-[#FBBF24]" />;
//       case 'environmental-law':
//         return <TreeDeciduous className="w-8 h-8 text-[#FBBF24]" />;
//       default:
//         return <ChevronRight className="w-8 h-8 text-[#FBBF24]" />;
//     }
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Practice Areas | Paragon Law Associates - Legal Services in Nepal</title>
//         <meta
//           name="description"
//           content="Explore our comprehensive legal services including corporate law, family law, litigation, and more. Expert legal solutions tailored to your needs."
//         />
//         <meta
//           name="keywords"
//           content="legal services Nepal, corporate law, family law, litigation, cyber law, employment law, tax law, real estate law"
//         />
//         <link rel="canonical" href="https://lawparagon.com/practice-areas " />
//         <meta property="og:title" content="Our Practice Areas - Paragon Law Associates" />
//         <meta
//           property="og:description"
//           content="Comprehensive legal services across multiple practice areas. Expert solutions for all your legal needs."
//         />
//         <meta property="og:url" content="https://lawparagon.com/practice-areas " />
//         <meta property="og:type" content="website" />
//       </Helmet>

//       <div className="flex flex-col min-h-screen bg-[#0F172A] text-gray-300">
//         {/* Hero Section */}
//         <SlideOnScroll direction="up" duration={1}>
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16">
//             <div className="flex items-center space-x-2 mb-6">
//               <div className="h-1 w-12 bg-[#FBBF24]"></div>
//               <span className="text-[#FBBF24] font-semibold tracking-wider uppercase">
//                 Areas of Expertise
//               </span>
//             </div>
//             <h1 className="text-4xl font-serif text-[#FBBF24] text-center">
//               Our Practice Areas
//             </h1>
//             <p className="text-gray-400 text-center max-w-2xl mx-auto mt-4">
//               Comprehensive legal expertise across multiple disciplines to serve your needs
//             </p>
//           </div>
//         </SlideOnScroll>

//         {/* Dynamic Practice Areas Grid */}
//         <SlideOnScroll direction="up" duration={1}>
//           <div className="mt-6 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 px-6 pb-16">
//             {loading ? (
//               <p className="text-center text-gray-400 col-span-full">Loading practice areas...</p>
//             ) : areas.length === 0 ? (
//               <p className="text-center text-gray-400 col-span-full">No practice areas found.</p>
//             ) : (
//               areas.map((area) => {
//                 const { slug = '', name = 'Unnamed', icon = '' } = area; // Extract icon from backend data
//                 const content = 'Expert legal service.'; // or area.content if exists

//                 return (
//                   <Link
//                     key={area.id}
//                     to={`/practice-areas/${slug}`}
//                     className="block bg-[#1E293B] border-2 border-gold rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
//                   >
//                     <div className="bg-[#0F172A] w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto mt-6">
//                       {getIcon(icon)} {/* Use the icon property here */}
//                     </div>
//                     <div className="px-6 pb-6">
//                       <h3 className="text-xl font-semibold mb-4 text-[#FBBF24] text-center">
//                         {name}
//                       </h3>
//                       <p className="text-gray-300 mb-6 text-center">{content}</p>
//                     </div>
//                   </Link>
//                 );
//               })
//             )}
//           </div>
//         </SlideOnScroll>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default PracticeAreas;

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  Gavel,
  Users,
  Landmark,
  Shield,
  FileText,
  BookOpen,
  BadgeCheck,
  Building,
  Scale,
  Banknote,
  Scroll,
  FileSignature,
  Briefcase,
  Handshake,
  UserCheck,
  ClipboardList,
  FolderKanban,
  Stamp,
  UserPlus,
  UserMinus,
  Fingerprint,
  Globe,
  Lock,
  Unlock,
  Megaphone,
  MessageSquare,
  Camera,
  Cpu,
  MonitorSmartphone,
  Quote,
  KeyRound,
  Home,
  HelpCircle,
  AlertTriangle,
  ChevronRight,
  TreeDeciduous,
  Eye,
  Search
} from 'lucide-react';

import SlideOnScroll from '@/components/ui/Slideonscroll';
import Footer from './Footer';

const PracticeAreas = () => {
  // Static dummy data instead of fetch
  const areas = [
    { id: 1, slug: 'corporate-law', name: 'Corporate Law', icon: 'corporate-law' },
    { id: 2, slug: 'family-law', name: 'Family Law', icon: 'family-law' },
    { id: 3, slug: 'civil-litigation', name: 'Civil Litigation', icon: 'civil-litigation' },
    { id: 4, slug: 'criminal-defense', name: 'Criminal Defense', icon: 'criminal-defense' },
    { id: 5, slug: 'real-estate-law', name: 'Real Estate Law', icon: 'real-estate-law' },
    { id: 6, slug: 'intellectual-property', name: 'Intellectual Property', icon: 'intellectual-property' },
    { id: 7, slug: 'immigration-law', name: 'Immigration Law', icon: 'immigration-law' },
    { id: 8, slug: 'employment-law', name: 'Employment Law', icon: 'employment-law' },
    { id: 9, slug: 'tax-law', name: 'Tax Law', icon: 'tax-law' },
  ];

  // No loading or fetch, so no loading state needed

  // Your getIcon function remains exactly the same
  const getIcon = (icon) => {
    switch (icon) {
      case 'corporate-law':
        return <Building className="w-8 h-8 text-[#FBBF24]" />;
      case 'family-law':
        return <Gavel className="w-8 h-8 text-[#FBBF24]" />;
      case 'civil-litigation':
        return <Scale className="w-8 h-8 text-[#FBBF24]" />;
      case 'criminal-defense':
        return <Shield className="w-8 h-8 text-[#FBBF24]" />;
      case 'real-estate-law':
        return <Home className="w-8 h-8 text-[#FBBF24]" />;
      case 'intellectual-property':
        return <BadgeCheck className="w-8 h-8 text-[#FBBF24]" />;
      case 'immigration-law':
        return <Globe className="w-8 h-8 text-[#FBBF24]" />;
      case 'employment-law':
        return <Briefcase className="w-8 h-8 text-[#FBBF24]" />;
      case 'tax-law':
        return <Banknote className="w-8 h-8 text-[#FBBF24]" />;
      // ... other cases remain the same as before
      default:
        return <ChevronRight className="w-8 h-8 text-[#FBBF24]" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Practice Areas | Paragon Law Associates - Legal Services in Nepal</title>
        <meta
          name="description"
          content="Explore our comprehensive legal services including corporate law, family law, litigation, and more. Expert legal solutions tailored to your needs."
        />
        <meta
          name="keywords"
          content="legal services Nepal, corporate law, family law, litigation, cyber law, employment law, tax law, real estate law"
        />
        <link rel="canonical" href="https://lawparagon.com/practice-areas " />
        <meta property="og:title" content="Our Practice Areas - Paragon Law Associates" />
        <meta
          property="og:description"
          content="Comprehensive legal services across multiple practice areas. Expert solutions for all your legal needs."
        />
        <meta property="og:url" content="https://lawparagon.com/practice-areas " />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="flex flex-col min-h-screen bg-[#0F172A] text-gray-300">
        {/* Hero Section */}
        <SlideOnScroll direction="up" duration={1}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16">
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-1 w-12 bg-[#FBBF24]"></div>
              <span className="text-[#FBBF24] font-semibold tracking-wider uppercase">
                Areas of Expertise
              </span>
            </div>
            <h1 className="text-4xl font-serif text-[#FBBF24] text-center">
              Our Practice Areas
            </h1>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mt-4">
              Comprehensive legal expertise across multiple disciplines to serve your needs
            </p>
          </div>
        </SlideOnScroll>

        {/* Dynamic Practice Areas Grid */}
        <SlideOnScroll direction="up" duration={1}>
          <div className="mt-6 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 px-6 pb-16">
            {areas.length === 0 ? (
              <p className="text-center text-gray-400 col-span-full">No practice areas found.</p>
            ) : (
              areas.map((area) => {
                const { slug = '', name = 'Unnamed', icon = '' } = area;
                const content = 'Expert legal service.';

                return (
                  <Link
                    key={area.id}
                    to={`/practice-areas/${slug}`}
                    className="block bg-[#1E293B] border-2 border-gold rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                    <div className="bg-[#0F172A] w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto mt-6">
                      {getIcon(icon)}
                    </div>
                    <div className="px-6 pb-6">
                      <h3 className="text-xl font-semibold mb-4 text-[#FBBF24] text-center">{name}</h3>
                      <p className="text-gray-300 mb-6 text-center">{content}</p>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </SlideOnScroll>
      </div>
      <Footer />
    </>
  );
};

export default PracticeAreas;
