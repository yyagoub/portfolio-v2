import React from 'react';
import { useTranslation } from 'react-i18next';
import { platforms } from '../data/site';

// Hub-and-spoke "ecosystem" diagram: a central identity hub connected to the
// platforms. Decorative SVG (aria-hidden) + a visually-hidden text equivalent.
const HUB = { x: 240, y: 195 };
const NODES = [
  { x: 240, y: 55 },
  { x: 408, y: 150 },
  { x: 330, y: 330 },
  { x: 150, y: 330 },
  { x: 72, y: 150 },
];

export default function DiagramHero() {
  const { t } = useTranslation();
  const nodes = platforms.slice(0, NODES.length).map((key, i) => ({
    pos: NODES[i],
    label: t('platforms.items.' + key + '.short'),
  }));

  return (
    <figure className="hero-visual" style={{ margin: 0 }}>
      <svg
        className="diagram"
        viewBox="0 0 480 390"
        role="img"
        aria-label={t('hero.ecosystemAria')}
      >
        {/* edges first (behind nodes) */}
        {nodes.map((n, i) => (
          <line
            key={'e' + i}
            className="edge"
            x1={HUB.x}
            y1={HUB.y}
            x2={n.pos.x}
            y2={n.pos.y}
          />
        ))}

        {/* hub */}
        <rect
          className="node-hub"
          x={HUB.x - 78}
          y={HUB.y - 23}
          width="156"
          height="46"
          rx="23"
        />
        <text
          className="hub-label"
          x={HUB.x}
          y={HUB.y}
          textAnchor="middle"
          dominantBaseline="central"
        >
          {t('hero.ecosystemCenter')}
        </text>

        {/* platform nodes */}
        {nodes.map((n, i) => (
          <g key={'n' + i}>
            <circle className="node" cx={n.pos.x} cy={n.pos.y} r="8" />
            <text
              className="node-label"
              x={n.pos.x}
              y={n.pos.y + (n.pos.y < HUB.y - 40 ? -16 : 24)}
              textAnchor="middle"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="diagram-caption">
        {t('hero.ecosystemCaption')}
      </figcaption>
    </figure>
  );
}
