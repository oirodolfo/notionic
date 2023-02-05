import { NextApiRequest, NextApiResponse } from 'next'
import querystring from 'querystring'

//
const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN
const access_token = process.env.SPOTIFY_ACCESS_TOKEN
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token
    })
  })

  return response.json()
}

export const getUserDetails = async () => {
  const { access_token } = await getAccessToken()

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}

export const currentlyPlayingSong = async () => {
  const { access_token } = await getAccessToken()

  const res = await fetch(
    'https://api.spotify.com/v1/me/player/currently-playing',
    {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    }
  )
  if (!res.ok) return undefined

  return res.json()
}

const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken()

  const res = await fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })

  if (!res.ok) return undefined

  return res.json()
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // try {
  const { items } = await getTopTracks()
  // const {items } = await response.json()

  console.log(items)

  // const currentPlaying = await currentlyPlayingSong()

  // const [items, currentPlaying] = await Promise.all([getTopTracks(), currentlyPlayingSong()])
  // const validPromises = []

  // const [items, currentPlaying] = await Promise.all([itemsPromise.json(), currentPlayingPromise.json()])
  //
  //
  // const jsonResult = [getTopTracks(), currentlyPlayingSong()].map(async (slug) => {
  //
  //     if (!slug.ok) return
  //     if (slug instanceof Promise && 'json' in slug) {
  //         const promiseAwaited = await slug.json()
  //         return promiseAwaited
  //     }
  // })
  //
  // console.log(jsonResult)

  if (items) {
    const itemsSliced = items.slice(0, 10)

    const tracks = itemsSliced.map((track) => ({
      artist: track.artists.map((_artist) => _artist.name).join(', '),
      songUrl: track.external_urls.spotify,
      title: track.name,
      images: track.images,
      display_name: track.display_name,
      coverImage: track.album.images[1]
    }))
    //
    // res.setHeader(
    //     "Cache-Control",
    //     "public, s-maxage=86400, stale-while-revalidate=43200"
    // );

    const genres = itemsSliced.genres
    return res.status(200).json({ tracks, genres /**, currentPlaying**/ })
  } else {
    return res.status(500).json({ message: 'NO TEMOS ITEMS' })
  }

  // } catch (e) {
  //     return res.status(500).json(JSON.stringify(e))
  // }
}
