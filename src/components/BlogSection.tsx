"use client";

import { useState } from 'react';
import Image from 'next/image';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
};

const BlogSection = () => {
  // Удалим неиспользуемый state
  // const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  const posts: BlogPost[] = [
    {
      id: 1,
      title: "Как увеличить конверсию рекламы ВКонтакте в 2024 году",
      excerpt: "Разбираем актуальные стратегии и инструменты для повышения эффективности рекламных кампаний",
      category: "Стратегия",
      readTime: "7 мин",
      date: "15 мар 2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
      author: {
        name: "Анна Смирнова",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      }
    },
    {
      id: 2,
      title: "Look-alike аудитории: полное руководство",
      excerpt: "Пошаговая инструкция по созданию и оптимизации похожих аудиторий для таргетированной рекламы",
      category: "Туториал",
      readTime: "5 мин",
      date: "12 мар 2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
      author: {
        name: "Максим Петров",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      }
    },
    {
      id: 3,
      title: "ТОП-10 ошибок в рекламных креативах",
      excerpt: "Разбираем типичные ошибки в рекламных материалах и способы их исправления",
      category: "Креативы",
      readTime: "6 мин",
      date: "10 мар 2024",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
      author: {
        name: "Елена Козлова",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      }
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container-custom">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-[var(--primary)] mb-2 block">
            БЛОГ
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Полезные материалы по таргету
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Делимся опытом, разбираем кейсы и рассказываем о новых инструментах таргетированной рекламы
          </p>
        </div>

        {/* Сетка статей */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden transition-all duration-300
                       hover:shadow-xl"
              // onMouseEnter={() => setHoveredPost(post.id)}
              // onMouseLeave={() => setHoveredPost(null)}
            >
              {/* Изображение */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500
                           group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm
                               rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>

              {/* Контент */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--primary)]
                             transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {post.excerpt}
                </p>

                {/* Автор */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span className="text-sm font-medium">{post.author.name}</span>
                  </div>

                  <button className="text-[var(--primary)] font-medium text-sm
                                   group-hover:translate-x-1 transition-transform">
                    Читать далее →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Кнопка "Все статьи" */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                           bg-[var(--primary)] text-white font-medium
                           hover:bg-[var(--primary)]/90 transition-all">
            <span>Все статьи</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 