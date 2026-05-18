import Image from 'next/image';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { Button } from '@/app/components/ui/Button';
import type { ServiceOverviewItem } from '@/app/types/services/content.types';

type ServiceOverviewCardProps = {
  inverted?: boolean;
  service: ServiceOverviewItem;
};

export function ServiceOverviewCard({
  inverted = false,
  service,
}: ServiceOverviewCardProps) {
  const imageOrder = inverted ? 'lg:order-2' : '';
  const contentOrder = inverted ? 'lg:order-1' : '';
  const bestForClassName = inverted
    ? 'border border-[#CBC4D2] bg-[#F2ECF4]'
    : 'bg-card-surface';
  const cardClassName = inverted ? '' : 'bg-section-surface';

  return (
    <article
      className={`${cardClassName} flex flex-col gap-10 rounded-4xl p-0 lg:flex-row lg:items-center lg:justify-between lg:gap-20 lg:p-20`}
    >
      <div className={`w-full lg:basis-1/2 ${imageOrder}`}>
        <Image
          alt={service.image.alt}
          className='h-72 w-full rounded-3xl object-cover sm:h-80 lg:h-105'
          height={400}
          sizes='(min-width: 1024px) 50vw, 100vw'
          src={service.image.src}
          width={400}
        />
      </div>

      <div className={`lg:basis-1/2 ${contentOrder} px-4 lg:px-0`}>
        <p className='bg-footer-surface mb-4 inline-block rounded-full px-4 py-2 text-xs font-semibold'>
          {service.badge}
        </p>
        <h2 className='font-display text-heading mb-4 text-3xl font-semibold'>
          {service.title}
        </h2>
        <p className='mb-4'>{service.description}</p>
        <ul className='mb-12 flex flex-col gap-2'>
          {service.capabilities.map((capability) => (
            <li key={capability} className='flex items-center gap-2'>
              <FaRegCircleCheck
                aria-hidden='true'
                className='text-primary shrink-0'
                focusable='false'
              />
              {capability}
            </li>
          ))}
        </ul>
        <div className={`${bestForClassName} mb-12 rounded-2xl p-4`}>
          <h3 className='text-primary text-xs font-semibold'>
            {service.bestFor.label}
          </h3>
          <p className='text-heading'>{service.bestFor.description}</p>
        </div>
        <Button size='small'>Hire this Role</Button>
      </div>
    </article>
  );
}
