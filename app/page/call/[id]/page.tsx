'use client'

import { useParams } from "next/navigation";
import CallPage from "../CallPage";



export default function page() {
   
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { id }: { id: string } = useParams()

  return <CallPage initialToken={id} />;
}