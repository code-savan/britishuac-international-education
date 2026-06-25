import { blogs } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';
import ShareButtons from '@/components/ShareButtons';

const siteUrl = 'https://britishauc.com';

const metaBySlug = {
  'uk-visa-changes-2026': {
    title: 'UK Visa Changes 2026: Nigerian Students Guide',
    description: 'UK student visa rules are changing in 2026. Learn about eVisa, Graduate Route cuts, financial requirements, and what Nigerian students must do to prepare.',
    keywords: 'UK student visa 2026, Nigerian students UK, UK visa changes, Graduate Route reduction, UK eVisa, student visa requirements, Nigeria UK study',
  },
  'canada-2026-study-permit-reforms': {
    title: 'Canada Study Permit 2026: Nigerian Students Guide',
    description: "Canada's 2026 study permit reforms explained. Master's/PhD exemptions, PGWP eligibility, and financial rules Nigerian applicants need to know.",
    keywords: 'Canada study permit 2026, Nigerian students Canada, Canada visa reforms, PGWP eligibility, study permit cap exemption, Canada international students',
  },
  'top-10-scholarships-nigerian-students-2026': {
    title: 'Top 10 Scholarships for Nigerian Students in 2026',
    description: 'Discover 10 fully funded scholarships open to Nigerian students in 2026, from Chevening to DAAD. Eligibility, deadlines, and application tips included.',
    keywords: 'scholarships for Nigerian students, fully funded scholarships 2026, Chevening Nigeria, Commonwealth Scholarship, DAAD Nigeria, study abroad funding',
  },
  'record-numbers-nigerian-students-uk-2026': {
    title: 'Why Nigerian Students Choose UK Universities in 2026',
    description: 'Nigerian student visas to the UK surged 59% in 2025. Explore the data, the Japa factor, and why demand keeps growing.',
    keywords: 'Nigerian students UK, UK study visa surge, Japa trend Nigeria, Nigerian student trends, UK universities Nigeria, UK Graduate Route',
  },
};

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const blogPost = blogs.find((blog) => blog.slug === slug);
  if (!blogPost) return { title: 'Post Not Found' };

  const seo = metaBySlug[slug] || {};
  const metaTitle = seo.title || blogPost.title;
  const metaDescription = seo.description || blogPost.excerpt;
  const ogImage = `${siteUrl}${blogPost.image}`;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: { canonical: `${siteUrl}/blog/${slug}` },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `${siteUrl}/blog/${slug}`,
      type: 'article',
      images: [{ url: ogImage, width: 1200, height: 630 }],
      article: {
        publishedTime: blogPost.date,
        authors: [blogPost.author],
        tags: blogPost.tags || [],
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
    keywords: seo.keywords || '',
  };
}

export default function BlogPost({ params }) {
  const { slug } = params;
  const blogPost = blogs.find((blog) => blog.slug === slug);
  const currentIndex = blogs.findIndex((b) => b.slug === slug);

  if (!blogPost) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white pt-16 lg:pt-[150px]">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-[#0A1628] mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-[#0066FF] hover:underline">← Back to all blogs</Link>
        </div>
      </div>
    );
  }

  const prev = currentIndex > 0 ? blogs[currentIndex - 1] : null;
  const next = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;
  const wordCount = blogPost.content ? blogPost.content.replace(/<[^>]*>/g, '').split(/\s+/).length : 0;
  const readingTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;
  const seo = metaBySlug[slug] || {};

  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blogPost.title,
    description: seo.description || blogPost.excerpt,
    datePublished: blogPost.date,
    dateModified: blogPost.date,
    author: {
      '@type': 'Person',
      name: blogPost.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'British AUC',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.webp`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${slug}`,
    },
    keywords: seo.keywords || '',
    image: `${siteUrl}${blogPost.image}`,
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      {/* Back link */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 pt-6 lg:pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#6B7D9B] hover:text-[#0066FF] transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
          Back to all blogs
        </Link>
      </div>

      {/* Hero */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[460px] lg:h-[500px] mt-4 mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={blogPost.image}
            fill
            className="object-cover"
            alt={blogPost.title}
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-[#0A1628]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-[11px] font-semibold text-white uppercase tracking-[0.08em] bg-white/10 px-2.5 py-1">Article</span>
                <span className="flex items-center gap-1.5 text-[12px] text-white/70">
                  <Calendar size={12} />
                  {blogPost.date}
                </span>
                <span className="w-px h-3 bg-white/20" />
                <span className="flex items-center gap-1.5 text-[12px] text-white/70">
                  <Clock size={12} />
                  {readingTime}
                </span>
              </div>
              <h1 className="font-display text-[clamp(1.5rem,4vw,2.75rem)] font-bold text-white leading-[1.1] tracking-[-0.02em] text-balance">
                {blogPost.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10 py-10 md:py-12">
        {/* Author & share row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#E8ECF0] mb-10">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-[#0A1628] flex items-center justify-center text-white font-bold text-[15px]">
              {blogPost.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="text-[14px] font-bold text-[#0A1628]">{blogPost.author}</p>
              <p className="text-[12px] text-[#6B7D9B]">Web IT Executive</p>
            </div>
          </div>
          <ShareButtons url={`${siteUrl}/blog/${slug}`} title={blogPost.title} />
        </div>

        {/* Blog content */}
        <div className="mb-16">
          {blogPost.excerpt && (
            <p className="text-[18px] text-[#0A1628] font-display font-bold leading-relaxed mb-8">
              {blogPost.excerpt}
            </p>
          )}
          {blogPost.content ? (
            <div
              className="blog-content text-[16px] text-[#5A6A82] leading-[1.85] space-y-5"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          ) : (
            <div className="text-[16px] text-[#5A6A82] leading-[1.85] space-y-5">
              <p>
                British AUC is committed to providing Nigerian students with the most up-to-date information and guidance for studying abroad. Our team of experienced counsellors works tirelessly to ensure every student receives the support they need to achieve their academic goals.
              </p>
              <p>
                With over 14 years of experience and a 100% success rate in visa applications and university admissions, we have helped thousands of students gain admission to prestigious institutions across the UK, USA, Canada, Australia, and other top study destinations worldwide.
              </p>
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {(blogPost.tags || ['Study Abroad', 'Nigerian Students']).map((tag) => (
            <span key={tag} className="text-[12px] text-[#6B7D9B] bg-[#F5F6F8] px-3 py-1.5 font-medium">{tag}</span>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#0A1628] p-8 md:p-10 mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="flex-1">
              <h3 className="font-display text-[18px] font-bold text-white mb-1">Ready to Start Your Journey?</h3>
              <p className="text-[14px] text-[#8A9AB0]">Book a free consultation with our education experts today.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a56ff] text-white font-semibold text-[14px] hover:bg-[#0066FF] transition-colors shrink-0 group"
            >
              Speak to an Advisor
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="border-t border-[#E8ECF0] pt-8 flex flex-col sm:flex-row justify-between gap-4">
          <div>
            {prev && (
              <Link href={prev.link} className="group inline-flex items-center gap-2 text-[14px] font-semibold text-[#6B7D9B] hover:text-[#0066FF] transition-colors">
                <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
                Previous Article
              </Link>
            )}
          </div>
          <div className="text-right">
            {next && (
              <Link href={next.link} className="group inline-flex items-center gap-2 text-[14px] font-semibold text-[#6B7D9B] hover:text-[#0066FF] transition-colors">
                Next Article
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
