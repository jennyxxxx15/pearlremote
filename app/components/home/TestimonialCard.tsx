import Image from 'next/image';
import { FaStar } from 'react-icons/fa6';
import type { TestimonialCardProps } from '../../types/home/components.types';

export function TestimonialCard({
  author,
  quote,
  rating,
}: TestimonialCardProps) {
  return (
    <li className='bg-card-surface flex min-w-[82%] snap-center flex-col self-stretch rounded-4xl p-6 shadow-sm md:min-w-0 md:p-8 lg:p-12'>
      <div
        aria-label={`${rating} out of 5 stars`}
        className='text-testimonial-star mb-6 flex'
        role='img'
      >
        {Array.from({ length: rating }, (_, index) => (
          <FaStar key={index} aria-hidden='true' focusable='false' />
        ))}
      </div>
      <blockquote className='mb-20 flex-1 italic'>
        &quot;{quote}&quot;
      </blockquote>
      <div className='flex items-center gap-4'>
        <Image
          src={author.image.src}
          width={48}
          height={48}
          alt={author.image.alt}
          sizes='48px'
          className='h-12 w-12 rounded-full'
        />
        <div>
          <h3 className='font-bold'>{author.name}</h3>
          <p className='text-sm'>{author.role}</p>
        </div>
      </div>
    </li>
  );
}
