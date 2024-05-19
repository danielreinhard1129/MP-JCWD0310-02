'use client';
import Image from 'next/image';
import { NeedAuthenticationGuard } from '../../hoc/AuthGuard';
import { useAppSelector } from '../../redux/hook';
import { BarChart2, Pen, Ticket, TicketSlash, User } from 'lucide-react';
import FormInputDarkMode from '@/components/FormInputDarkMode';
import { useFormik } from 'formik';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Dropzone from '@/components/Dropzone';
import PreviewImages from '@/components/PreviewImages';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import FormInput from '@/components/Forminput';
const Profile = () => {
  const userDetail = useAppSelector((state) => state.user);
  const router = useRouter();
  const pointsFormat = new Intl.NumberFormat('en-IN', {
    maximumSignificantDigits: 3,
  });
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      email: userDetail.email,
      firstName: userDetail.firstName,
      lastName: userDetail.lastName,
      thumbnail: [],
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
    <div className="flex flex-col gap-8 w-full py-4 items-center min-h-[90vh] ">
      <div className="md:w-[95vw] w-full border-b-2 py-2 md:px-6 px-4 items-center flex flex-row justify-between border-gray-300">
        <p className="font-semibold md:text-xl text-lg font-sans">
          Your Account Information
        </p>

        {/* <Popover>
          <PopoverTrigger> */}
        <div className="max-w-[300px] md:w-[200px] w-[150px] rounded-3xl items-center justify-center flex flex-row gap-2 px-4 py-2">
          <div className="h-full flex flex-col items-center justify-center">
            <User className="" />
          </div>
          <p className="truncate">{userDetail.email}</p>
        </div>
        {/* </PopoverTrigger>
          <PopoverContent className='bg-indigo-950 p-2 flex flex-col gap-2'>
            <div>
              <ul className='text-[#ffff00]'>
                <li>Menu</li>
                <li>Dashboard</li>
                <li>Profile</li>
                <li>Menu</li>
              </ul>
            </div> */}
        {/* </PopoverContent>
        </Popover> */}
      </div>

      <div className="md:px-14 px-8 md:gap-4 gap-2 items-center flex flex-row justify-between w-full">
        <Button
          onClick={() => {
            router.push('/profile/events');
          }}
          className="w-full md:h-20 h-16 flex flex-row gap-2 md:text-xl text-xs"
        >
          <Ticket className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]" />
          Your Event List
        </Button>

        <Button
          onClick={() => {
            router.push('/profile/transaction');
          }}
          className="w-full md:h-20 h-16 flex flex-row gap-2 md:text-xl text-xs"
        >
          <BarChart2 className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]" />
          Your Transaction
        </Button>

        <Button
          onClick={() => {
            router.push('/profile/voucher');
          }}
          className="w-full md:h-20 h-16 flex flex-row gap-2 md:text-xl text-xs"
        >
          <TicketSlash className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]" />
          Your Voucher
        </Button>
      </div>

      <div className="h-full md:px-6 sm:px-2 w-full justify-center items-center flex flex-col gap-4 py-2">
        <div className="px-16 h-full">
          <div className="flex flex-col gap-8 md:px-8 sm:px-2 md:py-8 sm:py-2 w-full h-full">
            <div className="flex flex-col gap-4">
              <p className="text-xl font-semibold">
                Profile Image
              </p>
              <p className="tracking-widest">
                You can change your profile now
              </p>

              <div className="grid md:grid-flow-col sm:grid-flow-row gap-8">
                <div className="overflow-hidden cursor-pointer border-2 transition-all duration-300 group w-40 h-40 flex justify-center items-center rounded-full">
                  <Pen className="absolute w-12 h-12hidden group-hover:block group-hover:opacity-100" />

                  {values.thumbnail.length ? (
                    ''
                  ) : (
                    <Image
                      src={
                        !userDetail.pictureId
                          ? '/defaultProfileImage.jpg'
                          : userDetail.pictureId
                      }
                      className="w-40 h-40 z-30 group-hover:opacity-40 transition-all duration-300"
                      alt="profileImage"
                      width={100}
                      height={100}
                    />
                  )}

                  {values.thumbnail.length ? (
                    <div className="group-hover:opacity-40 transition-all duration-300">
                      <PreviewImages
                        fileImages={values.thumbnail}
                        onRemoveImage={(idx: number) =>
                          setFieldValue(
                            'thumbnail',
                            values.thumbnail?.toSpliced(idx, 1),
                          )
                        }
                      />
                    </div>
                  ) : (
                    ''
                  )}

                  <div className="z-40 absolute opacity-0">
                    <Dropzone
                      isError={Boolean(errors.thumbnail)}
                      label=""
                      onDrop={(files) =>
                        setFieldValue('thumbnail', [
                          ...files.map((file) => file),
                        ])
                      }
                    />
                  </div>
                </div>

                <div className="h-full w-full flex flex-col justify-center gap-4">
                  <h1 className="text-lg font-semibold">
                    Avatar
                  </h1>
                  <p className="tracking-wide">
                    Gunakan gambar persegi beresolusi tinggi maksimal 1MB
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 max-w-[600px]">
              <div className="text-lg font-bold">
                <h1>
                  Your Point Now : {pointsFormat.format(userDetail.points)}
                </h1>
              </div>

              <FormInput
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
              <FormInput
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
              <FormInput
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
                <h1 className="text-lg font-semibold basis-auto text-nowrap">
                  Your Referral Code :
                </h1>
                <p className="text-xl font-bold">
                  {userDetail.referralCode}
                </p>
              </div>
            </div>

            <div className="flex w-full justify-end">
              <Button
                onClick={handleFormSubmit}
                className=""
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedAuthenticationGuard(Profile);
// export default Profile;
