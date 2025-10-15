
import React from 'react';
import { tickerItems } from '../constants';
import type { TickerItem } from '../types';

const Ticker = () => {
  const renderSequence = (items: TickerItem[], keyPrefix: string) => (
    <ul className="gx-ticker__seq" aria-hidden={keyPrefix === 'b'}>
      {items.map((item, index) => (
        <li key={`${keyPrefix}-${index}`} className="gx-ticker__item">
          <item.icon className="ico" />
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section id="gx-ticker" role="region" aria-label="Mensajes ejecutivos sobre transformación digital">
      <div className="gx-ticker__mask">
        <div className="gx-ticker__track">
          {renderSequence(tickerItems, 'a')}
          {renderSequence(tickerItems, 'b')}
        </div>
      </div>
    </section>
  );
};

export default Ticker;
