'use client';

export function Button() {
  const handleClick = () => {
    // eslint-disable-next-line no-console
    console.log('Click happened');
  };

  return (
    <button onClick={handleClick} type='button'>
      Click
    </button>
  );
}
