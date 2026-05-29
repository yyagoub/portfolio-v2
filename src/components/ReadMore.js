import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from './Icon';

let _uid = 0;

// Progressive disclosure: shows the lead text always; reveals `more` on toggle.
export default function ReadMore({ more }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const idRef = useRef(null);
  if (idRef.current === null) {
    _uid += 1;
    idRef.current = 'readmore-' + _uid;
  }
  const regionId = idRef.current;

  return (
    <>
      <div id={regionId} className="readmore-extra" hidden={!open}>
        {Array.isArray(more) ? (
          more.map((para, i) => <p key={i}>{para}</p>)
        ) : (
          <p>{more}</p>
        )}
      </div>
      <button
        type="button"
        className="readmore-toggle"
        aria-expanded={open}
        aria-controls={regionId}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? t('readMore.less') : t('readMore.more')}
        <Icon name="arrow" size={16} className="icon-inline-end" />
      </button>
    </>
  );
}
