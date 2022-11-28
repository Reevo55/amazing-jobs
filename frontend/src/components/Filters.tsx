import { useState } from "react";

type Props = {};

const plans = ["startup", "business", "enterprise"];

const Filters = (props: Props) => {
  const [plan, setPlan] = useState(plans[0]);

  console.log("plan", plan);

  return (
    <aside className="px-8 py-4 bg-gray-200 rounded-3xl ">
      <h2 className="mb-8 text-2xl font-bold tracking-widest text-center text-primary">
        Filtry
      </h2>
      <fieldset>
        <legend>Typ stanowiska:</legend>

        {plans.map((plan) => (
          <div key={plan}>
            <input
              type="radio"
              id={plan}
              name="plan"
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
            />
            <label htmlFor={plan}>{plan}</label>
          </div>
        ))}
      </fieldset>
    </aside>
  );
};

export default Filters;
