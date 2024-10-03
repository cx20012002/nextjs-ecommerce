import { CheckCheck } from "lucide-react";

export default function StripeSuccess() {
  return (
    <div className="h-screen">
      <div className="mt-32 md:max-w-[50vw] mx-auto">
        <CheckCheck className="h-16 w-16 my-6 text-green-500 mx-auto" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
        </div>
      </div>
    </div>
  )
}
