
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MapPin, Building, Clock, Briefcase } from 'lucide-react';

const JobCard = ({ title, location, department, type, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" />
          {location}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Building className="h-4 w-4 mr-1" />
          {department}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="h-4 w-4 mr-1" />
          {type}
        </div>
      </div>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Button variant="outline">View Details</Button>
    </div>
  );
};

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Product Manager",
      location: "New York, NY (Remote Available)",
      department: "Product",
      type: "Full-time",
      description: "Lead product development initiatives and drive our product roadmap forward with innovative solutions for our swag management platform."
    },
    {
      title: "Frontend Developer",
      location: "Remote",
      department: "Engineering",
      type: "Full-time",
      description: "Create beautiful, responsive user interfaces using React and modern web technologies to enhance our customer experience."
    },
    {
      title: "Customer Success Manager",
      location: "San Francisco, CA",
      department: "Customer Success",
      type: "Full-time",
      description: "Help our customers get the most out of our platform by providing exceptional support and strategic guidance."
    },
    {
      title: "Marketing Manager",
      location: "Remote",
      department: "Marketing",
      type: "Full-time",
      description: "Develop and execute marketing strategies to grow our brand presence and attract new customers to our platform."
    },
    {
      title: "Operations Specialist",
      location: "Chicago, IL",
      department: "Operations",
      type: "Full-time",
      description: "Ensure smooth operations across our global warehousing and shipping network to deliver exceptional service to our customers."
    },
    {
      title: "UX/UI Designer",
      location: "Remote",
      department: "Design",
      type: "Full-time",
      description: "Create intuitive, engaging user experiences that make our platform a joy to use for customers of all technical backgrounds."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-gradient-to-b from-brand-50 to-white pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're building the future of swag management, and we need talented people like you to help us get there.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" className="bg-brand-600 hover:bg-brand-700">View Open Positions</Button>
            <Button size="lg" variant="outline">Learn About Our Culture</Button>
          </div>
          <div className="relative mt-12">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
              alt="Team collaborating"
              className="rounded-xl shadow-lg w-full max-w-4xl mx-auto"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Work With Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="text-purple-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Meaningful Work</h3>
              <p className="text-muted-foreground">
                Work on challenging problems that help businesses create meaningful connections with their customers and employees.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth & Learning</h3>
              <p className="text-muted-foreground">
                We invest in your professional development with learning stipends, mentorship programs, and career advancement opportunities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-amber-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Inclusive Culture</h3>
              <p className="text-muted-foreground">
                We celebrate diversity and create an inclusive environment where everyone's voice is heard and valued.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">Open Positions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {openPositions.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See a Perfect Fit?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume, and we'll keep you in mind for future opportunities.
          </p>
          <Button size="lg" className="bg-brand-600 hover:bg-brand-700">Submit Your Resume</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
