import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import AlbumOutlinedIcon from '@mui/icons-material/AlbumOutlined';


export default function Hero(){
    return(
        <div className="flex flex-row justify-between m-64">
          <div className="h-[34rem] w-[26rem]  bg-cyan-600 rounded-xl">
             <h1 className="text-black pt-12 pl-3.5 pr-3.5 text-center text-5xl"><span className='text-white pb-10'><HandshakeOutlinedIcon sx={{ fontSize: 50 }} /></span><br/>Our mission</h1>

             <p className="text-center pt-16 pb-7 pl-3.5 pr-3.5 text-2xl">Our mission is to empower businesses 
             and <br/> individuals  through innovative software solutions.<br/>
                 Our dedication to excellence, continuous improvement, <br/>
                 and customer-centricity drives us to <br/> 
                 shape the future of software solutions.</p>
          </div>
          <div className="h-[34rem] w-[26rem]  bg-cyan-600 rounded-xl">
             <h1 className="text-black pt-12 pl-3.5 pr-3.5 text-center text-5xl"><span className='text-white pb-10'><AlbumOutlinedIcon sx={{ fontSize: 50 }} /></span><br/>Our Vision</h1>

             <p className="text-center pt-16 pb-7 pl-3.5 pr-3.5 text-2xl">Our vision is to be a global leader in software innovation,<br/> 
             setting new standards for technology excellence and user-centric design.<br/> 
             Through visionary thinking, relentless innovation, and unwavering commitment,
             <br/> we aim to transform industries and positively impact society.
                </p>
          </div>
          <div className="h-[34rem] w-[26rem]  bg-cyan-600 rounded-xl">
             <h1 className="text-black pt-10 pl-3.5 pr-3.5 text-center text-5xl"><span className='text-white pb-10'><HandshakeOutlinedIcon sx={{ fontSize: 50 }} /></span><br/>Our Values</h1>

             <p className="text-center pt-12 pb-7 pl-3.5 pr-3.5 text-2xl">Our core values drive our software company's success.<br/> 
              Integrity is at the heart of everything we do, ensuring transparency and trust. <br/> 
              Collaboration fuels our creativity, <br/> 
              while customer satisfaction remains our ultimate goal. <br/> 
              We embrace diversity and inclusivity, fostering a dynamic, empowered team.<br/> 
                </p>
          </div>


        </div>
    )
}