
import '../../style/Sections.css'
import '../../style/VideoPlayer.css'
import demoVideo from '../../style/images/demo.mp4';
import { useState } from "react";

const Demo = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="demo">
            <div className="content" id='demo'>
                <div className="content-image" id='video'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>

                    <video controls={isHovered}>
                        <source src={demoVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="content-right" id='demo-content'>
                    <h2>App Demo</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Demo