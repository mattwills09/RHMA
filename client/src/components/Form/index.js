import React from "react";

function Form({ p,q, r, s, t, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Business Expenses</strong>
        </label>
        <input
          className="form-control"
          id="rent"
          type="text"
          value={p}
          placeholder="Month"
          name="p"
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control"
          id="rent"
          type="text"
          value={q}
          placeholder="Rent/Lease/Mortgage"
          name="q"
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control"
          id="tax"
          type="text"
          value={r}
          placeholder="Taxes"
          name="r"
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control"
          id="payroll"
          type="text"
          value={s}
          placeholder="Payroll"
          name="s"
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control"
          id="advertising"
          type="text"
          value={t}
          placeholder="Advertising"
          name="t"
          onChange={handleInputChange}
          required
          />
          <input
            className="form-control"
            id="utilities"
            type="text"
            value={t}
            placeholder="Utilities"
            name="u"
            onChange={handleInputChange}
            required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-primary float-right"
        >
          Review Your Quarterly Expenses
        </button>
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-success float-right"
          href="/BusinessAnalysis"
        >
          Submit Expenses
          
        </button>





      </div>
    </form>

    
  );
}

export default Form;
