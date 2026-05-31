import { blogs } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ArrowRight } from 'lucide-react'

const BlogPreview = () => {
  return (
    <section className="bg-[#FAFAFA] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="max-w-[55ch] mb-14 lg:mb-16">
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold text-[#0A1628] tracking-[-0.03em] text-balance mb-4">
            Latest from <span className="text-[#0066FF]">Our Blog</span>
          </h2>
          <div className="w-12 h-px bg-[#0066FF] mb-5" />
          <p className="text-[16px] text-[#5A6A82] leading-relaxed">
            Insights, guides, and updates for Nigerian students aspiring to study abroad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {blogs.map((post) => (
            <Link key={post.key} href={post.link} className="group block">
              <div className="border border-[#E8ECF0] bg-white h-full flex flex-col hover:border-[#1a56ff] transition-colors duration-200">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[12px] text-[#6B7D9B] uppercase tracking-[0.05em]">{post.date}</span>
                    <span className="w-px h-3 bg-[#D0D5DD]" />
                    <span className="text-[12px] text-[#6B7D9B] uppercase tracking-[0.05em]">{post.author}</span>
                  </div>
                  <h3 className="text-[15px] font-bold text-[#0A1628] leading-snug group-hover:text-[#0066FF] transition-colors duration-200 flex-1">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-4 text-[13px] font-semibold text-[#1a56ff] group-hover:gap-2.5 transition-all duration-200">
                    Read More <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogPreview
