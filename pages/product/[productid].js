import {useRouter} from "next/router"
function productid() {
    const router=useRouter();
    console.log(router.query);
  return (
    <div>productid</div>
  )
}

export default productid