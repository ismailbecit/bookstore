import Banner from '@/presentation/pages/widgets/banner';
import BooksWidget from '@/presentation/pages/widgets/books';
import { axiosCSRService } from '@/libs/axios/csr/interceptor';
import { IBannerWidget, IWidget } from '@/redux/models/widget';


const fetchWidgets = async () => {
  return await axiosCSRService.get(`widgets`).then((res) => res.data).catch((err) => err);
}

export default async function Home() {
  const widgets = await fetchWidgets()
  return (
    <main className={""}>
      {widgets && widgets?.map((item: IWidget) => (
        <>
          {item.type === "BANNER" && <Banner bannerWidget={item as IBannerWidget} />}
          {item.type === "BOOK" && <BooksWidget widget={item} />}
        </>
      ))}
    </main>
  )
}
