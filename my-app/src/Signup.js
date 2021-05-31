import axios from "axios";

const Signup = function (props) {
  return (
    <div>
      <h2>Signup Page</h2>
      <form
        data-ms-form="signup"
        onSubmit={(e) => {
          // e.preventDefault();
          // axios.get("/signup/#/ms/signup/609e09c00525c300048c0db2").then(() => {
          props.setLogin(!props.isloggedin);
        }}
      >
        <label>
          Email:
          <input
            data-ms-member="email"
            type="email"
            placeholder="e.g. memb@gmail.ca"
          />
        </label>
        <label>
          Password:
          <input type="password" data-ms-member="password" />
        </label>

        <button>Sign-Up</button>
      </form>
    </div>
  );
};

export default Signup;
