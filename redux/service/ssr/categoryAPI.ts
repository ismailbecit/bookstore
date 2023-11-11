export const getCategories = () => {
  const categories = [
    {
      id: "education",
      name: "Eğitim"
    },
    {
      id: "horror",
      name: "Korku"
    },
    {
      id: "advanced",
      name: "Macera"
    },
    {
      id: "travel",
      name: "Gezi&Seyahat"
    },
    {
      id: "novel",
      name: "Roman"
    },
    {
      id: "sciencefiction",
      name: "Bilim Kurgu"
    },
    {
      id: "fantasy",
      name: "Fantastik"
    },
    {
      id: "history",
      name: "Tarih"
    },
    {
      id: "philosophy",
      name: "Felsefe"
    },
  ]
  return new Promise(async (resolve, reject) => resolve(categories))
}


export default { getCategories }