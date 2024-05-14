import { Height } from '@mui/icons-material';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import AndroidOutlinedIcon from '@mui/icons-material/AndroidOutlined';
import AllInclusiveOutlinedIcon from '@mui/icons-material/AllInclusiveOutlined';
import CloudSyncOutlinedIcon from '@mui/icons-material/CloudSyncOutlined';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';

export default function Services(){
  return(
    <div className="services">
       <div className="pl-80 pt-80 grid grid-cols-3 gap-12 ">
              <div><button className="text-4xl w-72  text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-transparent hover:bg-cyan-500 rounded-md p-2"><SmartToyOutlinedIcon sx={{ fontSize: 50 }} /><br/>AI/ML</button></div>
              <div><button className="text-4xl w-72  text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-transparent hover:bg-cyan-500 rounded-md p-2"><DesktopWindowsOutlinedIcon sx={{ fontSize: 50 }}/><br/>Web development</button></div>
                <div><button className="text-4xl w-72  text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-transparent hover:bg-cyan-500 rounded-md p-2"><AllInclusiveOutlinedIcon sx={{ fontSize: 50 }}/><br/>Devops Implementation</button></div>
                <div><button className="text-4xl w-72  text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-transparent hover:bg-cyan-500 rounded-md p-2"><CloudSyncOutlinedIcon sx={{ fontSize: 50 }}/><br/>Cloud transfer</button></div>
              <div><button className="text-4xl w-72  text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-transparent hover:bg-cyan-500 rounded-md p-2"><AndroidOutlinedIcon sx={{ fontSize: 50 }}/><br/>Android development</button></div>
              <div><button className="text-4xl w-72  text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-transparent hover:bg-cyan-500 rounded-md p-2"><CloudDownloadOutlinedIcon sx={{ fontSize: 50 }}/><br/>Cloud Implementation</button></div>

       </div>
    </div>
  ) 


}