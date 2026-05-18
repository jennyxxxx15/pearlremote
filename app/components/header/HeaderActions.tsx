import { ButtonLink } from '../ui/ButtonLink';
import { TextLink } from '../ui/TextLink';

type HeaderActionsProps = {
  bookCall: {
    href: string;
    label: string;
  };
  hireStaff: {
    href: string;
    label: string;
  };
};

export function HeaderActions({ bookCall, hireStaff }: HeaderActionsProps) {
  return (
    <div className='flex items-center gap-4'>
      <TextLink href={bookCall.href} label={bookCall.label} underline={false} />
      <ButtonLink href={hireStaff.href} label={hireStaff.label} />
    </div>
  );
}
