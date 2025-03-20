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
import { Textarea } from "@/components/ui/textarea";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Step2Props {
  form: UseFormReturn<RegisterFormValues>;
  onNext: () => void;
  onBack: () => void;
  isLastStep: boolean;
  isSubmitting: boolean;
}

const metaPlatforms = [
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

export default function Step2({
  form,
  onNext,
  onBack,
  isSubmitting,
}: Step2Props) {
  return (
    <div>
      <h3 className="text-lg font-medium mb-6">Tell us about your projects and expertise</h3>
      
      <div className="mb-6">
        <FormField
          control={form.control}
          name="platforms"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel>Meta Platforms Experience <span className="text-red-500">*</span></FormLabel>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {metaPlatforms.map((platform) => (
                  <FormField
                    key={platform.id}
                    control={form.control}
                    name="platforms"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={platform.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(platform.id)}
                              onCheckedChange={(checked) => {
                                const updatedPlatforms = checked
                                  ? [...field.value, platform.id]
                                  : field.value?.filter(
                                      (value) => value !== platform.id
                                    );
                                field.onChange(updatedPlatforms);
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">
                            {platform.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <div className="mb-6">
        <FormField
          control={form.control}
          name="services"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel>Services Offered <span className="text-red-500">*</span></FormLabel>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {serviceOptions.map((service) => (
                  <FormField
                    key={service.id}
                    control={form.control}
                    name="services"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={service.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(service.id)}
                              onCheckedChange={(checked) => {
                                const updatedServices = checked
                                  ? [...field.value, service.id]
                                  : field.value?.filter(
                                      (value) => value !== service.id
                                    );
                                field.onChange(updatedServices);
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">
                            {service.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <div className="mb-6">
        <FormField
          control={form.control}
          name="clientIndustries"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="flex items-center">
                  Client Industries <span className="text-red-500">*</span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-4 w-4 text-gray-400 ml-1 cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-80">Select the industries where you have the most experience working with clients.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </FormLabel>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industryOptions.map((industry) => (
                  <FormField
                    key={industry.id}
                    control={form.control}
                    name="clientIndustries"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={industry.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(industry.id)}
                              onCheckedChange={(checked) => {
                                const updatedIndustries = checked
                                  ? [...field.value, industry.id]
                                  : field.value?.filter(
                                      (value) => value !== industry.id
                                    );
                                field.onChange(updatedIndustries);
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">
                            {industry.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <div className="mb-6">
        <FormField
          control={form.control}
          name="caseStudy"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center">
                Case Study Example
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-gray-400 ml-1 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-80">Provide a brief case study of a successful project using Meta platforms.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </FormLabel>
              <FormControl>
                <Textarea 
                  {...field} 
                  placeholder="Describe a successful project including goals, strategy, implementation, and results..." 
                  rows={4}
                />
              </FormControl>
              <FormMessage />
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
          type="button"
          onClick={onNext}
          disabled={isSubmitting}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
