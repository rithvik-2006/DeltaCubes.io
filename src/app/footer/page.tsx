import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


export default function Footer(){
    return(
        <div className="bg-slate-950 py-10">
    <div className="flex flex-row justify-evenly">
        <div className="basis-auto"><h1 className="text-4xl py-10">About</h1>
        <p className='text-xl'>Innovators in IT solutions, driving digital transformation with <br/>
        .cutting-edge technologies and exceptional expertise.<br/>
         Your success, our mission.
</p></div>
        <div className="basis-auto"><h1 className="text-4xl py-10">Useful links</h1>
        <ul className='text-xl'>
        <li className='py-2'><a href="#">Software Developement</a></li>    
        <li className='py-2'><a href="#">Technology Consulting</a></li>  
        <li className='py-2'><a href="#">Mobile Applications</a></li>  
        <li className='py-2'><a href="#">Content Management System</a></li>
        <li className='py-2'><a href="#">IT Enabled Sevices</a></li>    
        <li className='py-2'><a href="#">IT Enabled Sevices</a></li>  
        <li className='py-2'><a href="#">SAP Services</a></li>  
        <li className='py-2'><a href="#">Salesforce Services</a></li> 
        <li className='py-2'><a href="#">Privacy Policy</a></li>  
        </ul></div>
        <div className="basis-auto">
            <h1 className="text-4xl py-10"> Get in touch</h1>
        <ul>
        <li className="pb-5"><h2 className="text-2xl pb-3"><EmailOutlinedIcon/> Mail</h2><h3 className="text-xl">Sample@gmail.com</h3></li>    
        <li><h2 className="text-2xl pb-3"><AccessTimeOutlinedIcon/> Opening Hours</h2>
10:00am - 6:00pm<br/>
Monday-Friday</li>  
        
        </ul></div>
        <div className="basis-auto"><h1 className="text-4xl py-10">Our address</h1>
        <ul>
        <li className="pb-5"><h2 className=" text-2xl pb-3"><PlaceOutlinedIcon/> INDIA</h2>
Deltacubes Technology Pvt. Ltd. 5th floor,<br/>
 Plot No.38 & 44, Laxmi Narayana Complex,<br/>
 Beside Uppal Metro Station, Pillar No, C869, <br/>
 Venkateswara Colony, Uppal, Hyderabad, <br/>
 Telangana 500039, India.</li>    
        <li className="pb-5"><h2 className=" text-2xl pb-3"><PlaceOutlinedIcon/> USA</h2>
5 Independence Way Princeton,<br/>
 LLC 5 Independence Way, <br/>
Suite 300 Princeton, NJ 08540.</li>  
          
        </ul></div>
    </div>
        </div>
    )
}