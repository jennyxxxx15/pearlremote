import Image from 'next/image';
import { MotionSection } from '../../../components/layout/MotionSection';
import type { AboutLeadershipProps } from '../../../types/about/sections.types';

export function AboutLeadership({ content }: AboutLeadershipProps) {
  const { description, heading, members } = content;

  return (
    <MotionSection
      aria-labelledby='about-leadership-title'
      className='container mx-auto px-6 py-10 lg:py-20'
    >
      <div className='max-w-3xl'>
        <h2
          id='about-leadership-title'
          className='font-display text-heading text-2xl font-semibold lg:text-3xl'
        >
          {heading}
        </h2>
        <p className='mt-4 text-base lg:text-lg'>{description}</p>
      </div>

      <ul className='mt-10 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6'>
        {members.map((member) => (
          <li
            key={member.name}
            className='bg-about-leadership-card-surface flex min-h-105 flex-col rounded-xl p-4 shadow-sm'
          >
            <figure className='bg-about-leadership-image-surface relative h-72 overflow-hidden rounded-lg sm:h-80 lg:h-84'>
              <Image
                src={member.image.src}
                alt={member.image.alt}
                width={290}
                height={363}
                sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
                className='h-full w-full object-cover object-top'
              />
            </figure>
            <div className='flex flex-1 flex-col justify-end pt-5'>
              <h3 className='font-display text-heading text-xl font-semibold lg:text-2xl'>
                {member.name}
              </h3>
              <p className='text-about-leadership-role mt-1 font-semibold'>
                {member.role}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </MotionSection>
  );
}
