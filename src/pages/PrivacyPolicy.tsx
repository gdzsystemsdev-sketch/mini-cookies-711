import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import type { ReactNode } from 'react';

type Bullet = { title?: string; text: string };

type Section = {
  number: string;
  title: string;
  intro?: ReactNode;
  groups?: { heading: string; bullets: Bullet[] }[];
  bullets?: Bullet[];
  outro?: string;
};

const sections: Section[] = [
  {
    number: '01',
    title: 'Information We Collect',
    groups: [
      {
        heading: 'Information You Provide to Us',
        bullets: [
          {
            title: 'Application Data:',
            text: 'Full name, date of birth, email address, phone number, social media usernames (if applicable), country of residence, nationality, stage name, and any additional information you choose to provide in your application.',
          },
          {
            title: 'Identity Verification:',
            text: 'A clear face photo submitted strictly for age-verification purposes as required by law.',
          },
          {
            title: 'Communications:',
            text: 'Any messages, emails, or inquiries you send to us.',
          },
        ],
      },
      {
        heading: 'Automatically Collected Technical & Telemetry Data',
        bullets: [
          {
            title: 'Device & Network Identifiers:',
            text: 'IP address, browser type and version, operating system, device identifiers, screen resolution, and referral URLs.',
          },
          {
            title: 'Behavioral & Interaction Logs:',
            text: 'Session duration, page views, scroll depth, clickstream paths, form interaction events, and conversion triggers.',
          },
        ],
      },
    ],
  },
  {
    number: '02',
    title: 'How We Use Your Information',
    intro: <p>We use the collected information to:</p>,
    bullets: [
      { text: 'Process and evaluate your agency application' },
      { text: 'Schedule and conduct discovery calls' },
      { text: 'Create and set up your accounts and profiles' },
      { text: 'Communicate with you regarding our services' },
      { text: 'Measure advertising attribution, analyze funnel performance, and optimize user experience' },
      { text: 'Comply with legal and regulatory obligations' },
    ],
  },
  {
    number: '03',
    title: 'Cookies, Tracking Pixels & User Activity Mapping',
    intro: (
      <p>
        To ensure platform security, measure marketing campaign attribution, and optimize our
        onboarding funnel, we deploy client-side storage technologies, tracking pixels, and
        behavioral analytics scripts across our website.
      </p>
    ),
    bullets: [
      {
        title: 'Essential & Functional Cookies:',
        text: 'Small text files stored locally on your browser to maintain session state, preserve form inputs, enforce security protocols, and ensure core site functionality.',
      },
      {
        title: 'Advertising & Conversion Pixels (Snap Pixel, Meta Pixel):',
        text: 'Lightweight JavaScript tags and server-side event APIs that log specific conversion milestones. These technologies match hashed browser signals with advertising platforms to measure campaign ROI, prevent duplicate ad delivery, and build aggregated lookalike audiences without exposing your raw application data.',
      },
      {
        title: 'User Activity & Behavioral Telemetry:',
        text: 'Session-mapping and heatmap analytics tools that record anonymized interaction telemetry—including cursor trajectories, scroll velocity, click distribution, and drop-off points. This diagnostic data allows us to identify UI bottlenecks and improve mobile and desktop usability.',
      },
      {
        title: 'Managing Tracking & Opt-Out Controls:',
        text: 'You can restrict, block, or purge cookies and local storage at any time via your browser settings or by declining non-essential tracking through our cookie consent banner. You may also manage ad-level personalization directly within your Snapchat and Meta account privacy settings. Please note that disabling essential cookies may impact form submission stability.',
      },
    ],
  },
  {
    number: '04',
    title: 'Third-Party Services',
    intro: <p>We utilize trusted third-party service providers to run our operations efficiently:</p>,
    bullets: [
      {
        title: 'Calendly.com:',
        text: 'Used for scheduling discovery calls. Subject to Calendly’s Privacy Policy.',
      },
      {
        title: 'WhatsApp & Telegram:',
        text: 'Used for daily communications. Subject to their respective Privacy Policies.',
      },
      {
        title: 'Advertising & Analytics Partners (Snap Inc., Meta Platforms, Inc.):',
        text: 'Used for conversion tracking, attribution modeling, and aggregated traffic analytics.',
      },
    ],
  },
  {
    number: '05',
    title: 'How We Share Your Data',
    intro: (
      <p>
        We never sell, rent, or trade your personal data. We share data strictly on a need-to-know
        basis with the following infrastructure, operational, and advertising partners:
      </p>
    ),
    bullets: [
      {
        title: 'Partner Streaming & Webcam Platforms:',
        text: 'Shared exclusively to provision your creator profile using your chosen stage name—your legal identity and verification documents remain strictly confidential.',
      },
      {
        title: 'Payment & Financial Processors:',
        text: 'Encrypted financial routing details shared solely to disburse your creator earnings securely.',
      },
      {
        title: 'Cloud & IT Infrastructure Providers:',
        text: 'Hosting, database, email, and technical support vendors that process data on our behalf under strict Data Processing Agreements (DPAs) and encryption standards.',
      },
      {
        title: 'Analytics & Telemetry Providers (Google Analytics 4):',
        text: 'Used to measure anonymized site interaction metrics, including scroll depth, video engagement duration, and form completion steps, helping us optimize funnel performance.',
      },
      {
        title: 'Advertising & Attribution Partners (Meta Platforms, and Snap Inc.):',
        text: 'When you visit our site, submit an application, or schedule a call, client-side pixels (Meta Pixel, Snap Pixel) and server-side Conversions APIs transmit technical event signals—such as your IP address, browser metadata, referral URL, and cryptographically hashed contact identifiers (email, phone number, first name, and country). These platforms match hashed signals against user accounts to measure campaign attribution and optimize ad delivery under their respective Privacy Policies. We never transmit the personal answers you enter into your application questionnaire to advertising networks.',
      },
      {
        title: 'Legal Authorities:',
        text: 'Where required by law, court order, or to protect our legal rights.',
      },
    ],
    outro:
      'All third-party payment and infrastructure processors are contractually bound to maintain industry-standard security controls and process data strictly in accordance with our documented instructions.',
  },
  {
    number: '06',
    title: 'Data Security',
    intro: (
      <p>
        We implement rigorous technical and organizational measures—including end-to-end encryption
        in transit (TLS) and encrypted storage at rest—to protect your personal information against
        unauthorized access, loss, or misuse. However, please note that no method of transmission
        over the internet or electronic storage is 100% secure.
      </p>
    ),
  },
  {
    number: '07',
    title: 'Your Rights',
    intro: (
      <p>
        You retain full control over your personal data. Under applicable data protection frameworks
        (including GDPR), you have the right to:
      </p>
    ),
    bullets: [
      { text: 'Access, update, or correct your personal data' },
      { text: 'Request the complete deletion of your personal data' },
      { text: 'Withdraw consent for non-essential cookies and tracking pixels at any time' },
      { text: 'Object to or restrict certain data processing activities' },
    ],
  },
  {
    number: '08',
    title: "Children's Privacy",
    intro: (
      <p>
        Our services are strictly restricted to adults aged 18 and over. We do not knowingly collect
        or solicit personal data from anyone under 18. If you believe we have inadvertently
        collected data from a minor, please contact us immediately, and we will delete it promptly.
      </p>
    ),
  },
  {
    number: '09',
    title: 'Changes to This Policy',
    intro: (
      <p>
        We may update this Privacy Policy from time to time to reflect operational, technical, or
        legal changes. Any updates will be posted on this page with a revised "Last updated" date at
        the top.
      </p>
    ),
  },
  {
    number: '10',
    title: 'Contact Us',
    intro: (
      <p>
        If you have any questions, concerns, or requests regarding this Privacy Policy or your
        personal data, please contact us at:
      </p>
    ),
    bullets: [
      { title: 'Agency Name:', text: 'Mini Cookies' },
      { title: 'Email:', text: '[Insert Support Email]' },
      { title: 'Telegram / WhatsApp:', text: '[Insert Agency Handle / Number]' },
    ],
  },
];

