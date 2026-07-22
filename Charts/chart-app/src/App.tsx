import Dashboard from "./components/Dashboard";
import './App.css'
import TitleBar from "./components/Titlebar";
import cloudCheckIcon from './assets/cloud-check-svgrepo-com.svg'
import SecurityExposureDashboard from "./components/SecurityExposureDashboard";



function App() {
  return <div className="bg-gray-200 h-dvh p-2 flex flex-col gap-2">
    <Dashboard/>
    <TitleBar icon={cloudCheckIcon} title="CSAE (Cloud Security Asset Exposure)"/>
    <SecurityExposureDashboard/>
  </div>
}

export default App;
