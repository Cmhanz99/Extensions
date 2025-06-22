import { FaPlus } from "react-icons/fa6";

const AddButton = ({openModal, setOpenModal}) => {
  return (
    <div onClick={() => setOpenModal(!openModal)} className="fixed absolute bottom-10 right-10 
    h-13 w-13 rounded-full bg-white flex items-center justify-center text-black 
    cursor-pointer hover:scale-[1.05] duration-500">
        <FaPlus className="text-2xl"/>
    </div>
  );
};

export default AddButton;
