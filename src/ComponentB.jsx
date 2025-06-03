import ComponentC  from "./ComponentC"; 
export default function ComponentB(props) {
  return (
    <div>
      <h1>Component B</h1>
      <p>This is Component B.</p>
      <p>Dữ liệu từ Component A: {props.dulieu}</p>
      {/* console.log("CompB nhận được:", props.dulieu); */}
      <ComponentC dulieu={props.dulieu}></ComponentC>

    </div>
  );
}