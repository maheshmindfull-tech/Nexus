import React, { useState } from 'react';

const FAQS = [
  {
    id: 0,
    question: 'Where can I find Nexus projects?',
    answer:
      'Nexus has projects across Pune and Nashik, with developments in locations including Punawale, Chikhali, Moshi, Kiwale and other established and emerging neighbourhoods.',
  },
  {
    id: 1,
    question: 'What kind of projects does Nexus build?',
    answer:
      'Our portfolio includes thoughtfully planned residential communities as well as commercial spaces, across different locations and configurations.',
  },
  {
    id: 2,
    question: 'How much experience does Nexus have?',
    answer:
      'Nexus began its journey in 1996 and has spent three decades building spaces, relationships and trust.',
  },
  {
    id: 3,
    question: 'How many projects has Nexus delivered?',
    answer:
      'Nexus has 19+ completed projects, with 4,185+ homes delivered and 129+ commercial units handed over.',
  },
  {
    id: 4,
    question: 'Can I visit a Nexus project?',
    answer:
      'Yes. You can connect with our team to enquire about a project, understand its details and schedule a site visit.',
  },
  {
    id: 5,
    question: 'What makes a Nexus project different?',
    answer:
      'We focus on thoughtful planning, quality construction and responsible development, guided by our principles of Transparency, Integrity, Responsibility and Planning.',
  },
  {
    id: 6,
    question: 'Are there currently ongoing Nexus projects?',
    answer:
      'Yes. Nexus currently has multiple ongoing developments across Pune, including residential projects in Punawale, Chikhali, Moshi and Kiwale.',
  },
  {
    id: 7,
    question: 'How can I get details about a specific project?',
    answer:
      'Choose a project from our portfolio to explore its location, configuration, features and other available details, or connect directly with our team.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const firstCol = FAQS.slice(0, 4);
  const secondCol = FAQS.slice(4, 8);

  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <div className="eyebrow">FAQ</div>
        <h2 className="big">
          Everything You <span>Need to Know</span>
        </h2>
        <div className="fg">
          <div className="fcol">
            {firstCol.map((item) => (
              <div
                key={item.id}
                className={`fq ${openIndex === item.id ? 'open' : ''}`}
              >
                <button type="button" onClick={() => toggle(item.id)}>
                  <span>{item.question}</span>
                </button>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="fcol">
            {secondCol.map((item) => (
              <div
                key={item.id}
                className={`fq ${openIndex === item.id ? 'open' : ''}`}
              >
                <button type="button" onClick={() => toggle(item.id)}>
                  <span>{item.question}</span>
                </button>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
