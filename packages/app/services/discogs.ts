const fetchDiscogsData = async () => {
  const userAgent = '@ramiro-1001albums-app/v1.0 +https://github.com/ramirovalim/1001albums'
  const consumerKey = process.env.DISCOGS_CONSUMER_KEY
  const consumerSecret = process.env.DISCOGS_CONSUMER_SECRET
  console.log('consumerKey:', consumerKey)
  console.log('consumerSecret:', consumerSecret)
  const allAlbumsBaseUrl = 'https://api.discogs.com/lists/991847'
  const albumInfoBaseUrl = 'https://api.discogs.com/masters/'

  try {
    const response = await fetch(allAlbumsBaseUrl, {
      headers: {
        'User-Agent': userAgent,
        Authorization: `key=${consumerKey}, secret=${consumerSecret}`,
      },
    })
    const data = await response.json()
    const items = data.items
    console.log('Data:', data)
    console.log('Items:', items)
    return items[0]
  } catch (error) {
    console.error('Failed to fetch data from Discogs:', error)
    throw error
  }
}

export { fetchDiscogsData }
