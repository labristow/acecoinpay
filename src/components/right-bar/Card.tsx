import ChipIcon from "../../assets/chip.png";
import NetworkIcon from "../../assets/wifi.png";
import MasterCardIcon from "../../assets/mastercard-2.svg";

function Card() {
  return (
    <div className="w-[240px] pt-10 border border-gray-200 h-[42vh] rounded-2xl bg-[#ffffff6d] backdrop-blur-lg">
      <div className="flex px-6 items-center justify-between">
        <img src={ChipIcon} width={36} alt="" />
        <img src={NetworkIcon} width={36} alt="" />
      </div>
      <div className="card-details px-6 pt-20">
        <h5 className="text-lg font-medium">Jonathan Michael</h5>
        <h2 className="font-semibold text-gray-700 text-xl flex items-center gap-3">
          <span className="font-bold text-2xl">•••</span> 3456
        </h2>
      </div>
      <div className="flex py-4 px-6 items-center justify-between">
        <h2 className="font-semibold text-md text-gray-700">
          09/22
        </h2>
        <img src={MasterCardIcon} width={48} alt="" />
      </div>
    </div>
  );
}

export default Card;
