import "./style.css";
import { setupCounter } from "./counter.ts";
import "./basic/index.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Just Do It!! Everthing will be fine soon.</h1>
    <p>I know you very well. You will shine.</p>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
