import { axiosInstance } from '@/app/lib/axios';
import { useAppSelector } from '@/app/redux/hook';
import { useEffect, useState } from 'react';

interface DataStatisticResponse {
  data: {
    message: string;
    data: {
      averageTicketPrice: {
        _avg: {
          price: number;
        };
      };
      soldInThisMonth:
        | {
            id: number;
            title: string;
            description: string;
            booked: number;
            createdAt: Date;
            updatedAt: Date;
            endDate: Date;
            isFree: boolean;
            limit: number;
            locationId: number;
            price: number;
            startDate: Date;
            thumbnail: string;
            time: string;
            userId: number;
          }[]
        | null;
      ticketRevenue: {
        _sum: {
          total: number;
        };
      };
      ticketSoldOverall: number;
      totalEvents: {
        _all: number;
      };
    };
  };
}

const useGetOrganizerDataStatistic = () => {
  const { userId } = useAppSelector((state) => state.user);
  const [data, setData] = useState<DataStatisticResponse>({
    data: {
      data: {
        averageTicketPrice: {
          _avg: {
            price: 0,
          },
        },
        ticketRevenue: { _sum: { total: 0 } },
        ticketSoldOverall: 0,
        totalEvents: { _all: 0 },
        soldInThisMonth: [],
      },
      message: '',
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const getOrganizerDataStatistic = async () => {
    try {
      setIsLoading(true);
      const data = await axiosInstance.get<DataStatisticResponse>(
        `/organizer/statistic/${userId}`,
      );
      setData(data.data);
    } catch (err) {}
  };

  useEffect(() => {
    getOrganizerDataStatistic();
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [data]);

  return { data, isLoading };
};

export default useGetOrganizerDataStatistic;
