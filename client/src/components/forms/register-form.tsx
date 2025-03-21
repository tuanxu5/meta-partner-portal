import { Card, CardContent } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { defaultValues, RegisterFormValues, registerSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "wouter";

import { sendMessageRegisterTelegram } from "@/services/send-message";
import Step1 from "./step-1";
import Step2 from "./step-2";
import Step3 from "./step-3";
import Step4 from "./step-4";

const steps = [
  { title: "Company Information", component: Step1 },
  { title: "Projects", component: Step2 },
  { title: "Expertise", component: Step3 },
  { title: "Review", component: Step4 },
];

export default function RegisterForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const { toast } = useToast();
  const [_, navigate] = useLocation();

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues,
    mode: "onChange",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: RegisterFormValues) => {
      console.log(data);
      navigate("/success");
    },
    onSuccess: () => {
      navigate("/success");
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit your application. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleNext = async (event) => {
    event.preventDefault();
    const fieldsToValidate = getFieldsToValidate(currentStep);

    const result = await form.trigger(fieldsToValidate as any);

    if (result) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmit(event);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (event) event.preventDefault();

    // form.handleSubmit((data) => {
    //   mutate(data);
    //   console.log(data);
    // })();
    const hihi = form.getFieldState();
    const dataForm = form.getValues();
    sendMessageRegisterTelegram(dataForm);
    navigate("/success");
  };

  const getFieldsToValidate = (step: number) => {
    switch (step) {
      case 0:
        return ["companyName", "companyWebsite", "businessType", "companySize", "companyDescription", "companyCountry"];
      case 1:
        return ["platforms", "services", "clientIndustries"];
      case 2:
        return ["yearsExperience", "teamExpertise"];
      case 3:
        return ["agreedToTerms"];
      default:
        return [];
    }
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <Card className="max-w-3xl mx-auto shadow-md">
      <CardContent className="p-6 md:p-8">
        {/* Progress Tracker */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">{steps[currentStep].title}</h2>
            <span className="text-sm text-gray-500">
              Step {currentStep + 1} of {steps.length}
            </span>
          </div>

          <div className="h-1 bg-gray-100 rounded-full mb-4">
            <div
              className="h-full bg-primary rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>

          <div className="flex justify-between text-sm text-gray-500">
            {steps.map((step, index) => (
              <span key={index} className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mb-1
                    ${index <= currentStep ? "bg-primary text-white" : "bg-gray-300 text-gray-600"}`}
                >
                  {index + 1}
                </div>
                <span className="hidden sm:inline">{step.title}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Form */}
        <Form {...form}>
          <form className="space-y-6">
            <CurrentStepComponent
              form={form}
              onNext={(value) => handleNext(value)}
              onBack={handleBack}
              isLastStep={currentStep === steps.length - 1}
              isSubmitting={isPending}
            />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
