import Banner from '@/presentation/pages/widgets/banner';
import BooksWidget from '@/presentation/pages/widgets/books';
import CategoryWidget from '@/presentation/pages/widgets/category';
import Publisher from '@/presentation/pages/widgets/publisher';
export default function Home() {
  return (
    <main className={""}>
      <Banner />
      <Publisher />
      <CategoryWidget />
      {Array.from({ length: 10 }).map(() => (
        <BooksWidget />
      ))}
    </main>
  )
}
