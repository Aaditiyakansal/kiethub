'use client'

import { useEffect, useState } from 'react'
import { Typography, Card, Avatar, Space, Grid } from 'antd'
import { HeartOutlined, UserOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { useBreakpoint } = Grid
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function MemeDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { enqueueSnackbar } = useSnackbar()
  const screens = useBreakpoint()
  const [meme, setMeme] = useState(null)

  useEffect(() => {
    if (!params.id) {
      enqueueSnackbar('No meme ID provided', { variant: 'error' })
      router.push('/memes')
      return
    }

    const fetchMeme = async () => {
      try {
        const fetchedMeme = await Api.Meme.findOne(params.id, {
          includes: ['user', 'likes'],
        })
        setMeme(fetchedMeme)
      } catch (error) {
        enqueueSnackbar('Failed to fetch meme details', { variant: 'error' })
        router.push('/memes')
      }
    }

    fetchMeme()
  }, [params.id, router])

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Meme Details</Title>
      {meme ? (
        <Card
          hoverable
          style={{ maxWidth: screens.md ? '80%' : '100%', margin: 'auto' }}
          cover={
            <img
              alt="meme"
              src={meme.imageUrl || ''}
              style={{ width: '100%' }}
            />
          }
          actions={[
            <HeartOutlined
              key="like"
              onClick={() =>
                enqueueSnackbar('Like feature coming soon!', {
                  variant: 'info',
                })
              }
            />,
          ]}
        >
          <Card.Meta
            avatar={
              <Avatar
                src={meme.user?.pictureUrl || ''}
                icon={<UserOutlined />}
              />
            }
            title={meme.user?.name || 'Unknown User'}
            description={
              <Space direction="vertical">
                <Text>
                  Posted on: {dayjs(meme.dateCreated).format('DD MMM YYYY')}
                </Text>
                <Text>{meme.likes?.length || 0} Likes</Text>
              </Space>
            }
          />
        </Card>
      ) : (
        <Text>Loading meme details...</Text>
      )}
    </PageLayout>
  )
}
