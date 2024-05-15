import { format } from 'date-fns';

interface VoucherCardProps {
  description: string;
  percentage: string | number;
  maxUsage: string;
  voucherCode: string;
  endDate: string | Date;
}

const VoucherCard = ({
  voucherCode,
  percentage,
  maxUsage,
  endDate,
  description,
}: VoucherCardProps) => {
  const stringEndDate = (date: string | Date) => {
    if (typeof date == 'string') return date;
    else if (date instanceof Date) return format(date, 'yyyy.MM.dd');
  };
  return (
    <div className="container mx-auto">
      <div className="bg-indigo-950 text-[#ffff00] text-center py-10 px-20 rounded-lg shadow-md relative">
        <div className="w-20 mx-auto mb-4 rounded-lg"></div>
        <h3 className="text-2xl font-semibold mb-4">
          {percentage}% {description} <br></br> Maximum {maxUsage}K off
        </h3>
        <div className="flex items-center justify-center space-x-2 mb-6">
          <span
            id="cpnCode"
            className="border-dashed border text-[#fbfbf8] px-4 py-2 rounded-l"
          >
            {voucherCode}
          </span>
          <span
            id="cpnBtn"
            className="bg-[#ffff00] text-indigo-950 px-4 py-2 rounded-r cursor-pointer"
          >
            Copy Code
          </span>
        </div>
        <p className="text-sm">Valid Till: {stringEndDate(endDate)}</p>

        <div className="w-12 h-12 bg-[#ffff00] border-2 border-indigo-950 rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 -ml-6"></div>
        <div className="w-12 h-12 bg-[#ffff00] border-2 border-indigo-950 rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 -mr-6"></div>
      </div>
    </div>
  );
};

export default VoucherCard;
