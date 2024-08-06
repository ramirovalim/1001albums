import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  Sheet,
  Image,
  useToastController,
  Spinner,
  SwitchThemeButton,
  XStack,
  YStack,
} from '@my/ui'
import { ChevronDown, ChevronUp, X } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { Platform } from 'react-native'
import { useLink } from 'solito/navigation'
import { fetchDiscogsData } from '../../services/discogs'
import { AllAlbums } from 'packages/app/lib/types/albums'

const test = process.env.DISCOGS_CONSUMER_KEY || 'No key'

export function HomeScreen() {
  const linkTarget = '/album'
  const linkProps = useLink({
    href: `${linkTarget}/nate`,
  })

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<AllAlbums | undefined>(undefined)
  const toast = useToastController()

  const handleClick = async () => {
    try {
      setLoading(true)
      const response = await fetchDiscogsData()
      console.log("Response:", response)
      setData(response.display_title)
      toast.show('Success!', { message: 'Data fetched successfully', color: '$color12' })
    } catch (error) {
      console.error('Failed to fetch data from Discogs:', error)
      toast.show('Oops...', { message: 'Failed to fetch data from Discogs', color: '$color12' })
      throw new Error('Failed to fetch data from Discogs:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <YStack f={1} jc="center" ai="center" gap="$8" p="$4" bg="$background">
      <XStack
        pos="absolute"
        w="100%"
        t="$6"
        gap="$6"
        jc="center"
        fw="wrap"
        $sm={{ pos: 'relative', t: 0 }}
      >
        {Platform.OS === 'web' && (
          <>
            <SwitchThemeButton />
          </>
        )}
      </XStack>
      <YStack gap="$4">
        <H1 ta="center" col="$color12">
          Welcome to Tamagui.
        </H1>
        <Paragraph ta="center" col="$color12">
          Test: {test}
        </Paragraph>
        <Button onPress={() => handleClick()}>{loading ? <Spinner /> : 'Fetch Data'}</Button>
        {data && <Paragraph>{data}</Paragraph>}
        <Separator />
      </YStack>
      {/* <Image
        source={{
          uri: "https://i.discogs.com/IQk6ZF33qw1jVG74af1FvbspBYLl8LnM3NvTkkTQ4g8/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzOTcz/ODQtMTUzOTgwODE5/Ny04NzIzLmpwZWc.jpeg",
          width: 600,
          height: 598,
        }}
      <Button {...linkProps}>Link to album</Button>
      /> */}
      <SheetDemo />
    </YStack>
  )
}

function SheetDemo() {
  const toast = useToastController()

  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)

  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        animation="medium"
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Handle bg="$gray8" />
        <Sheet.Frame ai="center" jc="center" gap="$10" bg="$color2">
          <XStack gap="$2">
            <Paragraph ta="center">Made by</Paragraph>
            <Anchor href="https://twitter.com/natebirdman" target="_blank">
              @natebirdman,
            </Anchor>
            <Anchor
              // color="$purple10"
              href="https://github.com/tamagui/tamagui"
              target="_blank"
              rel="noreferrer"
            >
              give it a ⭐️
            </Anchor>
          </XStack>

          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
              toast.show('Sheet closed!', {
                message: 'Just showing how toast works...',
              })
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}

// const fetchDiscogsData = async () => {
//   const userAgent = '@ramiro-1001albums-app/v1.0'
//   const consumerKey = process.env.DISCOGS_CONSUMER_KEY
//   const consumerSecret = process.env.DISCOGS_CONSUMER_SECRET
//   const allAlbumsBaseUrl = 'https://api.discogs.com/lists/991847'
//   const albumInfoBaseUrl = 'https://api.discogs.com/masters/'

//   try {
//     const response = await fetch(allAlbumsBaseUrl, {
//       headers: {
//         'User-Agent': userAgent,
//         Authorization: `Discogs key=${consumerKey}, secret=${consumerSecret}`,
//       },
//     })
//     const data = await response.json()
//     //console.log(data)
//     return data
//   } catch (error) {
//     console.error('Failed to fetch data from Discogs:', error)
//     throw error
//   }
// }
