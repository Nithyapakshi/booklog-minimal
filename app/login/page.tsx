export default function LoginPage() {
  return (
    <div className="container flex h-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
          <p className="text-sm text-muted-foreground">
            Sign in to your account to continue
          </p>
        </div>
        <div className="border p-6 rounded-lg">
          <form className="space-y-4">
            <div>
              <label htmlFor="email">Email</label>
              <input 
                id="email" 
                type="email" 
                className="w-full border p-2 rounded mt-1" 
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input 
                id="password" 
                type="password" 
                className="w-full border p-2 rounded mt-1" 
                required
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white p-2 rounded"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
