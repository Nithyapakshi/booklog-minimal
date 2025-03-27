export default function AddBookPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Add New Book</h1>
      <p className="mb-8">Add details about a book you want to read, are reading, or have completed.</p>
      
      <div className="max-w-2xl mx-auto p-6 border rounded-lg bg-white">
        <form className="space-y-4">
          <div>
            <label htmlFor="title" className="block mb-1">Title *</label>
            <input 
              id="title" 
              type="text" 
              className="w-full border p-2 rounded" 
              required 
            />
          </div>
          
          <div>
            <label htmlFor="author" className="block mb-1">Author *</label>
            <input 
              id="author" 
              type="text" 
              className="w-full border p-2 rounded" 
              required 
            />
          </div>
          
          <div>
            <label htmlFor="status" className="block mb-1">Reading Status *</label>
            <select 
              id="status" 
              className="w-full border p-2 rounded" 
              required
            >
              <option value="want_to_read">Want to Read</option>
              <option value="reading">Currently Reading</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          
          <div className="pt-4">
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white p-2 rounded"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