function BulletItem({ bullet }: { bullet: Bullet }) {
  return (
    <li className="flex gap-4">
      <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff1493]" />
      <span className="text-white/70 leading-relaxed">
        {bullet.title && <span className="text-white font-medium">{bullet.title} </span>}
        {bullet.text}
      </span>
    </li>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-jet-black text-pure-white">
      <Navbar />
      <main className="pt-32 pb-24 px-6">
        {/* Hero header */}
        <header className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ff1493]/40 bg-[#ff1493]/10 text-[#ff1493] text-xs tracking-[0.2em] uppercase font-medium mb-6">
            <ShieldCheck className="w-3.5 h-3.5" strokeWidth={1.5} />
            Last updated: November 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Privacy <span className="text-[#ff1493]">Policy</span>
          </h1>
          <p className="text-white/60 leading-relaxed max-w-2xl mx-auto">
            Building trust starts right here. When you interact with Mini Cookies ("we," "us," or
            "our"), we only collect what is required for verification, onboarding, and optimizing
            our platform experience. All data is stored securely using encryption. We do not sell,
            rent, or trade your data with third parties, and you can request the deletion of your
            personal data at any time.
          </p>
        </header>

        {/* Sections */}
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {sections.map((section) => (
            <section
              key={section.number}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-10 md:px-10 md:py-12"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm font-bold text-[#ff1493] tracking-[0.2em]">
                  {section.number}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-[#ff1493]/50 to-transparent" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
                {section.title}
              </h2>

              {section.intro && (
                <div className="text-white/70 leading-relaxed mb-6 [&_p]:leading-relaxed">
                  {section.intro}
                </div>
              )}

              {section.groups?.map((group) => (
                <div key={group.heading} className="mb-8 last:mb-0">
                  <h3 className="text-base md:text-lg font-semibold text-white mb-4">
                    {group.heading}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {group.bullets.map((bullet, i) => (
                      <BulletItem key={i} bullet={bullet} />
                    ))}
                  </ul>
                </div>
              ))}

              {section.bullets && (
                <ul className="flex flex-col gap-3">
                  {section.bullets.map((bullet, i) => (
                    <BulletItem key={i} bullet={bullet} />
                  ))}
                </ul>
              )}

              {section.outro && (
                <p className="text-white/60 text-sm leading-relaxed mt-6 pt-6 border-t border-white/10">
                  {section.outro}
                </p>
              )}
            </section>
          ))}

          {/* Back to home */}
          <div className="pt-6 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#ff1493]/50 text-[#ff1493] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#ff1493] hover:text-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
              Back to Home
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
