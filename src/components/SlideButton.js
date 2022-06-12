import "../assets/css/Slide.css";
import { FaGreaterThan } from 'react-icons/fa';

function SlideButton() {

    return (
        <div>
            <div className="slide-button-left">
                <button>
                    <FaGreaterThan
                        size={10}
                        color="#ffff"
                        style={{ transform: "scaleX(-1)" }}
                    />
                </button>
            </div>
            <div className="slide-button-right">
                <button>
                    <FaGreaterThan
                        size={10}
                        color="#ffff"
                    />
                </button>
            </div>
        </div>
    )
}

export default SlideButton;