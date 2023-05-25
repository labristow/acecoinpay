import CloseIcon from "../../assets/close.svg";

interface CloseButton {
  className?: string;
}
function CloseButton({ className }: CloseButton) {
  return (
    <button className={` ${className}`}>
      <img src={CloseIcon} alt="" className="w-7"/>
    </button>
  );
}

export default CloseButton;
