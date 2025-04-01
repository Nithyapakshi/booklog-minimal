export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-blue-600">BookLog</span>
          </div>
          <nav className="flex gap-4">
            <a 
              href="/login" 
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              Log in
            </a>
            <a 
              href="/signup" 
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Sign up
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-8 px-4 py-12 text-center md:py-24">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Track your reading journey
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Manage your book collection, track your reading progress, and discover new books to read.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a 
              href="/signup" 
              className="px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Get started for free
            </a>
            <a 
              href="/about" 
              className="px-6 py-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t bg-gray-50">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Track Your Books</h3>
              <p className="text-gray-600">
                Keep a record of your reading progress, set goals, and never lose track of what you're reading.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Organize Your Collection</h3>
              <p className="text-gray-600">
                Create custom shelves, categorize your books by genre, and maintain a well-organized library.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Share Recommendations</h3>
              <p className="text-gray-600">
                Connect with friends, share your favorite reads, and discover new books from recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            © 2025 BookLog. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
