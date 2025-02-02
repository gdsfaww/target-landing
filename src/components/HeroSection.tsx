"use client";

import { useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';
import CallbackForm from './CallbackForm';

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    { label: 'Клиентов', value: '150+' },
    { label: 'Успешных кампаний', value: '500+' },
    { label: 'Средний ROI', value: '287%' },
    { label: 'Лет опыта', value: '5+' },
  ];

  return (
    <>
      <section className="pt-32 pb-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Левая колонка - Контент */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                            bg-[var(--primary)]/10 text-[var(--primary)]">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
                <span className="text-sm font-medium">Таргетированная реклама VK</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Привлекаем клиентов через{' '}
                <span className="text-[var(--primary)]">таргетированную рекламу</span>
              </h1>

              <p className="text-lg text-gray-600 max-w-lg">
                Настраиваем эффективную рекламу во ВКонтакте. 
                Гарантируем поток целевых клиентов от 
                <span className="text-[var(--primary)] font-semibold"> 290₽</span> за заявку
              </p>

              {/* CTA секция */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 rounded-xl text-white font-medium
                           bg-[var(--primary)] hover:bg-[var(--primary)]/90
                           shadow-lg shadow-blue-500/20 transition-all"
                >
                  Получить консультацию
                </button>
                <button 
                  onClick={() => setIsVideoPlaying(true)}
                  className="px-8 py-4 rounded-xl font-medium
                           border border-gray-200 hover:bg-gray-50
                           inline-flex items-center gap-3 transition-all"
                >
                  <span className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Смотреть видео
                </button>
              </div>

              {/* Статистика */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Правая колонка - Изображение */}
            <div className="relative">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
                  alt="Таргетированная реклама"
                  fill
                  className="object-cover"
                />
                
                {/* Плавающие элементы */}
                <div className="absolute -left-4 top-1/4 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Конверсия</div>
                      <div className="text-lg font-bold text-green-600">+156%</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-4 bottom-1/4 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium">ROI</div>
                      <div className="text-lg font-bold text-blue-600">287%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Градиентный эффект */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl -z-10 opacity-10 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Модальное окно */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Получить консультацию"
      >
        <CallbackForm onClose={() => setIsModalOpen(false)} />
      </Modal>

      {/* Модальное окно с видео */}
      {isVideoPlaying && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsVideoPlaying(false)}
        >
          <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/your-video-id"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection; 