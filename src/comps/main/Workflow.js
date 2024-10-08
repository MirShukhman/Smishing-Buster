import '../../style/Sections.css'
import '../../style/Workflow.css'
import { BiSolidDownArrow } from "react-icons/bi";
import { GoChevronRight } from "react-icons/go";

const Workflow = () => {
    return (
        <div className="workflow">
            <div className='incoming-text'>
                <div className='how-pic' id='incoming-text-pic'></div>
                <div className='sms'>Smartphone Recives SMS</div>
            </div>
            <BiSolidDownArrow className='arrow-down' />
            <div className='process'>
                <div className='text-analysis'>
                    <div className='how-pic' id='text-analysis-pic'></div>
                    <div className='text-analysis-text'>
                        <h2>Text Analysis</h2>
                    </div>
                    <div className='hidden-right'>
                        <h3><GoChevronRight className='arrow-right' />Huristics</h3>
                        <p>1. Does the message contain links?</p>
                        <p>2. Are the links accessible / new?</p>
                        <p>3. Does the message contain calls to action?</p>
                        <p>4. Does the message contain references to money?</p>
                        <p>5. Does the message contain urgency related keywords?</p>
			<p>5. Does the message contain general suspicious keywords?</p>
                        <h3><GoChevronRight className='arrow-right' />Machine Learning</h3>
                        <p> Fine-tuned LM (RoBERTa) that classifies messegas according to the content </p>
                    </div>
                </div>



                <div className='url-analysis'>
                    <div className='hidden-left'>
                        <h3><GoChevronRight className='arrow-right' />Link Analysis</h3>
                        <p>1. Check link authenticity using VirusTotal API</p>
                        <p>2. Retrieve screenshot of website using Selenium</p>
                    </div>
                    <div className='url-analysis-text'>
                        <h2>Link Analysis</h2>
                    </div>
                    <div className='how-pic' id='url-analysis-pic'></div>
                </div>

            </div>
            <BiSolidDownArrow className='arrow-down' />
            <div className='report'>
                <div className='how-pic' id='report-pic'></div>
                <div>
                    <div className='report-header'>App Gives User Report</div>
                    <div className='hidden-right' id='hidden-user-report'>
                        <div className='report-points'>
                            <p>1. General Calculated Score (0 to 100)</p>
                            <p>2. Detailed Report</p>
                            <p>3. Sreenshot from Link </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workflow