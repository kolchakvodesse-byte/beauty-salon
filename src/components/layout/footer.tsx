'use client';

import Link from 'next/link';
import { ROUTES } from '@/lib/constants';
import { CONTACT } from '@/lib/i18n';
import { useLang } from '@/contexts/language-context';
import { Share2, MessageCircle, Phone, MapPin, Mail, Send } from 'lucide-react';

export function Footer() {
  const { tr, lang } = useLang();
  const currentYear = new Date().getFullYear();

  const navColumns = [
    {
      title: tr.footer.columns.services,
      links: [
        { label: tr.footer.links.facial,      href: ROUTES.services },
        { label: tr.footer.links.injections,   href: ROUTES.services },
        { label: tr.footer.links.hardware,     href: ROUTES.services },
        { label: tr.footer.links.massage,      href: ROUTES.services },
        { label: tr.footer.links.laser,        href: ROUTES.services },
      ],
    },
    {
      title: tr.footer.columns.clinic,
      links: [
        { label: tr.footer.links.masters,    href: ROUTES.masters },
        { label: tr.footer.links.portfolio,  href: ROUTES.portfolio },
        { label: tr.footer.links.promo,      href: ROUTES.promo },
        { label: tr.footer.links.reviews,    href: ROUTES.reviews },
        { label: tr.footer.links.blog,       href: ROUTES.blog },
      ],
    },
    {
      title: tr.footer.columns.info,
      links: [
        { label: tr.footer.links.about,    href: ROUTES.about },
        { label: tr.footer.links.faq,      href: ROUTES.faq },
        { label: tr.footer.links.booking,  href: ROUTES.booking },
        { label: tr.footer.links.contacts, href: ROUTES.contacts },
        { label: tr.footer.links.account,  href: ROUTES.account },
      ],
    },
  ];

  return (
    <footer className="bg-dark border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand block */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl font-semibold text-accent-warm mb-3">
              BEAUTY SALON
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-6 max-w-xs">
              {tr.footer.tagline}
            </p>

            {/* Social links */}
            <div className="flex gap-3 mb-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-border-subtle flex items-center justify-center text-muted hover:text-accent-warm hover:bg-accent-warm/10 transition-colors"
                aria-label="Instagram">
                <Share2 size={18} />
              </a>
              <a href={`https://wa.me/${CONTACT.whatsappLink}`} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-border-subtle flex items-center justify-center text-muted hover:text-accent-warm hover:bg-accent-warm/10 transition-colors"
                aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
              <a href="https://t.me/beautysalon" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-border-subtle flex items-center justify-center text-muted hover:text-accent-warm hover:bg-accent-warm/10 transition-colors"
                aria-label="Telegram">
                <Send size={18} />
              </a>
            </div>

            {/* Contacts */}
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`tel:${CONTACT.phoneLink}`}
                  className="flex items-center gap-2.5 text-muted hover:text-white transition-colors">
                  <Phone size={14} className="text-accent-warm shrink-0" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2.5 text-muted hover:text-white transition-colors">
                  <Mail size={14} className="text-accent-warm shrink-0" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-muted">
                <MapPin size={14} className="text-accent-warm shrink-0 mt-0.5" />
                <span>{CONTACT.address[lang]}</span>
              </li>
            </ul>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}
                      className="text-sm text-muted hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-border-subtle pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted">
            © {currentYear} Beauty Salon. {tr.footer.rights}
          </p>
          <div className="flex gap-5 text-sm">
            <Link href="#" className="text-muted hover:text-white transition-colors">
              {tr.footer.privacy}
            </Link>
            <Link href="#" className="text-muted hover:text-white transition-colors">
              {tr.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
