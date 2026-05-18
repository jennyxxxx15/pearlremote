import type { ServicesPageContent } from './content.types';

export type ServicesOverviewProps = {
  content: Pick<ServicesPageContent, 'hero' | 'services'>;
};
