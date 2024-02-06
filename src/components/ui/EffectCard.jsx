import React, { useEffect } from 'react';

export default function EffectCard({ joke, setJoke }) {
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetch('https://api.chucknorris.io/jokes/random', { signal })
      .then((res) => res.json())
      .then((data) => setJoke(data.value))
      .catch(console.log);
    return () => controller.abort();
  }, []);

  return (
    <div style={{
      border: '1px solid black', padding: '10px', margin: '10px', backgroundColor: 'lightgray',
    }}
    >
      {joke || 'Push the button'}
    </div>
  );
}
