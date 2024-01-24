import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className=" h-full flex flex-col justify-center items-center p-6">
      <form className="bg-white w-1/2 max-w-md p-8 flex flex-col gap-4 border rounded-md">
        <h2 className="text-2xl mb-4">Sign in</h2>

        <label className="flex flex-col gap-2">
          Email:
          <input
            id="Email"
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col gap-2">
          Password:
          <input
            id="Password"
            type="password"
            name="password"
            placeholder="Password"
            className="border p-2 rounded"
          />
        </label>

        <button
          className="signUpBtn bg-teal-500 text-white px-4 py-2 rounded-md"
          id="submit"
        >
          Sign-in
        </button>
      </form>

      <span className=" text-lg mt-6">
        Create your ToDoist{"  "}
        <Link className="text-blue-500  text-lg" to="/signup">
          account
        </Link>{" "}
      </span>
    </div>
  );
}
