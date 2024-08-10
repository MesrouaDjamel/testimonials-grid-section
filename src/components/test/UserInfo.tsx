import Image from "next/image"

const UserInfo = () => {
  type UserInfoProps = {
    fullName: string;
    position: string;
    image: string;
  }
  return (
    <div className="flex items-center gap-4">
        <Image src="/image-daniel.jpg" alt="Jeremy" width={32} height={32} className={"rounded-full"}/>
        <div className="flex flex-col">
            <span className="font-semibold text-[13px] text-lightGray" >Daniel Clifford</span>
            <span className="text-[11px] font-medium text-lightGray opacity-50" >Verified Graduate</span>
        </div>
    </div>
  )
}

export default UserInfo