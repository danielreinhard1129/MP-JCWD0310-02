import { useAppDispatch } from '@/app/redux/hook';
import { axiosInstance } from '@/lib/axios';
import axios from 'axios';

const createEventOrganizer = () => {
  const dispatch = useAppDispatch();
  const createEvent = async (body : any) => {
    try {
      const { data } = await axios.post(`http://localhost:8000/api/organizer/event` , body);
      return data;
    } catch (err) {
      throw err;
    }
  };
  return { createEvent };
};

export default createEventOrganizer;
