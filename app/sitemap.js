import { blogs, eventList } from '@/constants';

const baseUrl = 'https://www.international-education.britishauc.com/';

function parseDate(dateStr) {
  if (!dateStr) return '2026-05-31';
  const months = {
    january: '01', february: '02', march: '03', april: '04',
    may: '05', june: '06', july: '07', august: '08',
    september: '09', october: '10', november: '11', december: '12',
  };
  const match = dateStr.match(/(\d+)(?:st|nd|rd|th)\s+(\w+),\s+(\d{4})/i);
  if (match) {
    const day = match[1].padStart(2, '0');
    const month = months[match[2].toLowerCase()];
    const year = match[3];
    if (month) return `${year}-${month}-${day}`;
  }
  return '2026-05-31';
}

export default async function sitemap() {
  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified: '2025-10-30',
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services/`,
      lastModified: '2025-10-30',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/study/study-in-uk/`,
      lastModified: '2025-10-30',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/study/study-in-usa/`,
      lastModified: '2025-10-30',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/study/study-in-canada/`,
      lastModified: '2025-10-30',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: '2025-10-30',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/events/`,
      lastModified: '2025-10-30',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: '2025-10-30',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: '2026-03-18',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms/`,
      lastModified: '2026-05-31',
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/privacy/`,
      lastModified: '2026-05-31',
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/disclaimer/`,
      lastModified: '2026-05-31',
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ];

  const blogPages = blogs.map((blog) => ({
    url: `${baseUrl}${blog.link}/`,
    lastModified: parseDate(blog.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const eventPages = eventList
    .filter((event) => event.showLink !== false && event.id !== 'upcoming-event')
    .map((event) => ({
      url: `${baseUrl}${event.link}/`,
      lastModified: '2025-10-30',
      changeFrequency: 'yearly',
      priority: 0.4,
    }));

  return [...staticPages, ...blogPages, ...eventPages];
}
