import React from 'react'
import { blogs } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, User, Clock } from 'lucide-react'

const POSTS_PER_PAGE = 6

const Page = () => {
  const featured = blogs[0]
  const remaining = blogs.slice(1)

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-white pt-16 lg:pt-[150px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="py-14 md:py-16">
            <div className="max-w-[55ch]">
              <p className="text-[13px] font-semibold text-[#0066FF] uppercase tracking-[0.1em] mb-4">Our Blog</p>
              <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-[#0A1628] leading-[1.05] tracking-[-0.03em] mb-6 text-balance">
                Latest <span className="text-[#0066FF]">Articles</span>
              </h1>
              <p className="text-[16px] sm:text-[17px] text-[#5A6A82] leading-relaxed" style={{ maxWidth: '48ch' }}>
                Insights, guides, and updates for Nigerian students aspiring to study abroad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-8">
            <Link href={featured.link} className="group block">
              <div className="relative bg-white border border-[#E8ECF0] hover:border-[#1a56ff] transition-colors duration-200 overflow-hidden">
                <div className="grid md:grid-cols-12 min-h-[360px]">
                  <div className="md:col-span-7 relative min-h-[240px] md:min-h-full overflow-hidden">
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/60 to-transparent hidden md:block" />
                  </div>
                  <div className="md:col-span-5 p-8 lg:p-10 xl:p-12 flex flex-col justify-center bg-white">
                    <span className="text-[10px] font-bold text-[#0066FF] uppercase tracking-[0.12em] mb-3">Featured Article</span>
                    <h2 className="font-display text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold text-[#0A1628] leading-[1.15] tracking-[-0.02em] mb-4 group-hover:text-[#0066FF] transition-colors duration-200">
                      {featured.title}
                    </h2>
                    {featured.excerpt && (
                      <p className="text-[14px] text-[#5A6A82] leading-relaxed mb-5 line-clamp-3">
                        {featured.excerpt}
                      </p>
                    )}
                    <div className="flex items-center gap-4 mb-5">
                      <span className="flex items-center gap-1.5 text-[12px] text-[#6B7D9B]">
                        <Calendar size={13} />
                        {featured.date}
                      </span>
                      <span className="w-px h-3 bg-[#D0D5DD]" />
                      <span className="flex items-center gap-1.5 text-[12px] text-[#6B7D9B]">
                        <User size={13} />
                        {featured.author}
                      </span>
                      <span className="w-px h-3 bg-[#D0D5DD]" />
                      <span className="flex items-center gap-1.5 text-[12px] text-[#6B7D9B]">
                        <Clock size={13} />
                        5 min read
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[13px] font-semibold text-[#1a56ff] group-hover:gap-2.5 transition-all duration-200">
                      Read Full Article <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Remaining Posts */}
      <section className="bg-[#FAFAFA] pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          {remaining.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {remaining.map((post) => (
                <Link key={post.key} href={post.link} className="group block">
                  <div className="border border-[#E8ECF0] bg-white h-full flex flex-col hover:border-[#1a56ff] transition-colors duration-200">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6 lg:p-7 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[11px] text-[#6B7D9B] uppercase tracking-[0.05em]">{post.date}</span>
                        <span className="w-px h-3 bg-[#D0D5DD]" />
                        <span className="text-[11px] text-[#6B7D9B] uppercase tracking-[0.05em]">{post.author}</span>
                      </div>
                      <h3 className="text-[16px] font-bold text-[#0A1628] leading-snug group-hover:text-[#0066FF] transition-colors duration-200 flex-1">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="text-[13px] text-[#5A6A82] leading-relaxed mt-2 line-clamp-2">
                          {post.excerpt}
                        </p>
                      )}
                      <div className="flex items-center gap-1.5 mt-4 text-[13px] font-semibold text-[#1a56ff] group-hover:gap-2.5 transition-all duration-200">
                        Read Article <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination placeholder */}
          {blogs.length > POSTS_PER_PAGE && (
            <div className="mt-12 flex justify-center">
              <nav className="inline-flex items-center gap-2">
                <span className="px-4 py-2 border border-[#E8ECF0] text-[13px] font-semibold text-[#6B7D9B] bg-white">Page 1</span>
                <Link href="/blog/page/2" className="px-4 py-2 border border-[#E8ECF0] text-[13px] font-semibold text-[#6B7D9B] hover:border-[#1a56ff] hover:text-[#1a56ff] transition-colors bg-white">
                  Page 2
                </Link>
              </nav>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Page
