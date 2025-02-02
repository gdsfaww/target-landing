"use client";

import { useState } from 'react';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    site: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
      
      {/* Декоративные элементы */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--primary)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto">
          {/* Заголовок секции */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-[var(--primary)]/10 
                           text-[var(--primary)] text-sm font-medium mb-4">
              Начнем сотрудничество
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Готовы увеличить продажи через рекламу ВКонтакте?
            </h2>
            <p className="text-gray-600 text-lg">
              Оставьте заявку, и мы подготовим персональное предложение для вашего бизнеса
            </p>
          </div>

          {/* Карточка с формой */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            {/* Декоративный элемент */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-[var(--primary)] rounded-xl rotate-12" />
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Имя */}
                <div className="relative">
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="peer w-full px-4 py-3 rounded-xl border-2 border-gray-200
                             focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20
                             placeholder-transparent transition-all"
                    placeholder="Ваше имя"
                    required
                  />
                  <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600
                                  transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                  peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm
                                  peer-focus:text-[var(--primary)]">
                    Ваше имя
                  </label>
                </div>

                {/* Телефон */}
                <div className="relative">
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    className="peer w-full px-4 py-3 rounded-xl border-2 border-gray-200
                             focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20
                             placeholder-transparent transition-all"
                    placeholder="Телефон"
                    required
                  />
                  <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600
                                  transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                  peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm
                                  peer-focus:text-[var(--primary)]">
                    Телефон
                  </label>
                </div>
              </div>

              {/* Сайт */}
              <div className="relative">
                <input
                  type="url"
                  value={formState.site}
                  onChange={(e) => setFormState({...formState, site: e.target.value})}
                  className="peer w-full px-4 py-3 rounded-xl border-2 border-gray-200
                           focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20
                           placeholder-transparent transition-all"
                  placeholder="Сайт или страница ВК"
                />
                <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600
                                transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm
                                peer-focus:text-[var(--primary)]">
                  Сайт или страница ВК
                </label>
              </div>

              {/* Сообщение */}
              <div className="relative">
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="peer w-full px-4 py-3 rounded-xl border-2 border-gray-200
                           focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20
                           placeholder-transparent transition-all"
                  rows={4}
                  placeholder="Расскажите о вашем проекте"
                />
                <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600
                                transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm
                                peer-focus:text-[var(--primary)]">
                  Расскажите о вашем проекте
                </label>
              </div>

              {/* Кнопка отправки */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-[var(--primary)] text-white font-medium
                         hover:bg-[var(--primary)]/90 transition-all
                         disabled:opacity-70 disabled:cursor-not-allowed
                         shadow-lg shadow-[var(--primary)]/25
                         flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Отправка...</span>
                  </>
                ) : (
                  <span>Получить консультацию</span>
                )}
              </button>

              {/* Дисклеймер */}
              <p className="text-center text-sm text-gray-500">
                Нажимая на кнопку, вы соглашаетесь с нашей{' '}
                <a href="#" className="text-[var(--primary)] hover:underline">
                  политикой конфиденциальности
                </a>
              </p>
            </form>
          </div>

          {/* Преимущества */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                title: "Быстрый старт",
                description: "Запускаем рекламу в течение 24 часов после обращения"
              },
              {
                icon: "📊",
                title: "Прозрачная аналитика",
                description: "Предоставляем детальные отчеты о результатах"
              },
              {
                icon: "🤝",
                title: "Персональный менеджер",
                description: "Поддержка и консультации на всех этапах"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/50 backdrop-blur-sm rounded-xl p-6 text-center">
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <h3 className="font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 