// styles
import "./LoginForm.scss";

const LoginForm = () => {
  return (
    <form>
      <div className="inputField">
        <label htmlFor="name"></label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your username"
        />
      </div>

      <div className="inputField">
        <label htmlFor="email"></label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
      </div>

      <div className="inputField">
        <label htmlFor="password"></label>
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
      </div>

      <button type="submit" className="btn">
        Register
      </button>
    </form>
  );
};

export default LoginForm;
