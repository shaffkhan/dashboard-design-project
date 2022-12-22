import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <div>
      <Topbar />
      {/* we have created this so that we can use flex and we can split sidebar and other pages left and right ,*/}
      <div className="flex px-4">
        <Sidebar/>
        <div className="flex-[4] bg-[blue]">other </div>
      </div>
    </div>
  );
}

export default App;
