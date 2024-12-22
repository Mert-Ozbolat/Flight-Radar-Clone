import { IoMdAirplane } from "react-icons/io";
import c from "../../utils/nullCheck";

const Aircraft = ({ data }) => {
    return (
        <div className="aircraft">
            <div className="icon">
                <IoMdAirplane />
            </div>

            <div>
                <p>
                    <span className="title">Flight Type</span>
                    <span>{c(data?.model?.text)}</span>
                </p>

                <div>
                    <p>
                        <span className="title">TAIL CODE</span>
                        <span>{c(data?.registration)}</span>
                    </p>

                    <p>
                        <span className="title">Country Id</span>
                        <span>{c(data?.countryId)}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Aircraft;