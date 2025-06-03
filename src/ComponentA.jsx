import ContextProvider from './ContextProvider';
import ComponentB from './ComponentB';

export default function ComponentA() {
  return (
    <ContextProvider>
      <div>
        <h1>Component A</h1>
        <ComponentB />     
      </div>
    </ContextProvider>
  );
}
