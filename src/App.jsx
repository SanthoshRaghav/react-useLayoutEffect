import { TooltipWithoutLayoutEffect } from './TooltipWithoutLayoutEffect';
import { TooltipWithLayoutEffect } from './TooltipWithLayoutEffect';
import './App.css';

export default function App() {
  return (
    <>
      <h1>useLayoutEffect</h1>
      <section>
        <div className="left">
          <TooltipWithoutLayoutEffect />
        </div>
        <div className="right">
          <TooltipWithLayoutEffect />
        </div>
      </section>
    </>
  );
}
