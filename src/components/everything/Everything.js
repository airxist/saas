import Frame from '../../reusables/frame/Frame';
import Footing from '../../reusables/footing/Footing';
import square from '../../assets/images/square.png';
import helix1 from '../../assets/images/helix1.png';
import './everything.css';

const Everything = () => {
  return (
    <div className='everything border border-primary border-5'>
        <Frame
            tag="Everything you need"
            h2="Streamlined for easy management"
            body="Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly."
        />

        <div className='foot mx-auto d-flex flex-column flex-lg-row justify-content-between align-items-center mt-5 border border-danger border-5'>
            <Footing 
                img={helix1} h4="Integration ecosystem" para="Enhance your productivity by connecting with your favorite tools, keeping all your
                essentials in one place."
            />
            <Footing 
                img={square} h4="Goal setting and tracking" para="Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight."
            />
        </div>
    </div>
  )
}

export default Everything
