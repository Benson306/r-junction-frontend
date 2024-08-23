import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";
import TabsSwitch from "./components/TabsSwitch";


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-l from-slate-800 via-slate-800 to-slate-900">
      <div className="flex-grow">
        <Header />
        <div className="text-xl lg:text-4xl mt-6 lg:mt-10 mb-10 text-center text-white w-3/4 lg:w-1/2 m-auto font-bold leading-relaxed tracking-wide font-montserrat">
          Discover Your Next Role – Kenya’s Top Job Listings All in One Place
        </div>
        <Search />
        <TabsSwitch />
      </div>
      <Footer />
    </div>
  );
}

export default App;
