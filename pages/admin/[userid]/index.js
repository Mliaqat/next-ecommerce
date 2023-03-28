import {useRouter} from "next/router"

function users() {
    const router=useRouter();
    console.log(router.query);
  return <div>users</div>;
}

export default users;
