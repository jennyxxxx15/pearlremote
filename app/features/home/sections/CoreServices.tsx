import Link from 'next/link';
import { IoArrowForward } from 'react-icons/io5';
import {
  MdOutlineAccountBalance,
  MdOutlineAdminPanelSettings,
  MdOutlineBusinessCenter,
  MdOutlineGavel,
  MdOutlineMedicalServices,
} from 'react-icons/md';
import { CoreServiceCard } from '../../../components/home/CoreServiceCard';
import { PeekSlider } from '../../../components/home/PeekSlider';
import { MotionSection } from '../../../components/layout/MotionSection';
import type { CoreServicesProps } from '../../../types/home/sections.types';

const coreServiceIcons = {
  admin: MdOutlineAdminPanelSettings,
  finance: MdOutlineAccountBalance,
  healthcare: MdOutlineMedicalServices,
  legal: MdOutlineGavel,
  professional: MdOutlineBusinessCenter,
};

export function CoreServices({ content }: CoreServicesProps) {
  return (
    <MotionSection
      aria-labelledby='core-services-title'
      className='container mx-auto px-6 py-10 lg:py-20'
    >
      <div className='flex items-end justify-between'>
        <div>
          <h2
            id='core-services-title'
            className='font-display text-heading mb-4 text-2xl font-semibold lg:text-3xl'
          >
            {content.heading}
          </h2>
          <p>{content.description}</p>
        </div>
        <Link
          href={content.action.href}
          className='text-primary hidden items-center gap-1 font-bold lg:flex'
        >
          {content.action.label}{' '}
          <IoArrowForward aria-hidden='true' focusable='false' />
        </Link>
      </div>
      <PeekSlider
        ariaLabel={content.heading}
        breakpoint='lg'
        className='mt-12 lg:mt-20'
        listClassName='lg:grid lg:grid-cols-6'
      >
        {content.items.map((service, index) => {
          const Icon = coreServiceIcons[service.icon];

          return (
            <CoreServiceCard
              key={service.title}
              description={service.description}
              featured={service.featured === true}
              icon={Icon}
              title={service.title}
              wide={index < 2}
            />
          );
        })}
      </PeekSlider>
      <Link
        href={content.action.href}
        className='text-primary mx-auto mt-6 flex w-fit items-center justify-center gap-1 text-center font-bold lg:hidden'
      >
        {content.action.label}{' '}
        <IoArrowForward aria-hidden='true' focusable='false' />
      </Link>
    </MotionSection>
  );
}
