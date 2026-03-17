"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import ServiceModal from "./ServiceModal";
import { servicesData, ServiceData } from "../lib/servicesData";

interface ServiceItemProps {
  service: ServiceData;
  hoverColorClass: string;
  onClick: () => void;
}

function ServiceItem({ service, hoverColorClass, onClick }: ServiceItemProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-white rounded-lg p-4 md:p-6 border border-gray-200 ${hoverColorClass} hover:shadow-md transition-all cursor-pointer text-left w-full`}
    >
      <p className="text-gray-700 text-sm md:text-base">{service.title}</p>
    </button>
  );
}

export default function ServicesClient() {
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

  const handleServiceClick = (serviceId: string) => {
    const service = servicesData.find((s) => s.id === serviceId);
    if (service) {
      setSelectedService(service);
    }
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  // Group services by category
  const servicesByCategory = servicesData.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, ServiceData[]>);

  const categoryConfig: Record<string, { icon: ReactNode; color: string; hoverColorClass: string }> = {
    "Intelligent Chatbots & Assistants": {
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      color: "bg-blue-100",
      hoverColorClass: "hover:border-blue-300",
    },
    "Custom Business Dashboards": {
      icon: (
        <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
        </svg>
      ),
      color: "bg-cyan-100",
      hoverColorClass: "hover:border-cyan-300",
    },
    "Workflow & Process Automation": {
      icon: (
        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "bg-yellow-100",
      hoverColorClass: "hover:border-yellow-300",
    },
    "Social Media & Content Systems": {
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      color: "bg-purple-100",
      hoverColorClass: "hover:border-purple-300",
    },
    "Website & Digital Monitoring": {
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "bg-green-100",
      hoverColorClass: "hover:border-green-300",
    },
    "Customer Experience Tools": {
      icon: (
        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "bg-pink-100",
      hoverColorClass: "hover:border-pink-300",
    },
    "Internal Team Productivity": {
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "bg-indigo-100",
      hoverColorClass: "hover:border-indigo-300",
    },
    "AI Strategy & Implementation": {
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      color: "bg-emerald-100",
      hoverColorClass: "hover:border-emerald-300",
    },
  };

  return (
    <>
      {Object.entries(servicesByCategory).map(([category, services]) => {
        const config = categoryConfig[category] || categoryConfig["Intelligent Chatbots & Assistants"];
        return (
          <section key={category} className="bg-transparent py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8 md:mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 ${config.color} rounded-lg flex items-center justify-center`}>
                    {config.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                    {category}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {services.map((service) => (
                    <ServiceItem
                      key={service.id}
                      service={service}
                      hoverColorClass={config.hoverColorClass}
                      onClick={() => handleServiceClick(service.id)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {selectedService && (
        <ServiceModal
          isOpen={!!selectedService}
          onClose={closeModal}
          title={selectedService.title}
          description={selectedService.description}
          category={selectedService.category}
          features={selectedService.features}
          benefits={selectedService.benefits}
          useCases={selectedService.useCases}
        />
      )}
    </>
  );
}
