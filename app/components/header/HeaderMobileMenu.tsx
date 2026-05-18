'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ButtonLink } from '../ui/ButtonLink';
import { TextLink } from '../ui/TextLink';
import { IoClose, IoMenu } from 'react-icons/io5';

type HeaderMobileNavItem = {
  href: string;
  label: string;
};

type HeaderMobileMenuProps = {
  actions: {
    bookCall: {
      href: string;
      label: string;
    };
    hireStaff: {
      href: string;
      label: string;
    };
  };
  items: HeaderMobileNavItem[];
};

export function HeaderMobileMenu({ actions, items }: HeaderMobileMenuProps) {
  const pathname = usePathname();
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const wasOpen = wasOpenRef.current;

    wasOpenRef.current = isOpen;

    if (isOpen) {
      menuPanelRef.current?.focus();
      return;
    }

    if (wasOpen) {
      toggleButtonRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalBodyOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const closeMenu = () => {
      setIsOpen(false);
    };

    const handleLinkClick = (event: MouseEvent) => {
      if (event.target instanceof Element && event.target.closest('a[href]')) {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      setIsOpen(false);
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('click', handleLinkClick, true);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', closeMenu, { passive: true });
    window.addEventListener('touchmove', closeMenu, { passive: true });
    window.addEventListener('wheel', closeMenu, { passive: true });

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.removeEventListener('click', handleLinkClick, true);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', closeMenu);
      window.removeEventListener('touchmove', closeMenu);
      window.removeEventListener('wheel', closeMenu);
    };
  }, [isOpen]);

  const iconMotion = shouldReduceMotion
    ? { initial: false, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, rotate: -90, scale: 0.85 },
        animate: { opacity: 1, rotate: 0, scale: 1 },
        exit: { opacity: 0, rotate: 90, scale: 0.85 },
      };

  const panelMotion = shouldReduceMotion
    ? { initial: false, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, y: -8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
      };

  const overlayMotion = shouldReduceMotion
    ? { initial: false, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      };

  return (
    <div className='md:hidden'>
      <button
        ref={toggleButtonRef}
        type='button'
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls='mobile-menu'
        onClick={() => setIsOpen((current) => !current)}
        className='focus-visible:ring-primary inline-flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
      >
        <AnimatePresence mode='wait' initial={false}>
          <motion.span
            key={isOpen ? 'close-menu' : 'open-menu'}
            {...iconMotion}
            transition={{ duration: 0.16, ease: 'easeOut' }}
          >
            {isOpen ? (
              <IoClose aria-hidden='true' className='text-heading h-5 w-5' />
            ) : (
              <IoMenu aria-hidden='true' className='text-heading h-5 w-5' />
            )}
          </motion.span>
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.button
              type='button'
              key='mobile-menu-overlay'
              aria-label='Close menu'
              {...overlayMotion}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={() => setIsOpen(false)}
              className='fixed inset-0 top-[4.75rem] z-40 cursor-default bg-black/50'
            />
            <motion.div
              ref={menuPanelRef}
              id='mobile-menu'
              key='mobile-menu'
              tabIndex={-1}
              {...panelMotion}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className='bg-page-surface border-page-surface absolute top-full right-0 left-0 z-50 border-b px-6 py-6 shadow-lg'
            >
              <nav aria-label='Mobile navigation' className='grid gap-5'>
                {items.map((item) => (
                  <TextLink
                    key={item.href}
                    href={item.href}
                    isActive={pathname === item.href}
                    label={item.label}
                    onClick={() => setIsOpen(false)}
                    className='w-fit'
                  />
                ))}
              </nav>
              <div className='border-button-border mt-8 grid gap-4 border-t pt-6'>
                <TextLink
                  href={actions.bookCall.href}
                  label={actions.bookCall.label}
                  underline={false}
                  onClick={() => setIsOpen(false)}
                  className='w-fit'
                />
                <ButtonLink
                  href={actions.hireStaff.href}
                  label={actions.hireStaff.label}
                  onClick={() => setIsOpen(false)}
                  className='w-full text-center'
                />
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
