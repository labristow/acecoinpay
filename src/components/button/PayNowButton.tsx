
interface PayNowButton{
  isLoading: boolean;
  onClick: ()=> void;
}
function PayNowButton({
  isLoading,
  onClick
}: PayNowButton) {
  return (
    <button onClick={onClick} className="w-full h-16 rounded-lg mt-8 bg-primary text-lg text-white font-medium flex items-center justify-center gap-x-2">
      {isLoading && <span className="animate-spin duration-1000 block w-7 h-7 rounded-full border-2 border-white border-t-transparent"></span>}
      <span>Pay Now</span>
    </button>
  );
}

export default PayNowButton;
