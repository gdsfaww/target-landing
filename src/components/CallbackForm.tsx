"use client";

import { useState } from 'react';

interface CallbackFormProps {
  onClose: () => void;
}

const CallbackForm = ({ onClose }: CallbackFormProps) => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Здесь будет логика отправки формы
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
          <span>Отправить заявку</span>
        )}
      </button>

      {/* Дисклеймер */}
      <p className="text-center text-sm text-gray-500">
        Нажимая на кнопку, вы соглашаетесь с{' '}
        <a href="#" className="text-[var(--primary)] hover:underline">
          политикой конфиденциальности
        </a>
      </p>
    </form>
  );
};

export default CallbackForm; 