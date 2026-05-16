import headerContent from '../../content/header.json';
import { HeaderActions } from './HeaderActions';
import { HeaderLogo } from './HeaderLogo';
import { HeaderMobileMenu } from './HeaderMobileMenu';
import { HeaderNav } from './HeaderNav';

export function Header() {
  return (
    <header className='border-page-surface relative z-50 border-b shadow-xs'>
      <div className='container mx-auto grid grid-cols-[1fr_auto] items-center gap-6 px-6 py-4 lg:grid-cols-[1fr_auto_1fr]'>
        <div className='justify-self-start'>
          <HeaderLogo
            href={headerContent.logo.href}
            label={headerContent.logo.label}
          />
        </div>

        <div className='hidden justify-self-center md:block'>
          <HeaderNav items={headerContent.navigation} />
        </div>

        <div className='hidden justify-self-end md:block'>
          <HeaderActions
            bookCall={headerContent.actions.bookCall}
            hireStaff={headerContent.actions.hireStaff}
          />
        </div>

        <div className='justify-self-end md:hidden'>
          <HeaderMobileMenu
            actions={headerContent.actions}
            items={headerContent.navigation}
          />
        </div>
      </div>
    </header>
  );
}
