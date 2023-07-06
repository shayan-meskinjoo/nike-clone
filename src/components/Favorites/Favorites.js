import React from 'react'
import "./style/Favorites.css"
import { useSelector } from 'react-redux'
import FavoriteItemCard from '../FavoritItemCard/FavoriteItemCard'

export default function Favorites() {
  const favoriteItems = useSelector(state => state.products.favoriteItems)

  return (
    <div className='favorite'>
      <p className='favorite-p'>Favorites</p>
      {favoriteItems.map(item => <FavoriteItemCard key={item} data={item}/>)}
    </div>
  )
}
