import { BiSolidSquare } from 'react-icons/bi';

export default function LoadingIndicator({
  label = 'Loading...',
}: {
  label?: string;
}) {
  return (
    <div className="w-full h-full min-h-[200px] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <BiSolidSquare size={32} className="text-[#DF5BCC] animate-pulse" />
        <p className="text-[13px] text-neutral-500">{label}</p>
        <div className="loader-bar w-24 rounded-full overflow-hidden" />
      </div>
    </div>
  );
}
