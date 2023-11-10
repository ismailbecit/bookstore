import Banner from '@/presentation/pages/widgets/banner';
import BooksWidget from '@/presentation/pages/widgets/books';
import CategoryWidget from '@/presentation/pages/widgets/category';
import Publisher from '@/presentation/pages/widgets/publisher';
import Testt from './test';
import { axiosCSRService } from '@/libs/axios/csr/interceptor';
import { IBannerWidget, IWidget } from '@/redux/models/widget';
import { useAppDispatch } from '@/redux/store';
import { useEffect } from 'react';


const fetchWidgets = async () => {
  return await axiosCSRService.get(`widgets`).then((res) => res.data).catch((err) => err);
}

export default async function Home() {
  const widgets = await fetchWidgets()
  return (
    <main className={""}>
      <Testt />
      {/* <Publisher />
      <CategoryWidget /> */}
      {widgets?.sort((a, b) => a.order - b.order).map((item: IWidget) => (
        <>
          {item.type === "BANNER" && <Banner bannerWidget={item as IBannerWidget} />}
          {item.type === "BOOK" && <BooksWidget widget={item} />}
        </>
      ))}
    </main>
  )
}
