'use client'

import { Button, Typography, Image, Spin } from 'antd'
import { HeartOutlined, HeartFilled } from '@ant-design/icons'
import { useEffect, useState } from 'react'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function LikeMemePage() {
  const router = useRouter()
  const params = useParams<any>()
  const memeId = params.memeId
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [meme, setMeme] = useState(null)
  const [loading, setLoading] = useState(true)
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    const fetchMeme = async () => {
      try {
        const memeData = await Api.Meme.findOne(memeId, {
          includes: ['user', 'likes'],
        })
        setMeme(memeData)
        setLiked(memeData.likes?.some(like => like.userId === userId))
      } catch (error) {
        enqueueSnackbar('Failed to load meme details.', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    fetchMeme()
  }, [memeId, userId])

  const handleLike = async () => {
    if (!userId) {
      enqueueSnackbar('You must be logged in to like a meme.', {
        variant: 'info',
      })
      return
    }

    try {
      await Api.Like.createOneByMemeId(memeId, { userId })
      setLiked(true)
      enqueueSnackbar('Meme liked successfully!', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to like meme.', { variant: 'error' })
    }
  }

  const handleUnlike = async () => {
    // Assuming there's an API method to unlike a meme
    // This is a placeholder for the actual unliking logic
    setLiked(false)
    enqueueSnackbar('Meme unliked.', { variant: 'info' })
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Like Meme</Title>
      <Text>Engage with your favorite memes by liking them!</Text>
      {loading ? (
        <Spin size="large" />
      ) : (
        meme && (
          <>
            <Image
              src={meme.imageUrl}
              alt="Meme Image"
              style={{ maxWidth: '100%' }}
            />
            <Button
              type="primary"
              icon={liked ? <HeartFilled /> : <HeartOutlined />}
              onClick={liked ? handleUnlike : handleLike}
              style={{ marginTop: '10px' }}
            >
              {liked ? 'Unlike' : 'Like'}
            </Button>
          </>
        )
      )}
    </PageLayout>
  )
}
