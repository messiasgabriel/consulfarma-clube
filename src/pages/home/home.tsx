import { useState } from 'react';
import BannerSection from './sections/banner/banner';
import BenefitsSection from './sections/benefits-section/benefits-section';
import PlansSection from './sections/plan/plan';
import QuestionsSection from './sections/questions/questions';
import SuppliersSection from './sections/suppliers/suppliers';
import TestimonialsSection from './sections/testimony/testimony';
import ContactModal from '../../components/layout/components/contactModal/contactModal';

const HomePage = () => {
  const [isModalContactOpen, setIsModalContactOpen] = useState(false);

  function handleModalContact() {
    setIsModalContactOpen(!isModalContactOpen);
  }

  return (
    <>
      <ContactModal
        isOpen={isModalContactOpen}
        handleShow={() => {
          setIsModalContactOpen(true);
        }}
        handleClose={() => {
          setIsModalContactOpen(false);
        }}
      />

      <BannerSection handleModalContact={handleModalContact} />
      <SuppliersSection handleModalContact={handleModalContact} />
      <PlansSection handleModalContact={handleModalContact} />
      <BenefitsSection handleModalContact={handleModalContact} />
      <TestimonialsSection handleModalContact={handleModalContact} />
      <QuestionsSection handleModalContact={handleModalContact} />
    </>
  );
};

export default HomePage;
