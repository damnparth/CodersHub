import Link from "next/link";
export default function Home() {

  return (
    <main className="min-h-screen bg-gray-900 text-white">
     
      <header className="flex justify-between items-center px-6 py-4 bg-gray-800">
        <h1 className="text-2xl font-bold">CODERS HUB</h1>
        <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded hover:bg-yellow-300">
          Login
      
        </button>
      </header>

      
      <section className="text-center mt-16 px-4">
        
        <h2 className="text-4xl font-bold mb-10">Welcome to CodersHub</h2>

       
        <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full hover:bg-yellow-300">
          <Link href="/notes">
          Start Learning
          </Link>
        </button>
      </section>

     


      
      <footer className="mt-40 bg-gray-800 p-6 text-center text-gray-400 ">
        <p>&copy; {new Date().getFullYear()} CodersHub.</p>
      </footer>
    </main>
  );
}
