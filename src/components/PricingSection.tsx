"use client";

import { useState } from 'react';
import Modal from '@/components/Modal';
import CallbackForm from '@/components/CallbackForm';

const PricingSection = () => {
  const [period, setPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTariff, setSelectedTariff] = useState('');

  const plans = [
    {
      name: "Базовый",
      description: "Идеально для начинающих",
      price: period === 'monthly' ? "29 900" : "299 900",
      features: [
        "Анализ целевой аудитории",
        "Создание рекламных объявлений",
        "Базовая настройка кампаний",
        "Отчет 1 раз в неделю",
        "Поддержка по email"
      ],
      popular: false
    },
    {
      name: "Бизнес",
      description: "Оптимально для активного роста",
      price: period === 'monthly' ? "49 900" : "499 900",
      features: [
        "Все опции тарифа Базовый",
        "Расширенный анализ ЦА",
        "A/B тестирование креативов",
        "Ретаргетинг и look-alike",
        "Отчет 2 раза в неделю",
        "Поддержка в мессенджерах"
      ],
      popular: true
    },
    {
      name: "VIP",
      description: "Максимальный результат",
      price: period === 'monthly' ? "99 900" : "999 900",
      features: [
        "Все опции тарифа Бизнес",
        "Персональный менеджер",
        "Еженедневная оптимизация",
        "Создание креативов",
        "Ежедневный отчет",
        "Поддержка 24/7"
      ],
      popular: false
    }
  ];

  return (
    <>
      <section id="pricing" className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Заголовок секции */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Прозрачные тарифы для вашего бизнеса
            </h2>
            <p className="text-gray-600">
              Выберите оптимальный тариф и начните привлекать клиентов уже сегодня
            </p>
          </div>

          {/* Переключатель периода */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-xl inline-flex">
              <button
                onClick={() => setPeriod('monthly')}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all
                  ${period === 'monthly' 
                    ? 'bg-white text-[var(--primary)] shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'}`}
              >
                Помесячно
              </button>
              <button
                onClick={() => setPeriod('yearly')}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all
                  ${period === 'yearly' 
                    ? 'bg-white text-[var(--primary)] shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'}`}
              >
                Годовой контракт
              </button>
            </div>
          </div>

          {/* Карточки тарифов */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl p-8 transition-all duration-300
                  hover:shadow-xl hover:-translate-y-1
                  ${plan.popular ? 'shadow-lg ring-2 ring-[var(--primary)]' : 'shadow-sm'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[var(--primary)] text-white text-xs font-medium px-3 py-1 rounded-full">
                      Популярный выбор
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                  <div className="flex items-end justify-center gap-1 mb-1">
                    <span className="text-3xl font-bold">₽{plan.price}</span>
                    <span className="text-gray-500 mb-1">/ {period === 'monthly' ? 'мес' : 'год'}</span>
                  </div>
                  {period === 'yearly' && (
                    <span className="text-[var(--primary)] text-sm">
                      Экономия 20%
                    </span>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <svg className="w-5 h-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    setSelectedTariff(plan.name);
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

          {/* Дополнительная информация */}
          <div className="mt-16 text-center text-sm text-gray-500">
            <p>Все цены указаны без НДС. Возможна разработка индивидуального тарифа.</p>
          </div>
        </div>
      </section>

      {/* Модальное окно */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Оформить тариф ${selectedTariff}`}
      >
        <CallbackForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
};

export default PricingSection; 