import {useRouter} from "next/router"

function userproject() {
    const router=useRouter();
    console.log(router.query);
  return (
    <div> userproject</div>
  )
}

export default userproject