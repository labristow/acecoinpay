import { useState } from "react";
import CloseButton from "../button/CloseButton";
import PayNowButton from "../button/PayNowButton";
import CardNumber from "../input/CardNumber";
import CvvNumber from "../input/CvvNumber";
import ExpiryNumber from "../input/ExpiryNumber";
import PasswordNumber from "../input/PasswordNumber";
import Container from "../right-bar/Container";
import Formheader from "./Formheader";

function PaymentForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const payHandler = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  };
  return (
    <div className="md:px-[100px] xl:px-[200px] h-screen overflow-y-auto py-12 w-full flex items-start lg:items-center justify-center">
      <div className="bg-white w-[350px] md:w-full lg:h-[95vh] relative">
        <CloseButton className="absolute right-0 top-0 w-10 h-10" />
        <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-9 py-14">
          <div className="col-span-1 lg:col-span-6 px-8">
            <Formheader />
            <CardNumber />
            <CvvNumber />
            <ExpiryNumber />
            <PasswordNumber />
            <PayNowButton isLoading={isLoading} onClick={payHandler}/>
          </div>
          <div className="col-span-1 lg:col-span-3">
            <Container />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;
