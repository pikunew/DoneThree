import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function Cform() {
  const [state, handleSubmit] = useForm("xnqkwkjz");
  if (state.succeeded) {
    return <p>Thanks you we will get back to you soon!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label className="form-style" htmlFor="full-name">Full Name</label>
      <input
        type="text"
        name="name"
        id="full-name"
        placeholder="First and Last Name"
        required
      />

      <label className="form-style" htmlFor="email">Email Address</label>
      
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea className="form-style" id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function App() {
  return <Cform />;
}
export default App;
