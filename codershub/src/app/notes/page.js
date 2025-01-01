
 



export default function Notes() {
    return (
      <main className="min-h-screen bg-gray-900 text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Notes Section</h1>
        <p>Here you can find coding notes and resources to enhance your learning!</p>
        
        
        <section className="mt-16 px-6">
        <h3 className="text-2xl font-bold mb-4"> topics </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-800 p-4 rounded">
            <h4 className="text-yellow-400 font-semibold">Strings</h4>
            <p className="text-gray-400 mt-2">description</p>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h4 className="text-yellow-400 font-semibold">Functions</h4>
            <p className="text-gray-400 mt-2">description</p>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h4 className="text-yellow-400 font-semibold">Objects</h4>
            <p className="text-gray-400 mt-2">description</p>
          </div>
        </div>
      </section>
      </main>
      
    );
  }
  