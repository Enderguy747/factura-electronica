import { InputForm } from "@/components/facturasForm"
import { redirect } from "next/navigation"


  function Home() {

    return (
      <InputForm />
    )
    //redirect("/dashboard")
  }

export default Home