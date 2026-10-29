import React from 'react';

export default function AboutUs() {
  return (
    <section className="about-section" id="about">
      <div className="about-copy">
        <p className="eyebrow">GROW WITH US</p>
        <h2>Plants make a house feel like home.</h2>
        <p>
          Paradise Nursery helps you bring nature into your everyday life. We
          curate beautiful, easy-to-love houseplants for beginners and plant
          enthusiasts alike.
        </p>
        <p>
          From leafy statement plants to small desk companions, our goal is to
          make choosing and caring for your next plant simple, joyful, and
          accessible.
        </p>
      </div>
      <div className="about-highlight">
        <span className="about-leaf" aria-hidden="true">❧</span>
        <h3>A little more green.</h3>
        <p>Thoughtfully selected plants for every corner of your space.</p>
      </div>
    </section>
  );
}
