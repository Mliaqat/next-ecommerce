import {useRouter} from "next/router"

function productcatagory() {
    const router=useRouter();
    console.log(router.query);
  return (
    <div>productcatagory</div>
  )
}

export default productcatagory