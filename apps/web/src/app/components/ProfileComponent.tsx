import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { CardContent, Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs } from '@/components/ui/tabs';
import { User } from '../types/user.type';
import { FormikErrors } from 'formik';
import Dropzone from '@/components/Dropzone';
import { useRef, useState } from 'react';
import PreviewImages from '@/components/PreviewImages';
import { Eye, EyeOff } from 'lucide-react';
import { appConfig } from '@/utils/config';

interface UserDetailProps
  extends Pick<
    User,
    | 'userId'
    | 'token'
    | 'firstName'
    | 'lastName'
    | 'pictureId'
    | 'email'
    | 'detail'
    | 'points'
    | 'role'
    | 'referralCode'
    | 'thumbnail'
  > {}

export default function ProfileComponent({
  stateEdit,
  userData,
  onChangeField,
  values,
  onSubmit,
  isError,
}: {
  stateEdit: boolean;
  userData: UserDetailProps;
  onChangeField: (
    field: string,
    value: any,
    shouldValidate?: boolean,
  ) => any | Promise<void>;
  values: any;
  onSubmit: () => void;
  isError: FormikErrors<any>;
}) {
  const [stateEyeCurrent, setStateEyeCurrent] = useState(false);
  const [profileImage, setProfileImage] = useState<File[]>();
  const [stateEyeNew, setStateEyeNew] = useState(false);
  const pointsFormat = new Intl.NumberFormat('en-IN', {
    maximumSignificantDigits: 3,
  });
  const inputCurrentPasswordRef = useRef<HTMLInputElement>(null);
  const inputNewPasswordRef = useRef<HTMLInputElement>(null);
  const dropzoneRef: any = useRef();
  return (
    <Tabs className="flex flex-col gap-4">
      <Card>
        <CardHeader className="flex flex-col md:items-start items-center">
          <header className="space-y-2">
            <div className="flex items-center space-x-3">
              {/* <Image
                src={
                  userData.thumbnail && userData.thumbnail.length
                    ? userData.thumbnail[0].webkitRelativePath
                    : '/defaultProfileImage.jpg'
                }
                height={96}
                width={96}
                alt="Avatar"
                className="rounded-full aspect-[96/96] object-cover"
              /> */}
              <div className="w-24 h-24 flex justify-center items-center rounded-full overflow-hidden">
                <div className="w-full">
                  <PreviewImages
                    onRemoveImage={(idx: number) =>
                      onChangeField(
                        'thumbnail',
                        values.thumbnail?.toSpliced(idx, 1),
                      )
                    }
                    images={[`${userData.pictureId}`]}
                  />
                </div>
              </div>
              <div className="space-y-1">
                <h1 className="text-2xl font-bold">{`${userData.firstName} ${userData.lastName}`}</h1>
                {stateEdit ? (
                  <>
                    <Button
                      onClick={() => {
                        dropzoneRef.current.click();
                      }}
                      size="sm"
                    >
                      Change photo
                    </Button>
                    <div className="hidden">
                      <Dropzone
                        Ref={dropzoneRef}
                        isError={!!isError.thumbnail && !!isError.thumbnail}
                        label=""
                        onDrop={(files) => {
                          setProfileImage(files);
                          onChangeField('thumbnail', [
                            ...files.map((file) => file),
                          ]);
                        }}
                      />
                    </div>
                  </>
                ) : (
                  ''
                )}
              </div>
            </div>
          </header>
        </CardHeader>
        <CardContent className="flex flex-col md:items-start items-center">
          <div className="">
            <Label>Points : </Label>
            <Label>{pointsFormat.format(userData.points)}</Label>
          </div>
          <div className="">
            <Label>Email : </Label>
            <Label>{userData.email}</Label>
          </div>
          <div className="space-y-2 pt-4 flex flex-col gap-4">
            {stateEdit ? (
              <>
                <div>
                  <Label htmlFor="name">First Name</Label>
                  <Input
                    defaultValue={userData.firstName}
                    id="firstName"
                    error={isError.firstName}
                    placeholder="E.g. Jhon"
                    className="max-w-[300px]"
                    onChange={(e) => onChangeField('firstName', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="name">Last Name</Label>
                  <Input
                    defaultValue={userData.lastName}
                    id="lastName"
                    error={isError.lastName}
                    className="max-w-[300px]"
                    placeholder="E.g. Jhon"
                    onChange={(e) => onChangeField('lastName', e.target.value)}
                  />
                </div>
              </>
            ) : (
              <>
                {/* <div className='flex flex-col gap-2'>
                    <Label>First Name : {userData.firstName}</Label>
                    <Label>Last Name : {userData.lastName}</Label>
                </div> */}
              </>
            )}
          </div>
        </CardContent>
      </Card>

      {stateEdit ? (
        <Card>
          <CardHeader className="flex flex-col md:items-start items-center">
            <CardTitle>Change Password</CardTitle>
            <Label className="text-center">
              For your security, please do not share your password with others.
            </Label>
          </CardHeader>
          <CardContent className="space-y-4 flex flex-col md:items-start items-center">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <div className="flex items-center flex-row gap-4">
                <Input
                  ref={inputCurrentPasswordRef}
                  itemID="inputCurrentPasswordRef"
                  name="inputCurrentPasswordRef"
                  value={values.currentPassword}
                  onChange={(e) =>
                    onChangeField('currentPassword', e.currentTarget.value)
                  }
                  error={isError.currentPassword}
                  id="current-password"
                  type={stateEyeCurrent ? 'text' : 'password'}
                />
                {stateEyeCurrent ? (
                  <>
                    <EyeOff
                      id="inputCurrentPasswordRef"
                      onClick={() => {
                        setStateEyeCurrent(!stateEyeCurrent);
                      }}
                      className="cursor-pointer"
                    />
                  </>
                ) : (
                  <>
                    <Eye
                      id="inputCurrentPasswordRef"
                      onClick={() => {
                        setStateEyeCurrent(!stateEyeCurrent);
                      }}
                      className="cursor-pointer"
                    />
                  </>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <div className="flex items-center flex-row gap-4">
                <Input
                  name="newPassword"
                  ref={inputNewPasswordRef}
                  value={values.newPassword}
                  onChange={(e) =>
                    onChangeField('newPassword', e.currentTarget.value)
                  }
                  error={isError.newPassword}
                  id="new-password"
                  type={stateEyeNew ? 'text' : 'password'}
                />
                {stateEyeNew ? (
                  <>
                    <EyeOff
                      onClick={() => {
                        setStateEyeNew(!stateEyeNew);
                      }}
                      className="cursor-pointer"
                    />
                  </>
                ) : (
                  <>
                    <Eye
                      onClick={() => {
                        setStateEyeNew(!stateEyeNew);
                      }}
                      className="cursor-pointer"
                    />
                  </>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        ''
      )}
    </Tabs>
  );
}
