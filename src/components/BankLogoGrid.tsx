import { BANKS_LIST } from "@/consts/banks";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BankLogoGrid() {
  return (
    <div dir="rtl" className="p-4">
      <h2 className="text-2xl font-bold text-center mb-6">בנקים וחברי בורסה</h2>
      <div className="grid grid-cols-5 gap-6">
        {BANKS_LIST.map((bank) => (
          <Card key={bank.code}>
            <CardHeader>
              <CardTitle>{bank.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={`https://market.tase.co.il/assets/img/tase_members/heb/00${bank.code}.png`}
                alt={bank.name}
                width={100}
                height={48}
                className="h-12 w-auto mx-auto mb-4"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
