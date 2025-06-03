import { useContext } from 'react';
import { MyContext } from './ContextProvider';

export default function ComponentC() {
  const contextcon = useContext(MyContext);

  return (
    <div>
      <h1>Component C</h1>
      <p>{contextcon}</p>
    </div>
  );
}
