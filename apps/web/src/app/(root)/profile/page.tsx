'use client';

import { NeedAuthenticationGuard } from '../../hoc/AuthGuard';
import { useAppSelector } from '../../redux/hook';
import { Check, CircleX, Settings } from 'lucide-react';
import { useFormik } from 'formik';
import { Button } from '@/components/ui/button';
import ProfileComponent from '@/app/components/ProfileComponent';
import { CardTitle } from '@/components/ui/card';
import validationProfileChange from './validationProfileChange';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import UserEventHistory from '@/app/components/UserEventHistory';
import UserVoucherList from '@/app/components/UserVoucherList';
import UserTransactionHistory from '@/app/components/UserTransactionHistory';
import useEditUserAccount from '@/app/hooks/api/user/useEditUserAccount';

const Profile = () => {
  const userDetail = useAppSelector((state) => state.user);
  const [stateEdit, setStateEdit] = useState(false);
  const { EditUserAccount } = useEditUserAccount();
  const { values, errors, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: {
        firstName: userDetail.firstName,
        lastName: userDetail.lastName,
        thumbnail: [],
        currentPassword: '******',
        newPassword: '******',
      },
      validationSchema: validationProfileChange,
      onSubmit: (values) => {
        console.log(values);
        EditUserAccount(values);
      },
    });
  return (
    <>
      <div className="flex justify-center">
        <Tabs
          defaultValue="profile"
          className="px-4 py-4 space-y-4 pb-10 w-full grid max-w-[800px]"
        >
          <CardTitle>Your Profile</CardTitle>
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="event">Events</TabsTrigger>
            <TabsTrigger value="transaction">Transactions</TabsTrigger>
            <TabsTrigger value="voucher">Voucher</TabsTrigger>
          </TabsList>
          <TabsContent value="profile" className="space-y-4 flex flex-col">
            <div className="flex justify-end flex-row gap-4">
              {stateEdit ? (
                <>
                  <Button
                    variant="destructive"
                    onClick={() => {
                      setStateEdit(false);
                    }}
                    className="flex flex-row gap-2 text-sm"
                  >
                    <CircleX />
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      setStateEdit(false);
                      handleSubmit();
                    }}
                    className="flex flex-row gap-2 text-sm"
                  >
                    <Check />
                    Changes Profile
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => {
                    setStateEdit(true);
                    console.log(values.firstName);
                  }}
                  className="flex flex-row gap-2 text-sm"
                >
                  <Settings />
                  Edit profile
                </Button>
              )}
            </div>
            <ProfileComponent
              stateEdit={stateEdit}
              values={values}
              userData={userDetail}
              onChangeField={setFieldValue}
              onSubmit={handleSubmit}
              isError={errors}
            />
          </TabsContent>
          <TabsContent value="event" className="space-y-4">
            <UserEventHistory />
          </TabsContent>
          <TabsContent value="transaction" className="space-y-4">
            <UserTransactionHistory />
          </TabsContent>
          <TabsContent value="voucher" className="space-y-4">
            <UserVoucherList />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default NeedAuthenticationGuard(Profile);
