export default function DashboardPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Your Book Collection</h1>
      <p>Welcome to your dashboard. This is where you'll see your books.</p>
      <div className="mt-8 p-6 border rounded-lg bg-gray-50">
        <p className="text-center text-gray-500">
          You don't have any books yet. Start by adding your first book.
        </p>
        <div className="mt-4 flex justify-center">
          <a 
            href="/books/add" 
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Add Book
          </a>
        </div>
      </div>
    </div>
  );
}
