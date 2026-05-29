import React from 'react';

export default function SectionHeading({ id, eyebrow, title, intro }) {
  return (
    <header className="section-heading">
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2 id={id}>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </header>
  );
}
