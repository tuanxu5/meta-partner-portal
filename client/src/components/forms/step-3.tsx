import { UseFormReturn } from "react-hook-form";
import { RegisterFormValues } from "@/lib/form-schema";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Step3Props {
  form: UseFormReturn<RegisterFormValues>;
  onNext: () => void;
  onBack: () => void;
  isLastStep: boolean;
  isSubmitting: boolean;
}

const certificationOptions = [
  { id: "blueprint", label: "Facebook Blueprint" },
  { id: "marketing", label: "Meta Certified Marketing Science Professional" },
  { id: "creative", label: "Meta Certified Creative Strategy Professional" },
  { id: "community", label: "Meta Certified Community Manager" },
  { id: "media", label: "Meta Certified Media Planning Professional" },
  { id: "technical", label: "Meta Certified Technical Developer" },
];

export default function Step3({
  form,
  onNext,
  onBack,
  isSubmitting,
}: Step3Props) {
  return (
    <div>
      <h3 className="text-lg font-medium mb-6">Your expertise and certifications</h3>
      
      <div className="mb-6">
        <FormField
          control={form.control}
          name="certifications"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel>Current Meta Certifications (if any)</FormLabel>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certificationOptions.map((cert) => (
                  <FormField
                    key={cert.id}
                    control={form.control}
                    name="certifications"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={cert.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(cert.id)}
                              onCheckedChange={(checked) => {
                                const updatedCerts = checked
                                  ? [...(field.value || []), cert.id]
                                  : (field.value || [])?.filter(
                                      (value) => value !== cert.id
                                    );
                                field.onChange(updatedCerts);
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">
                            {cert.label}
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <FormField
          control={form.control}
          name="yearsExperience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Years of Experience with Meta Platforms <span className="text-red-500">*</span></FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select years of experience" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="<1">Less than 1 year</SelectItem>
                  <SelectItem value="1-2">1-2 years</SelectItem>
                  <SelectItem value="3-5">3-5 years</SelectItem>
                  <SelectItem value="6-10">6-10 years</SelectItem>
                  <SelectItem value="10+">10+ years</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="monthlyAdSpend"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center">
                Average Monthly Ad Spend
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-gray-400 ml-1 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-80">The average monthly ad spend you manage across Meta platforms.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select average monthly spend" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="<5k">Less than $5,000</SelectItem>
                  <SelectItem value="5k-25k">$5,000 - $25,000</SelectItem>
                  <SelectItem value="25k-100k">$25,000 - $100,000</SelectItem>
                  <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                  <SelectItem value="500k+">$500,000+</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <div className="mb-6">
        <FormField
          control={form.control}
          name="teamExpertise"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center">
                Team Expertise <span className="text-red-500">*</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-gray-400 ml-1 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-80">Describe your team's core competencies and expertise with Meta platforms.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </FormLabel>
              <FormControl>
                <Textarea 
                  {...field} 
                  placeholder="Describe your team's expertise and experience with Meta platforms" 
                  rows={4}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <div className="mb-6">
        <FormField
          control={form.control}
          name="references"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center">
                Client References
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-gray-400 ml-1 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-80">Provide contact information for client references (optional).</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </FormLabel>
              <FormControl>
                <Textarea 
                  {...field} 
                  placeholder="Name, Company, Email, Phone (one reference per line)" 
                  rows={3}
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
