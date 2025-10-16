import React from 'react';
import { tickerItems } from '../constants';
import type { TickerItem } from '../types';

const Ticker = () => {
  // The list is duplicated to create the seamless scrolling effect.
  const duplicatedItems = [...tickerItems, ...tickerItems];

  return (
    <section id="gx-ticker" role="region" aria-label="Mensajes ejecutivos sobre transformación digital">
      <div className="gx-ticker__mask">
        <ul className="gx-ticker__track">
          {duplicatedItems.map((item, index) => (
            <li key={index} className="gx-ticker__item">
              <item.icon className="ico" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Ticker;