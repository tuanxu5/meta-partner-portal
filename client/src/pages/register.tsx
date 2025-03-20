import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import RegisterForm from "@/components/forms/register-form";

export default function Register() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 md:px-6 py-8">
        <div className="max-w-3xl mx-auto mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Become a Meta Business Partner</h1>
          <p className="text-lg text-gray-600 mb-6">
            Join our network of certified partners and grow your business with Meta's platforms and resources.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span>Complete the form below to start your application</span>
          </div>
        </div>
        
        <RegisterForm />
      </main>
      
      <Footer />
    </div>
  );
}
