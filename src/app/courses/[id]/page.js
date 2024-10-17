// import { useRouter } from "next/router"
"use client";
import { useRouter, useSearchParams } from "next/navigation";

function page() {
    const router = useRouter();
    console.log(router);
    const searchParams = useSearchParams()
    console.log(searchParams);
    return (
        <div>Course Details</div>
    )
}
export default page