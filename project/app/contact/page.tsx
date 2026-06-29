import Link from 'next/link';
import { ArrowLeft, Mail, Clock, Twitter, Github, Youtube } from 'lucide-react';
import { ContactForm } from '@/components/site/contact-form';

export const metadata = {
  title: 'Contact — Proper Studios',
  description:
    'Get in touch with Proper Studios. We\'d love to hear from publishers, developers, and players alike.',
};

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'properstudios.help@gmail.com',
    accent: 'text-primary',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon-Fri, 9:00 - 18:00 CET',
    accent: 'text-[hsl(84_100%_60%)]',
  },
];

const socials = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export default function ContactPage() {
  return (
    <div className="relative">
      {/* Header */}
      <section className="relative overflow-hidden grid-bg border-b border-border/60">
        <div className="absolute right-1/4 top-0 h-64 w-64 rounded-full bg-accent/15 blur-[120px]" />
        <div className="absolute left-1/4 bottom-0 h-64 w-64 rounded-full bg-primary/15 blur-[120px]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <Link
            href="/"
            className="font-mono-retro mb-6 inline-flex items-center text-lg text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            back to home
          </Link>
          <span className="font-mono-retro block text-xl text-primary">
            {'// establish_connection'}
          </span>
          <h1 className="font-retro mt-3 text-2xl text-foreground sm:text-4xl">
            CONTACT US
          </h1>
          <p className="font-mono-retro mt-6 max-w-2xl text-2xl leading-relaxed text-muted-foreground">
            Press inquiries, partnership proposals, career questions, or just
            want to tell us what you think of our games? Drop us a line.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          {/* Form */}
          <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
            <div className="mb-8">
              <span className="font-mono-retro text-lg text-primary">
                {'> new_message.exe'}
              </span>
              <h2 className="font-retro mt-2 text-sm text-foreground">
                SEND A TRANSMISSION
              </h2>
            </div>
            <ContactForm />
          </div>

          {/* Info sidebar */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-border bg-background">
                    <info.icon className={`h-5 w-5 ${info.accent}`} />
                  </div>
                  <div>
                    <div className="font-retro text-xs text-muted-foreground">
                      {info.label.toUpperCase()}
                    </div>
                    <div className="font-mono-retro mt-1 whitespace-pre-line text-xl text-foreground">
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-border bg-background/50 p-6">
              <div className="font-retro mb-4 text-xs text-muted-foreground">
                FOLLOW US
              </div>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
              <div className="font-retro mb-3 text-xs text-primary">
                RESPONSE TIME
              </div>
              <p className="font-mono-retro text-lg leading-relaxed text-muted-foreground">
                We read every message. Expect a reply within 2-3 business days
                for most inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
