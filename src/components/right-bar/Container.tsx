import Card from "./Card";
import AppleIcon from "../../assets/apple-13.svg";
import InvoiceIcon from "../../assets/docket.png";

function Container() {
  return (
    <div className="w-full hidden lg:block pr-12">
      <div className="w-full h-[82vh]">
        <div className="h-[110px] flex justify-center relative">
          <div className="bg-blue-500 w-20 h-3 rounded absolute left-[calc(50%_-_80px] -top-1.5"></div>
          <Card />
        </div>
        <div className="w-full h-[calc(82vh_-_110px)] bg-gray-100 rounded-xl">
          <div className="h-[240px]"></div>
          <div className="invoice-details px-6">
            <div className="flex items-center justify-between">
              <p className="text-[16px] font-medium text-gray-500">Company</p>
              <div className="flex items-center gap-x-1">
                <img src={AppleIcon} width={24} alt="" />
                <p className="font-semibold">Apple</p>
              </div>
            </div>
            <div className="my-4 flex items-center justify-between">
              <p className="text-[16px] font-medium text-gray-500">
                Order Number
              </p>
              <p className="font-semibold">1266201</p>
            </div>
            <div className="my-4 flex items-center justify-between">
              <p className="text-[16px] font-medium text-gray-500">Product</p>
              <p className="font-semibold">Macbook Air</p>
            </div>
            <div className="my-4 flex items-center justify-between">
              <p className="text-[16px] font-medium text-gray-500">VAT (20%)</p>
              <p className="font-semibold">$100.00</p>
            </div>
            <div className="divider w-full flex item-center relative">
              <span className="w-12 h-12 rounded-full bg-white absolute block -left-12 -top-5"></span>
              <hr className="w-full border border-t-gray-200 mt-1" style={{border: "1.5px dashed #ccc"}}/>
              <span className="w-12 h-12 rounded-full bg-white absolute block -right-12 -top-5"></span>
            </div>
            <div className="my-4 flex items-center justify-between">
              <div>
                <p className="text-[16px] font-medium text-gray-500">
                  You have to pay
                </p>
                <p className="font-semibold text-2xl flex items-end">
                  549. <span className="text-sm mb-1">99</span>
                  <p className="text-[16px] font-medium text-gray-500 mx-1">
                    USD
                  </p>
                </p>
              </div>
              <img src={InvoiceIcon} width={24} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
