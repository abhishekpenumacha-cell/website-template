import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    category: z.enum(['general', 'cosmetic', 'surgical', 'pediatric', 'orthodontics']),
    image: z.string(),
    excerpt: z.string(),
    order: z.number().optional(),
  }),
});

const doctors = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    specialty: z.string(),
    image: z.string(),
    bio: z.string(),
    qualifications: z.array(z.string()),
    experience: z.string(),
    order: z.number().optional(),
  }),
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    patientName: z.string(),
    treatment: z.string(),
    rating: z.number().min(1).max(5),
    testimonial: z.string(),
    image: z.string().optional(),
    date: z.date().optional(),
  }),
});

const faqs = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    category: z.enum(['general', 'implants', 'orthodontics', 'cosmetic', 'pediatric']).optional(),
    order: z.number().optional(),
  }),
});

const beforeAfter = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    treatment: z.string(),
    beforeImage: z.string(),
    afterImage: z.string(),
    description: z.string(),
    duration: z.string(),
    order: z.number().optional(),
  }),
});

const locations = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    address: z.string(),
    city: z.string(),
    phone: z.string(),
    email: z.string(),
    latitude: z.number(),
    longitude: z.number(),
    hours: z.object({
      monday: z.string(),
      tuesday: z.string(),
      wednesday: z.string(),
      thursday: z.string(),
      friday: z.string(),
      saturday: z.string(),
      sunday: z.string(),
    }),
    image: z.string().optional(),
    order: z.number().optional(),
  }),
});

const plans = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    price: z.number(),
    currency: z.string(),
    period: z.string(),
    description: z.string(),
    features: z.array(z.string()),
    highlighted: z.boolean().optional(),
    order: z.number().optional(),
  }),
});

export const collections = {
  services,
  doctors,
  testimonials,
  faqs,
  beforeAfter,
  locations,
  plans,
};