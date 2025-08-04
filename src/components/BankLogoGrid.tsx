import { BANKS_LIST } from "@/consts/banks";

export default function BankLogoGrid() {
  return (
    <div dir="rtl" className="p-4">
      <h2 className="text-2xl font-bold text-center mb-6">בנקים וחברי בורסה</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {BANKS_LIST.map((bank) => (
          <div
            key={bank.code}
            className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center aspect-square transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl border border-gray-200"
          >
            <img
              src={`https://market.tase.co.il/assets/img/tase_members/heb/00${bank.code}.png`}
              alt={bank.name}
              width={100}
              height={48}
              className="h-12 w-auto mx-auto mb-4"
            />
            <p className="text-center text-sm font-semibold text-gray-800">
              {bank.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
