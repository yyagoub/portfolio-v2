import React from 'react';

// Color-zoned section wrapper. `zone` picks a background tint
// (paper | sand | sage | clay). Full-bleed background, constrained inner.
export default function Section({ zone = 'paper', labelledBy, children }) {
  return (
    <section className={'section zone-' + zone} aria-labelledby={labelledBy}>
      <div className="section-inner">{children}</div>
    </section>
  );
}
