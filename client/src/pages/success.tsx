import { Link } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function Success() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 md:px-6 py-12">
        <Card className="max-w-3xl mx-auto">
          <CardContent className="pt-12 pb-12 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
            
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Application Submitted Successfully!
            </h1>
            
            <p className="text-gray-600 mb-4">
              Thank you for applying to become a Meta Business Partner. We've received 
              your application successfully.
            </p>
            
            <p className="text-gray-600 mb-4">
              Your application will be reviewed within 24 hours during regular business days,
              excluding weekends and holidays.
            </p>
            
            <p className="text-gray-600 mb-8">
              A confirmation email has been sent to your registered email address with 
              more details about the review process and next steps.
            </p>
            
            <Button asChild>
              <Link href="/">
                Return to Home
              </Link>
            </Button>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
}
