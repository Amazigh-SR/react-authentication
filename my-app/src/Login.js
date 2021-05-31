const Login = function (props) {
  return (
    <div>
      <h2>Login Page</h2>
      <form
        data-ms-form="login"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Loggedin from login");
          props.setLogin(!props.isloggedin);
        }}
      >
        <label>
          Email:
          <input
            type="text"
            placeholder="e.g. memb@gmail.com"
            data-ms-member="email"
          />
        </label>
        <label>
          Password:
          <input type="text" data-ms-member="password" />
        </label>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
