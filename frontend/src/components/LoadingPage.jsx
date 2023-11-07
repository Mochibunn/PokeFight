import { Progress } from "@nextui-org/react";
// import SiteLogo from "../assets/SiteLogo";

export default function LoadingPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen">

            {/* <SiteLogo className="my-12 place-items-center h-[250px] w-full" aria-label="vinyl countdown" key="website logo"/> */}

            <Progress
                size="sm"
                isIndeterminate
                aria-label="Loading bar"
                className="max-w-md"
                color="warning"
            />
            <h1 className="text-2xl font-semibold mt-4">Pika..</h1>
        </div>
    );
}
