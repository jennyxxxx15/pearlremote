import Image from 'next/image';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import type { PopularRoleCardProps } from '../../types/home/components.types';

export function PopularRoleCard({
  actionLabel,
  badge,
  description,
  image,
  title,
}: PopularRoleCardProps) {
  return (
    <li className='border-popular-role-card-border flex min-w-[82%] snap-center flex-col self-stretch rounded-3xl border p-4 sm:min-w-0'>
      <div className='relative'>
        <Image
          src={image.src}
          width={256}
          height={192}
          alt={image.alt}
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
          className='mb-4 h-auto w-full rounded-2xl'
          style={{ height: 'auto' }}
        />
        {badge ? (
          <Badge size='small' className='absolute top-2 right-2'>
            {badge}
          </Badge>
        ) : null}
      </div>

      <div className='mb-2 flex items-center gap-2'>
        <h3 className='text-heading text-lg font-bold'>{title}</h3>
      </div>
      <p className='mb-6 line-clamp-3'>{description}</p>
      <Button className='mt-auto w-full'>{actionLabel}</Button>
    </li>
  );
}
