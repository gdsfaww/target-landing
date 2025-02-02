"use client";

import { useState } from 'react';
import Modal from './Modal';
import CallbackForm from './CallbackForm';

const PricingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTariff, setSelectedTariff] = useState('');

  const tariffs = [
    {
      title: "Базовый",
      price: "от 30 000 ₽",
      features: [
        "Анализ целевой аудитории",
        "Создание рекламных объявлений",
        "Базовая настройка кампаний",
        "Еженедельная отчетность"
      ]
    },
    // Другие тарифы...
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {tariffs.map((tariff) => (
            <div key={tariff.title} className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">{tariff.title}</h3>
              <div className="text-3xl font-bold mb-6">{tariff.price}</div>
              <ul className="space-y-4 mb-8">
                {tariff.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  setSelectedTariff(tariff.title);
                  setIsModalOpen(true);
                }}
                className="w-full py-4 px-6 rounded-xl bg-[var(--primary)] text-white font-medium
                         hover:bg-[var(--primary)]/90 transition-all"
              >
                Выбрать тариф
              </button>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Оформить тариф ${selectedTariff}`}
      >
        <CallbackForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </section>
  );
};

export default PricingSection; 