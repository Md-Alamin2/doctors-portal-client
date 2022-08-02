import 'react-day-picker/dist/style.css';
import { DayPicker } from "react-day-picker";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";


const AppointmentBanner = ({date, setDate}) => {
   
  return (
    <div className="hero lg:min-h-max lg:my-20" style={{background: `url(${bg})`,backgroundSize: 'cover', } }>
      <div className="hero-content flex-col lg:flex-row-reverse ">
       
       <img src={chair} className="lg:max-w-sm rounded-lg shadow-2xl" alt=""/>
       
        <div className="lg:mr-28">
         <DayPicker 
          mode="single"
          selected={date}
          onSelect={setDate}
          
         />
        </div>
      </div>

    </div>
  );
};

export default AppointmentBanner;
