'use client';
import Image from 'next/image';
import { NeedAuthenticationGuard } from '../../hoc/AuthGuard';
import { useAppSelector } from '../../redux/hook';
import { Pen, User } from 'lucide-react';
import FormInputDarkMode from '@/components/FormInputDarkMode';
import { useFormik } from 'formik';
import { Button } from '@/components/ui/button';
const Profile = () => {
  const userDetail = useAppSelector((state) => state.user);
  const pointsFormat = new Intl.NumberFormat('en-IN', {
    maximumSignificantDigits: 3,
  });
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: userDetail.email,
        firstName: userDetail.firstName,
        lastName: userDetail.lastName,
      },
      // validationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  const handleFormSubmit = () => {
    handleSubmit();
  };
  return (
    <div className="flex flex-col gap-8 w-full py-4 items-center h-screen bg-[#fbfbf8]">
      <div className="md:w-[95vw] sm:w-full border-b-2 py-2 md:px-6 sm:px-4 items-center flex flex-row justify-between border-gray-300">
        <p className="font-semibold text-xl text-indigo-950 font-sans">
          Your Account Information
        </p>
        <div className="max-w-[300px] w-[25%] rounded-3xl items-center justify-center flex flex-row gap-2 px-4 py-2 bg-indigo-950">
          <div className="h-full flex flex-col items-center justify-center">
            <User className="text-[#ffff00]" />
          </div>
          <p className="truncate text-[#ffff00]">{userDetail.email}</p>
        </div>
      </div>

      <div className="md:px-14 px-20 items-center flex flex-row justify-between w-full">
        <Button className="bg-indigo-950 text-[#ffff00]">
          Your Event List
        </Button>

        <Button className="bg-indigo-950 text-[#ffff00]">
          Your Transaction
        </Button>

        <Button className="bg-indigo-950 text-[#ffff00]">Your Voucher</Button>
      </div>

      <div className="h-full md:px-6 sm:px-2 w-full flex flex-col gap-4 py-2">
        <div className="px-16 w-full h-full">
          <div className="flex flex-col gap-8 md:px-8 sm:px-2 md:py-8 sm:py-2 w-full h-full">
            <div className="flex flex-col gap-4">
              <p className="text-xl font-semibold text-indigo-950">
                Profile Image
              </p>
              <p className="tracking-widest text-indigo-950">
                You can change your profile now
              </p>

              <div className="grid md:grid-flow-col sm:grid-flow-row gap-8">
                <div className="overflow-hidden cursor-pointer border-2 group border-indigo-950 w-40 h-40 flex justify-center items-center rounded-full">
                  <Pen className="absolute w-12 h-12 text-red-950 hidden group-hover:block group-hover:opacity-100" />
                  <Image
                    src={
                      !userDetail.pictureId
                        ? '/defaultProfileImage.jpg'
                        : userDetail.pictureId
                    }
                    className="h-full w-full group-hover:opacity-40"
                    alt="profileImage"
                    width={100}
                    height={100}
                  />
                </div>

                <div className="h-full w-full flex flex-col justify-center gap-4">
                  <h1 className="text-lg font-semibold text-indigo-950">
                    Avatar
                  </h1>
                  <p className="tracking-wide text-indigo-950">
                    Gunakan gambar persegi beresolusi tinggi maksimal 1MB
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 max-w-[600px]">
              <div className="text-indigo-950 text-lg font-bold">
                <h1>
                  Your Point Now : {pointsFormat.format(userDetail.points)}
                </h1>
              </div>

              <FormInputDarkMode
                name="email"
                type="text"
                label="Email"
                placeholder="Email"
                value={values.email}
                error={errors.email}
                isError={!!touched.email && !!errors.email}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
              <FormInputDarkMode
                name="firstName"
                type="text"
                label="First Name"
                placeholder="First Name"
                value={values.firstName}
                error={errors.firstName}
                isError={!!touched.firstName && !!errors.firstName}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
              <FormInputDarkMode
                name="lastName"
                type="text"
                label="Last Name"
                placeholder="Last Name"
                value={values.lastName}
                error={errors.lastName}
                isError={!!touched.lastName && !!errors.lastName}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />

              <div className="py-4 gap-12 flex flex-row">
                <h1 className="text-lg text-indigo-950 font-semibold basis-auto text-nowrap">
                  Your Referral Code :
                </h1>
                <p className="text-xl font-bold text-indigo-950">
                  {userDetail.referralCode}
                </p>
              </div>
            </div>

            <div className="flex w-full justify-end">
              <Button onClick={handleFormSubmit} className="text-[#ffff00] bg-indigo-950 border border-[#ffff00]">
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default NeedAuthenticationGuard(Profile);
export default Profile;
