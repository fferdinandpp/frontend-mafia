import React from "react";
import FailedIcon from "@/icons/failed-icon.svg";
import SuccessIcon from "@/icons/success-icon.svg";
import PendingIcon from "@/icons/loading-icon.svg";
import clsx from "clsx";

type Props = {
  status: string;
  className?: string;
  reffId: string;
};

const PaymentStatusCard = ({ status, className, reffId }: Props) => {
  let textColor;
  let bgColor;
  let borderColor;
  let statusIcon;
  let textStatus;
  let textDesc;
  let textDetail;

  switch (status) {
    case "BERHASIL":
      textColor = "text-[#00FF48]";
      borderColor = "border-[#00FF48]";
      bgColor = "bg-[#08311D]";
      statusIcon = <SuccessIcon />;
      textStatus = "Pesanan kamu berhasil!";
      textDesc = "Transaksi akan segera diproses";
      textDetail = ` Pesanan kamu ${reffId} telah dibayar, transaksi akan segera diproses`;
      break;
    case "PENDING":
      textColor = "text-[#FFA800]";
      borderColor = "border-[#FFA800]";
      bgColor = "bg-[#311D08]";
      statusIcon = <PendingIcon />;
      textStatus = "Kamu belum melakukan pembayaran";
      textDesc = "Silahkan lakukan pembayaran";
      textDetail = ` Pesanan kamu ${reffId} pembayaran untuk selanjutnya dilakukan pemrosesan`;

      break;

    case "EXPIRED":
      textColor = "text-[#F00]";
      borderColor = "border-[#F00]";
      bgColor = "bg-[#340917]";
      statusIcon = <FailedIcon />;
      textStatus = "Udah lewat batas waktu bayar";
      textDesc = "Kamu bisa buat transaksi baru.";

      textDetail = ` Pesanan kamu ${reffId} sudah lewat batas bayar, harap melakukan transaksi ulang`;

      break;

    default:
      break;
  }
  return (
    <>
      <h1>{textDetail}</h1>

      <div
        className={clsx(
          `w-full lg:w-[605px] px-5 py-3 border rounded-xl   }`,
          className,
          borderColor,
          textColor,
          bgColor
        )}
      >
        <div className="flex items-center space-x-5 ">
          {statusIcon}
          <div className="block">
            <h1 className="font-bold text-sm lg:text-xl">{textStatus}</h1>
            <h1 className="font-normal text-sm lg:text-xl text-white">
              {textDesc}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentStatusCard;
