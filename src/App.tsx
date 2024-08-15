import TldrawComponent from "./TldrawComponent";

export default function App() {
  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <h1 style={{textAlign:'center'}}>Timeline Canvas</h1>
      <TldrawComponent />
    </div>
  );
}
