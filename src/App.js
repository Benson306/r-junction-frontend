import Header from "./components/Header";
import Search from "./components/Search";


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-l from-slate-800 via-slate-800 to-slate-900">
      <Header />

      <div className="text-4xl mt-10 mb-10 text-center text-white w-1/2 m-auto font-bold leading-relaxed tracking-wide font-montserrat">
      Discover Your Next Role – Kenya’s Top Job Listings All in One Place
      </div>
      
      <Search />
      
    </div>
  );
}

export default App;
