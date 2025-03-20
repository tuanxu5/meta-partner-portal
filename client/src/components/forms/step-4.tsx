import { UseFormReturn } from "react-hook-form";
import { RegisterFormValues } from "@/lib/form-schema";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { InfoIcon } from "lucide-react";
import { useWatch } from "react-hook-form";
import { Link } from "wouter";

// Helper function to map IDs to readable labels
const getOptionLabel = (
  id: string,
  options: { id: string; label: string }[]
): string => {
  const option = options.find((opt) => opt.id === id);
  return option ? option.label : id;
};

// Options arrays for mapping
const platformOptions = [
  { id: "facebook", label: "Facebook" },
  { id: "instagram", label: "Instagram" },
  { id: "whatsapp", label: "WhatsApp" },
  { id: "messenger", label: "Messenger" },
  { id: "oculus", label: "Oculus" },
  { id: "workplace", label: "Workplace" },
];

const serviceOptions = [
  { id: "ads", label: "Advertising Management" },
  { id: "content", label: "Content Creation" },
  { id: "analytics", label: "Analytics & Reporting" },
  { id: "strategy", label: "Strategy Development" },
  { id: "commerce", label: "E-commerce Solutions" },
  { id: "app", label: "App Development" },
];

const industryOptions = [
  { id: "retail", label: "Retail & E-commerce" },
  { id: "finance", label: "Finance & Banking" },
  { id: "tech", label: "Technology" },
  { id: "healthcare", label: "Healthcare" },
  { id: "education", label: "Education" },
  { id: "travel", label: "Travel & Hospitality" },
  { id: "entertainment", label: "Entertainment & Media" },
  { id: "automotive", label: "Automotive" },
  { id: "food", label: "Food & Beverage" },
  { id: "nonprofit", label: "Nonprofit & NGO" },
];

const certificationOptions = [
  { id: "blueprint", label: "Facebook Blueprint" },
  { id: "marketing", label: "Meta Certified Marketing Science Professional" },
  { id: "creative", label: "Meta Certified Creative Strategy Professional" },
  { id: "community", label: "Meta Certified Community Manager" },
  { id: "media", label: "Meta Certified Media Planning Professional" },
  { id: "technical", label: "Meta Certified Technical Developer" },
];

interface Step4Props {
  form: UseFormReturn<RegisterFormValues>;
  onNext: () => void;
  onBack: () => void;
  isLastStep: boolean;
  isSubmitting: boolean;
}

export default function Step4({
  form,
  onBack,
  isLastStep,
  isSubmitting,
}: Step4Props) {
  // Use useWatch to get current form values for display
  const watchedValues = useWatch({
    control: form.control,
  });

  return (
    <div>
      <h3 className="text-lg font-medium mb-6">Review your information</h3>
      
      <div className="bg-primary/10 p-4 rounded-md mb-6">
        <p className="text-sm text-primary flex items-center">
          <InfoIcon className="h-4 w-4 mr-2" />
          Please review your application details below before submitting. You can go back to make changes if needed.
        </p>
      </div>
      
      <div className="mb-6">
        <h4 className="font-medium text-md border-b pb-2 mb-3">Company Information</h4>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-sm">
          <div className="col-span-2 sm:col-span-1">
            <dt className="font-medium text-gray-500">Company Name</dt>
            <dd>{watchedValues.companyName || "—"}</dd>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <dt className="font-medium text-gray-500">Website</dt>
            <dd>{watchedValues.companyWebsite || "—"}</dd>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <dt className="font-medium text-gray-500">Business Type</dt>
            <dd>
              {watchedValues.businessType === "agency" && "Marketing Agency"}
              {watchedValues.businessType === "consultant" && "Independent Consultant"}
              {watchedValues.businessType === "tech" && "Technology Provider"}
              {watchedValues.businessType === "service" && "Service Provider"}
              {watchedValues.businessType === "other" && "Other"}
              {!watchedValues.businessType && "—"}
            </dd>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <dt className="font-medium text-gray-500">Company Size</dt>
            <dd>{watchedValues.companySize || "—"}</dd>
          </div>
          <div className="col-span-2">
            <dt className="font-medium text-gray-500">Company Description</dt>
            <dd>{watchedValues.companyDescription || "—"}</dd>
          </div>
        </dl>
      </div>
      
      <div className="mb-6">
        <h4 className="font-medium text-md border-b pb-2 mb-3">Project Information</h4>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-sm">
          <div className="col-span-2 sm:col-span-1">
            <dt className="font-medium text-gray-500">Meta Platforms Experience</dt>
            <dd>
              {watchedValues.platforms?.length 
                ? watchedValues.platforms.map(plat => 
                    getOptionLabel(plat, platformOptions)
                  ).join(", ")
                : "—"}
            </dd>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <dt className="font-medium text-gray-500">Services Offered</dt>
            <dd>
              {watchedValues.services?.length 
                ? watchedValues.services.map(svc => 
                    getOptionLabel(svc, serviceOptions)
                  ).join(", ")
                : "—"}
            </dd>
          </div>
          <div className="col-span-2">
            <dt className="font-medium text-gray-500">Client Industries</dt>
            <dd>
              {watchedValues.clientIndustries?.length 
                ? watchedValues.clientIndustries.map(ind => 
                    getOptionLabel(ind, industryOptions)
                  ).join(", ")
                : "—"}
            </dd>
          </div>
        </dl>
      </div>
      
      <div className="mb-6">
        <h4 className="font-medium text-md border-b pb-2 mb-3">Expertise Information</h4>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-sm">
          <div className="col-span-2 sm:col-span-1">
            <dt className="font-medium text-gray-500">Meta Certifications</dt>
            <dd>
              {watchedValues.certifications?.length 
                ? watchedValues.certifications.map(cert => 
                    getOptionLabel(cert, certificationOptions)
                  ).join(", ")
                : "None"}
            </dd>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <dt className="font-medium text-gray-500">Years of Experience</dt>
            <dd>{watchedValues.yearsExperience || "—"}</dd>
          </div>
          <div className="col-span-2">
            <dt className="font-medium text-gray-500">Team Expertise</dt>
            <dd>{watchedValues.teamExpertise || "—"}</dd>
          </div>
        </dl>
      </div>
      
      <div className="mb-8">
        <FormField
          control={form.control}
          name="agreedToTerms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  I agree to the <a href="https://www.facebook.com/legal/terms" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Terms and Conditions</a> and <a href="https://www.facebook.com/privacy/policy/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a> <span className="text-red-500">*</span>
                </FormLabel>
                <FormDescription>
                  By submitting this application, you consent to Meta contacting you regarding your partnership application.
                </FormDescription>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
      </div>
      
      <div className="flex justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          disabled={isSubmitting}
        >
          Back
        </Button>
        <Button
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </div>
    </div>
  );
}
