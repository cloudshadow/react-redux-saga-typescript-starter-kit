import axios, { AxiosResponse } from 'axios';
import urlHelper from '@/utils/urlHelper';

export function fetchTitle(): Promise<AxiosResponse<string>> {
  return axios.get<string>(urlHelper.t('title', true));
}
