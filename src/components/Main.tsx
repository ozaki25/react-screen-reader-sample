import React, { useState, useRef } from 'react';
import Items from './Items';
import Loading from './Loading';
import SrOnly from './SrOnly';
import { getItems } from '../api/qiita';
import { ItemType } from '../interfaces/index';

function Main() {
  const [items, setItems] = useState<ItemType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const ref = useRef<HTMLUListElement>(null);

  const onClick = async () => {
    setLoading(true);
    setMessage('通信中です');
    const result = await getItems();
    setItems(result);
    setLoading(false);
    setMessage(`${result.length}件のデータを取得しました`);
    ref.current?.focus();
  };

  return (
    <main>
      <h1>Hello React Sample</h1>
      <button onClick={onClick}>Get Items</button>
      {loading && <Loading />}
      {items?.length && <Items items={items} ref={ref} />}
      <SrOnly text={message} />
    </main>
  );
}

export default Main;
