function Login() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content lg:max-w-3xl">
          <div className="">
            <img
              className=" max-w-sm mx-auto mb-5 max-h-[150px]"
              src="/logo smk.png"
            />
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body">
                <h1 className="text-2xl font-bold">Login </h1>
                <p className="label-text">
                  Enter your email below to login to your account
                </p>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-3">
                  <button className="btn btn-primary">Login</button>
                </div>
                <div className="form-control mt-4">
                  <button className="btn btn-drak"> Login with Google</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
