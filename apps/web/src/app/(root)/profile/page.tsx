'use client';
import Image from 'next/image';
import { NeedAuthenticationGuard } from '../../hoc/AuthGuard';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
const Profile = () => {
  const userDetail = useAppSelector((state) => state.user);
  return (
    <div>
      <Image
        src={
          !userDetail.profile ? '/defaultProfileImage.jpg' : userDetail.profile
        }
        alt="profileImage"
        width={100}
        height={100}
      />
      <h1>Profile Detail</h1>
      <p>
        User : {userDetail.firstName} {userDetail.lastName}
      </p>
      <p>Email :{userDetail.email}</p>
    </div>
  );
};

export default NeedAuthenticationGuard(Profile);
