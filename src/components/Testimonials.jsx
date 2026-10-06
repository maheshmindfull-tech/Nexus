import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      p: '“The attention to detail in the clubhouse and pool area is exceptional. We moved in 6 months ago and the community is already so warm and welcoming.”',
      b: 'Aarav & Priya Mehta',
      s: '3 BHK Signature • Tower B',
    },
    {
      p: '“The balcony views are stunning, and the cross-ventilation is so much better than our previous home. The Nexus team was very transparent throughout the handover.”',
      b: 'Dr. Neha & Rohan Shah',
      s: '2 BHK Elegance • Tower A',
    },
    {
      p: '“The kids love the play area and the security team is always responsive. The master plan feels very well thought out — it\'s a great place to raise a family.”',
      b: 'Smita & Karan Desai',
      s: '4 BHK Royal Grande • Tower C',
    },
    {
      p: '“The attention to detail in the clubhouse and pool area is exceptional. We moved in 6 months ago and the community is already so warm and welcoming.”',
      b: 'Aarav & Priya Mehta',
      s: '3 BHK Signature • Tower B',
    },
    {
      p: '“The balcony views are stunning, and the cross-ventilation is so much better than our previous home. The Nexus team was very transparent throughout the handover.”',
      b: 'Dr. Neha & Rohan Shah',
      s: '2 BHK Elegance • Tower A',
    },
    {
      p: '“The kids love the play area and the security team is always responsive. The master plan feels very well thought out — it\'s a great place to raise a family.”',
      b: 'Smita & Karan Desai',
      s: '4 BHK Royal Grande • Tower C',
    },
  ];

  return (
    <section className="testi" id="testimonials">
      <div className="wrap">
        <hr className="teal" style={{ margin: '0 0 60px' }} />
        <div className="eyebrow">Testimonials</div>
        <h2 className="big">
          Everything You <span>Need to Know</span>
        </h2>
        <div className="tg">
          {testimonials.map((t, i) => (
            <div key={i} className="t">
              <p>{t.p}</p>
              <div>
                <b>{t.b}</b>
                <small>{t.s}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
