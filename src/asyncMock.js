const products = [ 
    {
      id: '1',
      name: 'Libra de café',
      description: 'Una libra de café de Jerico Antioquia, cultivado a 1950 msnm con un perfil a lima, almendras y caramelo.',
      img: './images/Lb de café.jpeg',
      price: '25000',
      category: 'Café'
    },
    {
    id: '2',
    name: '1/2 Libra de café',
    description: 'Una libra de café de Jerico Antioquia, cultivado a 1950 msnm con un perfil a lima, almendras y caramelo.',
    img: './images/Lb de café.jpeg',
    price: '15000',
    category: 'Café'
    },
    {
    id: '3',
    name: 'Molino de acero',
    description: 'Nuestra molinillo de café manual es no sólo lo suficientemente pequeño como para caber en un bolso de mano, pero se puede desmontar para ahorrar espacio a medida que viajan en cualquier lugar.',
    img: '/images/Molino.jpg',
    price: '65000',
    category: 'Accesorios'
    },
    ]
    
export const getProducts = () => {
      return new Promise ((resolve) => {
        setTimeout(() => {
          resolve(products)
        }, 2000)
      })
    }

export const getProductById = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
        resolve(products.find(product => product.id === id))
    },2000)
    } )
}

export const getProductsByCategory = (categoryId) => {
  return new Promise (resolve => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === categoryId))
    }, 500)
  }
  )
}