export const getCategories = () => {
  const categories = [
    {
      slug: "education",
      name: "Eğitim"
    },
    {
      slug: "horror",
      name: "Korku"
    },
    {
      slug: "advanced",
      name: "Macera"
    },
    {
      slug: "travel",
      name: "Gezi&Seyahat"
    },
    {
      slug: "novel",
      name: "Roman"
    },
    {
      slug: "sciencefiction",
      name: "Bilim Kurgu"
    },
    {
      slug: "fantasy",
      name: "Fantastik"
    },
    {
      slug: "history",
      name: "Tarih"
    },
    {
      slug: "philosophy",
      name: "Felsefe"
    },
  ]
  return new Promise(async (resolve, reject) => resolve(categories))
}


export default { getCategories }