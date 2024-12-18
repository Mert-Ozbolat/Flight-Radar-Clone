import { useEffect } from "react";
import { getDetail } from "../../redux/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import Head from "./Head";
import Gallery from "./Gallery.jsx";
import Airport from "./Airport.jsx";
import Time from "./Time.jsx";
import Aircraft from "./Aircraft.jsx";

const Modal = ({ id, close }) => {
    const { isLoading, error, info } = useSelector((store) => store.detail);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDetail(id));
    }, [id]);
    return (
        <div className="modal-outer">
            <div className="modal-inner">
                {isLoading
                    ? "Loader"
                    : error
                        ? "Error"
                        : info && (
                            <div className="info-wrapper">
                                <Head info={info} close={close} />
                                <div className="details">
                                    <Aircraft data={info.aircraft.images} />
                                    <Gallery data={info.aircraft.images} />
                                    <Airport data={info.airport} />
                                    <Time data={info.time} />
                                </div>
                            </div>
                        )}
            </div>
        </div>
    );
};

export default Modal;