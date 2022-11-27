import React from "react";

const Forinvest = () => {
  return (
    <>
      <section>
        <h1>Register Now</h1>
        <form>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Email" />
          <select>
            <option value="">Type investor</option>
            <option value="">VC</option>
            <option value="">Angel Investor</option>
          </select>
          <select>
            <option value="">Investment amount</option>
            <option value="">0 a 100k USD</option>
            <option value="">100k a 500k</option>
            <option value="">+1M o +10M</option>
          </select>
        </form>
      </section>
    </>
  );
};

export default Forinvest;
