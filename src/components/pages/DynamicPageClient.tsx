'use client';

import PublicationsList from '@/components/publications/PublicationsList';
import TextPage from '@/components/pages/TextPage';
import CardPage from '@/components/pages/CardPage';
import { Publication } from '@/types/publication';
import {
  PublicationPageConfig,
  TextPageConfig,
  CardPageConfig,
  GalleryPageConfig,
} from '@/types/page';
import { useLocaleStore } from '@/lib/stores/localeStore';

export type DynamicPageLocaleData =
  | { type: 'publication'; config: PublicationPageConfig; publications: Publication[] }
  | { type: 'text'; config: TextPageConfig; content: string }
  | { type: 'card'; config: CardPageConfig }
  | { type: 'gallery'; config: GalleryPageConfig };

interface DynamicPageClientProps {
  dataByLocale: Record<string, DynamicPageLocaleData>;
  defaultLocale: string;
}

function GalleryPage({ config }: { config: GalleryPageConfig }) {
  return (
    <div className="space-y-8">
      {config.sections?.map((section, sectionIndex) => (
        <section
          key={`${section.title}-${sectionIndex}`}
          className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6"
        >
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-100">
                {section.title}
              </h2>

              {section.subtitle && (
                <p className="mt-1 text-sm font-medium text-amber-300">
                  {section.subtitle}
                </p>
              )}

              {section.description && (
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                  {section.description}
                </p>
              )}
            </div>

            {section.date && (
              <span className="w-fit rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-300">
                {section.date}
              </span>
            )}
          </div>

          <div className="flex gap-4 overflow-x-auto pb-3">
            {section.photos?.map((photo, photoIndex) => (
              <figure
                key={`${photo.title}-${photoIndex}`}
                className="min-w-[280px] max-w-[280px] overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-950/40"
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="h-44 w-full object-cover"
                />

                <figcaption className="p-4">
                  <h3 className="text-base font-semibold text-slate-100">
                    {photo.title}
                  </h3>

                  {photo.subtitle && (
                    <p className="mt-1 text-sm text-amber-300">
                      {photo.subtitle}
                    </p>
                  )}

                  {photo.description && (
                    <p className="mt-2 text-sm leading-5 text-slate-400">
                      {photo.description}
                    </p>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default function DynamicPageClient({ dataByLocale, defaultLocale }: DynamicPageClientProps) {
  const locale = useLocaleStore((state) => state.locale);
  const fallback = dataByLocale[defaultLocale] || Object.values(dataByLocale)[0];
  const pageData = dataByLocale[locale] || fallback;

  if (!pageData) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {pageData.type === 'publication' && (
        <PublicationsList config={pageData.config} publications={pageData.publications} />
      )}

      {pageData.type === 'text' && (
        <TextPage config={pageData.config} content={pageData.content} />
      )}

      {pageData.type === 'card' && (
        <CardPage config={pageData.config} />
      )}

      {pageData.type === 'gallery' && (
        <GalleryPage config={pageData.config} />
      )}
    </div>
  );
}