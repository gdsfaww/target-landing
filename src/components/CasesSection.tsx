"use client";

import { useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';
import CallbackForm from './CallbackForm';

type Case = {
  id: number;
  title: string;
  category: string;
  description: string;
  stats: {
    roi: string;
    leads: string;
    cpl: string;
  };
  image: string;
  tags: string[];
};

const CasesSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const INITIAL_SHOW_COUNT = 3;

  const filters = [
    { id: 'all', label: 'Все проекты' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'services', label: 'Услуги' },
    { id: 'education', label: 'Обучение' },
  ];

  const cases: Case[] = [
    {
      id: 1,
      title: "Онлайн-магазин косметики",
      category: "ecommerce",
      description: "Увеличили продажи косметики на 247% за 3 месяца через таргетированную рекламу",
      stats: {
        roi: "347%",
        leads: "1,240",
        cpl: "290₽"
      },
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1187&q=80",
      tags: ["Косметика", "E-commerce", "Продажи"]
    },
    {
      id: 2,
      title: "Школа иностранных языков",
      category: "education",
      description: "Увеличили количество лидов на 856 за 3 месяца через таргетированную рекламу",
      stats: {
        roi: "285%",
        leads: "856",
        cpl: "378₽"
      },
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      tags: ["Образование", "Лиды", "Продажи"]
    },
    {
      id: 3,
      title: "Сеть салонов красоты",
      category: "services",
      description: "Увеличили продажи на 412% за 3 месяца через таргетированную рекламу",
      stats: {
        roi: "412%",
        leads: "2,180",
        cpl: "225₽"
      },
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      tags: ["Услуги", "Красота", "Лиды"]
    },
    {
      id: 4,
      title: "Интернет-магазин электроники",
      category: "ecommerce",
      description: "Увеличили продажи на 298% за 3 месяца через таргетированную рекламу",
      stats: {
        roi: "298%",
        leads: "3,450",
        cpl: "195₽"
      },
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["Электроника", "E-commerce", "Продажи"]
    },
    {
      id: 5,
      title: "Курсы программирования",
      category: "education",
      description: "Увеличили продажи на 375% за 3 месяца через таргетированную рекламу",
      stats: {
        roi: "375%",
        leads: "920",
        cpl: "420₽"
      },
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      tags: ["IT", "Образование", "Лиды"]
    },
    {
      id: 6,
      title: "Фитнес-центр премиум класса",
      category: "services",
      description: "Увеличили продажи на 289% за 3 месяца через таргетированную рекламу",
      stats: {
        roi: "289%",
        leads: "1,840",
        cpl: "310₽"
      },
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["Фитнес", "Услуги", "Продажи"]
    }
  ];

  const filteredCases = activeFilter === 'all' 
    ? cases 
    : cases.filter(c => c.category === activeFilter);

  const visibleCases = showAll ? filteredCases : filteredCases.slice(0, INITIAL_SHOW_COUNT);
  const hasMoreCases = filteredCases.length > INITIAL_SHOW_COUNT;

  return (
    <>
      <section id="cases" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          {/* Заголовок секции */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-[var(--primary)] mb-2 block">
              КЕЙСЫ
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Реальные результаты наших клиентов
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Каждый проект — это история успеха, основанная на данных и подкрепленная цифрами
            </p>
          </div>

          {/* Фильтры */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => {
                    setActiveFilter(filter.id);
                    setShowAll(false);
                  }}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all
                    ${activeFilter === filter.id 
                      ? 'bg-[var(--primary)] text-white shadow-lg shadow-blue-500/20' 
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Сетка кейсов */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleCases.map((case_) => (
              <div
                key={case_.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                {/* Изображение */}
                <div className="relative h-[280px] overflow-hidden">
                  <Image
                    src={case_.image}
                    alt={case_.title}
                    fill
                    className="object-cover transition-transform duration-500 
                             group-hover:scale-105"
                  />
                </div>

                {/* Основной контент */}
                <div className="p-6 bg-white">
                  {/* Теги */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {case_.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs font-medium px-3 py-1 rounded-full
                                 bg-gray-100 text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Заголовок и описание */}
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {case_.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-6">
                    {case_.description}
                  </p>

                  {/* Статистика */}
                  <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-xl mb-6">
                    <div className="text-center">
                      <p className="text-sm text-gray-500 mb-1">ROI</p>
                      <p className="text-lg font-semibold text-[var(--primary)]">
                        {case_.stats.roi}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500 mb-1">Лиды</p>
                      <p className="text-lg font-semibold text-[var(--primary)]">
                        {case_.stats.leads}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500 mb-1">CPL</p>
                      <p className="text-lg font-semibold text-[var(--primary)]">
                        {case_.stats.cpl}
                      </p>
                    </div>
                  </div>

                  {/* Кнопка */}
                  <button className="w-full py-3 text-sm font-medium text-white
                                   bg-[var(--primary)] rounded-xl
                                   hover:bg-[var(--primary)]/90 transition-all">
                    Подробнее о кейсе
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Кнопка "Показать больше" */}
          {hasMoreCases && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                         border-2 border-[var(--primary)] text-[var(--primary)]
                         font-medium hover:bg-[var(--primary)] hover:text-white
                         transition-all duration-300"
              >
                {showAll ? (
                  <>
                    <span>Свернуть</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </>
                ) : (
                  <>
                    <span>Показать больше кейсов</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          )}

          {/* Дополнительный призыв к действию */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-gray-50 rounded-full">
              <span className="text-gray-600">Хотите похожий результат?</span>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-2 rounded-full bg-[var(--primary)] text-white text-sm font-medium
                         hover:bg-[var(--primary)]/90 transition-all"
              >
                Обсудить проект
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Модальное окно */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Обсудить проект"
      >
        <CallbackForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
};

export default CasesSection; 