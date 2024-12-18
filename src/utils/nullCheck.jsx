import { MdOutlineQuestionMark } from "react-icons/md"


const nullCheck = (value) => {
    return value || <MdOutlineQuestionMark className="question" />
}


export default nullCheck