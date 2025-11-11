'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StepSelector from '../components/agendar/StepSelector';
import StepService from '../components/agendar/StepService';
import StepStylist from '../components/agendar/StepStylist';
import StepDate from '../components/agendar/StepDate';
import StepConfirm from '../components/agendar/StepConfirm';
import StepReview from '../components/agendar/StepReview';
import SuccessModal from '../components/agendar/SuccessModal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const steps = [
  { number: 1, title: 'Servicio' },
  { number: 2, title: 'Estilista' },
  { number: 3, title: 'Fecha y Hora' },
  { number: 4, title: 'Datos' },
  { number: 5, title: 'Confirmación' },
];

export default function AgendarPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedStylist, setSelectedStylist] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    comentario: '',
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleNext = () => {
    if (canProceed()) {
      if (currentStep < 5) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return selectedService !== null;
      case 2:
        return selectedStylist !== null;
      case 3:
        return selectedDate !== null && selectedTime !== null;
      case 4:
        return (
          formData.nombre.trim() !== '' &&
          formData.telefono.trim() !== '' &&
          formData.correo.trim() !== '' &&
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)
        );
      default:
        return true;
    }
  };

  const handleFormChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleConfirm = () => {
    setShowSuccessModal(true);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepService
            selectedService={selectedService}
            onSelect={setSelectedService}
          />
        );
      case 2:
        return (
          <StepStylist
            selectedStylist={selectedStylist}
            onSelect={setSelectedStylist}
          />
        );
      case 3:
        return (
          <StepDate
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onSelectDate={setSelectedDate}
            onSelectTime={setSelectedTime}
          />
        );
      case 4:
        return (
          <StepConfirm
            formData={formData}
            onFormChange={handleFormChange}
          />
        );
      case 5:
        return (
          <StepReview
            selectedService={selectedService!}
            selectedStylist={selectedStylist!}
            selectedDate={selectedDate!}
            selectedTime={selectedTime!}
            formData={formData}
            onConfirm={handleConfirm}
          />
        );
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-[#1c1b1b]">
      <Header />
      <section className="pt-24 pb-20 sm:pt-32 sm:pb-24 bg-gradient-to-b from-[#1c1b1b] to-[#151414]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-3">
              Agenda tu hora con <span className="text-[#c9a857]">VersatilSalon</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Sigue los pasos para reservar tu cita y renovar tu estilo.
            </p>
          </motion.div>

          {/* Step Selector */}
          <StepSelector
            currentStep={currentStep}
            totalSteps={steps.length}
            steps={steps}
          />

          {/* Step Content Card */}
          <div className="bg-[#151414] border border-[#c9a857]/20 rounded-2xl p-6 sm:p-8 lg:p-10 mb-8 shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          {currentStep < 5 && (
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className={`
                  flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300
                  ${
                    currentStep === 1
                      ? 'bg-[#151414] text-gray-600 cursor-not-allowed border border-[#151414]'
                      : 'bg-[#151414] text-white hover:bg-[#1a1a1a] border border-[#c9a857]/30 hover:border-[#c9a857]'
                  }
                `}
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Anterior</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                disabled={!canProceed()}
                className={`
                  flex items-center space-x-2 px-8 py-3 rounded-lg font-bold transition-all duration-300
                  ${
                    canProceed()
                      ? 'bg-[#c9a857] hover:bg-[#d4af37] text-[#1c1b1b] shadow-lg hover:shadow-[#c9a857]/30'
                      : 'bg-[#151414] text-gray-600 cursor-not-allowed border border-[#151414]'
                  }
                `}
              >
                <span>Siguiente</span>
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          )}

          {currentStep === 5 && (
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrevious}
                className="flex items-center space-x-2 px-6 py-3 rounded-lg font-medium bg-[#151414] text-white hover:bg-[#1a1a1a] border border-[#c9a857]/30 hover:border-[#c9a857] transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Anterior</span>
              </motion.button>
            </div>
          )}
        </div>
      </section>
      <Footer />

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </main>
  );
}
